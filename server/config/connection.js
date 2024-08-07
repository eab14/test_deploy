const mongoose = require('mongoose');

const connect = () => new Promise((resolve, reject) => {

    mongoose.connect("mongodb+srv://admin:root@cluster0.evgpy67.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {});
    mongoose.set('debug', false);
    resolve(console.log("Mongo DB connection successful..."));

});

module.exports = connect;