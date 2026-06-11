import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Heart, Lightbulb, Wrench, ShieldCheck, Target, Award } from "lucide-react";
import SEO from "@/components/seo/SEO";

const About = () => {
  return (
    <div className="flex flex-col">
      <SEO
        title="About Us | ICRM — International Christian Rehab Mission"
        description="Founded in 2023, ICRM bridges professional therapeutic care with the Gospel's transformative power, serving communities where both healing and hope are needed."
        canonical="https://www.icrm.org.uk/about"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "AboutPage",
              "name": "About ICRM",
              "url": "https://www.icrm.org.uk/about",
              "description": "ICRM was born from a vision given by God in August 2023, bridging professional therapeutic care with the Gospel's transformative power.",
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home",  "item": "https://www.icrm.org.uk" },
                  { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.icrm.org.uk/about" }
                ]
              }
            }
          ]
        }}
      />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-primary/5 to-background border-b border-border">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <Award className="w-4 h-4" />
            <span>Our Mission & Foundation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            Healing Bodies, <br /> Restoring Hope in Christ.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Founded on the conviction that Christ calls us to minister to the whole person—body, mind, and spirit.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">The Vision of ICRM</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                ICRM was born from a powerful vision given by God in August 2023. In this vision, a child in a wheelchair gazed upon a cross positioned high on a mountain—a profound image that captures the heart of our calling.
              </p>
              <p>
                The wheelchair symbolizes the physical challenges and therapeutic needs we address; the cross on the mountain represents the Gospel message that brings spiritual healing and eternal hope.
              </p>
              <p>
                This vision compelled us to bridge the gap between professional therapeutic care and the Gospel's transformative power, serving communities where both are desperately needed but often unavailable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-none border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-8">
                <Target className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To witness Christ's transformative love across all nations through the integration of medical care, therapeutic services, and spiritual discipleship, creating communities of healing and faith.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-none border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-8">
                <Heart className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We exist to share God's love by caring for people—healing their bodies, comforting their hearts, and inviting them to follow Jesus. We serve all people, walking with them toward wholeness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 tracking-tight">Core Operational Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: "Educate", text: "Equipping individuals with skills to care for themselves physically and spiritually." },
              { icon: Heart, title: "Evangelise", text: "Boldly sharing the message of Christ's redemption through actions and words." },
              { icon: Lightbulb, title: "Enlighten", text: "Bringing clarity and wisdom to those in darkness—physical or emotional." },
              { icon: Wrench, title: "Equip", text: "Building capacity within communities to sustain health and faith long-term." }
            ].map((value, i) => (
              <Card key={i} className="group border-l-4 border-l-primary border-t-0 border-r-0 border-b-0 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <value.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 tracking-tight">Leadership & Stewardship</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Team members kept consistent but with cleaner card styling */}
            {[
              { name: "Mathew Andersen", role: "Director of Technology & Operations", bio: "25+ years leading global digital transformation. Serves as Head of Tech Council at Tokyo Union Church." },
              { name: "Samuel Benjamin", role: "Director of Communications & Governance", bio: "Data governance specialist with a scientific background in biology. Focused on impact measurement." },
              { name: "Punith Kumar", role: "Medical Director", bio: "Physiotherapist with 20+ years in sports rehab across India, Malaysia, and the UK. Award-winning educator." },
              { name: "Benny Daniel", role: "Mission Director", bio: "Leading mission strategy, partnerships, and Gospel-centered outreach across all ICRM communities." }
            ].map((member, i) => (
              <div key={i} className="flex flex-col p-6 bg-card border border-border rounded-xl">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Faith */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Governance & Integrity</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            ICRM is committed to transparency and responsible stewardship. We operate with the highest standards of integrity in all our clinical and spiritual work.
          </p>
          <Button variant="outline" size="lg">View Our Full Statement of Faith</Button>
        </div>
      </section>
    </div>
  );
};

export default About;