const orm = require("../config/orm")

const burger = {
    all: function(cb) {
      orm.all("products", function(res) {
        cb(res);
      });
    },

    update: function(id, cb){
        orm.update("products", id, cb);
    },

    create: function(name, cb){
        orm.create("products", name, cb);
    }
  };
  
module.exports = burger;
