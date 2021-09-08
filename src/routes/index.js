const express = require("express");
const router = express.Router();


// routes
router.get("/", (req, res) => {
	res.render("index.html", { title: "First website"} )
})

router.get("/contact", (req, res) => {
	res.render("contact.html", { title: "Contact Page"} )
})

module.exports = router;