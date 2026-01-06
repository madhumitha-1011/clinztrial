import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ClinicalTrials from "@/components/ClinicalTrials";
import Participants from "@/components/Participants";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <ClinicalTrials />
        <Participants />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
