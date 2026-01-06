import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Access to cutting-edge treatments before public availability",
  "Comprehensive medical care from expert physicians",
  "Regular health monitoring and assessments",
  "Compensation for time and travel expenses",
  "Contribute to medical breakthroughs that help others",
  "Dedicated coordinator for personalized support",
];

const steps = [
  {
    step: "01",
    title: "Pre-Screening",
    description: "Complete a brief questionnaire to determine initial eligibility for our trials.",
  },
  {
    step: "02",
    title: "Consultation",
    description: "Meet with our medical team to discuss the trial, risks, and benefits in detail.",
  },
  {
    step: "03",
    title: "Enrollment",
    description: "Complete informed consent and baseline assessments to begin participation.",
  },
  {
    step: "04",
    title: "Participation",
    description: "Attend scheduled visits and follow the study protocol with ongoing support.",
  },
];

const Participants = () => {
  return (
    <section id="participants" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Why Become a Clinical Trial Participant?
            </h2>
            <p className="text-lg text-muted-foreground">
              As a participant, you play a vital role in advancing medical science. 
              Your contribution helps develop new treatments that can improve 
              countless lives while receiving specialized care.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" asChild className="mt-4">
              <a href="#contact">
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=800&q=80"
              alt="Doctor consulting with patient"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Process Steps */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground text-center mb-12">
            The Participation Process
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className="relative bg-card rounded-xl p-6 border border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl font-serif font-bold text-primary/20 mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Participants;
