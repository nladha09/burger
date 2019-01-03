var express = require('express');

// create the router for the app, and export the router at the end of your file.
var router = express.Router();

// import the model to use its db functions for burger.js
var burger = require("../models/burger.js");

// create routes and set up logic where required.
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// add new burger to the db
router.post("/", function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect("/");
    });
});

// set burger devoured status to true
router.put("/:id", function (req, res) {
    var id = req.params.id;

    console.log("id", id);

    burger.updateOne(id, function () {
        res.redirect("/");
    });
});

module.exports = router;
