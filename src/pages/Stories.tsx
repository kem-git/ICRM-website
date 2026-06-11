import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Award, Activity, Heart, Handshake, Sparkles } from "lucide-react";
import communityImage from "@/assets/community-impact.jpg";
import SEO from "@/components/seo/SEO";

const Stories = () => {
  return (
    <div className="flex flex-col">
      <SEO
        title="Stories of Transformation | ICRM"
        description="Read real stories of lives changed through ICRM's Gospel-centred therapy. 500+ individuals served across India and the UK through integrated therapeutic and spiritual care."
        canonical="https://www.icrm.org.uk/stories"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "name": "Stories & Impact — ICRM",
              "url": "https://www.icrm.org.uk/stories",
              "description": "Testimonies and transformation stories from individuals served by ICRM's Gospel-centred therapy programmes across India and the United Kingdom.",
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home",    "item": "https://www.icrm.org.uk" },
                  { "@type": "ListItem", "position": 2, "name": "Stories", "item": "https://www.icrm.org.uk/stories" }
                ]
              }
            },
            {
              "@type": "Article",
              "headline": "From Pain to Purpose: A Journey of Healing",
              "description": "Through ICRM's integrated approach, individuals experience restored function, renewed purpose, and transformation through relationship with Christ.",
              "publisher": {
                "@type": "Organization",
                "name": "International Christian Rehab Mission",
                "url": "https://www.icrm.org.uk"
              },
              "image": "https://www.icrm.org.uk/logo.png"
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How does ICRM integrate therapy with the Gospel?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ICRM provides comprehensive therapeutic assessment and treatment while building trusting relationships that create space for Gospel conversations. Professional excellence in therapeutic care demonstrates Christ's character, while ongoing relationships create opportunities for deeper discipleship."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where does ICRM serve communities?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ICRM currently serves communities in India and the United Kingdom, providing therapeutic care to 500+ individuals across both regions."
                  }
                }
              ]
            }
          ]
        }}
      />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-primary/5 to-background border-b border-border">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <Award className="w-4 h-4" />
            <span>Testimonies & Kingdom Fruit</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            Stories & Impact
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Witness the transformative power of Christ working through therapeutic care and spiritual ministry.
          </p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex flex-col items-start gap-3">
              <Badge>Featured Story</Badge>
              <h2 className="text-3xl font-bold tracking-tight">From Pain to Purpose: A Journey of Healing</h2>
            </div>
            
            <div className="my-8">
              <img
                src={communityImage}
                alt="Patient transformation story"
                className="rounded-xl border border-border w-full h-[400px] object-cover"
              />
            </div>

            <div className="prose prose-lg text-muted-foreground space-y-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">The Challenge</h3>
                <p>
                  Many of the individuals we serve face not only physical disabilities and health challenges but also limited access to professional therapeutic care and spiritual support. In underserved communities, the combination of medical needs and spiritual hunger creates a profound opportunity for holistic ministry.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">The Journey with ICRM</h3>
                <p>
                  Through our integrated approach, we provide comprehensive therapeutic assessment and treatment while building trusting relationships that create space for Gospel conversations. Our teams work alongside individuals and families, addressing immediate physical needs while sharing the hope found in Christ.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Spiritual Transformation</h3>
                <p>
                  As physical healing progresses, hearts open to spiritual truth. Professional excellence in therapeutic care demonstrates Christ's character, while ongoing relationships create opportunities for deeper discipleship. Many come seeking physical healing and discover eternal life in Jesus.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Life Today and Looking Forward</h3>
                <p>
                  Through ICRM's ministry, individuals experience restored function, renewed purpose, and most importantly, transformation through relationship with Christ. They become witnesses in their own communities, sharing both their physical healing and spiritual new life with others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voices from Our Team (Styled matching your 3-column highlight card layout) */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 tracking-tight">Voices from Our Team</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-sm">
            Personal reflections from those delivering care on the field
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            <Card className="shadow-none border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-sm text-muted-foreground italic mb-6 leading-relaxed">
                  "I trained as a physical therapist to help people heal physically, but working with ICRM has shown me the power of addressing the whole person. When I can help someone recover function AND point them toward Christ, I experience the deepest fulfillment."
                </p>
                <p className="text-sm text-foreground font-bold">— ICRM Therapist</p>
              </CardContent>
            </Card>

            <Card className="shadow-none border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-sm text-muted-foreground italic mb-6 leading-relaxed">
                  "Integrating my faith and my profession was always a struggle until I found ICRM. Now I understand that my clinical skills are a gift from God, meant to be used in His service. Every patient interaction becomes an opportunity to demonstrate Christ's love."
                </p>
                <p className="text-sm text-foreground font-bold">— ICRM Staff Member</p>
              </CardContent>
            </Card>

            <Card className="shadow-none border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-sm text-muted-foreground italic mb-6 leading-relaxed">
                  "The most profound moments in my work come when a patient who came seeking physical healing asks about the hope they see in our team. Those conversations about faith and purpose are why I became a missionary therapist."
                </p>
                <p className="text-sm text-foreground font-bold">— ICRM Volunteer</p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Community Impact (Styled using your Left-Border Core Operational Values blueprint) */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 tracking-tight">How ICRM Is Transforming Communities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Activity,
                title: "500+",
                subtitle: "Individuals Served",
                text: "Providing comprehensive therapeutic care to hundreds of individuals across India and the UK."
              },
              {
                icon: Handshake,
                title: "3+",
                subtitle: "Community Partnerships",
                text: "Establishing lasting partnerships with local organizations to extend our reach and impact."
              },
              {
                icon: Heart,
                title: "100+",
                subtitle: "Gospel Preached",
                text: "Sharing the message of Christ's love with individuals through our therapeutic ministry."
              },
              {
                icon: Sparkles,
                title: "1+",
                subtitle: "Sustainable Care Systems",
                text: "Building local capacity through training and equipping indigenous therapists and leaders."
              }
            ].map((stat, i) => (
              <Card key={i} className="group border-l-4 border-l-primary border-t-0 border-r-0 border-b-0 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 text-primary mb-4" />
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-2xl font-extrabold text-foreground">{stat.title}</span>
                  </div>
                  <h4 className="text-sm font-bold text-primary mb-2">{stat.subtitle}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{stat.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Governance / Call to Action Statement */}
      <section className="py-24 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <Award className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Your Story Can Be Part of This</h2>
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
            Whether through giving, volunteering your professional clinical skills, or lifting our teams up in prayer, your partnership actively expands access to care and spreads the transformation of the Gospel.
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

export default Stories;