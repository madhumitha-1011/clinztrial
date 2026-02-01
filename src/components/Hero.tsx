import clinztrialLogo from "@/assets/clinztrial-logo-new.jpeg";

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 md:pt-24 overflow-hidden">
      {/* Network Pattern Banner */}
      <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-400" />
        
        {/* Network Pattern SVG */}
        <svg
          className="absolute inset-0 w-full h-full opacity-40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="network-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network-pattern)" />
          
          {/* Connecting Lines */}
          <g stroke="white" strokeWidth="0.5" opacity="0.6">
            <line x1="5%" y1="20%" x2="15%" y2="35%" />
            <line x1="15%" y1="35%" x2="25%" y2="25%" />
            <line x1="25%" y1="25%" x2="35%" y2="40%" />
            <line x1="35%" y1="40%" x2="45%" y2="30%" />
            <line x1="45%" y1="30%" x2="55%" y2="45%" />
            <line x1="55%" y1="45%" x2="65%" y2="35%" />
            <line x1="65%" y1="35%" x2="75%" y2="50%" />
            <line x1="75%" y1="50%" x2="85%" y2="40%" />
            <line x1="85%" y1="40%" x2="95%" y2="55%" />
            <line x1="10%" y1="60%" x2="20%" y2="75%" />
            <line x1="20%" y1="75%" x2="30%" y2="65%" />
            <line x1="30%" y1="65%" x2="40%" y2="80%" />
            <line x1="40%" y1="80%" x2="50%" y2="70%" />
            <line x1="50%" y1="70%" x2="60%" y2="85%" />
            <line x1="60%" y1="85%" x2="70%" y2="75%" />
            <line x1="70%" y1="75%" x2="80%" y2="90%" />
            <line x1="80%" y1="90%" x2="90%" y2="80%" />
            <line x1="15%" y1="35%" x2="20%" y2="75%" />
            <line x1="35%" y1="40%" x2="40%" y2="80%" />
            <line x1="55%" y1="45%" x2="60%" y2="85%" />
            <line x1="75%" y1="50%" x2="80%" y2="90%" />
            <line x1="25%" y1="25%" x2="30%" y2="65%" />
            <line x1="45%" y1="30%" x2="50%" y2="70%" />
            <line x1="65%" y1="35%" x2="70%" y2="75%" />
          </g>
          
          {/* Larger Nodes */}
          <g fill="white">
            <circle cx="5%" cy="20%" r="3" />
            <circle cx="15%" cy="35%" r="4" />
            <circle cx="25%" cy="25%" r="3" />
            <circle cx="35%" cy="40%" r="5" />
            <circle cx="45%" cy="30%" r="3" />
            <circle cx="55%" cy="45%" r="4" />
            <circle cx="65%" cy="35%" r="3" />
            <circle cx="75%" cy="50%" r="5" />
            <circle cx="85%" cy="40%" r="3" />
            <circle cx="95%" cy="55%" r="4" />
            <circle cx="10%" cy="60%" r="3" />
            <circle cx="20%" cy="75%" r="4" />
            <circle cx="30%" cy="65%" r="3" />
            <circle cx="40%" cy="80%" r="5" />
            <circle cx="50%" cy="70%" r="3" />
            <circle cx="60%" cy="85%" r="4" />
            <circle cx="70%" cy="75%" r="3" />
            <circle cx="80%" cy="90%" r="5" />
            <circle cx="90%" cy="80%" r="3" />
          </g>
        </svg>

        {/* Logo Card */}
        <div className="absolute bottom-0 left-4 md:left-12 translate-y-1/2 bg-white p-3 md:p-4 shadow-xl rounded-lg">
          <img 
            src={clinztrialLogo} 
            alt="ClinzTrial Logo" 
            className="h-16 md:h-20 w-auto object-contain"
          />
        </div>
      </div>

      {/* Content Below Banner */}
      <div className="container mx-auto px-4 pt-20 md:pt-24 pb-12 md:pb-16">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            ClinzTrial
          </h1>
          <p className="text-lg text-muted-foreground">
            IT Services and IT Consulting
          </p>
          <p className="text-xl md:text-2xl font-medium text-primary italic">
            Where Expertise Meets Excellence in Clinical Development
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 pt-12 mt-8 border-t border-border max-w-2xl">
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
    </section>
  );
};

export default Hero;
