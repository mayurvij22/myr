import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="flex flex-col items-center justify-center py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2
        className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        Get in Touch
      </motion.h2>

      <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mb-8">
        Let's collaborate! I'm open to freelance work, full-time roles, or tech chats.
      </p>

      {/* 3D Tilt Card */}
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={1000}
        scale={1.05}
        transitionSpeed={1000}
        className="w-full max-w-lg"
      >
        <motion.div
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-2xl rounded-3xl p-10 backdrop-blur-lg"
          whileHover={{ rotate: [0, 1, -1, 0], transition: { duration: 1 } }}
        >
          {/* Email */}
          <ContactItem icon={<Mail size={24} className="text-blue-500" />} text="mayurvij22@gmail.com" href="mailto:mayurvij22@gmail.com" />
          {/* Phone */}
          <ContactItem icon={<Phone size={24} className="text-green-500" />} text="+91 9423405733" />
          {/* GitHub */}
          <ContactItem icon={<Github size={24} className="text-black dark:text-gray-300" />} text="github.com/mayurvij22" href="https://github.com/mayurvij22" />
          {/* LinkedIn */}
          <ContactItem icon={<Linkedin size={24} className="text-blue-700" />} text="linkedin.com/in/mayur" href="https://www.linkedin.com/in/mayur-patil-033787250/" />
        </motion.div>
      </Tilt>
    </motion.section>
  );
};

const ContactItem = ({ icon, text, href }) => {
  return (
    <div className="flex items-center space-x-4 mb-6">
      {icon}
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-medium text-gray-800 dark:text-gray-300 hover:text-blue-600 transition"
        >
          {text}
        </a>
      ) : (
        <span className="text-lg font-medium text-gray-800 dark:text-gray-300">
          {text}
        </span>
      )}
    </div>
  );
};

export default Contact;
