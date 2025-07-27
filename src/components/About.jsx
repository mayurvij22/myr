import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaCode,
} from "react-icons/fa";

const About = () => {
  const cards = [
    {
      title: "Experience",
      content: (
        <>
          • Built responsive web apps using React, Node.js, MongoDB.
          <br />
          • Developed REST APIs, JWT authentication, and performance optimizations.
          <br />
          • Java & Spring Boot for scalable enterprise apps.
          <br />
          • Experience with MySQL, Docker, Git, CI/CD, deployments.
        </>
      ),
    },
    {
      title: "Skills",
      content: (
        <>
          • <strong>Frontend:</strong> React, Next.js, Tailwind CSS, Framer Motion
          <br />
          • <strong>Backend:</strong> Node.js, Express, Spring Boot, MongoDB, MySQL
          <br />
          • <strong>Tools:</strong> Git, Docker, Postman, JWT, Vercel
          <br />
          • <strong>CS Core:</strong> DSA, DBMS, OOP, Microservices, Testing
        </>
      ),
    },
    {
      title: "Education",
      content: (
        <>
          • <strong>B.Tech – Computer Engineering</strong><br />
          R C Patel Institute of Technology (8.01 CGPA)
          <br />
          • HSC: 84.83% – Pratap College Amalner
          <br />
          • SSC: 74.40% – Sane Guruji Nutan High School
        </>
      ),
    },
    {
      title: "Certifications",
      content: (
        <>
          • Java with DSA & System Design (PW)
          <br />
          • Java for Beginners (Udemy)
          <br />
          • TCS iON NQT – 71% (Java Track)
          <br />
          • Python Essentials 1 – Cisco Certified
        </>
      ),
    },
    {
      title: "Internship",
      content: (
        <>
          • <strong>Project Intern at Altimetrik India</strong> – May 2025 – Present
          <br />
          • Bengaluru, Karnataka (On-site)
          <br />
          • Java, Spring Boot, React, SQL, Analytics Pipelines
          <br />
          • Agile teams focused on scalable, secure backend solutions.
        </>
      ),
    },
    {
      title: "Projects",
      content: (
        <>
          • <strong>VoteSphere:</strong> Live polling app – MERN + Socket.IO
          <br />
          • <strong>HealthNet:</strong> Secure hospital admin panel – JWT auth
          <br />
          • <strong>IoT Solar Tracker:</strong> ICRAES-2K25 paper + copyright registered
        </>
      ),
    },
    {
      title: "Achievements",
      content: (
        <>
          • 100+ LeetCode problems – “100 Days of Code” badge
          <br />
          • Presented at ICRAES-2K25, Bharati Vidyapeeth Pune
          <br />
          • National Science Day participant – 2022
          <br />
          • Copyright registered: IoT Solar Tracking
        </>
      ),
      spanTwo: true,
    },
  ];

  return (
    <motion.section
      id="about"
      className="relative py-24 px-6 min-h-screen text-gray-900 dark:text-white bg-gradient-to-br from-white via-slate-100 to-slate-300 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      {/* Optional background blur overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent dark:from-black/40 dark:to-transparent backdrop-blur-md pointer-events-none" />

      <div className="relative max-w-6xl mx-auto text-center z-10">
        <motion.h2
          className="text-5xl font-extrabold text-indigo-600 dark:text-blue-400 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          I’m <span className="font-semibold">Mayur Vijay Patil</span>, a passionate and detail-driven Full Stack Developer. I specialize in building robust and scalable applications using technologies like <span className="text-indigo-500 font-semibold">MERN Stack</span>, <span className="text-indigo-500 font-semibold">Java</span>, and <span className="text-indigo-500 font-semibold">Spring Boot</span>.
        </motion.p>

        <motion.p
          className="mt-6 max-w-3xl mx-auto text-md md:text-lg italic text-indigo-500 dark:text-blue-300 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.9 }}
        >
          “Striving to turn innovative ideas into impactful digital realities, one line of code at a time.”
        </motion.p>

        <motion.p
          className="mt-6 max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.3 }}
        >
          I embrace continuous learning and thrive in collaborative environments. My mission is to create meaningful software solutions with clean code, efficient architecture, and great user experiences.
        </motion.p>

        {/* Info Cards Grid */}
        <div className="mt-14 grid md:grid-cols-2 gap-8 text-left">
          {cards.map(({ title, content, spanTwo }, i) => (
            <motion.div
              key={i}
              className={`p-6 md:p-8 bg-white dark:bg-slate-800 rounded-2xl border border-indigo-300 dark:border-blue-700 shadow-md hover:shadow-xl transition duration-300 ${
                spanTwo ? "md:col-span-2" : ""
              }`}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.7 + i * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-indigo-600 dark:text-blue-400 mb-3">
                {title}
              </h3>
              <p className="text-gray-800 dark:text-gray-300 leading-relaxed tracking-wide text-[1.05rem]">
                {content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Social Icons */}
        <motion.div
          className="mt-16 flex justify-center gap-10 text-4xl text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 4.5 }}
        >
          <a
            href="https://www.linkedin.com/in/mayur-patil-033787250/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:text-blue-500 hover:scale-110 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/mayurvij22"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-700 dark:hover:text-white hover:scale-110 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:mayurvij22@gmail.com"
            className="text-red-500 hover:text-red-400 hover:scale-110 transition duration-300"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="tel:+919423405733"
            className="text-green-500 hover:text-green-400 hover:scale-110 transition duration-300"
            aria-label="Phone"
          >
            <FaPhone />
          </a>
          <a
            href="https://leetcode.com/u/mayurvij22/"
            target="_blank"
            rel="noreferrer"
            className="text-yellow-400 hover:text-yellow-300 hover:scale-110 transition duration-300"
            aria-label="LeetCode"
          >
            <FaCode />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
