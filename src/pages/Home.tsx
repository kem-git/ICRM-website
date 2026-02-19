import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Globe, GraduationCap, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-therapy.jpg";
import communityImage from "@/assets/community-impact.jpg";

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Bringing Healing and Hope: Therapy Guided by Faith
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At the International Christian Rehab Mission (ICRM), we believe
              that true healing transforms the whole person—body, heart, and
              spirit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about">
                <Button size="lg">Learn More</Button>
              </Link>
              <Link to="/get-involved">
                <Button variant="secondary" size="lg">
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Do
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Four key areas where we bring healing and hope.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Holistic Rehabilitation
                </h3>
                <Link to="/our-work" className="text-primary flex items-center gap-1">
                  See Our Work <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Gospel Integration
                </h3>
                <Link to="/about" className="text-primary flex items-center gap-1">
                  Our Approach <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Globe className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Community Outreach
                </h3>
                <Link to="/our-work" className="text-primary flex items-center gap-1">
                  Where We Work <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <GraduationCap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Therapist Training
                </h3>
                <Link to="/get-involved" className="text-primary flex items-center gap-1">
                  Get Involved <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why ICRM */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why ICRM?
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Therapy and faith are complementary expressions of Christ’s healing love.
            </p>
            <Link to="/our-work">
              <Button size="lg">Learn About Our Work</Button>
            </Link>
          </div>

          <img
            src={communityImage}
            alt="Community impact"
            className="rounded-lg w-full h-[400px] object-cover"
          />
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold mb-2">500+</div>
            <div>Individuals Served</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">100+</div>
            <div>Gospel Shared</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">3+</div>
            <div>Community Partnerships</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
