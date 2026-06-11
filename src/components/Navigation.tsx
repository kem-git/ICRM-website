import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "/logo.png"; 

interface NavItem {
  path: string;
  label: string;
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  const navItems: NavItem[] = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/our-work", label: "Our Work" },
    { path: "/get-involved", label: "Get Involved" },
    { path: "/stories", label: "Stories" },
    { path: "/news", label: "News" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md transition-all duration-200">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo Brand Brandmark */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="ICRM Logo"
              className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col justify-center">
              <span className="text-base font-extrabold text-foreground tracking-tight leading-none mb-1">
                ICRM
              </span>
              <span className="text-[9px] font-bold tracking-wider text-muted-foreground uppercase leading-none">
                Gospel Through Therapy
              </span>
            </div>
          </Link>

          {/* Minimalist Desktop Links Menu */}
          <div className="hidden md:flex h-full items-center gap-1">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative flex h-full items-center px-4 text-sm font-medium transition-colors duration-200 hover:text-foreground ${
                    active ? "text-foreground font-semibold" : "text-muted-foreground"
                  }`}
                >
                  <span>{item.label}</span>
                  {active && (
                    <span className="absolute bottom-[-1px] left-4 right-4 h-[2px] bg-primary rounded-full animate-in fade-in zoom-in-95 duration-200" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Minimal Hamburger Trigger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden flex p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors focus:outline-none"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Modern Overlay Mobile Navigation Panel */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full min-h-[calc(100vh-4rem)] bg-background/95 backdrop-blur-lg border-b border-border md:hidden animate-in fade-in slide-in-from-top-4 duration-200 z-40">
          <div className="container mx-auto px-6 py-8 space-y-3 flex flex-col">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`w-full px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    active 
                      ? "bg-primary/5 text-primary font-semibold border-l-2 border-l-primary rounded-l-none" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;