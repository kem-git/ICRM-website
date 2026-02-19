import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you—whether you have questions about our mission, want to explore volunteer opportunities, or discuss partnerships
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>

              <Card className="border-2">
                <CardContent className="p-6">
                  <form className="space-y-4">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your Name" />
                      </div>

                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="inquiry-type">Inquiry Type</Label>
                      <Select>
                        <SelectTrigger id="inquiry-type">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiries</SelectItem>
                          <SelectItem value="partnership">Partnership Request</SelectItem>
                          <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                          <SelectItem value="donation">Donations & Development</SelectItem>
                          <SelectItem value="media">Media Inquiries</SelectItem>
                          <SelectItem value="services">Therapeutic Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Brief subject line" />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry"
                        rows={6}
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                    </Button>

                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>

                {/* Email Contacts */}
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-primary" />
                      Direct Email Contacts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">

                    <div>
                      <p className="font-semibold">General Inquiries:</p>
                      <a href="mailto:info@icrm.org" className="text-primary hover:text-primary/80">
                        info@icrm.org
                      </a>
                    </div>

                    <div>
                      <p className="font-semibold">Therapeutic Services:</p>
                      <a href="mailto:services@icrm.org" className="text-primary hover:text-primary/80">
                        services@icrm.org
                      </a>
                    </div>

                    <div>
                      <p className="font-semibold">Volunteer Opportunities:</p>
                      <a href="mailto:volunteers@icrm.org" className="text-primary hover:text-primary/80">
                        volunteers@icrm.org
                      </a>
                    </div>

                    <div>
                      <p className="font-semibold">Donations & Development:</p>
                      <a href="mailto:giving@icrm.org" className="text-primary hover:text-primary/80">
                        giving@icrm.org
                      </a>
                    </div>

                    <div>
                      <p className="font-semibold">Partnerships:</p>
                      <a href="mailto:partnerships@icrm.org" className="text-primary hover:text-primary/80">
                        partnerships@icrm.org
                      </a>
                    </div>

                  </CardContent>
                </Card>

                {/* Phone & Address */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-primary" />
                      Phone & Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm">

                    <div>
                      <p className="font-semibold">Phone</p>
                      <p>SAM : +44 7730873122</p>
                      <p>MATTHEW : +44 7704 717771</p>
                    </div>

                    <div>
                      <p className="font-semibold">Address</p>
                      <p>
                        International Christian Rehab Mission (ICRM)<br />
                        3 Wood Rise, Pinner, Greater London, HA5 2JD, United Kingdom
                      </p>
                    </div>

                  </CardContent>
                </Card>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
