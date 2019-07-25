const router = require('express').Router();

import {BInfoApi} from '../../service/business';

router.post("/details", function(req, res, next) {
    BInfoApi.getDetails(req.body.businessId).then(data => {
        if (data) {
            res.json(data);
        }else{
            next()
        }
    });
})

module.exports = router;