import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const trials = [
  {
    id: 1,
    title: "Type 2 Diabetes Management Study",
    category: "Endocrinology",
    status: "Enrolling",
    description: "Evaluating a new oral medication for improved blood sugar control in adults with Type 2 diabetes.",
    location: "Multiple Locations",
    duration: "12 months",
    participants: "500 needed",
  },
  {
    id: 2,
    title: "Chronic Pain Relief Trial",
    category: "Neurology",
    status: "Enrolling",
    description: "Testing a novel non-opioid treatment approach for chronic lower back pain management.",
    location: "Boston, MA",
    duration: "6 months",
    participants: "200 needed",
  },
  {
    id: 3,
    title: "Alzheimer's Disease Prevention",
    category: "Neurology",
    status: "Enrolling",
    description: "Investigating early intervention strategies for individuals at risk of developing Alzheimer's.",
    location: "San Diego, CA",
    duration: "24 months",
    participants: "350 needed",
  },
  {
    id: 4,
    title: "Cardiovascular Health Study",
    category: "Cardiology",
    status: "Coming Soon",
    description: "Assessing a new treatment for reducing cardiovascular risk in high-risk patients.",
    location: "Chicago, IL",
    duration: "18 months",
    participants: "400 needed",
  },
];

const ClinicalTrials = () => {
  return (
    <section id="trials" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Current Clinical Trials
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our active studies and find opportunities to contribute to 
            medical breakthroughs while receiving specialized care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {trials.map((trial, index) => (
            <div
              key={trial.id}
              className="group bg-card rounded-xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <Badge variant="secondary" className="text-xs">
                  {trial.category}
                </Badge>
                <Badge
                  variant={trial.status === "Enrolling" ? "default" : "outline"}
                  className={trial.status === "Enrolling" ? "bg-accent text-accent-foreground" : ""}
                >
                  {trial.status}
                </Badge>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {trial.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">{trial.description}</p>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {trial.location}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {trial.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {trial.participants}
                </div>
              </div>

              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Trials
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClinicalTrials;
