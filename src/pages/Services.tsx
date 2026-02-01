import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Database, FlaskConical, Brain, Cpu, FileText, Users, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Database,
    title: "Clinical Data Management",
    description: "Expert clinical data management using industry-leading platforms to ensure data integrity, quality, and regulatory compliance throughout your clinical trials.",
    features: [
      "Medidata Rave implementation and support",
      "Veeva Clinical platform expertise",
      "Oracle Clinical and InForm solutions",
      "eClinical platform integration",
      "Data validation and cleaning",
      "Real-time data monitoring and reporting"
    ],
    color: "primary"
  },
  {
    icon: FlaskConical,
    title: "Study Setup & Conduct",
    description: "Comprehensive clinical study development, setup, conduct, and close-out services with meticulous planning and flawless execution.",
    features: [
      "Protocol development and optimization",
      "Site selection and feasibility",
      "Study startup and activation",
      "Ongoing study conduct management",
      "Study close-out and archival",
      "Regulatory submission support"
    ],
    color: "accent"
  },
  {
    icon: Brain,
    title: "Generative AI Consulting",
    description: "Cutting-edge AI solutions leveraging advanced LLM models, prompt engineering, and intelligent agent development tailored for the pharmaceutical industry.",
    features: [
      "Large Language Model (LLM) implementation",
      "Custom prompt engineering",
      "Document and code generation",
      "Intelligent agent development",
      "AI workflow automation",
      "Natural language processing solutions"
    ],
    color: "primary"
  },
  {
    icon: Cpu,
    title: "Pharma AI Solutions",
    description: "Over 5 years of specialized machine learning and AI consulting experience specifically tailored for pharmaceutical and clinical R&D use cases.",
    features: [
      "Predictive analytics for clinical trials",
      "Patient recruitment optimization",
      "Adverse event detection",
      "Drug discovery support",
      "Clinical outcome prediction",
      "Regulatory intelligence automation"
    ],
    color: "accent"
  },
  {
    icon: FileText,
    title: "Document Generation",
    description: "AI-powered document generation and automation to streamline clinical trial documentation and regulatory submissions.",
    features: [
      "Automated protocol drafting",
      "Clinical study report generation",
      "Regulatory document preparation",
      "Template standardization",
      "Version control and tracking",
      "Multi-language support"
    ],
    color: "primary"
  },
  {
    icon: Users,
    title: "Consulting & Training",
    description: "Expert consulting services and comprehensive training programs to help your team leverage the latest in clinical R&D and AI technologies.",
    features: [
      "Technology assessment and roadmap",
      "Process optimization consulting",
      "Team training and upskilling",
      "Best practices implementation",
      "Change management support",
      "Ongoing advisory services"
    ],
    color: "accent"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-secondary via-background to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Brain className="w-4 h-4" />
                Clinical R&D & AI Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                ClinzTrial stands at the forefront of revolutionizing clinical study development, 
                setup, conduct, and close-out. With over 15 years of collective experience and 
                cutting-edge AI capabilities, we deliver exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/#contact">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://www.linkedin.com/company/clinztrial/" target="_blank" rel="noopener noreferrer">
                    View LinkedIn
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 rounded-xl bg-${service.color}/10 flex items-center justify-center mb-6 group-hover:bg-${service.color}/20 transition-colors`}>
                    <service.icon className={`w-8 h-8 text-${service.color}`} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Why Choose ClinzTrial?
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Our seasoned team combines deep clinical research expertise with cutting-edge AI capabilities 
                to deliver innovative solutions that transform how clinical trials are conducted.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 rounded-xl bg-background border border-border">
                  <div className="text-4xl font-serif font-bold text-primary mb-2">30+</div>
                  <div className="text-muted-foreground">Years Collective Experience</div>
                </div>
                <div className="p-6 rounded-xl bg-background border border-border">
                  <div className="text-4xl font-serif font-bold text-primary mb-2">5+</div>
                  <div className="text-muted-foreground">Years in AI/ML Consulting</div>
                </div>
                <div className="p-6 rounded-xl bg-background border border-border">
                  <div className="text-4xl font-serif font-bold text-primary mb-2">2021</div>
                  <div className="text-muted-foreground">Founded</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Platforms & Technologies
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                We have extensive experience with industry-leading clinical trial platforms and cutting-edge AI technologies.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                {["Medidata", "Veeva", "Rave", "Oracle", "eClinical", "LLM Models", "Prompt Engineering", "Generative AI"].map((platform) => (
                  <span 
                    key={platform}
                    className="px-6 py-3 rounded-full bg-secondary text-foreground font-medium border border-border hover:border-primary/50 transition-colors"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
                Ready to Transform Your Clinical Trials?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Contact us today to learn how ClinzTrial can help revolutionize your clinical R&D processes 
                with our expertise and AI-powered solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="/#contact">
                    Contact Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <a href="https://www.linkedin.com/company/clinztrial/" target="_blank" rel="noopener noreferrer">
                    Connect on LinkedIn
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
