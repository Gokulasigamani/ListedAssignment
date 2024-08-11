import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div
      onClick={toggleTheme}
      className="w-[65px] h-[35px] rounded-3xl bg-neutral-300 flex items-center justify-between px-2 cursor-pointer transition-all duration-500"
    >
      <FaSun
        className={`toggle-icon transition-all duration-500 ${
          isDarkMode ? "translate-x-full opacity-0" : "opacity-100"
        }`}
      />
      <FaMoon
        className={`toggle-icon transition-all duration-500 ${
          isDarkMode ? "opacity-100" : "translate-x-full opacity-0"
        }`}
      />
    </div>
  );
}

export default ThemeToggle;
