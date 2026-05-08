require("dotenv").config();

const express = require("express");

const cors = require("cors");

const connectDB = require("./config/db");

const scrapeStories = require("./scraper/hackerNewsScraper");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/stories", require("./routes/storyRoutes"));

app.use("/api/scrape", require("./routes/scrapeRoutes"));

scrapeStories();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});