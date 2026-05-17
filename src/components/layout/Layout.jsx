import Navbar from "./Navbar";
import FloatingIcons from "../ui/FloatingIcons";
import { useTheme } from "../../context/ThemeContext";

function Layout({ children }) {
  const { theme } = useTheme();

  return (
    <div
      className="
      min-h-screen
      bg-[var(--bg)]
      text-[var(--text)]
      transition-all
      duration-500
    "
    >
      <Navbar />

      {theme === "hacker" && (
        <FloatingIcons />
      )}

      <main
        className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        py-8
      "
      >
        {children}
      </main>
    </div>
  );
}

export default Layout;