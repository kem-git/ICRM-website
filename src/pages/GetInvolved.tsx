import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Handshake } from "lucide-react";
import SEO from "@/components/seo/SEO";

const GetInvolved = () => {
  return (
    <>
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

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 via-primary/10 to-background text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get Involved
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us in bringing healing and hope to communities that need both professional therapy and the transformative power of the Gospel.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Volunteer</h3>
              <p className="text-sm text-muted-foreground">
                Share your skills and professional experience.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Pray</h3>
              <p className="text-sm text-muted-foreground">
                Join us in prayer for healing and transformation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Handshake className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Partner</h3>
              <p className="text-sm text-muted-foreground">
                Collaborate strategically to expand our reach.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Informational Sections */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl space-y-16">

          <div>
            <h2 className="text-3xl font-bold mb-4">Volunteer</h2>
            <p className="text-muted-foreground leading-relaxed">
              We welcome therapists, administrators, educators, IT professionals, and community advocates who share our vision.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Pray</h2>
            <p className="text-muted-foreground leading-relaxed">
              Prayer remains central to our mission and foundational to the healing and transformation we seek.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Partner</h2>
            <p className="text-muted-foreground leading-relaxed">
              We pursue strategic partnerships with churches, organizations, and individuals committed to expanding access to care.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default GetInvolved;