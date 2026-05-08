import { useEffect, useState } from "react";

import API from "../api/axios.js";

import StoryCard from "../components/storyCard.jsx";

export default function Home() {
  const [stories, setStories] = useState([]);

  const [loading, setLoading] =
    useState(true);

  const [currentPage, setCurrentPage] =
    useState(1);

  const storiesPerPage = 5;

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const { data } = await API.get(
        "/stories"
      );

      setStories(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Pagination Logic
  const indexOfLastStory =
    currentPage * storiesPerPage;

  const indexOfFirstStory =
    indexOfLastStory - storiesPerPage;

  const currentStories = stories.slice(
    indexOfFirstStory,
    indexOfLastStory
  );

  const totalPages = Math.ceil(
    stories.length / storiesPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-orange-500">
          Top Hacker News Stories
        </h1>

        <div className="grid gap-6">
          {currentStories.map((story) => (
            <StoryCard
              key={story._id}
              story={story}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-5 py-2 rounded-lg text-white transition ${
              currentPage === 1
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600 cursor-pointer"
            }`}
          >
            Previous
          </button>

          <span className="font-semibold text-lg">
            Page {currentPage} of{" "}
            {totalPages}
          </span>

          <button
            onClick={nextPage}
            disabled={
              currentPage === totalPages
            }
            className={`px-5 py-2 rounded-lg  text-white transition ${
              currentPage === totalPages
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600 cursor-pointer"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}