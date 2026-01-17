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


            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
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

          {/* Visual Cards */}
          <div className="relative lg:pl-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="grid gap-6">
              {/* Floating cards */}
              <div className="bg-card p-6 rounded-xl shadow-lg border border-border animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                    <Users className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-lg">Patient-First</div>
                    <div className="text-muted-foreground">Approach</div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-lg border border-border animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-lg">FDA Approved</div>
                    <div className="text-muted-foreground">Facility</div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-lg border border-border animate-fade-in" style={{ animationDelay: "0.8s" }}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-lg">Quality Assured</div>
                    <div className="text-muted-foreground">Standards</div>
                  </div>
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
