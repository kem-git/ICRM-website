import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageSquare, ShieldCheck } from "lucide-react";
import SEO from "@/components/seo/SEO";

const Contact = () => {
  const subject = encodeURIComponent("Inquiry from ICRM Website");
  const body = encodeURIComponent(
    "Hello ICRM Team,\n\nI would like to enquire about...\n\nKind regards,"
  );

  const mailtoLink = `mailto:admin@icrm.org.uk?subject=${subject}&body=${body}`;

  return (
    <div className="flex flex-col">
      <SEO
        title="Contact Us | ICRM — International Christian Rehab Mission"
        description="Get in touch with the ICRM team. Contact us about our mission, volunteer opportunities, or partnerships. Based in Pinner, Greater London."
        canonical="https://www.icrm.org.uk/contact"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ContactPage",
              "name": "Contact ICRM",
              "url": "https://www.icrm.org.uk/contact",
              "description": "Contact the ICRM team for enquiries about our mission, volunteering, or partnerships.",
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home",    "item": "https://www.icrm.org.uk" },
                  { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.icrm.org.uk/contact" }
                ]
              }
            },
            {
              "@type": "Organization",
              "name": "International Christian Rehab Mission",
              "url": "https://www.icrm.org.uk",
              "email": "admin@icrm.org.uk",
              "telephone": "+447587891086",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3 Wood Rise",
                "addressLocality": "Pinner",
                "addressRegion": "Greater London",
                "postalCode": "HA5 2JD",
                "addressCountry": "GB"
              }
            }
          ]
        }}
      />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-primary/5 to-background border-b border-border">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <MessageSquare className="w-4 h-4" />
            <span>Connect & Support Communications</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you—whether you have questions about our mission, volunteer opportunities, or partnerships.
          </p>
        </div>
      </section>

      {/* Main Action Channel Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-4 tracking-tight">Get in Touch</h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16 text-sm">
            Reach out directly to initiate dialogue regarding deployments, professional training modules, or administrative resources.
          </p>

          {/* Email Primary Card */}
          <Card className="shadow-none border-border bg-muted/20">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <div className="p-4 bg-primary/10 text-primary rounded-full w-fit mx-auto">
                <Mail className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight text-foreground">
                  Email Our Team
                </h3>
                <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                  Click below to contact us directly using your preferred email client application. A localized message template has been pre-formatted for your convenience.
                </p>
              </div>

              <div className="pt-2">
                <Button
                  asChild
                  className="font-semibold text-sm bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 shadow-sm transition-colors"
                >
                  <a href={mailtoLink}>
                    <Mail className="w-4 h-4 mr-2" />
                    Send an Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Informational Channels (Styled using the Left-Border Core Operational Blueprint) */}
      <section className="py-24 bg-muted/30 border-t border-b border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Phone Support Details */}
            <Card className="border-l-4 border-l-primary border-t-0 border-r-0 border-b-0 shadow-sm bg-background">
              <CardContent className="p-8 space-y-4">
                <div className="p-2.5 bg-primary/10 text-primary rounded-lg w-fit">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">Direct Operational Lines</h4>
                  <p className="text-xs text-muted-foreground mb-4">Feel free to dial our field leads for explicit team alignments.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-y-3 gap-x-4 border-t border-border/60 pt-4 text-sm">
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Punith</p>
                    <p className="font-semibold text-foreground tracking-tight">+44 7587 891086</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Mathew</p>
                    <p className="font-semibold text-foreground tracking-tight">+44 7704 717771</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Benny</p>
                    <p className="font-semibold text-foreground tracking-tight">+44 7405 093086</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Sam</p>
                    <p className="font-semibold text-foreground tracking-tight">+44 7730 873122</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Address Location Details */}
            <Card className="border-l-4 border-l-primary border-t-0 border-r-0 border-b-0 shadow-sm bg-background">
              <CardContent className="p-8 space-y-4">
                <div className="p-2.5 bg-primary/10 text-primary rounded-lg w-fit">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">Registered Headquarters</h4>
                  <p className="text-xs text-muted-foreground mb-4">Official governance and dispatch base within the United Kingdom.</p>
                </div>
                
                <div className="border-t border-border/60 pt-4 text-sm space-y-1">
                  <p className="font-bold text-primary text-xs tracking-wider uppercase">International Christian Rehab Mission (ICRM)</p>
                  <p className="text-muted-foreground leading-relaxed font-medium">
                    3 Wood Rise,<br />
                    Pinner, Greater London,<br />
                    HA5 2JD, United Kingdom
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Bottom Governance / Structural Statement */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Administrative Governance</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-0">
            ICRM handles all data and incoming communications in strict adherence with foundational legal standards. All clinical credentials and ministry reference packages will be requested through secure, encrypted data workflows following initial validation.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;