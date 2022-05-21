const mongoose = require("mongoose");

const Tome = mongoose.model("Tome", {

    title: String,
    image: String,
    tome: String
})

module.exports = Tome;