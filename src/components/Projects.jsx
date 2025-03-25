import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "VoteSphere: Real-Time Polling Platform",
    link: "https://github.com/mayurvij22/ElectraVote-Next-Gen-Digital-Voting-Platform",
    github:
      "https://github.com/mayurvij22/ElectraVote-Next-Gen-Digital-Voting-Platform",
    tech: "React, Node.js, MongoDB, Socket.IO, JWT, REST API",
    description:
      "Developed a real-time polling platform enabling live voting updates using Socket.IO. Implemented JWT-based authentication and RESTful APIs for secure and seamless user interactions.",
  },
  {
    title: "HealthNet - Hospital Administration System",
    link: "https://github.com/mayurvij22/HealthNet-Efficient-Hospital-Administration-Systems",
    github:
      "https://github.com/mayurvij22/HealthNet-Efficient-Hospital-Administration-Systems",
    tech: "React, Node.js, Express, MongoDB, JWT, Tailwind CSS, Axios",
    description:
      "Designed a hospital management system for patient records and healthcare efficiency. Integrated secure authentication, responsive UI, and an optimized backend with Express and MongoDB.",
  },
  {
    title: "TaskMaster 360 - Complete Task Workflow Solution",
    link: "https://github.com/mayurvij22/TaskMaster-360-Complete-Task-Workflow-Solution",
    github:
      "https://github.com/mayurvij22/TaskMaster-360-Complete-Task-Workflow-Solution",
    tech: "React, Node.js, Express, MongoDB, Mongoose, Tailwind CSS, Axios",
    description:
      "Built a task management application with CRUD functionality. Features include adding, editing, marking as complete, and deleting tasks. Optional authentication using JWT and bcrypt for secure user sessions.",
  },
  {
    title: "Interactive Image Smoothing and Blurring with Streamlit",
    link: "https://github.com/mayurvij22/Interactive-Image-Smoothing-and-Blurring-with-Streamlit",
    github:
      "https://github.com/mayurvij22/Interactive-Image-Smoothing-and-Blurring-with-Streamlit",
    tech: "Python, Streamlit, OpenCV, NumPy, Pillow",
    description:
      "Developed a web-based image processing tool allowing users to upload and apply various image smoothing techniques interactively. Implemented Gaussian Blur, Median Blur, and Bilateral Filtering with adjustable parameters for real-time processing.",
  },
];

const Projects = () => {
  return (
    <section className="p-10" id="projects">
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center">
        Projects
      </h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 border rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md hover:shadow-lg transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              {project.tech}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {project.description}
            </p>
            <div className="mt-4 flex items-center gap-4">
              <a
                href={project.link}
                className="text-blue-500 hover:underline font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
              <a
                href={project.github}
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
