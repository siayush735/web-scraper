const Story = require("../models/Story");

const User = require("../models/User");

exports.getStories = async (req, res) => {
  try {
    const stories = await Story.find().sort({
      points: -1,
    });

    res.json(stories);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getStory = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);

    res.json(story);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.toggleBookmark = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user.bookmarks) {
      user.bookmarks = [];
    }

    const storyId = req.params.id;

    const alreadyBookmarked =
      user.bookmarks.some(
        (id) => id.toString() === storyId
      );

    if (alreadyBookmarked) {
      user.bookmarks = user.bookmarks.filter(
        (id) => id.toString() !== storyId
      );
    } else {
      user.bookmarks.push(storyId);
    }

    await user.save();

    const updatedUser = await User.findById(
      req.user.id
    ).populate("bookmarks");

    res.status(200).json({
      message: alreadyBookmarked
        ? "Bookmark removed"
        : "Bookmark added",
      bookmarks: updatedUser.bookmarks,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

exports.getBookmarks = async (req, res) => {
  try {
    const user = await User.findById(
      req.user.id
    ).populate("bookmarks");

    res.json(user.bookmarks);
  } catch (error) {
    res.status(500).json(error);
  }
};