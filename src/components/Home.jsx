import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

const Home = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    let effect;

    if (typeof window !== "undefined") {
      // ✅ Required: Make THREE available globally for Vanta.js
      window.THREE = THREE;

      import("vanta/dist/vanta.net.min").then((VANTA) => {
        if (!vantaEffect && vantaRef.current) {
          effect = VANTA.default({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x00ffff,
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

  return (
    <section
      ref={vantaRef}
      id="home"
      className="relative flex flex-col items-center justify-center text-center py-36 px-8 min-h-screen text-white overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* Overlay content */}
      <div className="relative z-10 max-w-5xl w-full px-4 sm:px-0">
        {/* Profile Image */}
        <motion.img
          src="https://media.licdn.com/dms/image/v2/D4D03AQHPy-ulakebdQ/profile-displayphoto-scale_400_400/B4DZgn0ZoVGgAg-/0/1753014706992?e=1756339200&v=beta&t=iig7L6KGMEBDa3AwkapWl9u7gQTSJ-O0mcEmLM3WiqU"
          alt="Mayur"
          className="w-56 h-56 md:w-72 md:h-72 rounded-full border-8 border-blue-500 shadow-[0_0_25px_5px_rgba(59,130,246,0.6)] mb-8 cursor-pointer hover:shadow-[0_0_40px_10px_rgba(59,130,246,0.8)] transition-shadow duration-700 ease-in-out"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        />

        {/* Headline */}
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg tracking-wide"
          initial={{ opacity: 0, y: 20, letterSpacing: "0.05em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.15em" }}
          transition={{ duration: 1, delay: 1 }}
        >
          Hi, I'm{" "}
          <span className="text-blue-500 drop-shadow-md">
            Mayur Vijay Patil
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-3xl text-gray-300 mt-5 font-semibold tracking-wide leading-relaxed max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          Full Stack Developer | MERN | Java | Spring Boot | Problem Solver
        </motion.p>

        {/* Description */}
        <motion.p
          className="mt-8 text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2.2 }}
          style={{ letterSpacing: "0.02em", lineHeight: "1.65" }}
        >
          Passionate about building scalable and efficient web applications.
          Experienced in Java, Spring Boot, React, Node.js, MongoDB, and REST APIs.
          I love solving complex problems, optimizing performance, and continuously
          learning new technologies. Enthusiastic about collaborating with teams
          to create impactful digital experiences.
        </motion.p>

        {/* Internship card */}
        <motion.div
          className="mt-12 p-8 bg-white/15 backdrop-blur-lg rounded-3xl shadow-xl max-w-xl flex flex-col items-center text-center border border-blue-600"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 2.8 }}
        >
          <div className="text-5xl mb-3">🏢</div>
          <h3 className="text-3xl font-bold text-blue-400 drop-shadow-md">
            Internship at Altimetrik India
          </h3>
          <p className="mt-3 text-gray-200 leading-relaxed tracking-wide text-lg max-w-md">
            Completed a hands-on internship where I worked on modern web
            technologies, contributed to enterprise-grade solutions, and
            collaborated with cross-functional agile teams. This experience
            strengthened my practical skills in building scalable applications.
          </p>
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          className="mt-14 flex flex-col sm:flex-row justify-center gap-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.5 }}
        >
          <a
            href="https://drive.google.com/file/d/1daXgtNRyCn7kzPzwUejSMeXXwK_88kOO/view?usp=sharing"
            className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-3xl shadow-lg transform hover:scale-110 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
