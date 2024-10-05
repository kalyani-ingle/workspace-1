const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({ 
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    productID : {
        type: String,
        required: true  
    },
    price: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    }   
})

module.exports = mongoose.model("product", productSchema);
