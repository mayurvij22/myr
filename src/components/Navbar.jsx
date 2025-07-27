import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const navItems = ["home", "about", "projects", "contact"];

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
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
      className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm z-50 border-b border-gray-200 dark:border-gray-800"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      role="navigation"
      aria-label="Primary"
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <motion.a
          href="/#"
          className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight"
          whileHover={{ scale: 1.05, textShadow: "0px 0px 8px rgba(59,130,246,0.6)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          MayorZ
        </motion.a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 text-gray-800 dark:text-gray-300 font-medium tracking-wide">
          {navItems.map((item) => (
            <li key={item} className="relative group">
              <ScrollLink
                to={item}
                smooth
                duration={500}
                spy
                offset={-70}
                onSetActive={() => setActiveSection(item)}
                className={`cursor-pointer transition-all duration-300 ${
                  activeSection === item
                    ? "text-blue-600 dark:text-blue-400"
                    : "hover:text-blue-500 dark:hover:text-blue-300"
                }`}
                aria-current={activeSection === item ? "page" : undefined}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </ScrollLink>
              {activeSection === item && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded"
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-800 dark:text-gray-300 focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 absolute top-16 left-0 w-full z-40 py-6 px-4 flex flex-col space-y-4"
            role="menu"
          >
            {navItems.map((item) => (
              <li key={item} className="text-center">
                <ScrollLink
                  to={item}
                  smooth
                  duration={500}
                  spy
                  offset={-70}
                  onSetActive={() => setActiveSection(item)}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-semibold cursor-pointer transition-colors duration-300 ${
                    activeSection === item
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300"
                  }`}
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
