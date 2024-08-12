import { useState } from "react";
import Logo from "../assets/Logo.png";
import ThemeToggle from "./ThemeToggle";

function SideBar() {
  const [WidthAdjust, setWidthAdjust] = useState(false);

  const AniHandler = () => {
    setWidthAdjust(!WidthAdjust);
  };

  return (
    <div
      className={`h-[100vh] bg-white transition-all duration-300 ease-in-out rounded-b-2xl ${
        WidthAdjust ? "w-[14%]" : "w-[9%]"
      } flex flex-col`}
    >
      <div
        className={`flex items-center justify-center pt-9 transition-all duration-300 ease-in-out ${
          WidthAdjust ? "gap-6" : "gap-2"
        }`}
      >
        <img src={Logo} className="w-[30px]" alt="Logo" onClick={AniHandler} />
        <h1
          className={`font-semibold text-xl transition-opacity transform duration-300 ease-in-out ${
            WidthAdjust ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-20px]"
          }`}
        >
          BASE
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          className={`bi bi-box-arrow-right cursor-pointer transition-transform duration-300 ease-in-out ${
            WidthAdjust ? "translate-x-2" : ""
          }`}
          viewBox="0 0 16 16"
          onClick={AniHandler}
        >
          <path
            fillRule="evenodd"
            d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
          />
          <path
            fillRule="evenodd"
            d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
          />
        </svg>
      </div>
      <div className="flex flex-col text-[25px] gap-5 items-start ml-3 mt-10 px-2">
        {[
          { icon: "bi-grid-fill", text: "Dashboard" },
          { icon: "bi-cloud-arrow-up-fill", text: "Upload" },
          { icon: "bi-receipt-cutoff", text: "Invoice" },
          { icon: "bi-calendar4-week", text: "Schedule" },
          { icon: "bi-calendar-month", text: "Calendar" },
          { icon: "bi-bell-fill", text: "Notifications" },
          { icon: "bi-gear-fill", text: "Settings" },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex gap-4 items-center transition-all duration-300 ease-in-out ${
              WidthAdjust ? "opacity-100 translate-x-0" : "opacity-100 translate-x-0"
            } ${WidthAdjust && item.text === "Upload" ? "bg-indigo-600 text-white py-0 px-4 rounded-lg" : ""}`}
          >
            <i
              className={`bi ${item.icon} ${
                WidthAdjust && item.text === "Upload" ? "text-white" : "text-neutral-400"
              }`}
            ></i>
            <h2
              className={`font-medium text-[12px] transition-opacity transform duration-300 ease-in-out ${
                WidthAdjust ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-20px]"
              }`}
            >
              {item.text}
            </h2>
          </div>
        ))}
      </div>

      <div className="absolute bottom-10 ml-6">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default SideBar;
