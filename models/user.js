const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({ 
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
      password: {
        type: String,
        required: [true, "Password is required"],
        validate: {
          validator: function (v) {
            return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
          },
          message:
            "Minimum 8 characters in length, atleast one uppercase, one lowercase, one digit and one special character",
        },
      },  
})

module.exports = mongoose.model("user", userSchema);
