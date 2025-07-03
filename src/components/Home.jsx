import { motion } from "framer-motion";
import { Briefcase } from "lucide-react"; // optional if using lucide-react icons

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
        src="https://media.licdn.com/dms/image/v2/D4D03AQFX-lmOjnRL8Q/profile-displayphoto-shrink_400_400/B4DZawat9kHQAw-/0/1746716517336?e=1756944000&v=beta&t=ImDi___nnVAoo21FrRChAaUMxWeWjn8iR017p53aCdw"
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

      {/* Internship Card */}
      <motion.div
        className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg max-w-xl flex flex-col items-center text-center border border-blue-300 dark:border-blue-600"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="text-4xl mb-2">🏢</div>
        <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Internship at Altimetrik India
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
          Completed a hands-on internship where I worked on modern web
          technologies, contributed to enterprise-grade solutions, and
          collaborated with cross-functional agile teams. This experience
          strengthened my practical skills in building scalable applications.
        </p>
      </motion.div>

      {/* Call to Action Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          href="https://drive.google.com/file/d/1daXgtNRyCn7kzPzwUejSMeXXwK_88kOO/view?usp=sharing"
          className="px-8 py-3 bg-orange-600 hover:bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transform hover:scale-105 transition duration-300"
        >
          Download Resume
        </a>
        {/* <a
          href="#contact"
          className="px-8 py-3 border bg-cyan-600 hover:bg-cyan-700 text-blue-600 dark:text-white dark:border-white font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:text-white transform hover:scale-105 transition duration-300"
        >
          Contact Me
        </a> */}
      </div>
    </motion.section>
  );
};

export default Home;
