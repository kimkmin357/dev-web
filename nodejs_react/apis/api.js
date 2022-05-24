let express = require('express');
let router = express.Router();

router.get('/getDataFromServer', function(req, res){
    res.send({data:'Server API 1'});
});

module.exports = router;