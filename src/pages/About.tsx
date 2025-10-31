import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Heart, Lightbulb, Wrench } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About ICRM
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded on the conviction that Christ calls us to minister to the whole person—body, mind, and spirit
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                ICRM was born from a powerful vision given by God in August 2023. In this vision, a child in a wheelchair gazed upon a cross positioned high on a mountain—a profound image that captures the heart of our calling.
              </p>
              <p>
                The wheelchair symbolizes the physical challenges and therapeutic needs we address; the cross on the mountain represents the Gospel message that brings spiritual healing and eternal hope. This vision compelled us to bridge the gap between professional therapeutic care and the Gospel's transformative power, serving communities where both are desperately needed but often unavailable.
              </p>
              <p>
                Founded on the conviction that Christ calls us to minister to the whole person—body, mind, and spirit—ICRM exists to extend both healing and hope to the world's most underserved communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To witness Christ's transformative love across all nations through the integration of medical care, therapeutic services, and spiritual discipleship, creating communities of healing and faith.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We exist to share God's love by caring for people—healing their bodies, comforting their hearts, and inviting them to follow Jesus. We serve all people, everywhere, walking with them toward wholeness and new life in Christ.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-primary [transition:var(--transition-smooth)]">
              <CardContent className="p-6">
                <BookOpen className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Educate</h3>
                <p className="text-muted-foreground text-sm">
                  Equipping individuals and communities with knowledge, skills, and understanding that enable them to care for themselves physically, emotionally, and spiritually.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary [transition:var(--transition-smooth)]">
              <CardContent className="p-6">
                <Heart className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Evangelise</h3>
                <p className="text-muted-foreground text-sm">
                  Boldly and lovingly sharing the message of Christ's redemption and hope, demonstrating His love through our actions and words.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary [transition:var(--transition-smooth)]">
              <CardContent className="p-6">
                <Lightbulb className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Enlighten</h3>
                <p className="text-muted-foreground text-sm">
                  Bringing clarity, wisdom, and understanding to those in darkness—whether physical illness, emotional suffering, or spiritual confusion.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary [transition:var(--transition-smooth)]">
              <CardContent className="p-6">
                <Wrench className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Equip</h3>
                <p className="text-muted-foreground text-sm">
                  Building capacity within individuals, families, and communities to sustain health, faith, and leadership long after our initial encounter.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section id="faith" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">What We Believe</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                ICRM is rooted in the Christian faith and believes in the transformative power of the Gospel as revealed through Jesus Christ. We hold that God cares for the whole person—physical, emotional, and spiritual—and that professional therapeutic excellence is one powerful means through which God's love and healing can be demonstrated.
              </p>
              <p>
                We believe that when medicine and discipleship work together, they become a powerful witness to God's kingdom. Our therapeutic work is both a demonstration of Christ's love and an opportunity to invite people into a saving relationship with Him.
              </p>
              <Button variant="outline" className="mt-4">View Full Statement of Faith</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            Our Team & Leadership
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our team comprises dedicated Christian therapists, administrators, and support staff committed to excellence and to Christ's mission. Each team member brings professional expertise and a heart for ministry.
          </p>
          <div className="max-w-4xl mx-auto">
            <img 
              src={teamPhoto} 
              alt="ICRM Team" 
              className="rounded-lg shadow-[var(--shadow-strong)] w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Governance & Accountability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              ICRM is committed to transparency, accountability, and responsible stewardship of resources entrusted to us. We operate with the highest standards of integrity in all our work.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
