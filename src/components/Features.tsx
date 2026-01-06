import { Stethoscope, FlaskConical, HeartPulse, ShieldCheck, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Stethoscope,
    title: "Clinical Data Management",
    description: "Expert clinical data management using industry-leading platforms like Medidata, Veeva, Rave, Oracle, and eClinical.",
  },
  {
    icon: FlaskConical,
    title: "Study Setup & Conduct",
    description: "Comprehensive study development, setup, conduct, and close-out with meticulous planning and flawless execution.",
  },
  {
    icon: HeartPulse,
    title: "Generative AI Solutions",
    description: "Cutting-edge LLM models, prompt engineering, document and code generation, and intelligent agent development.",
  },
  {
    icon: ShieldCheck,
    title: "Pharma AI Consulting",
    description: "Over 5 years of specialized ML and AI consulting experience tailored specifically for the pharmaceutical industry.",
  },
  {
    icon: Clock,
    title: "Efficiency & Accuracy",
    description: "AI-driven solutions that enable efficiency, accuracy, and scalability across all clinical R&D processes.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "A seasoned team boasting over 15 years of collective experience as trailblazers in clinical research.",
  },
];

const Features = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Why Choose ClinzTrial?
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine world-class clinical R&D expertise with cutting-edge AI capabilities to deliver exceptional results for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl bg-background border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
