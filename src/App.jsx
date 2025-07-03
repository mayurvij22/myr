import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import About from "./components/About";
import FriendGallery from "./components/FriendGallery"
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <Navbar />
        <Analytics />
        <Home />
        <About></About>
        <Projects />
        <Achievements></Achievements>
        <Contact />
      
      </div>
    </ThemeProvider>
  );
}

export default App;
