import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, FileText, Video } from "lucide-react";

const News = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            News & Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated on our mission work, access educational resources, and join us at upcoming events
          </p>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Latest News & Blog</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-[var(--shadow-medium)] [transition:var(--transition-smooth)]">
              <CardHeader>
                <Badge className="w-fit mb-2">Mission Update</Badge>
                <CardTitle>Expanding Our Reach in India</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>March 15, 2025</span>
                </div>
                <p className="text-muted-foreground">
                  Our recent mission trip to Bihar demonstrated the urgent need for integrated therapeutic and spiritual care in underserved rural communities.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-[var(--shadow-medium)] [transition:var(--transition-smooth)]">
              <CardHeader>
                <Badge className="w-fit mb-2" variant="secondary">Blog</Badge>
                <CardTitle>Therapy as Ministry: A Biblical Perspective</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>February 28, 2025</span>
                </div>
                <p className="text-muted-foreground">
                  Exploring how therapeutic excellence demonstrates Christ's character and creates pathways for spiritual conversation.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-[var(--shadow-medium)] [transition:var(--transition-smooth)]">
              <CardHeader>
                <Badge className="w-fit mb-2">Event</Badge>
                <CardTitle>Upcoming Webinar: Sensory Processing Disorder</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>November 25, 2025</span>
                </div>
                <p className="text-muted-foreground">
                  Join us for an educational session on understanding and addressing sensory processing challenges in children.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Upcoming Events</h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Mission Trip Deployment to Bihar
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>November 11-12, 2025</span>
                    </div>
                  </div>
                  <Badge>Mission Trip</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Webinar: Sensory Processing Disorder
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>November 25, 2025</span>
                    </div>
                  </div>
                  <Badge variant="secondary">Webinar</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Annual Fundraising Gala
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>December 15, 2025</span>
                    </div>
                  </div>
                  <Badge>Event</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Articles & Publications
          </h2>
          <p className="text-muted-foreground mb-12 max-w-3xl">
            ICRM-produced resources for therapists, ministry leaders, and anyone interested in the integration of therapeutic care and Gospel ministry.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-[var(--shadow-medium)] [transition:var(--transition-smooth)]">
              <CardContent className="p-6">
                <FileText className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Clinical Guidelines</h3>
                <p className="text-muted-foreground mb-4">
                  Evidence-based practices for integrating spiritual care with therapeutic intervention.
                </p>
                <a href="#" className="text-primary hover:text-primary/80 font-medium [transition:var(--transition-smooth)]">
                  Download PDF →
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-[var(--shadow-medium)] [transition:var(--transition-smooth)]">
              <CardContent className="p-6">
                <FileText className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Theological Reflections</h3>
                <p className="text-muted-foreground mb-4">
                  Essays on faith, healing, and wholeness from a Christian perspective.
                </p>
                <a href="#" className="text-primary hover:text-primary/80 font-medium [transition:var(--transition-smooth)]">
                  Download PDF →
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-[var(--shadow-medium)] [transition:var(--transition-smooth)]">
              <CardContent className="p-6">
                <Video className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Training Modules</h3>
                <p className="text-muted-foreground mb-4">
                  Educational resources for therapists interested in mission work.
                </p>
                <a href="#" className="text-primary hover:text-primary/80 font-medium [transition:var(--transition-smooth)]">
                  Access Resources →
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-[var(--shadow-medium)] [transition:var(--transition-smooth)]">
              <CardContent className="p-6">
                <FileText className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Research & Impact Reports</h3>
                <p className="text-muted-foreground mb-4">
                  Data on outcomes and lessons learned from our interventions.
                </p>
                <a href="#" className="text-primary hover:text-primary/80 font-medium [transition:var(--transition-smooth)]">
                  View Reports →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Annual Reports
            </h2>
            <p className="text-muted-foreground mb-8">
              ICRM is committed to complete transparency regarding our impact, finances, and operations. Our annual reports detail the number of individuals and communities served, therapeutic outcomes and impact metrics, financial stewardship, and strategic progress.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="text-base px-6 py-2 cursor-pointer hover:bg-primary/90">2024 Annual Report</Badge>
              <Badge variant="outline" className="text-base px-6 py-2 cursor-pointer hover:bg-accent">2023 Annual Report</Badge>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
