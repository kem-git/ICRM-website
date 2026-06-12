import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import GetInvolved from "./pages/GetInvolved";
import Stories from "./pages/Stories";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import PortalHome from "./pages/portal/PortalHome";
import TherapistHome from "./pages/portal/TherapistHome"; 

const queryClient = new QueryClient();

const App = () => {
  const hostname = window.location.hostname;

  // Domain matching for app.icrm.org.uk or local coding setup
  if (hostname === "app.icrm.org.uk" || hostname === "localhost") {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Login Gateway page */}
              <Route path="/" element={<PortalHome />} />
              
              {/* Authenticated Workspace dashboard page */}
              <Route path="/dashboard" element={<TherapistHome />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  // Fallback default routing layout configuration (Main website pages)
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/our-work" element={<OurWork />} />
                <Route path="/get-involved" element={<GetInvolved />} />
                <Route path="/stories" element={<Stories />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;