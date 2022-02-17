const mongoose = require("mongoose");

const PokeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
});

const Pokemon = mongoose.model("Pokemon", PokeSchema);

module.exports = Pokemon;