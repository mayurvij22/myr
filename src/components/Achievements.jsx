import { motion } from "framer-motion";

const Achievements = () => {
  const achievements = [
    {
      title: "Earned the '100 Days of Code' badge",
      description: "Solved 100+ problems on LeetCode.",
      link: "https://leetcode.com/mayurvij22", // Replace with your actual profile link
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
    <section className="p-10">
      <motion.h2
        className="text-3xl font-semibold text-gray-900 dark:text-white mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        🏆 Achievements
      </motion.h2>

      <ul className="space-y-4">
        {achievements.map((achieve, index) => (
          <motion.li
            key={index}
            className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              {achieve.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {achieve.description}
            </p>
            {achieve.link && (
              <a
                href={achieve.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Profile
              </a>
            )}
          </motion.li>
        ))}
      </ul>

      <motion.h2
        className="text-3xl font-semibold text-gray-900 dark:text-white mt-10 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        📜 Certifications
      </motion.h2>

      <ul className="space-y-4">
        {certifications.map((cert, index) => (
          <motion.li
            key={index}
            className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              {cert.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
            {cert.date && <p className="text-gray-500">Issued: {cert.date}</p>}
            {cert.details && <p className="text-gray-500">{cert.details}</p>}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Achievements;
