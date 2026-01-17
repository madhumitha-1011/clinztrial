import { ArrowRight, Shield, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Shield className="w-4 h-4" />
              Clinical R&D & AI Solutions
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              Revolutionizing{" "}
              <span className="text-primary">Clinical Research</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              ClinzTrial stands at the forefront of clinical study development, setup, conduct, and close-out. With 2 decades of collective experience and cutting-edge AI solutions, we ensure each clinical study is meticulously planned and flawlessly executed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="#trials">
                  View Current Trials
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary">2</div>
                <div className="text-sm text-muted-foreground mt-1">Decades Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground mt-1">Years in AI/ML</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary">2021</div>
                <div className="text-sm text-muted-foreground mt-1">Founded</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative lg:pl-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                alt="Medical research laboratory"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating cards */}
            <div className="absolute -left-4 top-1/4 bg-card p-4 rounded-xl shadow-lg border border-border animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Patient-First</div>
                  <div className="text-sm text-muted-foreground">Approach</div>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 bottom-1/4 bg-card p-4 rounded-xl shadow-lg border border-border animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">FDA Approved</div>
                  <div className="text-sm text-muted-foreground">Facility</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
