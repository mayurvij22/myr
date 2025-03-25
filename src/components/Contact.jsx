import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="flex flex-col items-center justify-center py-20 px-6 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Get in Touch
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl">
        Let's connect! Feel free to reach out for collaborations, projects, or
        just to say hello.
      </p>

      {/* Contact Card */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 mt-8 w-full max-w-lg text-center border border-gray-200 dark:border-gray-700">
        {/* Email */}
        <div className="flex items-center justify-start space-x-4 mb-5">
          <Mail size={24} className="text-blue-500" />
          <a
            href="mailto:mayurvij22@gmail.com"
            className="text-lg text-gray-800 dark:text-gray-300 hover:text-blue-600 transition"
          >
            mayurvij22@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center justify-start space-x-4 mb-5">
          <Phone size={24} className="text-green-500" />
          <span className="text-lg text-gray-800 dark:text-gray-300">
            +91 9423405733
          </span>
        </div>

        {/* GitHub */}
        <div className="flex items-center justify-start space-x-4 mb-5">
          <Github size={24} className="text-gray-700 dark:text-gray-300" />
          <a
            href="https://github.com/mayurvij22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-gray-800 dark:text-gray-300 hover:text-blue-600 transition"
          >
            github.com/mayur
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center justify-start space-x-4">
          <Linkedin size={24} className="text-blue-700" />
          <a
            href="https://www.linkedin.com/in/mayur-patil-033787250/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-gray-800 dark:text-gray-300 hover:text-blue-600 transition"
          >
            linkedin.com/in/mayur
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
