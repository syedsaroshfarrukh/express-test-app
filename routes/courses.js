var express = require("express");
// const checkSessionAuth = require("../middlewares/checkSessionAuth");
var router = express.Router();
var Course = require("../models/Course");

/* GET home page. */

router.get("/", async function (req, res, next) {
  let courses = await Course.find();
  console.log(courses);
  // console.log(res.userLogged);
  res.render("courses/list", { courses });
});

router.get("/add", function (req, res, next) {
  res.render("courses/add");
});

router.post("/add", async function (req, res, next) {
  let course = new Course();
  // console.log("request :" + req.body.caption);
  // console.log("request :" + res.locals.userLogged);
  course.crId = req.body.crId;
  course.crName = req.body.crName;
  course.crDuration = req.body.crDuration;
  course.crFee = req.body.crFee;
  await course.save();
  res.redirect("/courses");
});

router.get("/delete/:id", async function (req, res, next) {
  let course = await Course.findByIdAndDelete(req.params.id);

  res.redirect("/courses");
});

router.get("/edit/:id", async function (req, res, next) {
  let course = await Course.findById(req.params.id);
  res.render("courses/edit", { course });
});

router.post("/edit/:id", async function (req, res, next) {
  let course = await Course.findById(req.params.id);
  course.crId = req.body.crId;
  course.crName = req.body.crName;
  course.crDuration = req.body.crDuration;
  course.crFee = req.body.crFee;
  await course.save();

  res.redirect("/courses/");
});

module.exports = router;
