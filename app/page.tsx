import { Metadata } from "next";
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "James - Software Engineer",
  description: "Portfolio of James, a self-taught software engineer",
};

export default function Home() {
  return (
    <div className="bg-dark-bg min-h-screen text-white font-sans">
      <Navbar />

      <main className="container mx-auto px-4 pt-20">
        <h1 className="text-neon-green text-6xl font-bold mt-20 mb-4 animate-glow">
          James
        </h1>
        <h2 className="text-4xl mb-8">SOFTWARE ENGINEER</h2>
        <p className="text-lg mb-8">
          Self-taught programmer motivated by passion and personal projects.
          Expert of searching bugs on Google and quickly scanning the best
          StackOverflow answers.
        </p>
        <div className="space-x-4">
          <button className="bg-neon-green text-dark-bg px-6 py-2 rounded hover:bg-white transition-colors duration-300 ease-in-out">
            Contact Me
          </button>
          <button className="border border-neon-green text-neon-green px-6 py-2 rounded hover:bg-neon-green hover:text-dark-bg transition-colors duration-300 ease-in-out">
            Learn More →
          </button>
        </div>

        <AboutMe />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
