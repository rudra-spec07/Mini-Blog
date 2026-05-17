import useFetch from "../hooks/useFetch";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const {
    data: posts,
    loading,
  } = useFetch("/posts");

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // redirect to home after logout
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">
        Dashboard
      </h1>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="
          mb-6
          px-4
          py-2
          rounded-xl
          bg-red-500
          text-white
          hover:scale-105
          transition
        "
      >
        Logout
      </button>

      <div
        className="
        card
        bg-[var(--card)]
        p-6
        rounded-lg
      "
      >
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h2 className="text-2xl">
              Total Posts
            </h2>

            <p className="text-5xl font-bold mt-2">
              {posts.length}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;