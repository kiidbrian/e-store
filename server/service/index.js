/**
 * Axios Request Wrapper
 * ---------------------
 * 
 * @author Brian Paintsil (@kiid_brian)
 * @license Hubtel
 */

import axios from 'axios';

export class Service {
    constructor(baseURL,token){
        let service = axios.create({
            baseURL: baseURL,
            headers: {
                'Content-Type': 'application/json',
                Authorization: token || ''
            }
        });
        service.interceptors.request.use(req => req);
        service.interceptors.response.use(this.handleSuccess,this.handleError);
       
        this.service = service;
        this.baseURL = baseURL;
    }

    handleSuccess(response) {
        return response;
    }

    handleError(error) {
        //TODO: Add actionable logs
        return Promise.reject(error)
    }

    redirectTo(document,path) {
        document.location = path;
    }

    get(path,callback,headers) {
        if(headers) {
            return this.service.get(this.baseURL+path,{
                headers: headers
            }).then(
                (response) => callback(response.status,response.data)
            );
        }

        return this.service.get(this.baseURL+path).then(
            (response) => callback(response.status,response.data)
        );
    }

    patch(path, payload, callback) {
        return this.service.request({
            method: 'PATCH',
            url: this.baseURL+path,
            responseType: 'json',
            data: payload
        }).then(
            (response) => callback(response.status, response.data)
        );
    }

    post(path, payload, callback) {
        return this.service.request({
            method: 'POST',
            url: this.baseURL+path,
            responseType: 'json',
            data: payload
        }).then(
            (response) => callback(response.status, response.data)
        );
    }
}