import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Globe, GraduationCap, ArrowRight, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-therapy.jpg";
import communityImage from "@/assets/community-impact.jpg";
import SEO from "@/components/seo/SEO";

// Viewport-aware Animated Counter with slower, smoother interpolation speeds
interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter = ({ target, duration = 2200, suffix = "" }: AnimatedCounterProps) => {
  const [count, setCount] = useState<number>(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            
            const progressPercentage = Math.min(progress / duration, 1);
            
            // Cubic ease-out curve for an ultra-smooth slowing down effect toward the target number
            const easeOutProgress = 1 - Math.pow(1 - progressPercentage, 3);
            
            const currentCount = Math.floor(easeOutProgress * target);
            setCount(currentCount);

            if (progress < duration) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [target, duration]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
};

const Home = () => {
  return (
    <>
      <SEO
        title="ICRM — International Christian Rehab Mission | Gospel Through Therapy"
        description="ICRM is a UK-based Christian organisation delivering the Gospel through therapy and rehabilitation. Transforming lives through faith-centred care and support."
        canonical="https://www.icrm.org.uk/"
        schema={[
          {
            "@type": "Organization",
            "@id": "https://www.icrm.org.uk/#org",
            "name": "International Christian Rehab Mission",
            "alternateName": "ICRM",
            "url": "https://www.icrm.org.uk",
            "logo": "https://www.icrm.org.uk/logo.png",
            "description": "ICRM delivers the Gospel through therapy and rehabilitation programmes, combining faith-based support with practical care for individuals and communities in need.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "GB"
            }
          },
          {
            "@type": "WebSite",
            "@id": "https://www.icrm.org.uk/#site",
            "url": "https://www.icrm.org.uk",
            "name": "ICRM — International Christian Rehab Mission",
            "description": "Gospel Through Therapy"
          }
        ]}
      />

      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent md:bg-gradient-to-r" />
        </div>

        <div className="relative container mx-auto px-6 py-24 z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Christ-Centered Compassion</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Bringing Healing and Hope: <br className="hidden md:inline"/>
              <span className="text-primary">Therapy Guided by Faith</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
              At the International Christian Rehab Mission (ICRM), we believe
              that true restoration transforms the whole person—unifying physical rehabilitation with spiritual vitality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="shadow-sm">
                <Link to="/about">Learn Our Approach</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Our Core Pillars of Service
            </h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive system framework delivering both specialized medical therapies and global faith outposts.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pillar 1 */}
            <Card className="group relative border-t-4 border-t-primary hover:shadow-md transition-shadow">
              <CardContent className="pt-8 px-6 pb-6 flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    Holistic Rehabilitation
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    Custom tailored treatment tracks working to restore motor faculties, cognitive functions, and general daily strength.
                  </p>
                </div>
                <Link to="/our-work" className="text-sm font-medium text-primary flex items-center gap-1.5 mt-auto hover:underline">
                  See Our Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            {/* Pillar 2 */}
            <Card className="group relative border-t-4 border-t-primary hover:shadow-md transition-shadow">
              <CardContent className="pt-8 px-6 pb-6 flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    Gospel Integration
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    We intentionalize community gathering places rooted in scriptural study alongside professional psychological support frameworks.
                  </p>
                </div>
                <Link to="/about" className="text-sm font-medium text-primary flex items-center gap-1.5 mt-auto hover:underline">
                  Our Approach <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            {/* Pillar 3 */}
            <Card className="group relative border-t-4 border-t-primary hover:shadow-md transition-shadow">
              <CardContent className="pt-8 px-6 pb-6 flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    Community Outreach
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    Partnering locally across cities globally to establish low-barrier clinical help initiatives for structural stability.
                  </p>
                </div>
                <Link to="/our-work" className="text-sm font-medium text-primary flex items-center gap-1.5 mt-auto hover:underline">
                  Where We Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>

            {/* Pillar 4 */}
            <Card className="group relative border-t-4 border-t-primary hover:shadow-md transition-shadow">
              <CardContent className="pt-8 px-6 pb-6 flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    Therapist Training
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    Equipping next-generation caregivers with certification structures pairing therapeutic knowledge with spiritual ministry.
                  </p>
                </div>
                <Link to="/get-involved" className="text-sm font-medium text-primary flex items-center gap-1.5 mt-auto hover:underline">
                  Get Involved <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why ICRM Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Why Invest in the ICRM Framework?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Therapy and faith are not distinct operational systems; they are complementary expressions of comprehensive healing. Our cross-functional approach restores individual dignity while developing sustainable paths back to community life.
            </p>
            <Button asChild size="lg" className="mt-4">
              <Link to="/our-work">Learn About Our Impact</Link>
            </Button>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-primary/5 rounded-2xl transform translate-x-3 translate-y-3 -z-10 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300" />
            <img
              src={communityImage}
              alt="Community impact workshop session"
              className="rounded-2xl w-full h-[450px] object-cover shadow-sm border border-border"
            />
          </div>
        </div>
      </section>

      {/* Impact Metric Dashboard Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_50%)]" />
        <div className="relative container mx-auto px-6 grid sm:grid-cols-3 gap-12 text-center">
          <div className="space-y-2">
            <p className="text-5xl font-extrabold tracking-tight">
              <AnimatedCounter target={500} duration={2400} suffix="+" />
            </p>
            <p className="text-primary-foreground/80 font-medium uppercase tracking-wider text-sm">Individuals Restored</p>
          </div>
          <div className="space-y-2">
            <p className="text-5xl font-extrabold tracking-tight">
              <AnimatedCounter target={100} duration={2000} suffix="+" />
            </p>
            <p className="text-primary-foreground/80 font-medium uppercase tracking-wider text-sm">Outpost Deployments</p>
          </div>
          <div className="space-y-2">
            <p className="text-5xl font-extrabold tracking-tight">
              <AnimatedCounter target={3} duration={1200} suffix="+" />
            </p>
            <p className="text-primary-foreground/80 font-medium uppercase tracking-wider text-sm">Global Healthcare Alliances</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;