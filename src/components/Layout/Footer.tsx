import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Demo", path: "/demo" },
    { name: "Technology", path: "/technology" },
    { name: "Impact", path: "/impact" },
    { name: "About", path: "/about" },
    { name: "Privacy", path: "/privacy" },
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link 
              to="/" 
              className="text-2xl font-heading font-bold text-primary hover:text-primary-dark transition-colors duration-200"
            >
              ReVoice
            </Link>
            <p className="mt-4 text-muted-foreground max-w-sm">
              Empowering communication through assistive speech technology. 
              Find your voice, express yourself, connect with others.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@revoice.dev"
                className="block text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                hello@revoice.dev
              </a>
              <p className="text-muted-foreground text-sm">
                For support, partnerships, and accessibility inquiries.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 ReVoice. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              <strong>Prototype only—non-medical device.</strong><br />
              MIT-style license. Not for clinical diagnosis or treatment.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;