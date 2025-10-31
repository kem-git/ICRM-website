import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Globe, GraduationCap, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-therapy.jpg";
import communityImage from "@/assets/community-impact.jpg";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Bringing Healing and Hope: Therapy Guided by Faith
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              At the International Christian Rehab Mission (ICRM), we believe that true healing transforms the whole person—body, heart, and spirit. We share God's love by providing compassionate therapeutic care and spiritual discipleship to underserved communities worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about">
                <Button variant="hero" size="lg">
                  Learn More About Our Mission
                </Button>
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

      {/* What We Do Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four key areas where we bring healing and hope to communities worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-primary [transition:var(--transition-smooth)] hover:shadow-[var(--shadow-medium)]">
              <CardContent className="p-6">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Holistic Rehabilitation
                </h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive therapeutic services integrated with spiritual support to address the whole person.
                </p>
                <Link to="/our-work" className="text-primary hover:text-primary/80 font-medium flex items-center gap-1 [transition:var(--transition-smooth)]">
                  See Our Work <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary [transition:var(--transition-smooth)] hover:shadow-[var(--shadow-medium)]">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Gospel Integration
                </h3>
                <p className="text-muted-foreground mb-4">
                  We earn trust to share Christ's transformative love through our therapeutic expertise.
                </p>
                <Link to="/about" className="text-primary hover:text-primary/80 font-medium flex items-center gap-1 [transition:var(--transition-smooth)]">
                  Our Approach <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary [transition:var(--transition-smooth)] hover:shadow-[var(--shadow-medium)]">
              <CardContent className="p-6">
                <Globe className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Community Outreach
                </h3>
                <p className="text-muted-foreground mb-4">
                  Deploying teams to remote areas to provide care and establish lasting relationships.
                </p>
                <Link to="/our-work" className="text-primary hover:text-primary/80 font-medium flex items-center gap-1 [transition:var(--transition-smooth)]">
                  Where We Work <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary [transition:var(--transition-smooth)] hover:shadow-[var(--shadow-medium)]">
              <CardContent className="p-6">
                <GraduationCap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Therapist Training
                </h3>
                <p className="text-muted-foreground mb-4">
                  Inspiring and equipping Christian therapists for mission fields worldwide.
                </p>
                <Link to="/get-involved" className="text-primary hover:text-primary/80 font-medium flex items-center gap-1 [transition:var(--transition-smooth)]">
                  Get Involved <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why ICRM Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why ICRM? Our Unique Approach
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                At ICRM, we see therapy and faith not as separate activities but as complementary expressions of Christ's healing love. Professional excellence demonstrates the character of Christ, while therapeutic relationships create natural pathways for spiritual conversation and discipleship.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We operate through two integrated models: our <strong className="text-foreground">Mission-First approach</strong>, which deploys teams to assess and serve underserved communities directly, and our <strong className="text-foreground">Technology-First model</strong>, which uses telerehabilitation to build relationships and trust before in-person visits.
              </p>
              <Link to="/our-work">
                <Button variant="default" size="lg">
                  Learn About Our Work
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src={communityImage} 
                alt="Community impact" 
                className="rounded-lg shadow-[var(--shadow-strong)] w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Individuals Served</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-lg opacity-90">Gospel Shared</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">3+</div>
              <div className="text-lg opacity-90">Community Partnerships</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Join Us in Bringing Healing and Hope
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your support enables us to provide therapeutic care and share the Gospel with communities that need it most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link to="/get-involved" className="block">
              <Card className="h-full hover:shadow-[var(--shadow-medium)] [transition:var(--transition-smooth)] border-2 hover:border-primary">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Donate Now</h3>
                  <p className="text-sm text-muted-foreground">Fund therapeutic services and mission work</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/get-involved#volunteer" className="block">
              <Card className="h-full hover:shadow-[var(--shadow-medium)] [transition:var(--transition-smooth)] border-2 hover:border-primary">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Volunteer</h3>
                  <p className="text-sm text-muted-foreground">Share your skills and passion</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/get-involved#pray" className="block">
              <Card className="h-full hover:shadow-[var(--shadow-medium)] [transition:var(--transition-smooth)] border-2 hover:border-primary">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Pray</h3>
                  <p className="text-sm text-muted-foreground">Join our prayer community</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/get-involved#partner" className="block">
              <Card className="h-full hover:shadow-[var(--shadow-medium)] [transition:var(--transition-smooth)] border-2 hover:border-primary">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Partner</h3>
                  <p className="text-sm text-muted-foreground">Collaborate strategically</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
