const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

// Database

// MONGO_URI = mongodb://localhost/exp_node_api

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Database Connected");
});

mongoose.connection.on("error", err => {
    console.log(`Database connection error: ${err.message}`);
});

// Bring in routes
const postRoutes = require("./routes/post");

// const myOwnMiddleware = (req, res, next) => {
//     console.log("Middleware applied!");
//     next();
// }

// Middleware
app.use(morgan("dev"));
// app.use(myOwnMiddleware);
app.use(bodyParser.json());
app.use("/", postRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server Created on port: ${port}`);
});