import { Stethoscope, FlaskConical, HeartPulse, ShieldCheck, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Stethoscope,
    title: "Expert Medical Team",
    description: "Our board-certified physicians and research professionals provide the highest standard of care throughout your participation.",
  },
  {
    icon: FlaskConical,
    title: "Innovative Treatments",
    description: "Access cutting-edge therapies and medications before they become widely available to the public.",
  },
  {
    icon: HeartPulse,
    title: "Comprehensive Monitoring",
    description: "Regular health assessments and monitoring ensure your safety and well-being during the trial.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical Standards",
    description: "All trials adhere to strict FDA guidelines and IRB-approved protocols to protect participant rights.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "We work around your schedule with convenient appointment times and virtual check-in options.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "A personal coordinator guides you through every step, answering questions and addressing concerns.",
  },
];

const Features = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Why Choose Our Clinical Research Center?
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine world-class medical expertise with compassionate care to deliver 
            exceptional clinical trial experiences for our participants.
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
