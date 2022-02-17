const express = require("express");
const pokeModel = require("./model");

const app = express();

app.post("/add_poke", async (req, res) => {
    const pokemon = new pokeModel(req.body);
    try {
        await pokemon.save();
        res.send(pokemon);
    } catch (error) {
        res.status(500).send(error);
    }
})

app.get("/poke", async (req, res) => {
    const pokemon = await pokeModel.find({});

    try {
        res.send(pokemon);
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = app;