import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Mail, Github, Linkedin, Phone, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="flex flex-col items-center justify-center py-20 px-4 sm:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Title */}
      <motion.h2
        className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight text-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        Get in Touch
      </motion.h2>

      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 text-center max-w-xl mb-10 px-2">
        Let's collaborate! I'm open to freelance work, full-time roles, or tech chats.
      </p>

      {/* Tilt Card */}
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={1000}
        scale={1.05}
        transitionSpeed={1000}
        className="w-full max-w-md sm:max-w-lg"
      >
        <motion.div
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-2xl rounded-3xl p-6 sm:p-10 backdrop-blur-lg"
          whileHover={{ rotate: [0, 1, -1, 0], transition: { duration: 1 } }}
        >
          <div className="flex flex-col space-y-6 sm:space-y-8">
            <ContactItem
              icon={<Mail size={22} className="text-blue-500" />}
              text="mayurvij22@gmail.com"
              href="mailto:mayurvij22@gmail.com"
            />
            <ContactItem
              icon={<Phone size={22} className="text-green-500" />}
              text="+91 9423405733"
            />
            <ContactItem
              icon={<Github size={22} className="text-black dark:text-gray-300" />}
              text="github.com/mayurvij22"
              href="https://github.com/mayurvij22"
            />
            <ContactItem
              icon={<Linkedin size={22} className="text-blue-700" />}
              text="linkedin.com/in/mayur"
              href="https://www.linkedin.com/in/mayur-patil-033787250/"
            />
            <ContactItem
              icon={<Instagram size={22} className="text-pink-500" />}
              text="instagram.com/mayur_.p07"
              href="https://www.instagram.com/mayur_.p07/"
            />
          </div>
        </motion.div>
      </Tilt>
    </motion.section>
  );
};

const ContactItem = ({ icon, text, href }) => {
  return (
    <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
      <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 shadow-inner">
        {icon}
      </div>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base sm:text-lg font-medium text-gray-800 dark:text-gray-300 hover:text-blue-600 transition break-words"
        >
          {text}
        </a>
      ) : (
        <span className="text-base sm:text-lg font-medium text-gray-800 dark:text-gray-300 break-words">
          {text}
        </span>
      )}
    </div>
  );
};

export default Contact;
