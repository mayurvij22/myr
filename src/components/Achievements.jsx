import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Achievements = () => {
  const achievements = [
    {
      title: "Earned the '100 Days of Code' badge",
      description: "Solved 100+ problems on LeetCode.",
      link: "https://leetcode.com/mayurvij22",
    },
    {
      title: "Participated in EY Techathon 5.0",
      description: "Contributed innovative solutions to real-world challenges.",
    },
    {
      title: "Certificate of Recognition",
      description: "For active participation in National Science Day 2022.",
    },
    {
      title: "Cyber Security - Poster Presentation",
      description: "Awarded Certificate of Participation.",
    },
  ];

  const certifications = [
    {
      title: "Java with DSA and System Design",
      issuer: "PhysicsWallah (PW)",
    },
    {
      title: "Java for Beginners",
      issuer: "Udemy",
      date: "August 2024",
    },
    {
      title: "TCS iON NQT - IT Certification",
      issuer: "TCS iON",
      date: "September 2024",
      details: "Score: 2127.18/3000 (71%) | Hands-On: Java",
    },
    {
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      date: "October 2023",
    },
  ];

  return (
    <section className="p-10 bg-gray-50 dark:bg-gray-900">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        🏆 Achievements
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {achievements.map((achieve, index) => (
          <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {achieve.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                {achieve.description}
              </p>
              {achieve.link && (
                <a
                  href={achieve.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-2 inline-block"
                >
                  View Profile
                </a>
              )}
            </motion.div>
          </Tilt>
        ))}
      </div>

      <motion.h2
        className="text-4xl font-bold text-center text-gray-900 dark:text-white mt-20 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        📜 Certifications
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {certifications.map((cert, index) => (
          <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {cert.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Issuer: {cert.issuer}
              </p>
              {cert.date && (
                <p className="text-gray-500 text-sm">Issued: {cert.date}</p>
              )}
              {cert.details && (
                <p className="text-gray-500 text-sm">{cert.details}</p>
              )}
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
