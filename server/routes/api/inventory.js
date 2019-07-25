const router = require('express').Router();

import {ItemsApi} from '../../service/inventory';

router.post("/list", function(req, res, next) {
    const businessProfile = {
        accountId: req.body.accountId,
        accountNumber: 0,
        company: req.body.company,
        primaryContact: req.body.contactNumber,
        mobileNumber: req.body.contactNumber,
        emailAddress: req.body.businessEmail,
        balance: 0.0,
        credit: 0,
        unpostedBalance: 0.0,
        numberOfServices: 0,
        accountManager: "",
        accountStatus: "Active",
        countryCode: req.body.country,
        timeZone:"",
        billingCountry: req.body.country,
        billingCurrency: req.body.currency
    }

    const apiToken = ItemsApi.generateBase64Token(businessProfile);
    
    ItemsApi.getItems(apiToken).then(data => {
        if (data) {
            res.json(data);
        } else {
            next()
        }
    });
})

router.post("/itemDetail", function(req, res, next) {
    ItemsApi.getItem(req.body.itemId).then(data => {
        if(data) {
            res.json(data);
        } else {
            next()
        }
    })
})

module.exports = router;