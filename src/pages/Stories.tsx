import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, MapPin } from "lucide-react";
import communityImage from "@/assets/community-impact.jpg";

const Stories = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 via-secondary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Stories & Impact
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Witness the transformative power of Christ working through therapeutic care and spiritual ministry
          </p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4">Featured Story</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              From Pain to Purpose: A Journey of Healing
            </h2>
            <div className="mb-8">
              <img 
                src={communityImage} 
                alt="Patient transformation story" 
                className="rounded-lg shadow-[var(--shadow-strong)] w-full h-[400px] object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">The Challenge</h3>
                <p>
                  Many of the individuals we serve face not only physical disabilities and health challenges but also limited access to professional therapeutic care and spiritual support. In underserved communities, the combination of medical needs and spiritual hunger creates a profound opportunity for holistic ministry.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">The Journey with ICRM</h3>
                <p>
                  Through our integrated approach, we provide comprehensive therapeutic assessment and treatment while building trusting relationships that create space for Gospel conversations. Our teams work alongside individuals and families, addressing immediate physical needs while sharing the hope found in Christ.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Spiritual Transformation</h3>
                <p>
                  As physical healing progresses, hearts open to spiritual truth. Professional excellence in therapeutic care demonstrates Christ's character, while ongoing relationships create opportunities for deeper discipleship. Many come seeking physical healing and discover eternal life in Jesus.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Life Today and Looking Forward</h3>
                <p>
                  Through ICRM's ministry, individuals experience restored function, renewed purpose, and most importantly, transformation through relationship with Christ. They become witnesses in their own communities, sharing both their physical healing and spiritual new life with others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voices from Our Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Voices from Our Team: Why We Do This Work
            </h2>
            <p className="text-muted-foreground mb-12">
              Personal reflections from those delivering care
            </p>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <p className="text-muted-foreground italic mb-4">
                    "I trained as a physical therapist to help people heal physically, but working with ICRM has shown me the power of addressing the whole person. When I can help someone recover function AND point them toward Christ, I experience the deepest fulfillment."
                  </p>
                  <p className="text-foreground font-semibold">— ICRM Therapist</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-accent mb-4" />
                  <p className="text-muted-foreground italic mb-4">
                    "Integrating my faith and my profession was always a struggle until I found ICRM. Now I understand that my clinical skills are a gift from God, meant to be used in His service. Every patient interaction becomes an opportunity to demonstrate Christ's love."
                  </p>
                  <p className="text-foreground font-semibold">— ICRM Staff Member</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-secondary mb-4" />
                  <p className="text-muted-foreground italic mb-4">
                    "The most profound moments in my work come when a patient who came seeking physical healing asks about the hope they see in our team. Those conversations about faith and purpose are why I became a missionary therapist."
                  </p>
                  <p className="text-foreground font-semibold">— ICRM Volunteer</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              How ICRM Is Transforming Communities
            </h2>
            <p className="text-muted-foreground mb-12">
              Beyond individual stories, we celebrate the broader impact in communities where we work
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">500+</span>
                    <span className="text-lg">Individuals Served</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Providing comprehensive therapeutic care to hundreds of individuals across India and the UK.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-accent">3+</span>
                    <span className="text-lg">Community Partnerships</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Establishing lasting partnerships with local organizations to extend our reach and impact.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-secondary">100+</span>
                    <span className="text-lg">Gospel Preached</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sharing the message of Christ's love with individuals through our therapeutic ministry.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">1+</span>
                    <span className="text-lg">Sustainable Care Systems</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Building local capacity through training and equipping indigenous therapists and leaders.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Story Can Be Part of This
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Whether through giving, volunteering, or prayer, you can join us in bringing healing and hope to communities worldwide.
          </p>
          <a href="/get-involved">
            <button className="bg-background text-foreground px-8 py-3 rounded-md font-semibold hover:bg-background/90 shadow-[var(--shadow-medium)] [transition:var(--transition-smooth)]">
              Get Involved Today
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Stories;
