import { useEffect, useState } from "react";

import API from "../api/axios";

import StoryCard from "../components/StoryCard";

export default function Bookmarks() {
  const [stories, setStories] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookmarks();
  }, []);

  const fetchBookmarks = async () => {
    try {
      const { data } = await API.get(
        "/stories/bookmarks/all"
      );

      setStories(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-orange-500">
          Your Bookmarks
        </h1>

        {stories.length === 0 ? (
          <div className="text-center text-gray-500">
            No bookmarked stories yet.
          </div>
        ) : (
          <div className="grid gap-6">
            {stories.map((story) => (
              <StoryCard
                key={story._id}
                story={story}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}