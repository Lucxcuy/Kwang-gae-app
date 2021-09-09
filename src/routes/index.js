const express = require("express");
const router = express.Router();


// routes
router.get("/", (req, res) => {
	res.render("index.html", { title: "Welcome"} )
})

router.get("/contact", (req, res) => {
	res.render("contact.html", { title: "Contacto"} )
})

router.get("/arbitraje-lucha", (req, res) => {
	res.render("arbitraje-lucha.html", { title: "Arbitraje de Lucha"} )
})

router.get("/challenges", (req, res) => {
	res.render("challenges.html", { title: "Challenges"} )
})

router.get("/selector-formas", (req, res) => {
	res.render("selector-formas.html", { title: "Selector de Formas"} )
})

module.exports = router;