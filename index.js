const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();
require("./config/dbConfig");

const userRoute = require("./Routes/userRoutes");
const movieRoute = require("./Routes/movieRoutes");
const theatreRoute = require("./Routes/theatreRoute");
const bookingRoutes = require("./Routes/bookingRoutes");

app.use(cors());

app.use(express.static("./build"));

app.use(express.json());

app.use("/api/user", userRoute);

app.use("/api/movie", movieRoute);

app.use("/api/theatre", theatreRoute);

app.use("/api/bookings",bookingRoutes)

const PORT = process.env.PORT || 8081

app.listen(PORT, () => {
    console.log("server running")
})