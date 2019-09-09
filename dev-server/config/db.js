const mongoose = require('mongoose');

module.exports = {
    connectToDB: function () {
        mongoose.connect(process.env.DB_URL, {useNewUrlParser: true},
            error => {
                if (error) {
                    console.log('unable to connect to database');
                    throw error;
                } else {
                    console.log('Connected to MongoDB!')
                }
            });
    }
};