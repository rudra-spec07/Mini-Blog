import { useState } from "react";
import axiosInstance from "../api/axiosInstance";

function CreatePost() {
  const [form, setForm] = useState({
    title: "",
    body: "",
  });

  const [message, setMessage] =
    useState("");

  const [error, setError] =
    useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !form.title.trim() ||
      !form.body.trim()
    ) {
      setError(
        "Please fill all fields"
      );
      return;
    }

    try {
      setError("");

      await axiosInstance.post(
        "/posts",
        form
      );

      setMessage(
        "Post created successfully!"
      );

      setForm({
        title: "",
        body: "",
      });
    } catch (err) {
      setError(
        "Something went wrong"
      );
    }
  }

  return (
    <div
      className="
      card
      bg-[var(--card)]
      p-6
      rounded-lg
      max-w-xl
      mx-auto
    "
    >
      <h1 className="text-3xl font-bold mb-4">
        Create Post
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="
            p-3
            rounded
            border
          "
        />

        <textarea
          name="body"
          value={form.body}
          onChange={handleChange}
          placeholder="Body"
          rows="5"
          className="
            p-3
            rounded
            border
          "
        />

        <button
          className="
            bg-blue-500
            text-white
            p-3
            rounded
          "
        >
          Submit
        </button>
      </form>

      {message && (
        <p className="text-green-500 mt-3">
          {message}
        </p>
      )}

      {error && (
        <p className="text-red-500 mt-3">
          {error}
        </p>
      )}
    </div>
  );
}

export default CreatePost;