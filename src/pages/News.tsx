import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, FileText, Video } from "lucide-react";

const News = () => {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            News & Resources
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Updates on our mission work and educational materials.
          </p>
        </div>
      </section>

      {/* News */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Latest Updates
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2">Mission Update</Badge>
                <CardTitle>Expanding Our Reach in India</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  March 15, 2025
                </div>
                <p className="text-muted-foreground">
                  Our recent mission trip demonstrated the urgent need for integrated therapeutic and spiritual care.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2" variant="secondary">
                  Reflection
                </Badge>
                <CardTitle>Therapy as Ministry</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  February 28, 2025
                </div>
                <p className="text-muted-foreground">
                  Exploring how therapeutic excellence reflects Christ’s character.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge className="w-fit mb-2">Event</Badge>
                <CardTitle>Upcoming Webinar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  November 25, 2025
                </div>
                <p className="text-muted-foreground">
                  Educational session on sensory processing challenges in children.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Upcoming Events
          </h2>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Mission Trip Deployment
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  November 11–12, 2025
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Webinar: Sensory Processing Disorder
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  November 25, 2025
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Educational Resources
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <FileText className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Clinical Guidelines
                </h3>
                <p className="text-muted-foreground">
                  Integrating spiritual care with therapeutic intervention.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Video className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Training Modules
                </h3>
                <p className="text-muted-foreground">
                  Resources for therapists interested in mission work.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
