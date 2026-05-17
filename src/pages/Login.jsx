import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setError("");

    // Mock Login
    if (
      form.email === "admin@gmail.com" &&
      form.password === "123456"
    ) {
      login("mock-jwt-token-123");

      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  }

  return (
    <div
      className="
        card
        bg-[var(--card)]
        p-6
        rounded-lg
        max-w-md
        mx-auto
      "
    >
      <h1 className="text-3xl font-bold mb-4">
        Login
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="p-3 border rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="p-3 border rounded"
        />

        <button
          className="
            bg-green-600
            text-white
            p-3
            rounded
          "
        >
          Login
        </button>
      </form>

      <p className="mt-4 text-sm opacity-70">
        Demo:
        <br />
        admin@gmail.com
        <br />
        123456
      </p>

      {error && (
        <p className="text-red-500 mt-3">
          {error}
        </p>
      )}
    </div>
  );
}

export default Login;