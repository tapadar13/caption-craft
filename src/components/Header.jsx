import Github from "./GitHub";
import { useTheme } from "../../context/ThemeProvider";

export default function Header() {
  const { mode, setMode } = useTheme();

  const handleToggleTheme = () => {
    console.log("Toggling theme...");
    const newMode = mode === "light" ? "dark" : "light";
    console.log("New mode:", newMode);
    setMode(newMode);

    // Update localStorage to persist the theme preference
    localStorage.setItem("theme", newMode);
  };

  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 dark:border-b-gray-600 pb-7 sm:px-4 px-2 dark:bg-black bg-white dark:border-white">
      <div
        className="flex items-center w-5 h-5 bg-transparent"
        onClick={handleToggleTheme}
        style={{ cursor: "pointer" }}
      >
        <img
          src={
            mode === "light"
              ? "/assets/icons/moon.svg"
              : "/assets/icons/sun.svg"
          }
          alt={mode === "light" ? "moon" : "sun"}
          width={20}
          height={20}
        />
      </div>
      <a
        className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-black px-4 py-2 text-sm text-black dark:text-white shadow-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-600"
        href="https://github.com/tapadar13/caption-craft"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github />
        <p>Star on GitHub</p>
      </a>
    </header>
  );
}
