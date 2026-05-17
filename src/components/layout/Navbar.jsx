import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { token, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const linkStyle =
    "hover:text-cyan-500 transition duration-300";

  return (
    <nav
      className="
      sticky
      top-0
      z-50
      bg-[var(--card)]
      backdrop-blur-xl
      border-b
      border-[var(--border)]
      shadow-lg
    "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        h-16
        flex
        items-center
        justify-between
      "
      >
        {/* Logo */}

        <Link
          to="/"
          className="
          text-2xl
          font-bold
          glitch
        "
        >
          MiniBlog
        </Link>

        {/* Desktop Menu */}

        <div
          className="
          hidden
          lg:flex
          items-center
          gap-6
        "
        >
          <Link
            to="/"
            className={linkStyle}
          >
            Home
          </Link>

          <Link
            to="/create"
            className={linkStyle}
          >
            Create
          </Link>

          {token ? (
            <>
              <Link
                to="/dashboard"
                className={linkStyle}
              >
                Dashboard
              </Link>

              <button
                onClick={logout}
                className="
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
            </>
          ) : (
            <Link
              to="/login"
              className={linkStyle}
            >
              Login
            </Link>
          )}

          <ThemeToggle />
        </div>

        {/* Hamburger → Mobile + Tablet ONLY */}

        <button
          onClick={() => setOpen(!open)}
          className="
          lg:hidden
          text-2xl
          p-2
        "
        >
          {open ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}

      {open && (
        <div
          className="
          lg:hidden
          px-4
          pb-5
          flex
          flex-col
          gap-4
          bg-[var(--card)]
          border-t
          border-[var(--border)]
        "
        >
          <Link
            to="/"
            onClick={() =>
              setOpen(false)
            }
          >
            Home
          </Link>

          <Link
            to="/create"
            onClick={() =>
              setOpen(false)
            }
          >
            Create
          </Link>

          {token ? (
            <>
              <Link
                to="/dashboard"
                onClick={() =>
                  setOpen(false)
                }
              >
                Dashboard
              </Link>

              <button
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="
                bg-red-500
                text-white
                rounded-lg
                p-2
              "
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() =>
                setOpen(false)
              }
            >
              Login
            </Link>
          )}

          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}

export default Navbar;