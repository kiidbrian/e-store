const router = require('express').Router();

import {CForceApi} from '../../service/careforce';

router.post("/estimate", function(req, res, next) {
    const payload = {
        BusinessId: "LoveAnkara",
        BranchId: "3035",
        DropOffLocation: {
            Name: "First Osu Lane, Accra, Ghana",
            Latitude: "5.5626967",
            Longitude: "-0.1739981"
        }
    }
    CForceApi.getEstimate(payload).then(data => {
        if (data) {
            res.json(data);
        }
    });
})

router.post("/callback", function(req, res, next) {
    const payload = {
        businessId: "",
        branchId: "",
        orderId: "",
        pickUpLocation: {}, 
        dropOffLocation: {}, 
        Note:"",
        phoneNumber:"",
        deliveryOption:""
    }

    CForceApi.createDelivery(payload.BranchId,payload.branchId,
        payload.orderId,payload.pickUpLocation,payload.dropOffLocation,payload.Note,
    payload.phoneNumber,payload.deliveryOption).then(data => {
        if(data) {
            res.json(data);
        }
    });
})

module.exports = router;