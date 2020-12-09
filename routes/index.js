var express = require("express");
var router = express.Router();
var User = require("../models/Register");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/cart", function (req, res, next) {
  let cart = req.cookies.cart;
  if (!cart) cart = [];
  res.render("cart", { cart });
});

router.get("/register", function (req, res, next) {
  console.log("Register User");
  res.render("./products/register");
});

router.post("/register", async function (req, res, next) {
  let user = new User(req.body);
  await user.save();
  res.redirect("/");
});

router.get("/login", function (req, res, next) {
  console.log("Login Page Loaded");
  res.render("./products/login");
});

router.get("/logout", function (req, res, next) {
  console.log("User Loged Out");
  req.session.user = null;
  res.redirect("/login");
});

router.post("/login", async function (req, res, next) {
  console.log("User have looged in");
  let user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (!user) res.redirect("/login");
  req.session.user = user;
  res.redirect("/");
});

module.exports = router;
