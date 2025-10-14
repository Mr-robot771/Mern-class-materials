import { useApp } from "../context/AppContext";
import { useEffect } from "react";
import { RiJavascriptFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

function Skills() {
  const { setTitle } = useApp();
  useEffect(() => {
    setTitle("Skills");
  }, []);

  const skills = [
    { name: "JavaScript", level: "Advanced", icon: <RiJavascriptFill className="fill-yellow-500"/>},
    { name: "React", level: "Advanced", icon:<RiReactjsLine className="fill-blue-500" />},
    { name: "Node.js", level: "Intermediate", icon: <FaNode className="fill-green-500"/> },
    { name: "Express.js", level: "Intermediate", icon: <SiExpress className="fill-blue-500"/> },
    { name: "MongoDB", level: "Intermediate", icon: <SiMongodb className="fill-green-500" /> },
    { name: "HTML5", level: "Advanced", icon: <FaHtml5 className="fill-orange-500" /> },
    { name: "CSS3", level: "Advanced", icon: <SiCss3 className="fill-blue-500"/> },
    { name: "Tailwind CSS", level: "Intermediate", icon: <RiTailwindCssFill className="fill-blue-500" />},
    { name: "Git", level: "Intermediate", icon:<FaGithub className="fill-black" />},
  ];

  return (
    <div className="min-h-screen bg-gray-200 py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        My Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow border border-gray-100"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-1">
              {skill.name}
            </h3>
            <span className="text-sm text-gray-500">{skill.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
