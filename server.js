require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes");

const app = express();
const connectionString = process.env.MONGO_URI;
const port = process.env.PORT;

app.use(express.json());

mongoose.connect(connectionString);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
    console.log("connected successfully");
});

app.use(Router);

app.listen(port, () => {
    console.log("running on port 3000");
});