import { useMsal, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { loginRequest } from "@/config/authConfig"; 
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, LogIn, Lock, UserCheck, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/seo/SEO";

export default function PortalHome() {
  const { instance, accounts } = useMsal();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await instance.loginPopup(loginRequest);
    } catch (error) {
      console.error("Azure authentication failed: ", error);
    }
  };

  const handleLogout = () => {
    instance.logoutPopup();
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
              <div className="w-full space-y-6">
                <div className="p-4 bg-muted/50 rounded-xl border border-border flex items-center gap-3 text-left">
                  <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm">
                    {accounts[0]?.name?.charAt(0) || "U"}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm font-semibold truncate text-foreground">
                      {accounts[0]?.name}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {accounts[0]?.username}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  You have successfully verified your credentials. You can now securely proceed to your operational workspace.
                </p>

                <div className="flex flex-col gap-3">
                  <Button 
                    onClick={() => navigate("/dashboard")} 
                    className="w-full py-6"
                    size="lg"
                  >
                    <UserCheck className="w-4 h-4 mr-2" />
                    Enter Therapist Dashboard
                  </Button>
                  
                  <Button 
                    onClick={handleLogout} 
                    variant="ghost" 
                    className="text-xs text-muted-foreground hover:text-destructive"
                  >
                    Sign Out Account
                  </Button>
                </div>
              </div>
            </AuthenticatedTemplate>

          </CardContent>
        </Card>
      </div>
    </>
  );
}