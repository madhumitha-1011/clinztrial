import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Mail className="w-4 h-4" />
            Get in Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your clinical research with our expertise? Reach out to discuss how we can help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Email */}
          <div className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
            <a 
              href="mailto:bzg@clinztrial.com" 
              className="text-primary hover:underline block"
            >
              bzg@clinztrial.com
            </a>
            <a 
              href="mailto:support@clinztrial.com" 
              className="text-muted-foreground hover:text-primary text-sm mt-1 block"
            >
              support@clinztrial.com
            </a>
          </div>

          {/* Phone */}
          <div className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
            <a 
              href="tel:+18055593589" 
              className="text-primary hover:underline"
            >
              +1 (805) 559-3589
            </a>
            <p className="text-sm text-muted-foreground mt-1">Mon - Fri, 9am - 6pm EST</p>
          </div>

          {/* LinkedIn */}
          <div className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Linkedin className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Connect</h3>
            <a 
              href="https://www.linkedin.com/company/clinztrial/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              LinkedIn Profile
            </a>
            <p className="text-sm text-muted-foreground mt-1">Follow for updates</p>
          </div>
        </div>

        {/* Location */}
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5" />
            <span>United States</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
