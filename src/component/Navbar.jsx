import React from "react";
import { LuLogOut } from "react-icons/lu";
import { IoIosSettings } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import { useApp } from "../context/AppContext";

function Navbar() {
  const [open, setIsOpen] = useState(false);
  const dropdownref = useRef(null);
  const { title } = useApp();
  useEffect(() => {
    function handleClickOutside() {
      if (dropdownref.current && !dropdownref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <div className="bg-[#121e31] flex flex-row py-4 justify-between items-center px-5 w-full">
      <div></div>
      <div className="font-bold text-4xl bg-linear-to-r from-blue-500 to-green-400 bg-clip-text text-transparent underline w-max">
        {title}
      </div>
      <div
        className="w-max flex justify-center items-center relative"
        ref={dropdownref}
      >
        <button onClick={() => setIsOpen(!open)}>
          <IoIosSettings size={30} className="hover:cursor-pointer" />
        </button>

        {open && (
          <div
            className={`absolute top-full bg-white shadow-md border border-gray-300 text-black flex flex-col rounded-md -right-4`}
          >
            <button className="px-4 py-2 flex gap-2 items-center text-nowrap font-semibold hover:bg-gray-200 cursor-pointer">
              <IoSettingsSharp />
              Settings
            </button>

            <button className="py-2 px-4 text-nowrap font-semibold hover:bg-gray-200 cursor-pointer flex gap-2 items-center">
              <LuLogOut />
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
