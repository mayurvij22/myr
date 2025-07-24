import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaCode,
} from "react-icons/fa";

const About = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    let effect;

    if (typeof window !== "undefined") {
      window.THREE = THREE; // ✅ Ensure THREE is accessible to Vanta

      import("vanta/dist/vanta.waves.min").then((VANTA) => {
        if (!vantaEffect && vantaRef.current) {
          effect = VANTA.default({
            el: vantaRef.current,
            THREE: window.THREE,
            color: 0x2563eb,
            shininess: 50,
            waveHeight: 15,
            waveSpeed: 0.6,
            zoom: 0.8,
            backgroundColor: 0x111827,
          });
          setVantaEffect(effect);
        }
      });
    }

    return () => {
      if (effect) effect.destroy();
    };
  }, [vantaEffect]);

  // ... rest of your component remains the same
  const cards = [
    {
      title: "Experience",
      content: (
        <>
          - Built responsive web apps using React, Node.js, MongoDB.
          <br />
          - Developed REST APIs, JWT authentication, optimized performance.
          <br />
          - Java & Spring Boot for scalable enterprise apps.
          <br />
          - Worked with MySQL, MongoDB, Docker, Git & deployment.
        </>
      ),
    },
    {
      title: "Skills",
      content: (
        <>
          - <strong>Frontend:</strong> React, Next.js, Tailwind CSS, Framer Motion
          <br />
          - <strong>Backend:</strong> Node.js, Express, Spring Boot, MongoDB, MySQL
          <br />
          - <strong>Tools:</strong> Git, Docker, Postman, JWT
          <br />
          - <strong>Other:</strong> DSA, DBMS, OOP, Microservices, Testing
        </>
      ),
    },
    {
      title: "Education",
      content: (
        <>
          - <strong>B.Tech in Computer Engineering</strong><br />
          R C Patel Institute of Technology (7.93 CGPA, Pursuing)<br />
          - HSC: 84.83% (Pratap College Amalner)<br />
          - SSC: 74.40% (Sane Guruji Nutan High School)
        </>
      ),
    },
    {
      title: "Certifications",
      content: (
        <>
          - Java with DSA & System Design (PW)
          <br />
          - Java for Beginners (Udemy)
          <br />
          - TCS iON NQT (71%, Java)
          <br />
          - Python Essentials 1 (Cisco)
        </>
      ),
    },
    {
      title: "Internship",
      content: (
        <>
          - <strong>Project Intern at Altimetrik India</strong> (May 2025 – Present)
          <br />
          Bengaluru, Karnataka (On-site)
          <br />
          - Working on Java, Spring Boot, React for enterprise platforms.
          <br />
          - Building data pipelines, complex SQL for analytics.
          <br />
          - Agile environment, focusing on scalable, secure solutions.
        </>
      ),
    },
    {
      title: "Projects",
      content: (
        <>
          - <strong>VoteSphere:</strong> Real-time polling app with React, Node, MongoDB, Socket.IO.
          <br />
          - <strong>HealthNet:</strong> Hospital admin system with JWT auth, React, Node, MongoDB.
          <br />
          - <strong>IoT Solar Tracking:</strong> Presented at ICRAES-2K25, also copyright registered.
        </>
      ),
    },
    {
      title: "Achievements",
      content: (
        <>
          - 100 Days of Code badge for solving 100+ problems on LeetCode.
          <br />
          - Presented IoT research paper at ICRAES-2K25, Bharati Vidyapeeth Pune.
          <br />
          - Active participation in National Science Day-2022.
          <br />
          - Copyright for IoT Solar Tracking project.
        </>
      ),
      spanTwo: true,
    },
  ];

  return (
    <motion.section
      id="about"
      ref={vantaRef}
      className="relative py-24 px-6 min-h-screen text-gray-900 dark:text-white overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      style={{ backgroundColor: "transparent" }}
    >
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <motion.h2
          className="text-5xl font-extrabold text-blue-500 drop-shadow-lg"
          initial={{ opacity: 0, y: 20, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.25em" }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          Hello! I am <span className="font-semibold">Mayur Vijay Patil</span>, a dedicated and passionate Full Stack Developer with a keen eye for detail and a love for crafting elegant, efficient solutions. My expertise lies in creating scalable and maintainable applications using the <span className="text-blue-400 font-semibold">MERN Stack, Java, and Spring Boot</span>. Beyond just code, I strive to build seamless user experiences, optimize backend performance, and solve complex problems with clarity and precision.
        </motion.p>

        <motion.p
          className="mt-6 max-w-3xl mx-auto text-md md:text-lg italic text-blue-300 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.9 }}
        >
          “Striving to turn innovative ideas into impactful digital realities, one line of code at a time.”
        </motion.p>

        <motion.p
          className="mt-6 max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.3 }}
        >
          I continuously seek to broaden my skills and stay ahead of industry trends by learning emerging technologies and best practices. I thrive in collaborative environments, working closely with teams to deliver robust and scalable software solutions that solve real-world problems.
        </motion.p>

        {/* Cards grid */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
          {cards.map(({ title, content, spanTwo }, i) => (
            <motion.div
              key={i}
              className={`p-8 bg-white/20 dark:bg-gray-800 rounded-xl shadow-lg backdrop-blur-md border border-blue-600 ${
                spanTwo ? "md:col-span-2" : ""
              }`}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.7 + i * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-blue-400 drop-shadow-md">{title}</h3>
              <p className="mt-3 text-gray-200 leading-relaxed tracking-wide text-lg">{content}</p>
            </motion.div>
          ))}
        </div>

        {/* Social icons */}
        <motion.div
          className="mt-16 flex justify-center gap-10 text-4xl text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 4.5 }}
        >
          <a
            href="https://www.linkedin.com/in/mayur-patil-033787250/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-400 hover:scale-110 transition-transform duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/mayurvij22"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400 hover:scale-110 transition-transform duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:mayurvij22@gmail.com"
            className="text-red-500 hover:text-red-400 hover:scale-110 transition-transform duration-300"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="tel:+919423405733"
            className="text-green-500 hover:text-green-400 hover:scale-110 transition-transform duration-300"
            aria-label="Phone"
          >
            <FaPhone />
          </a>
          <a
            href="https://leetcode.com/u/mayurvij22/"
            target="_blank"
            rel="noreferrer"
            className="text-yellow-400 hover:text-yellow-300 hover:scale-110 transition-transform duration-300"
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
