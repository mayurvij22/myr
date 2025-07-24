import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "VoteSphere: Real-Time Polling Platform",
    link: "https://github.com/mayurvij22/ElectraVote-Next-Gen-Digital-Voting-Platform",
    github: "https://github.com/mayurvij22/ElectraVote-Next-Gen-Digital-Voting-Platform",
    tech: "React, Node.js, MongoDB, Socket.IO, JWT, REST API",
    description:
      "Real-time polling platform with live voting via Socket.IO and secure JWT-based auth.",
  },
  {
    title: "HealthNet - Hospital Administration System",
    link: "https://github.com/mayurvij22/HealthNet-Efficient-Hospital-Administration-Systems",
    github: "https://github.com/mayurvij22/HealthNet-Efficient-Hospital-Administration-Systems",
    tech: "React, Node.js, Express, MongoDB, JWT, Tailwind CSS",
    description:
      "Efficient patient record management with secure auth and dynamic admin dashboards.",
  },
  {
    title: "TaskMaster 360 - Task Workflow App",
    link: "https://github.com/mayurvij22/TaskMaster-360-Complete-Task-Workflow-Solution",
    github: "https://github.com/mayurvij22/TaskMaster-360-Complete-Task-Workflow-Solution",
    tech: "React, Node.js, MongoDB, Tailwind, JWT",
    description:
      "Feature-rich task manager with CRUD operations, auth, and productivity tools.",
  },
  {
    title: "Interactive Image Blurring with Streamlit",
    link: "https://github.com/mayurvij22/Interactive-Image-Smoothing-and-Blurring-with-Streamlit",
    github: "https://github.com/mayurvij22/Interactive-Image-Smoothing-and-Blurring-with-Streamlit",
    tech: "Python, Streamlit, OpenCV, NumPy",
    description:
      "Interactive app to apply and visualize image blur techniques in real-time.",
  },
  {
    title: "Ruchita AI Bot - Health Assistant",
    link: "https://ruchita-ai-bot.vercel.app/",
    github: "https://github.com/mayurvij22/Ruchita-Ai-Bot",
    tech: "React, Node.js, OpenAI, Hugging Face, MongoDB",
    description:
      "AI health chatbot using GPT & NLP for personalized tips and symptom checks.",
  },
  {
    title: "Anvika AI Bot - Personalized Assistant",
    link: "https://anvika-ai-bot.vercel.app/",
    github: "https://github.com/mayurvij22/Anvika-AI-BOT",
    tech: "React, Node.js, OpenAI GPT, MongoDB",
    description:
      "Conversational AI chatbot with secure login and smart chat experience.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative z-10 py-16 px-6 md:px-20 bg-gradient-to-b from-[#0f2027] via-[#203a43] to-[#2c5364] dark:from-black dark:via-[#1a1a1a] dark:to-gray-900 text-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold tracking-tight">✨ Projects</h2>
        <p className="mt-2 text-lg text-gray-300">
          A curated collection of apps, platforms, and AI projects.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
            <p className="text-sm text-blue-300 font-medium mb-2">{project.tech}</p>
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
            <div className="flex justify-between items-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
