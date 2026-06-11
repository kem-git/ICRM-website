import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Handshake, Award } from "lucide-react";
import SEO from "@/components/seo/SEO";

const GetInvolved = () => {
  return (
    <div className="flex flex-col">
      <SEO
        title="Get Involved | Volunteer, Donate & Partner with ICRM"
        description="Join ICRM's mission. Volunteer your skills, pray with us, or partner strategically to bring healing and hope through Gospel-centred therapy and rehabilitation."
        canonical="https://www.icrm.org.uk/get-involved"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Get Involved — ICRM",
          "url": "https://www.icrm.org.uk/get-involved",
          "description": "Ways to volunteer, pray, and partner with ICRM.",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home",         "item": "https://www.icrm.org.uk" },
              { "@type": "ListItem", "position": 2, "name": "Get Involved", "item": "https://www.icrm.org.uk/get-involved" }
            ]
          }
        }}
      />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-primary/5 to-background border-b border-border">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <Award className="w-4 h-4" />
            <span>Join Our Mission & Ministry</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            Get Involved
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join us in bringing healing and hope to communities that need both professional therapy and the transformative power of the Gospel.
          </p>
        </div>
      </section>

      {/* Overview Cards (Styled using your Mission & Vision 2-Column/3-Column blueprint) */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            <Card className="shadow-none border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-8 text-center md:text-left">
                <Users className="w-8 h-8 text-primary mb-4 mx-auto md:mx-0" />
                <h3 className="text-2xl font-bold mb-4">Volunteer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Share your skills and professional experience.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-none border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-8 text-center md:text-left">
                <Heart className="w-8 h-8 text-primary mb-4 mx-auto md:mx-0" />
                <h3 className="text-2xl font-bold mb-4">Pray</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Join us in prayer for healing and transformation.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-none border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-8 text-center md:text-left">
                <Handshake className="w-8 h-8 text-primary mb-4 mx-auto md:mx-0" />
                <h3 className="text-2xl font-bold mb-4">Partner</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Collaborate strategically to expand our reach.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Informational Sections (Styled using your left-bordered Core Values blueprint) */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 tracking-tight">Ways to Support Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            <Card className="group border-l-4 border-l-primary border-t-0 border-r-0 border-b-0 shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">Volunteer</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We welcome therapists, administrators, educators, IT professionals, and community advocates who share our vision.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-l-4 border-l-primary border-t-0 border-r-0 border-b-0 shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6">
                <Heart className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">Pray</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Prayer remains central to our mission and foundational to the healing and transformation we seek.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-l-4 border-l-primary border-t-0 border-r-0 border-b-0 shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6">
                <Handshake className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">Partner</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We pursue strategic partnerships with churches, organizations, and individuals committed to expanding access to care.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;