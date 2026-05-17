import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import SkeletonCard from "../components/ui/SkeletonCard";

function PostDetail() {
  const { id } = useParams();

  const {
    data: post,
    loading,
    error,
  } = useFetch(`/posts/${id}`);

  if (loading)
    return <SkeletonCard />;

  if (error)
    return (
      <p className="text-red-500">
        {error}
      </p>
    );

  return (
    <div
      className="
      card
      bg-[var(--card)]
      p-6
      rounded-lg
    "
    >
      <h1 className="text-3xl font-bold">
        {post.title}
      </h1>

      <p className="mt-4">
        {post.body}
      </p>
    </div>
  );
}

export default PostDetail;