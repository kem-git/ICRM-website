import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { DollarSign, Users, Heart, Handshake } from "lucide-react";

const GetInvolved = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 via-primary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Involved
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us in bringing healing and hope to communities that need both professional therapy and the transformative power of the Gospel
          </p>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary [transition:var(--transition-smooth)]">
              <CardContent className="p-6 text-center">
                <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Donate</h3>
                <p className="text-sm text-muted-foreground">Fund therapeutic services and mission work</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent [transition:var(--transition-smooth)]">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Volunteer</h3>
                <p className="text-sm text-muted-foreground">Share your skills and passion</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary [transition:var(--transition-smooth)]">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Pray</h3>
                <p className="text-sm text-muted-foreground">Join our prayer community</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary [transition:var(--transition-smooth)]">
              <CardContent className="p-6 text-center">
                <Handshake className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Partner</h3>
                <p className="text-sm text-muted-foreground">Collaborate strategically</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Donate</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Your financial support enables ICRM to provide therapeutic care and share the Gospel with communities that need it most.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">One-Time Donation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Support a specific need or project</p>
                  <Button className="w-full">Give Once</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Monthly Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Become a sustaining partner in our mission</p>
                  <Button className="w-full">Give Monthly</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Specific Project</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Fund particular therapeutic programs</p>
                  <Button className="w-full">Give to Project</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Volunteer</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We welcome volunteers with diverse gifts and skills who share our vision of bringing healing and hope through therapy and the Gospel.
            </p>

            <div className="space-y-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Therapeutic Professionals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Share your therapy expertise on mission trips, provide telerehabilitation support, or mentor local therapists.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Administrative & Support Staff</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Help with program coordination, data management, fundraising, and communications.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Community Advocates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Engage in community outreach, prayer coordination, and relationship building.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Professional Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Information technology experts, financial advisors, educators, and other professionals are deeply valued.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-primary">
              <CardHeader>
                <CardTitle>Volunteer Application</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="vol-name">Full Name *</Label>
                    <Input id="vol-name" placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="vol-email">Email *</Label>
                    <Input id="vol-email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="vol-skills">Skills & Experience *</Label>
                  <Textarea id="vol-skills" placeholder="Tell us about your professional skills and relevant experience" rows={4} />
                </div>
                <div>
                  <Label htmlFor="vol-interest">Area of Interest *</Label>
                  <Textarea id="vol-interest" placeholder="Which volunteer opportunities interest you most?" rows={3} />
                </div>
                <Button className="w-full" size="lg">Submit Application</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pray Section */}
      <section id="pray" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Pray with Us</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Prayer is the foundation of everything we do. We invite you to join our prayer community and intercede for our mission.
            </p>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Specific Prayer Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>For individuals receiving therapy—that they experience physical healing and spiritual transformation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>For our therapists and staff—for wisdom, compassion, and spiritual strength</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>For ongoing funding—that God provides resources to expand our reach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>For new partnerships—that God opens doors for collaboration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>For communities we serve—for openness to the Gospel and receptiveness to healing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>For Christian professionals—that God calls and equips more therapists to mission work</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button size="lg">Join Our Prayer Community</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section id="partner" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Partner with Us</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We seek strategic partnerships with churches, Christian organizations, and individuals committed to bringing healing and hope to underserved communities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Church Partnerships</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Mobilize your congregation's gifts and resources through prayer, volunteers, and financial support.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Organizational Collaborations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Work together to extend therapeutic services and spiritual care in communities you already serve.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Individual Partnerships</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Develop a personal relationship with ICRM, supporting specific communities or projects over the long term.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Professional Network Partnerships</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Connect professional communities to multiply our impact across fields and regions.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button size="lg" variant="hero">Contact Us About Partnership</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
