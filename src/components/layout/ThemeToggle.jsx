import { useTheme } from "../../context/ThemeContext";
import {
  FaSun,
  FaMoon,
  FaLaptopCode,
} from "react-icons/fa";

function ThemeToggle() {
  const { theme, setTheme } =
    useTheme();

  const btn =
    "p-2 rounded-full transition hover:scale-110";

  return (
    <div
      className="
      flex
      gap-2
      items-center
    "
    >
      <button
        onClick={() =>
          setTheme("light")
        }
        className={`${btn}
          ${
            theme === "light"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }
        `}
      >
        <FaSun />
      </button>

      <button
        onClick={() =>
          setTheme("sunset")
        }
        className={`${btn}
          ${
            theme === "sunset"
              ? "bg-orange-500 text-white"
              : "bg-gray-200"
          }
        `}
      >
        <FaMoon />
      </button>

      <button
        onClick={() =>
          setTheme("hacker")
        }
        className={`${btn}
          ${
            theme === "hacker"
              ? "bg-green-600 text-white"
              : "bg-gray-200"
          }
        `}
      >
        <FaLaptopCode />
      </button>
    </div>
  );
}

export default ThemeToggle;