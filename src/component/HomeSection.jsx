import React from "react";

function HomeSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] bg-[#121e31] p-8 rounded-lg">
      <img
        src="/luffy.jpg"
        alt="Profile"
        className="w-40 h-40 rounded-[50%] mb-4 border-4 border-blue-500 object-cover"
      />
      <h1 className="text-4xl font-bold text-center bg-linear-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
        Hey! I'm a Professional Fullstack Developer.
      </h1>
      <p className="text-lg text-gray-200 mb-4 text-center max-w-xl">
        I build modern web applications using the latest technologies.
        Passionate about creating beautiful, performant, and user-friendly
        digital experiences.
      </p>
      <a
        href="#contact"
        className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition"
      >
        Contact Me
      </a>
    </section>
  );
}

export default HomeSection;
