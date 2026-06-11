
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Brain, HandHeart, Sparkles, MapPin, Award } from "lucide-react";
import SEO from "@/components/seo/SEO";

const OurWork = () => {
  return (
    <div className="flex flex-col">
      <SEO
        title="Our Work | ICRM — Gospel-Centred Therapy & Rehabilitation"
        description="ICRM delivers occupational therapy, physical rehabilitation, and counselling in India and the UK, integrating professional therapeutic care with the transforming power of the Gospel."
        canonical="https://www.icrm.org.uk/our-work"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "name": "Our Work — ICRM",
              "url": "https://www.icrm.org.uk/our-work",
              "description": "ICRM's therapy programmes, rehabilitation initiatives, and Gospel-centred care services in India and the United Kingdom.",
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home",     "item": "https://www.icrm.org.uk" },
                  { "@type": "ListItem", "position": 2, "name": "Our Work", "item": "https://www.icrm.org.uk/our-work" }
                ]
              }
            },
            {
              "@type": "Service",
              "name": "Occupational Therapy",
              "description": "Helping individuals develop or regain skills needed for daily living and meaningful activity, from self-care and work to community participation.",
              "provider": { "@type": "Organization", "name": "International Christian Rehab Mission" },
              "areaServed": ["India", "United Kingdom"]
            },
            {
              "@type": "Service",
              "name": "Physical Therapy & Rehabilitation",
              "description": "Evidence-based physical therapy addressing mobility, pain management, and functional restoration combined with spiritual encouragement.",
              "provider": { "@type": "Organization", "name": "International Christian Rehab Mission" },
              "areaServed": ["India", "United Kingdom"]
            },
            {
              "@type": "Service",
              "name": "Counselling & Mental Health Support",
              "description": "Compassionate counselling addressing emotional suffering, trauma, and mental health challenges, integrating Christian perspectives on healing.",
              "provider": { "@type": "Organization", "name": "International Christian Rehab Mission" },
              "areaServed": ["India", "United Kingdom"]
            }
          ]
        }}
      />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-primary/5 to-background border-b border-border">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <Award className="w-4 h-4" />
            <span>Our Operations & Strategy</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            Our Mission Work
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Bringing physical healing and spiritual transformation through integrated therapeutic care and Gospel ministry.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">Overview of Our Approach</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                At ICRM, we believe that therapeutic work and Gospel ministry are not separate activities but complementary expressions of Christ's healing love. We operate on the conviction that physical healing often opens hearts to spiritual truth, professional excellence demonstrates the character of Christ, and long-term relationships built through therapy create opportunities for discipleship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pathways Approach (Styled using your Mission/Vision card blueprint) */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            <Card className="shadow-none border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-8">
                <Badge className="mb-4">Pathway 1</Badge>
                <h3 className="text-2xl font-bold mb-4">Mission-First Model</h3>
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

            <Card className="shadow-none border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-8">
                <Badge className="mb-4" variant="secondary">Pathway 2</Badge>
                <h3 className="text-2xl font-bold mb-4">Technology-First Model</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-foreground/50 mt-1">•</span>
                    <span>Initiate contact through digital platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-foreground/50 mt-1">•</span>
                    <span>Build relationships and develop trust</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-foreground/50 mt-1">•</span>
                    <span>Provide consistent virtual therapeutic support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-foreground/50 mt-1">•</span>
                    <span>Follow up with in-person visits to deepen relationships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-foreground/50 mt-1">•</span>
                    <span>Establish lasting connections for ongoing ministry</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Therapy Programs & Services (Styled using your Left-Border Core Values blueprint) */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 tracking-tight">Therapy Programs & Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Activity,
                title: "Occupational Therapy",
                text: "We help individuals develop or regain skills needed for daily living and meaningful activity, from self-care and work to community participation. Through occupational therapy, we help people experience renewed purpose and independence."
              },
              {
                icon: HandHeart,
                title: "Physical Therapy & Rehabilitation",
                text: "Our physical therapy services address mobility, pain management, and functional restoration. We combine evidence-based techniques with spiritual encouragement, recognizing that physical healing opens doors for deeper spiritual conversations."
              },
              {
                icon: Brain,
                title: "Counseling & Mental Health",
                text: "We provide compassionate counseling that addresses emotional suffering, trauma, and mental health challenges. Our therapists integrate Christian perspectives on healing, helping individuals process their experiences through Christ's transforming grace."
              },
              {
                icon: Sparkles,
                title: "Specialized Services",
                text: "Depending on community needs, we may offer art therapy, speech therapy, and other specialized interventions. Each service is provided with professional excellence and creates natural opportunities for spiritual conversation."
              }
            ].map((program, i) => (
              <Card key={i} className="group border-l-4 border-l-primary border-t-0 border-r-0 border-b-0 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <program.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">{program.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{program.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gospel Integration Box (Styled matching your Leadership section architecture rules) */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 tracking-tight">Gospel Integration</h2>
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-xl p-8 md:p-12 space-y-6">
            <h3 className="text-xl font-bold text-foreground">Gospel Integration Across All Services</h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              In every therapeutic encounter, we deliberately:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Demonstrate Christ's love through our care</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Create safe spaces where spiritual questions can be explored</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Share the Gospel message with those open to hearing it</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Invite individuals into discipleship and relationship with Christ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Capacity Building (Styled cleanly following your Leadership grid members layout) */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 tracking-tight">Training & Capacity Building</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-sm">
            A core objective of ICRM is to inspire, equip, and deploy Christian therapists into mission fields worldwide. We offer:
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Professional Training Programs", desc: "For local therapists in therapeutic best practices and Gospel integration." },
              { title: "Mentorship & Support", desc: "For therapists called to missions." },
              { title: "Educational Resources", desc: "Webinars, training modules, and clinical guidelines." },
              { title: "Networking Opportunities", desc: "Connecting Christian therapists worldwide." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col p-6 bg-card border border-border rounded-xl">
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Work */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <MapPin className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Where We Work</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            ICRM currently serves communities in India and the United Kingdom. Through both in-person mission visits and telerehabilitation technology, we extend our reach to remote and underserved areas where professional therapeutic services are limited or unavailable.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge className="text-sm px-4 py-1.5 font-medium">India</Badge>
            <Badge className="text-sm px-4 py-1.5 font-medium">United Kingdom</Badge>
            <Badge variant="outline" className="text-sm px-4 py-1.5 font-medium border-primary/30 text-primary bg-primary/5">
              Expanding Worldwide
            </Badge>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;

