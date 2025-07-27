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
      <div className="bg-gradient-to-br from-white via-gray-100 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-900 dark:text-white min-h-screen scroll-smooth selection:bg-blue-300 selection:text-black">
        <Navbar />
        <Analytics />

        {/* Home Section */}
        <section
          className="pt-24 pb-16 px-4 md:px-10 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
          id="home"
        >
          <div className="max-w-7xl mx-auto">
            <Home />
          </div>
        </section>

        {/* About Section */}
        <section
          className="py-24 px-4 md:px-10 bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 shadow-inner"
          id="about"
        >
          <div className="max-w-7xl mx-auto">
            <About />
          </div>
        </section>

        {/* Projects Section */}
        <section
          className="py-24 px-4 md:px-10 bg-gradient-to-tr from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700 border-t border-gray-300 dark:border-gray-700"
          id="projects"
        >
          <div className="max-w-7xl mx-auto">
            <Projects />
          </div>
        </section>

        {/* Achievements Section */}
        <section
          className="py-24 px-4 md:px-10 bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700"
          id="achievements"
        >
          <div className="max-w-7xl mx-auto">
            <Achievements />
          </div>
        </section>

        {/* Friend Gallery (Optional) */}
        {/* <section className="py-24 px-4 md:px-10 bg-gray-50 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700" id="gallery">
          <div className="max-w-7xl mx-auto">
            <FriendGallery />
          </div>
        </section> */}

        {/* Contact Section */}
        <section
          className="py-24 px-4 md:px-10 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-black border-t border-gray-300 dark:border-gray-700"
          id="contact"
        >
          <div className="max-w-7xl mx-auto">
            <Contact />
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
