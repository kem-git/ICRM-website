import { useMsal, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { loginRequest } from "@/config/authConfig"; 
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, LogIn, Lock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/seo/SEO";

export default function PortalHome() {
  const { instance, accounts } = useMsal();
  const navigate = useNavigate();

  // Automatic verification redirect hook
  useEffect(() => {
    if (accounts.length > 0) {
      navigate("/dashboard", { replace: true });
    }
  }, [accounts, navigate]);

  const handleLogin = async () => {
    try {
      // Fires the secure single-sign-on challenge
      await instance.loginPopup(loginRequest);
    } catch (error) {
      console.error("Azure authentication failed: ", error);
    }
  };

  return (
    <>
      <SEO 
        title="Therapist Portal Login | ICRM" 
        description="Secure portal access for authorized International Christian Rehab Mission therapists."
        canonical="https://app.icrm.org.uk/"
      />

      <div className="flex flex-col items-center justify-center min-h-[90vh] bg-muted/20 p-6">
        <Card className="max-w-md w-full border-t-4 border-t-primary shadow-lg bg-background">
          <CardContent className="pt-8 px-8 pb-8 flex flex-col items-center text-center">
            
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-foreground mb-2">
              ICRM Secure Portal
            </h1>
            
            <UnauthenticatedTemplate>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                Welcome, therapist. Please sign in via your authorized Microsoft organization account to securely manage patient records and clinical forms.
              </p>

              <Button 
                onClick={handleLogin} 
                className="w-full flex items-center justify-center gap-2 py-6 shadow-sm group"
                size="lg"
              >
                <LogIn className="w-4 h-4" />
                Sign In with Microsoft Azure
                <ArrowRight className="w-4 h-4 ml-1 opacity-70 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              
              <div className="flex items-center gap-1.5 mt-6 text-xs text-muted-foreground">
                <Lock className="w-3 h-3" />
                <span>Protected by Entra ID End-to-End Encryption</span>
              </div>
            </UnauthenticatedTemplate>

            <AuthenticatedTemplate>
              <div className="w-full space-y-4 py-4 flex flex-col items-center">
                <div className="w-6 h-6 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                <p className="text-sm text-muted-foreground">Loading workspace sessions...</p>
              </div>
            </AuthenticatedTemplate>

          </CardContent>
        </Card>
      </div>
    </>
  );
}