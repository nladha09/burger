// model set up to interface with the database
var orm = require("../config/orm.js");

// burger obj.
var burger = {
    selectAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },

    insertOne: function (burger, cb) {
        orm.insertOne(burger, function (res) {
            cb(res);
        });
    },
    
    updateOne: function (id, cb) {
        orm.updateOne([id], function (res) {
            cb(res);
        });
    }
};

module.exports = burger;
