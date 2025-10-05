import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Portfolio from "@/components/Portfolio";
import Feedback from "@/components/Feedback";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300">
      <Navigation />
      <main>
        <Hero />
        <Packages />
        <Portfolio />
        <Feedback />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
