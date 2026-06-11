import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          {/* Brand & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center md:text-left">
            <span className="font-bold text-foreground tracking-tight">ICRM</span>
            <span className="hidden sm:inline text-border">|</span>
            <p>© {currentYear} International Christian Rehab Mission. All rights reserved.</p>
          </div>

          {/* Minimal Meta Links */}
          <div className="flex items-center gap-6">
            <Link to="/about#faith" className="hover:text-primary transition-colors">
              Statement of Faith
            </Link>
            <Link to="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Optional Baseline Credit */}
        <div className="mt-4 pt-4 border-t border-border/40 text-center md:text-left flex flex-col sm:flex-row sm:justify-between gap-2 text-xs text-muted-foreground/60 italic">
          <p>"Gospel Through Therapy"</p>
          <p className="not-italic sm:text-right">Built by MEKDAK</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;