import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      id="home"
      className="flex flex-col items-center justify-center text-center py-32 px-8 bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-black min-h-screen"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Profile Picture */}
      <motion.img
        src="https://media.licdn.com/dms/image/v2/D4D03AQEPpeKHiEjiIg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727897227905?e=1748476800&v=beta&t=rEUR-P0-CnV1ELdW0brlYMkrcLy99PKnrvBNR-hMY1k"
        alt="Mayur"
        className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-blue-500 shadow-lg mb-6 transform hover:scale-105 transition duration-500"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Name & Role */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
        Hi, I'm <span className="text-blue-500">Mayur Vijay Patil</span>
      </h1>
      <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mt-3 font-medium">
        Full Stack Developer | MERN | Java | Spring Boot | Problem Solver
      </p>

      {/* Experience & Skills */}
      <p className="mt-6 text-gray-500 dark:text-gray-400 max-w-3xl leading-relaxed">
        Passionate about building scalable and efficient web applications.
        Experienced in Java, Spring Boot, React, Node.js, MongoDB, and REST
        APIs. I love solving complex problems, optimizing performance, and
        continuously learning new technologies. Enthusiastic about collaborating
        with teams to create impactful digital experiences.
      </p>

      {/* Call to Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href="https://drive.google.com/file/d/1-MoiHZ5eIT_dwqMsRFRnIT_SO0B9wPtF/view?usp=drive_link"
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transform hover:scale-105 transition duration-300"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="px-8 py-3 border border-blue-600 text-blue-600 dark:text-white dark:border-white font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:text-white transform hover:scale-105 transition duration-300"
        >
          Contact Me
        </a>
      </div>
    </motion.section>
  );
};

export default Home;
