import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/our-work", label: "Our Work" },
    { path: "/get-involved", label: "Get Involved" },
    { path: "/stories", label: "Stories" },
    { path: "/news", label: "News" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-[var(--shadow-soft)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">ICRM</span>
              <span className="text-[10px] text-muted-foreground -mt-1">Gospel Through Therapy</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  size="sm"
                  className="[transition:var(--transition-smooth)]"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <Link to="/get-involved">
              <Button variant="secondary" size="sm" className="ml-4">
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted [transition:var(--transition-smooth)]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <Link to="/get-involved" onClick={() => setIsOpen(false)}>
              <Button variant="secondary" className="w-full">
                Donate Now
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
