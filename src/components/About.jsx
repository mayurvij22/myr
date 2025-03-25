import { motion } from "framer-motion";

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
          passionate Full Stack Developer with experience in building scalable
          web applications using{" "}
          <span className="text-blue-500">MERN Stack, Java, Spring Boot</span>.
          I enjoy crafting interactive UI/UX experiences, optimizing backend
          solutions, and solving complex problems with clean, efficient code.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6 text-left">
          <motion.div
            className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-blue-500">Experience</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              - Built dynamic and responsive web applications using React,
              Node.js, and MongoDB.
              <br />
              - Developed REST APIs, integrated secure authentication (JWT), and
              optimized performance.
              <br />
              - Experience in Java and Spring Boot for scalable enterprise
              applications.
              <br />
              - Worked with databases like MySQL and MongoDB for efficient data
              management.
              <br />- Hands-on experience with Docker, Git, and deployment
              strategies.
            </p>
          </motion.div>

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
              <br />- <strong>Tools & DevOps:</strong> Git, Docker, Postman, JWT
              Authentication
              <br />- <strong>Additional:</strong> RESTful APIs, Redux,
              Microservices, Authentication & Security
            </p>
          </motion.div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6 text-left">
          <motion.div
            className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-blue-500">Education</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              - <strong>Bachelor of Technology (B.Tech)</strong> in Computer
              Engineering
              <br />- R C Patel Institute of Technology, Shirpur, Maharashtra
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-blue-500">
              Certifications
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              - Java with DSA & System Design - PW (PhysicsWallah)
              <br />
              - Java for Beginners - Udemy
              <br />- TCS iON NQT - IT Certification (Java Hands-on Assessment)
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg text-left"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold text-blue-500">Projects</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            - <strong>HealthNet - Hospital Administration System:</strong> Full
            Stack web app for managing hospital operations. <br />-{" "}
            <strong>TaskMaster 360:</strong> Task management application with
            CRUD features built using the MERN stack. <br />-{" "}
            <strong>Interactive Image Smoothing Web App:</strong> Image
            processing tool with real-time smoothing using Streamlit and OpenCV.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
