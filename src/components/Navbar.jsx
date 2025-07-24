import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const navItems = ["home", "about", "projects", "contact"];

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home";

      navItems.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md z-50"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      role="navigation"
      aria-label="Primary navigation"
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <motion.a
          href="/#"
          className="text-2xl font-extrabold text-gray-900 dark:text-white select-none"
          whileHover={{ scale: 1.1, color: "#3b82f6" }}
          transition={{ type: "spring", stiffness: 300 }}
          aria-label="Homepage"
          tabIndex={0}
        >
          MayorZ
        </motion.a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 text-gray-700 dark:text-gray-300 font-semibold tracking-wide">
          {navItems.map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1, color: "#3b82f6" }}
              className={`cursor-pointer transition-colors duration-300 ${
                activeSection === item
                  ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-1"
                  : "hover:text-blue-500 dark:hover:text-blue-300"
              }`}
            >
              <ScrollLink
                to={item}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onSetActive={() => setActiveSection(item)}
                tabIndex={0}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </ScrollLink>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            key="mobile-menu"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg w-full absolute top-16 left-0 p-6 flex flex-col space-y-4 z-40 border-t border-gray-200 dark:border-gray-700"
          >
            {navItems.map((item) => (
              <li key={item} className="text-center">
                <ScrollLink
                  to={item}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  onSetActive={() => setActiveSection(item)}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-semibold cursor-pointer transition-colors duration-300 ${
                    activeSection === item
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300"
                  }`}
                  tabIndex={0}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </ScrollLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
