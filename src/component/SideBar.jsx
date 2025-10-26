import { FaHome } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { MdWorkHistory } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSchoolSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useState } from "react";
function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const SideBarItems = [
    {
      id: 1,
      label: "Home",
      icon: <FaHome className="w-6 h-6 fill-blue-500" />,
      to: "/",
    },
    {
      id: 2,
      label: "Users",
      icon: <FaUserShield className="w-6 h-6 fill-blue-500" />,
      to: "/Users",
    },
    {
      id: 3,
      label: "Skills",
      icon: <GiAchievement className="w-6 h-6 fill-blue-500" />,
      to: "/Skills",
    },
    {
      id: 4,
      label: "Payment",
      icon: <MdWorkHistory className="w-6 h-6 fill-blue-500" />,
      to: "/payment",
    },
    {
      id: 5,
      label: "Qualifications",
      icon: <IoSchoolSharp className="w-6 h-6 fill-blue-500" />,
      to: "/Qualifications",
    },
  ];
  return (
    <>
      <div
        className={`bg-[#121e31] flex flex-col gap-13  h-screen ${
          isOpen ? "w-15" : ""
        }`}
      >
        <div className="flex mt-4 items-center px-4">
          <div className="mr-2.5">
            <img
              className={`w-14 h-14 object-cover rounded-full object-center ${
                isOpen ? "hidden" : "block"
              }`}
              src="/luffy.jpg"
              alt=""
            />
          </div>
          <div className={`mr-5 ${isOpen ? "hidden" : "block"}`}>
            <p className="font-bold text-lg bg-linear-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
              Sushil Pariyar
            </p>
            <p className="font-semibold text-gray-300 text-sm truncate max-w-30">
              sushilpariyar302@gmail
            </p>
          </div>
          <button
            className="hover:cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <RxCross2 className="border" size={25} />
            ) : (
              <GiHamburgerMenu size={24} />
            )}
          </button>
        </div>
        <div className="items-div flex flex-col gap-2 justify-center">
          {SideBarItems.map((item) => (
            <Link key={item.id} to={item.to}>
              <div className="flex items-center gap-8 hover:cursor-pointer hover:bg-gray-700 py-5 px-6 hover:delay-50 transition ease-out">
                <div> {item.icon}</div>
                <div
                  className={`font-bold text-[14px] ${
                    isOpen ? "hidden" : "block"
                  }`}
                >
                  {item.label}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default SideBar;
