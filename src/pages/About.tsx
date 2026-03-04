import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Heart, Lightbulb, Wrench } from "lucide-react";


const About = () => {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About ICRM
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded on the conviction that Christ calls us to minister to the whole person—body, mind, and spirit.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Story</h2>
            <p className="text-muted-foreground">
              ICRM was born from a powerful vision given by God in August 2023. In this vision, a child in a wheelchair gazed upon a cross positioned high on a mountain—a profound image that captures the heart of our calling.
            </p>
            <p className="text-muted-foreground">
              The wheelchair symbolizes the physical challenges and therapeutic needs we address; the cross on the mountain represents the Gospel message that brings spiritual healing and eternal hope.
            </p>
            <p className="text-muted-foreground">
              This vision compelled us to bridge the gap between professional therapeutic care and the Gospel’s transformative power, serving communities where both are desperately needed but often unavailable.
            </p>
            <p className="text-muted-foreground">
              Founded on the conviction that Christ calls us to minister to the whole person—body, mind, and spirit—ICRM exists to extend both healing and hope to the world’s most underserved communities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To witness Christ's transformative love across all nations through the integration of medical care, therapeutic services, and spiritual discipleship, creating communities of healing and faith.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  We exist to share God's love by caring for people—healing their bodies, comforting their hearts, and inviting them to follow Jesus. We serve all people, everywhere, walking with them toward wholeness and new life in Christ.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <BookOpen className="w-10 h-10 text-primary mb-4" />,
                title: "Educate",
                text: "Equipping individuals and communities with knowledge and skills to care for themselves physically, emotionally, and spiritually."
              },
              {
                icon: <Heart className="w-10 h-10 text-accent mb-4" />,
                title: "Evangelise",
                text: "Boldly and lovingly sharing the message of Christ’s redemption and hope through actions and words."
              },
              {
                icon: <Lightbulb className="w-10 h-10 text-secondary mb-4" />,
                title: "Enlighten",
                text: "Bringing clarity, wisdom, and understanding to those in darkness—physical, emotional, or spiritual."
              },
              {
                icon: <Wrench className="w-10 h-10 text-primary mb-4" />,
                title: "Equip",
                text: "Building capacity within individuals and communities to sustain health, faith, and leadership long-term."
              }
            ].map((value, index) => (
              <Card key={index} className="border-2 hover:border-primary transition">
                <CardContent className="p-6">
                  {value.icon}
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Believe</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              ICRM is rooted in the Christian faith and believes in the transformative power of the Gospel as revealed through Jesus Christ.
            </p>
            <p>
              We believe that when medicine and discipleship work together, they become a powerful witness to God's kingdom.
            </p>
            <Button variant="outline" className="mt-4">
              View Full Statement of Faith
            </Button>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Team & Leadership
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

            {/* Matthew */}
            <Card className="border-2">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-bold">Mathew Andersen</h3>
                <p className="text-primary font-medium">Director of Technology & Operations</p>
                <p className="text-sm text-muted-foreground">
                  25+ years leading global digital transformation across Automotive, Telecom, and Insurance sectors. 
                  Serves as Head of Technology Council at Tokyo Union Church (Japan) and WCF London.
                </p>
              </CardContent>
            </Card>

            {/* Samuel */}
            <Card className="border-2">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-bold">Samuel Benjamin</h3>
                <p className="text-primary font-medium">Director of Communications & Governance</p>
                <p className="text-sm text-muted-foreground">
                  Data governance and analytics specialist with a scientific background in biology. 
                  Focused on data-driven decision making and mission impact measurement.
                </p>
              </CardContent>
            </Card>

            {/* Punith */}
            <Card className="border-2">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-bold">Punith Kumar</h3>
                <p className="text-primary font-medium">Medical Director</p>
                <p className="text-sm text-muted-foreground">
                  Physiotherapist with 20+ years in musculoskeletal and sports rehabilitation across India, Malaysia, and the UK. 
                  Award-winning educator passionate about rehabilitation-focused mission work.
                </p>
              </CardContent>
            </Card>

            {/* Benny */}
            <Card className="border-2">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-bold">Benny Daniel</h3>
                <p className="text-primary font-medium">Mission Director</p>
                <p className="text-sm text-muted-foreground">
                  Leading mission strategy, partnerships, and Gospel-centered outreach across communities served by ICRM.
                </p>
              </CardContent>
            </Card>

          </div>

          <div className="max-w-5xl mx-auto mt-12">
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Governance & Accountability
          </h2>
          <p className="text-muted-foreground">
            ICRM is committed to transparency, accountability, and responsible stewardship of resources entrusted to us. We operate with the highest standards of integrity in all our work.
          </p>
        </div>
      </section>

    </div>
  );
};

export default About;
