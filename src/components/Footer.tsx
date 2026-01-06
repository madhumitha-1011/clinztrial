import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail } from "lucide-react";
import clinztrialLogo from "@/assets/clinztrial-logo.jpeg";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Clinical Trials", href: "#trials" },
    { name: "For Participants", href: "#participants" },
    { name: "Contact Us", href: "#contact" },
  ];

  const resourceLinks = [
    { name: "FAQ", href: "#" },
    { name: "Patient Resources", href: "#" },
    { name: "Research Partners", href: "#" },
    { name: "Careers", href: "#" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "HIPAA Compliance", href: "#" },
    { name: "Accessibility", href: "#" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/clinztrial/", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-2">
              <img 
                src={clinztrialLogo} 
                alt="ClinzTrial Logo" 
                className="h-10 w-auto bg-white rounded p-1"
              />
            </a>
            <p className="text-background/70 text-sm">
              Revolutionizing clinical study development, setup, conduct, and close-out with 15+ years of experience and cutting-edge AI solutions.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:+18055593589" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +1 (805) 559-3589
              </a>
              <a href="mailto:bzg@clinztrial.com" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                bzg@clinztrial.com
              </a>
              <a href="mailto:support@clinztrial.com" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                support@clinztrial.com
              </a>
            </div>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} ClinzTrial. All rights reserved.
          </p>
          <p className="text-background/60 text-sm">
            FDA Registered | IRB Approved | HIPAA Compliant
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
