var connection = require("./connections");

const orm = {
    all: function(tableInput, cb){
        connection.query("SELECT * FROM " + tableInput + ";", function(err, res) {
            if(err){
                throw err
            };
            cb(res);
        })
    },

    update: function(tableInput, condition, cb){
        connection.query("UPDATE " + tableInput + " SET devoured=true WHERE id=" + condition + ";", function(err, res){
            if(err){
                throw err
            };
            cb(res);
        })
    },

    create: function(tableInput, val, cb) {
        connection.query("INSERT INTO " + tableInput + " (burger_name) VALUES ('" + val + "');", function(err, res){
            if(err){
                throw err
            };
            cb(res);
        })
    }
}

module.exports = orm;