import useFetch from "../hooks/useFetch";

function Dashboard() {
  const {
    data: posts,
    loading,
  } = useFetch("/posts");

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">
        Dashboard
      </h1>

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