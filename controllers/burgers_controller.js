const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/main", function(req, res) {
  burger.all(function(burger_data) {
    res.render("index", { burger_data });
  })
});

router.get("/", function(req, res) {
  res.redirect("/main");
});

router.get("*", function(req, res) {
  res.redirect("/main");
});

router.put("/burgers/update", function(req, res){
  burger.update(req.body.burger_id, function(r){
    console.log(r);
    res.redirect("/main");
  })
});

router.post("/burgers/create", function(req, res){
  burger.create(req.body.burger_name, function(r){
    res.redirect("/main");
  })
})

module.exports = router;
