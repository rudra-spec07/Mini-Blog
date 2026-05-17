import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import SkeletonCard from "../components/ui/SkeletonCard";

function Home() {
  const [page, setPage] =
    useState(1);

  const {
    data: posts,
    loading,
    error,
  } = useFetch(
    `/posts?_page=${page}&_limit=6`
  );

  return (
    <div className="space-y-10">

      {/* HERO */}

      <section
        className="
        text-center
        py-10
      "
      >
        <h1
          className="
          text-4xl
          md:text-6xl
          font-bold
          mb-4
        "
        >
          Explore MiniBlog
        </h1>

        <p
          className="
          max-w-2xl
          mx-auto
          opacity-80
          text-lg
        "
        >
          Read, create and
          explore posts with
          modern cyber UI.
        </p>
      </section>

      {/* GRID */}

      <div
        className="
        grid
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
      "
      >
        {loading &&
          [...Array(6)].map(
            (_, i) => (
              <SkeletonCard
                key={i}
              />
            )
          )}

        {error && (
          <p className="text-red-500">
            {error}
          </p>
        )}

        {posts?.map((post) => (
          <div
            key={post.id}
            className="
            card
            bg-[var(--card)]
            rounded-2xl
            p-6
            backdrop-blur-xl
            hover:-translate-y-2
            transition
            duration-300
          "
          >
            <h2
              className="
              text-xl
              font-bold
              line-clamp-2
            "
            >
              {post.title}
            </h2>

            <p
              className="
              mt-3
              opacity-80
              line-clamp-3
            "
            >
              {post.body}
            </p>

            <Link
              to={`/posts/${post.id}`}
              className="
              inline-block
              mt-5
              px-4
              py-2
              rounded-xl
              bg-blue-500
              text-white
              hover:scale-105
              transition
            "
            >
              Read More
            </Link>
          </div>
        ))}
      </div>

      {/* PAGINATION */}

      <div
        className="
        flex
        justify-center
        gap-4
      "
      >
        <button
          disabled={page===1}
          onClick={() =>
            setPage(
              page - 1
            )
          }
          className="
          px-5
          py-2
          rounded-xl
          bg-gray-700
          text-white
        "
        >
          Prev
        </button>

        <span
          className="
          flex
          items-center
          font-semibold
        "
        >
          Page {page}
        </span>

        <button
          onClick={() =>
            setPage(
              page + 1
            )
          }
          className="
          px-5
          py-2
          rounded-xl
          bg-blue-500
          text-white
        "
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;