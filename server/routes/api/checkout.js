const router = require('express').Router();

import {PaymentApi} from '../../service/checkout';

router.post("/checkout", function(req, res, next) {
    const payload = {
        merchantAccountNumber: "",
        items: "",
        totalAmount: "",
        description: "",
        clientReference: "",
        cancellationUrl: "",
        callbackUrl: "",
        returnUrl: "",
        branchId: "",
        merchantBusinessLogoUrl: "",
        branchName: "",
        deliveryFee: ""
    }

    PaymentApi.pay(payload).then(data => {
        if (data) {
            res.json(data);
        } else {
            next()
        }
    });
})

module.exports = router;