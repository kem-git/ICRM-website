import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Brain, HandHeart, Sparkles, MapPin } from "lucide-react";

const OurWork = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-accent/10 via-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Mission Work
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bringing physical healing and spiritual transformation through integrated therapeutic care and Gospel ministry
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Overview of Our Approach
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At ICRM, we believe that therapeutic work and Gospel ministry are not separate activities but complementary expressions of Christ's healing love. We operate on the conviction that physical healing often opens hearts to spiritual truth, professional excellence demonstrates the character of Christ, and long-term relationships built through therapy create opportunities for discipleship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <Badge className="mb-4">Pathway 1</Badge>
                <h3 className="text-2xl font-bold text-foreground mb-4">Mission-First Model</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Assess and serve communities directly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Deploy teams to conduct comprehensive therapeutic assessments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Provide hands-on interventions tailored to community needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Share the Gospel through word and deed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Establish follow-up care through telerehabilitation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20">
              <CardContent className="p-8">
                <Badge className="mb-4" variant="secondary">Pathway 2</Badge>
                <h3 className="text-2xl font-bold text-foreground mb-4">Technology-First Model</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Initiate contact through digital platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Build relationships and develop trust</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Provide consistent virtual therapeutic support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Follow up with in-person visits to deepen relationships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Establish lasting connections for ongoing ministry</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Therapy Programs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Therapy Programs & Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <Activity className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Occupational Therapy</h3>
                <p className="text-muted-foreground">
                  We help individuals develop or regain skills needed for daily living and meaningful activity, from self-care and work to community participation. Through occupational therapy, we help people experience renewed purpose and independence.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <HandHeart className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Physical Therapy & Rehabilitation</h3>
                <p className="text-muted-foreground">
                  Our physical therapy services address mobility, pain management, and functional restoration. We combine evidence-based techniques with spiritual encouragement, recognizing that physical healing opens doors for deeper spiritual conversations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Brain className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Counseling & Mental Health Support</h3>
                <p className="text-muted-foreground">
                  We provide compassionate counseling that addresses emotional suffering, trauma, and mental health challenges. Our therapists integrate Christian perspectives on healing, helping individuals process their experiences through Christ's transforming grace.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Sparkles className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Specialized Therapeutic Services</h3>
                <p className="text-muted-foreground">
                  Depending on community needs, we may offer art therapy, speech therapy, and other specialized interventions. Each service is provided with professional excellence and creates natural opportunities for spiritual conversation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gospel Integration */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Gospel Integration Across All Services
            </h2>
            <p className="text-lg opacity-90 mb-6 leading-relaxed">
              In every therapeutic encounter, we:
            </p>
            <ul className="space-y-3 text-lg opacity-90">
              <li className="flex items-start gap-2">
                <span className="mt-1">✓</span>
                <span>Demonstrate Christ's love through our care</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">✓</span>
                <span>Create safe spaces where spiritual questions can be explored</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">✓</span>
                <span>Share the Gospel message with those open to hearing it</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">✓</span>
                <span>Invite individuals into discipleship and relationship with Christ</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Where We Work */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <MapPin className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Where We Work
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              ICRM currently serves communities in India and the United Kingdom. Through both in-person mission visits and telerehabilitation technology, we extend our reach to remote and underserved areas where professional therapeutic services are limited or unavailable.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="text-base px-4 py-2">India</Badge>
              <Badge className="text-base px-4 py-2">United Kingdom</Badge>
              <Badge variant="outline" className="text-base px-4 py-2">Expanding Worldwide</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Training */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Training & Capacity Building
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A core objective of ICRM is to inspire, equip, and deploy Christian therapists into mission fields worldwide. We offer:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <p className="font-semibold text-foreground">Professional Training Programs</p>
                  <p className="text-sm text-muted-foreground">For local therapists in therapeutic best practices and Gospel integration</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <p className="font-semibold text-foreground">Mentorship & Support</p>
                  <p className="text-sm text-muted-foreground">For therapists called to missions</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <p className="font-semibold text-foreground">Educational Resources</p>
                  <p className="text-sm text-muted-foreground">Webinars, training modules, and clinical guidelines</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <p className="font-semibold text-foreground">Networking Opportunities</p>
                  <p className="text-sm text-muted-foreground">Connecting Christian therapists worldwide</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
