import { useEffect, useState } from "react";

import API from "../api/axios";

export default function StoryCard({ story }) {
  const [bookmarked, setBookmarked] =
    useState(false);

  useEffect(() => {
    checkBookmark();
  }, []);

  const checkBookmark = async () => {
    try {
      const { data } = await API.get(
        "/stories/bookmarks/all"
      );

      const exists = data.some(
        (item) => item._id === story._id
      );

      setBookmarked(exists);
    } catch (error) {
      console.log(error);
    }
  };

  const bookmarkStory = async () => {
    try {
      const res = await API.post(
        `/stories/${story._id}/bookmark`
      );

      const added =
        res.data.message ===
        "Bookmark added";

      setBookmarked(added);
    } catch (error) {
      alert("Login required");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6">
      <a
        href={story.url}
        target="_blank"
        rel="noreferrer"
      >
        <h2 className="text-xl font-bold text-gray-800 hover:text-orange-500 transition">
          {story.title}
        </h2>
      </a>

      <div className="flex gap-4 mt-4 text-gray-600 text-sm">
        <p>🔥 {story.points} points</p>

        <p>👤 {story.author}</p>

        <p>⏰ {story.postedAt}</p>
      </div>

      <button
        onClick={bookmarkStory}
        className={`mt-5 px-5 py-2 rounded-lg text-white transition ${
          bookmarked
            ? "bg-green-500"
            : "bg-orange-500 hover:bg-orange-600"
        }`}
      >
        {bookmarked
          ? "Bookmarked"
          : "Bookmark"}
      </button>
    </div>
  );
}