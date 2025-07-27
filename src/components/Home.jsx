import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center py-36 px-4 min-h-screen overflow-hidden
                 bg-white text-gray-800 dark:bg-[#0f0f0f] dark:text-gray-100 transition-colors duration-500"
    >
      {/* Soft Gradient Glows */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-gradient-to-tr from-indigo-400 to-purple-300 dark:from-indigo-700 dark:to-purple-600 opacity-40 rounded-full blur-[120px] animate-pulse z-0" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-gradient-to-br from-pink-300 to-blue-300 dark:from-pink-600 dark:to-blue-500 opacity-40 rounded-full blur-[140px] animate-pulse z-0" />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl w-full">
        {/* Profile Image with Animated Glow Border */}
        <motion.div
          className="relative w-52 h-52 md:w-72 md:h-72 mx-auto mb-8 rounded-full overflow-hidden shadow-xl"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 animate-spin-slow blur-sm" />
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQHPy-ulakebdQ/profile-displayphoto-scale_400_400/B4DZgn0ZoVGgAg-/0/1753014706992?e=1756339200&v=beta&t=iig7L6KGMEBDa3AwkapWl9u7gQTSJ-O0mcEmLM3WiqU"
            alt="Mayur"
            className="relative z-10 w-full h-full object-cover rounded-full border-[6px] border-white dark:border-gray-800"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Mayur Vijay Patil
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mt-5 font-medium tracking-wide max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          Full Stack Developer | MERN | Java | Spring Boot | Problem Solver
        </motion.p>

        {/* Description */}
        <motion.p
          className="mt-8 max-w-3xl mx-auto text-base md:text-xl leading-loose tracking-wide text-gray-700 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2.2 }}
        >
          Passionate about building scalable and efficient web applications.
          Skilled in Java, Spring Boot, React, Node.js, and MongoDB. I thrive on
          solving complex problems and creating impactful digital solutions that
          deliver great user experiences.
        </motion.p>

        {/* Internship Card */}
        <motion.div
          className="mt-12 p-8 bg-white dark:bg-[#1b1b1b] border border-indigo-100 dark:border-indigo-800 rounded-3xl shadow-xl hover:shadow-indigo-400/40 hover:-translate-y-1 transition duration-500 max-w-xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 2.8 }}
        >
          <div className="text-4xl mb-3">🏢</div>
          <h3 className="text-2xl font-bold text-indigo-500">
            Internship at Altimetrik India
          </h3>
          <p className="mt-3 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Gained hands-on experience working with modern web technologies and
            agile teams. Contributed to enterprise-grade solutions, enhancing my
            full-stack development skills and real-world collaboration.
          </p>
        </motion.div>

        {/* Resume Button */}
        <motion.div
          className="mt-14 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.5 }}
        >
          <a
            href="https://drive.google.com/file/d/1daXgtNRyCn7kzPzwUejSMeXXwK_88kOO/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-indigo-500 hover:bg-indigo-600 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-indigo-500/50 transform hover:scale-105 transition duration-300"
          >
            📄 Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
