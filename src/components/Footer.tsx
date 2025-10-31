import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">ICRM</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Bringing healing and hope through therapy guided by faith. Serving communities worldwide with compassion and excellence.
            </p>
            <p className="text-xs text-muted-foreground italic">
              "Gospel Through Therapy"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary [transition:var(--transition-smooth)]">About Us</Link></li>
              <li><Link to="/our-work" className="text-muted-foreground hover:text-primary [transition:var(--transition-smooth)]">Our Work</Link></li>
              <li><Link to="/get-involved" className="text-muted-foreground hover:text-primary [transition:var(--transition-smooth)]">Get Involved</Link></li>
              <li><Link to="/stories" className="text-muted-foreground hover:text-primary [transition:var(--transition-smooth)]">Stories & Impact</Link></li>
              <li><Link to="/news" className="text-muted-foreground hover:text-primary [transition:var(--transition-smooth)]">News & Resources</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary [transition:var(--transition-smooth)]">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about#faith" className="text-muted-foreground hover:text-primary [transition:var(--transition-smooth)]">Statement of Faith</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary [transition:var(--transition-smooth)]">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary [transition:var(--transition-smooth)]">Terms & Conditions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary [transition:var(--transition-smooth)]">Annual Reports</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Stay Connected</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to receive mission updates and prayer requests.
            </p>
            <div className="flex gap-2 mb-4">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="text-sm"
              />
              <Button variant="default" size="sm">Subscribe</Button>
            </div>
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary [transition:var(--transition-smooth)]">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary [transition:var(--transition-smooth)]">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary [transition:var(--transition-smooth)]">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary [transition:var(--transition-smooth)]">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary [transition:var(--transition-smooth)]">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 International Christian Rehab Mission (ICRM). All rights reserved.</p>
          <p className="mt-2 italic text-xs">"He took up our infirmities and bore our diseases... and by his wounds we are healed." — Isaiah 53:4-5</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
