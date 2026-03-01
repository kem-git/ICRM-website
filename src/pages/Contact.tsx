import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const subject = encodeURIComponent("Inquiry from ICRM Website");
  const body = encodeURIComponent(
    "Hello ICRM Team,\n\nI would like to enquire about...\n\nKind regards,"
  );

  const mailtoLink = `mailto:admin@icrm.org.uk?subject=${subject}&body=${body}`;

  return (
    <div className="flex flex-col">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you—whether you have questions about our mission,
            volunteer opportunities, or partnerships.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl mx-auto space-y-8">

          <h2 className="text-3xl font-bold text-center text-foreground">
            Get in Touch
          </h2>

          {/* Email Contact Card */}
          <Card className="border-2 shadow-lg">
            <CardContent className="p-10 text-center space-y-6">

              <div className="flex justify-center">
                <div className="bg-primary/10 p-5 rounded-full">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  Email Our Team
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Click below to contact us directly using your preferred email
                  application. A message template will be pre-filled for your convenience.
                </p>
              </div>

              <Button
                asChild
                size="lg"
                className="px-10 py-6 text-base rounded-2xl shadow-md hover:shadow-lg transition-all"
              >
                <a href={mailtoLink}>
                  <Mail className="w-5 h-5 mr-2" />
                  Send an Email
                </a>
              </Button>

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
      </section>

    </div>
  );
};

export default Contact;