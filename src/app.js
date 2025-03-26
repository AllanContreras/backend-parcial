const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const pagoRoutes = require("./routes/pagoRoutes");
require("dotenv").config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api", pagoRoutes);

module.exports = app;
