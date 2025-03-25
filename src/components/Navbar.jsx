import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md p-4 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="/#"
          className="text-2xl font-bold text-gray-800 dark:text-white"
          whileHover={{ scale: 1.05 }}
        >
          MayorZ
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300">
          {["home", "about", "projects", "contact"].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              className={`cursor-pointer hover:text-gray-500 dark:hover:text-gray-400 ${
                activeSection === item ? "text-blue-500 dark:text-blue-400" : ""
              }`}
            >
              <ScrollLink
                to={item}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onSetActive={() => setActiveSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </ScrollLink>
            </motion.li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <button
          className="hidden md:block p-2 rounded transition-all bg-gray-200 dark:bg-gray-800 relative w-12 h-6"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <motion.div
            className="w-5 h-5 bg-white dark:bg-black rounded-full absolute top-0.5 transition-all"
            animate={{ x: theme === "dark" ? 24 : 0 }}
          />
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.ul
          className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 p-4 shadow-md flex flex-col space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {["home", "about", "projects", "contact"].map((item, index) => (
            <li
              key={index}
              className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400 text-center"
            >
              <ScrollLink
                to={item}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onSetActive={() => setActiveSection(item)}
                onClick={() => setIsOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </ScrollLink>
            </li>
          ))}

          {/* Mobile Theme Toggle */}
          <button
            className="p-2 bg-gray-200 dark:bg-gray-800 rounded transition-all mx-auto"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
