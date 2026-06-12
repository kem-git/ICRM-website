import { useMsal } from "@azure/msal-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, ClipboardList, LogOut, FileSpreadsheet, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/seo/SEO";

export default function TherapistDashboard() {
  const { instance, accounts } = useMsal();
  const navigate = useNavigate();
  
  // Security protection routing rule
  useEffect(() => {
    if (accounts.length === 0) {
      navigate("/", { replace: true });
    }
  }, [accounts, navigate]);

  // Hault rendering lifecycle if no secure user is present during bounce
  if (accounts.length === 0) {
    return null; 
  }

  const therapistName = accounts[0]?.name || "Therapist";

  const handleLogout = () => {
    // Standardizes professional redirection logout to avoid sticky tabs on production subdomains
    instance.logoutRedirect({
      postLogoutRedirectUri: "https://app.icrm.org.uk/"
    }); 
  };

  return (
    <>
      <SEO 
        title="Therapist Dashboard | ICRM Portal" 
        description="Secure clinical workstation for ICRM certified rehabilitation operators."
        canonical="https://app.icrm.org.uk/dashboard"
      />

      {/* Top Banner Navigation Bar */}
      <header className="border-b border-border bg-background px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold">
            I
          </div>
          <span className="font-bold tracking-tight text-lg text-foreground">ICRM Workspace</span>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground hidden sm:inline">
            Logged in: <strong className="text-foreground font-medium">{therapistName}</strong>
          </span>
          <Button variant="outline" size="sm" onClick={handleLogout} className="text-xs gap-1.5 text-muted-foreground hover:text-destructive">
            <LogOut className="w-3.5 h-3.5" />
            Sign Out
          </Button>
        </div>
      </header>

      {/* Main Grid Application Panel Layout */}
      <main className="container mx-auto px-6 py-10 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">
            Welcome Back, <span className="text-primary">{therapistName}</span>
          </h1>
          <p className="text-muted-foreground">
            Select a core framework pillar below to begin managing clinical intakes and processing active patient profiles.
          </p>
        </div>

        {/* Quick Functional Metric Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          <Card className="bg-muted/20 border border-border">
            <CardContent className="pt-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Active Intakes</p>
                <p className="text-2xl font-bold">12 Patients</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-muted/20 border border-border">
            <CardContent className="pt-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Forms Pending Sync</p>
                <p className="text-2xl font-bold">3 Forms</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-muted/20 border border-border">
            <CardContent className="pt-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <ClipboardList className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Azure SQL Status</p>
                <p className="text-sm font-semibold text-emerald-600 flex items-center gap-1 mt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Connected securely
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Operational Actions Grid */}
        <h2 className="text-xl font-bold tracking-tight mb-4">Patient Assessment Forms</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          
          <Card className="group hover:shadow-md transition-shadow relative border-t-4 border-t-primary">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2 group-hover:text-primary transition-colors">
                <Plus className="w-5 h-5" />
                New Patient Intake
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Launch a clean, digital assessment registration document to capture patient demographics, physical histories, and custom text descriptors.
              </p>
              <Button className="w-full sm:w-auto">Start Registration Form</Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-md transition-shadow relative border-t-4 border-t-primary">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2 group-hover:text-primary transition-colors">
                <FileSpreadsheet className="w-5 h-5" />
                Review Intake Submissions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Queries records saved directly inside your Azure SQL Database instance repository. Pull down, organize, or cross-examine operational rows.
              </p>
              <Button variant="outline" className="w-full sm:w-auto">Open Data Ledger</Button>
            </CardContent>
          </Card>

        </div>
      </main>
    </>
  );
}