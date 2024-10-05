const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstName: {
    type : String,
    required: [true, "Required Field"],
    message: "Enter your name here"
  },
  lastName: {
    type : String,
  },
  phoneNumber: {
    type: Number,
    required: [true, `Enter your contact details here`],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Email is required"],
    unique: [true, "Email already exists"],
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      },
      message: "Please enter a valid email",
    },
  },
  message: {
    type: String,
    required: [true, "Password is required"],
  },
});

module.exports = mongoose.model("Contact", contactSchema);
