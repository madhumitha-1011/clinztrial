import { Building2, Users, Target, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Building2 className="w-4 h-4" />
              About ClinzTrial
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Pioneering Excellence in <span className="text-primary">Clinical R&D</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              ClinzTrial stands at the forefront of revolutionizing clinical study development, 
              study setup, study conduct, and study close-out, serving as a beacon of innovation 
              and excellence in the ever-evolving realm of clinical R&D.
            </p>
            
            <p className="text-muted-foreground">
              With a seasoned team boasting over 15 years of collective experience, we are not 
              just participants but trailblazers in the field, ensuring that each clinical study 
              we undertake is not only meticulously planned but also flawlessly executed.
            </p>

            <p className="text-muted-foreground">
              Expanding our expertise, ClinzTrial now integrates cutting-edge generative AI 
              consulting capabilities, leveraging advanced LLM models, prompt engineering techniques, 
              document and code generation, and intelligent agent development. Our team possesses 
              over 5 years of specialized experience in machine learning and AI consulting tailored 
              to the pharmaceutical industry.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild>
                <a href="#contact">
                  Get in Touch
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://www.linkedin.com/company/clinztrial/" target="_blank" rel="noopener noreferrer">
                  View LinkedIn
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Founded</h3>
              <p className="text-2xl font-serif font-bold text-primary">2021</p>
              <p className="text-sm text-muted-foreground mt-1">United States</p>
            </div>

            <div className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Founder</h3>
              <p className="text-lg font-semibold text-foreground">Bhavani Govindasamy</p>
              <p className="text-sm text-muted-foreground mt-1">Visionary Leader</p>
            </div>

            <div className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Experience</h3>
              <p className="text-2xl font-serif font-bold text-primary">15+ Years</p>
              <p className="text-sm text-muted-foreground mt-1">Clinical R&D Expertise</p>
            </div>

            <div className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">AI Expertise</h3>
              <p className="text-2xl font-serif font-bold text-primary">5+ Years</p>
              <p className="text-sm text-muted-foreground mt-1">ML & AI for Pharma</p>
            </div>
          </div>
        </div>

        {/* Industry & Specializations */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Expertise</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized in IT Services and Consulting for the pharmaceutical and clinical research industry
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Clinical Data Management",
              "Study Setup",
              "Generative AI",
              "LLM Models",
              "Prompt Engineering",
              "Medidata",
              "Veeva",
              "Rave",
              "Oracle",
              "eClinical",
              "Document Generation",
              "Pharma AI Solutions"
            ].map((tag) => (
              <span 
                key={tag}
                className="px-4 py-2 rounded-full bg-secondary text-foreground text-sm font-medium border border-border hover:border-primary/50 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
