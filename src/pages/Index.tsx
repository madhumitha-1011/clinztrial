import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import ClinicalTrials from "@/components/ClinicalTrials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <ClinicalTrials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
