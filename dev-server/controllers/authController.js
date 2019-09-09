const validator = require('node-input-validator');
module.exports = {

    register: function (req, res) {

        return res.status(201).json({"message": 'auth controller register'}); //201 is success without return data
    },
    index: function (req, res) {

        return res.status(204).json({"message": req.body && req.body.username ? `${req.body.username}` : 'empty username'});
    },


};