const scrapeStories = require("../scraper/hackerNewsScraper");

exports.runScraper = async (req, res) => {
  await scrapeStories();

  res.json({
    message: "Scraping completed",
  });
};