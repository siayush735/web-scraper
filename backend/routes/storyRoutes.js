const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  getStories,
  getStory,
  toggleBookmark,
  getBookmarks,
} = require("../controllers/storyController");

router.get(
  "/bookmarks/all",
  authMiddleware,
  getBookmarks
);

router.get("/", getStories);

router.get("/:id", getStory);

router.post(
  "/:id/bookmark",
  authMiddleware,
  toggleBookmark
);

module.exports = router;