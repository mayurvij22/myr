import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import About from "./components/About";
import FriendGallery from "./components/FriendGallery";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-gradient-to-br from-white via-gray-100 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen text-gray-900 dark:text-white scroll-smooth">
        <Navbar />
        <Analytics />

        {/* Home Section */}
        <section className="pt-20 pb-10 px-4 md:px-10" id="home">
          <Home />
        </section>

        {/* About Section */}
        <section className="py-20 px-4 md:px-10 border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900" id="about">
          <About />
        </section>

        {/* Projects Section */}
        <section className="py-20 px-4 md:px-10 border-t border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800" id="projects">
          <Projects />
        </section>

        {/* Achievements Section */}
        <section className="py-20 px-4 md:px-10 border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900" id="achievements">
          <Achievements />
        </section>

        {/* Optional: Friend Gallery */}
        {/* <section className="py-20 px-4 md:px-10 border-t border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800" id="gallery">
          <FriendGallery />
        </section> */}

        {/* Contact Section */}
        <section className="py-20 px-4 md:px-10 border-t border-gray-300 dark:border-gray-700 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900" id="contact">
          <Contact />
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
