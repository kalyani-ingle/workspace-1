const express = require("express");
const router = express.Router();

const User = require("./models/user");
// const Product = require("./models/product");
const Contact = require('../models/contact');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// craete user/register/signup

router.post("/signup", async (req, res) => {

    try {
        const { email, password } = userInput;

        // Check if email and password are provided
        if (!(email && password)) {
            throw new Error("Email and password are required");
        }

        // Check if user with the email exists
        let existingUser = await User.findOne({ email });

        if (existingUser) {
            throw new Error("User already exists");
        }

        // Encrypt the password
        const hashPassword = await bcrypt.hash(password, 10);

        // Create and save the user in db
        const user = new User({
            email,
            password: hashPassword,
        });

        const result = await user.save();

        // Generate JWT token
        const token = jwt.sign(
            { id: result._id, email },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "2h" }

        );
        return {
            _id: result.id,
            email: result.email,
            token,
        };
    } catch (error) {
        console.error("Error creating user:", err);
        throw err;
    }
})




// contact page
router.post("/contact", async (req, res) => {
    try {
        const { firstName, lastName, phoneNumber, email, message } = req.body

        if (!(firstName && phoneNumber && email && message)) {
            res.status(400).json({ error: "Fields are required!" })
        }

        req.body.timestamp = Date.now();
        let contact = await new Contact(req.body);
        let result = await contact.save();
        console.log(result);
        return res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
        console.error("Error saving contact:", error);
        return res
            .status(500)
            .json({ error: "Message could not be sent. Try again!" });
    }
});


//logout endpoint
router.post("/logout", (req, res) => {
    res.clearCookie("token");
    return res.status(200).json({ message: "Logged out" });
});


module.exports = router;