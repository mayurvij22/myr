import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaCode,
} from "react-icons/fa";

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600">About Me</h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          I am <span className="font-semibold">Mayur Vijay Patil</span>, a
          passionate Full Stack Developer skilled in building scalable
          applications using{" "}
          <span className="text-blue-500">MERN Stack, Java, Spring Boot</span>.
          I enjoy creating interactive UI/UX, optimizing backend systems, and
          solving complex problems with clean, efficient code.
        </p>

        {/* Main grid */}
        <div className="mt-8 grid md:grid-cols-2 gap-6 text-left">
          {/* Experience */}
          <motion.div
            className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-blue-500">Experience</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              - Built responsive web apps using React, Node.js, MongoDB.
              <br />
              - Developed REST APIs, JWT authentication, optimized performance.
              <br />
              - Java & Spring Boot for scalable enterprise apps.
              <br />- Worked with MySQL, MongoDB, Docker, Git & deployment.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-blue-500">Skills</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              - <strong>Frontend:</strong> React, Next.js, Tailwind CSS, Framer
              Motion
              <br />- <strong>Backend:</strong> Node.js, Express, Spring Boot,
              MongoDB, MySQL
              <br />- <strong>Tools:</strong> Git, Docker, Postman, JWT
              <br />- <strong>Other:</strong> DSA, DBMS, OOP, Microservices,
              Testing
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-blue-500">Education</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              - <strong>B.Tech in Computer Engineering</strong>
              <br />
              R C Patel Institute of Technology (7.93 CGPA, Pursuing)
              <br />
              - HSC: 84.83% (Pratap College Amalner)
              <br />- SSC: 74.40% (Sane Guruji Nutan High School)
            </p>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-blue-500">
              Certifications
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              - Java with DSA & System Design (PW)
              <br />
              - Java for Beginners (Udemy)
              <br />
              - TCS iON NQT (71%, Java)
              <br />- Python Essentials 1 (Cisco)
            </p>
          </motion.div>

          {/* Internship */}
          <motion.div
            className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-blue-500">Internship</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              - <strong>Project Intern at Altimetrik India</strong> (May 2025 –
              Present)
              <br />
              Bengaluru, Karnataka (On-site)
              <br />
              - Working on Java, Spring Boot, React for enterprise platforms.
              <br />
              - Building data pipelines, complex SQL for analytics.
              <br />- Agile environment, focusing on scalable, secure solutions.
            </p>
          </motion.div>

          {/* Projects */}
          <motion.div
            className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-blue-500">Projects</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              - <strong>VoteSphere:</strong> Real-time polling app with React,
              Node, MongoDB, Socket.IO.
              <br />- <strong>HealthNet:</strong> Hospital admin system with JWT
              auth, React, Node, MongoDB.
              <br />- <strong>IoT Solar Tracking:</strong> Presented at
              ICRAES-2K25, also copyright registered.
            </p>
          </motion.div>

          {/* Achievements */}
          <motion.div
            className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg md:col-span-2"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-blue-500">
              Achievements
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              - 100 Days of Code badge for solving 100+ problems on LeetCode.
              <br />
              - Presented IoT research paper at ICRAES-2K25, Bharati Vidyapeeth
              Pune.
              <br />
              - Active participation in National Science Day-2022.
              <br />- Copyright for IoT Solar Tracking project.
            </p>
          </motion.div>
        </div>

        {/* Social links */}
        <motion.div className="mt-10 flex justify-center gap-6 text-3xl">
          <a
            href="https://www.linkedin.com/in/mayur-patil-033787250/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/mayurvij22"
            target="_blank"
            rel="noreferrer"
            className="text-gray-800 dark:text-white hover:scale-110 transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:mayurvij22@gmail.com"
            className="text-red-600 hover:scale-110 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="tel:+919423405733"
            className="text-green-600 hover:scale-110 transition"
          >
            <FaPhone />
          </a>
          <a
            href="https://leetcode.com/u/mayurvij22/"
            target="_blank"
            rel="noreferrer"
            className="text-yellow-500 hover:scale-110 transition"
          >
            <FaCode />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
