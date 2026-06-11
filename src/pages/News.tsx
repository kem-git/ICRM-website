import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, FileText, Video, Radio, Newspaper, GraduationCap } from "lucide-react";
import SEO from "@/components/seo/SEO";

const News = () => {
  return (
    <div className="flex flex-col">
      <SEO
        title="News & Resources | ICRM"
        description="Latest updates, mission reports, upcoming events, and educational resources from ICRM — International Christian Rehab Mission. Gospel Through Therapy in action."
        canonical="https://www.icrm.org.uk/news"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Blog",
              "name": "ICRM News & Resources",
              "url": "https://www.icrm.org.uk/news",
              "description": "Latest updates, mission reports, and educational resources from ICRM.",
              "publisher": {
                "@type": "Organization",
                "name": "International Christian Rehab Mission",
                "url": "https://www.icrm.org.uk"
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.icrm.org.uk" },
                  { "@type": "ListItem", "position": 2, "name": "News", "item": "https://www.icrm.org.uk/news" }
                ]
              }
            },
            {
              "@type": "BlogPosting",
              "headline": "Expanding Our Reach in India",
              "datePublished": "2025-03-15",
              "publisher": {
                "@type": "Organization",
                "name": "International Christian Rehab Mission"
              },
              "description": "Our recent mission trip demonstrated the urgent need for integrated therapeutic and spiritual care."
            },
            {
              "@type": "BlogPosting",
              "headline": "Therapy as Ministry",
              "datePublished": "2025-02-28",
              "publisher": {
                "@type": "Organization",
                "name": "International Christian Rehab Mission"
              },
              "description": "Exploring how therapeutic excellence reflects Christ's character."
            },
            {
              "@type": "Event",
              "name": "Webinar: Sensory Processing Disorder",
              "startDate": "2025-11-25",
              "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
              "organizer": {
                "@type": "Organization",
                "name": "International Christian Rehab Mission",
                "url": "https://www.icrm.org.uk"
              },
              "description": "Educational session on sensory processing challenges in children."
            },
            {
              "@type": "Event",
              "name": "Mission Trip Deployment",
              "startDate": "2025-11-11",
              "endDate": "2025-11-12",
              "organizer": {
                "@type": "Organization",
                "name": "International Christian Rehab Mission",
                "url": "https://www.icrm.org.uk"
              }
            }
          ]
        }}
      />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-primary/5 to-background border-b border-border">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <Radio className="w-4 h-4" />
            <span>Updates & Mission Publications</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            News & Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Stay updated on our ongoing mission deployments, internal field reflections, and professional training resources.
          </p>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 tracking-tight">Latest Updates</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-sm">
            Dispatches from our active therapy deployments and ministries across India and the UK.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Post 1 */}
            <Card className="shadow-none border-border hover:border-primary/50 transition-colors flex flex-col justify-between">
              <CardContent className="p-8 space-y-4">
                <Badge className="w-fit">Mission Update</Badge>
                <h3 className="text-xl font-bold tracking-tight text-foreground">Expanding Our Reach in India</h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>March 15, 2025</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our recent mission trip demonstrated the urgent need for integrated therapeutic and spiritual care across underserved medical corridors.
                </p>
              </CardContent>
            </Card>

            {/* Post 2 */}
            <Card className="shadow-none border-border hover:border-primary/50 transition-colors flex flex-col justify-between">
              <CardContent className="p-8 space-y-4">
                <Badge className="w-fit" variant="secondary">Reflection</Badge>
                <h3 className="text-xl font-bold tracking-tight text-foreground">Therapy as Ministry</h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>February 28, 2025</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Exploring how professional clinical expertise and therapeutic excellence directly manifest Christ's character on the healthcare field.
                </p>
              </CardContent>
            </Card>

            {/* Post 3 */}
            <Card className="shadow-none border-border hover:border-primary/50 transition-colors flex flex-col justify-between">
              <CardContent className="p-8 space-y-4">
                <Badge className="w-fit">Event</Badge>
                <h3 className="text-xl font-bold tracking-tight text-foreground">Upcoming Webinar</h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>November 25, 2025</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  An upcoming clinical educational session outlining sensory processing challenges and early childhood therapeutic support frameworks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events (Styled using the left-border operational values blueprint) */}
      <section className="py-24 bg-muted/30 border-t border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4 tracking-tight">Upcoming Events</h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16 text-sm">
            Mark your calendar to participate in our corporate prayer initiatives, clinical webinars, and deployments.
          </p>

          <div className="space-y-6">
            <Card className="shadow-sm border-l-4 border-l-primary border-t-0 border-r-0 border-b-0">
              <CardContent className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    Mission Trip Deployment
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Corporate global dispatch preparation and ground team structural alignment briefings.
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0 bg-background border border-border px-3 py-1.5 rounded text-xs text-muted-foreground font-medium h-fit w-fit">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>November 11–12, 2025</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-l-4 border-l-primary border-t-0 border-r-0 border-b-0">
              <CardContent className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    Webinar: Sensory Processing Disorder
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Educational integration models tailored for local healthcare professionals, volunteers, and parents.
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0 bg-background border border-border px-3 py-1.5 rounded text-xs text-muted-foreground font-medium h-fit w-fit">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>November 25, 2025</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Educational Resources Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4 tracking-tight">Educational Resources</h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16 text-sm">
            Equipping professional therapists and ministries with clinical strategies rooted in a Gospel-centered worldview.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-none border-border hover:border-primary/30 transition-all group">
              <CardContent className="p-8">
                <div className="p-3 bg-primary/10 text-primary rounded-lg w-fit mb-6 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Clinical Guidelines
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Comprehensive methodological frameworks detailing the operational integration of continuous spiritual care within clinical medical assessment environments.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-none border-border hover:border-primary/30 transition-all group">
              <CardContent className="p-8">
                <div className="p-3 bg-primary/10 text-primary rounded-lg w-fit mb-6 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Video className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Training Modules
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Interactive multi-part visual modules and video orientations designed for certified clinical therapists preparing for global mission deployments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bottom Governance / Call to Action Statement */}
      <section className="py-24 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <GraduationCap className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Stay Connected to the Mission</h2>
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
            By accessing our training components and applying these guidelines locally, you actively join a growing network dedicated to demonstrating Christ's restorative heart through excellent therapeutic practice.
          </p>
          <a 
            href="/get-involved" 
            className="inline-flex items-center justify-center rounded-md font-semibold text-sm bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 shadow-sm transition-colors"
          >
            Get Involved Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default News;