import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-orange-500">
        HackerNews
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/" className="hover:text-orange-500 hover:underline transition">
          Home
        </Link>

        {user ? (
          <>
            <span className="font-medium">Hi, {user.name}</span>
            <Link to="/bookmarks" className="hover:text-orange-500 hover:underline transition">
              Bookmarks
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 cursor-pointer text-white px-4 py-2 rounded-lg transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-orange-500 hover:underline cursor-pointer transition">
              Login
            </Link>

            <Link
              to="/register"
              className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-white px-4 py-2 rounded-lg transition"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
