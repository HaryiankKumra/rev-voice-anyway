import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Shield, 
  Eye, 
  Trash2, 
  Server, 
  Smartphone, 
  AlertTriangle,
  Lock,
  UserCheck
} from "lucide-react";

const Privacy = () => {
  const principles = [
    {
      icon: Eye,
      title: "Transparency",
      description: "You always know what data we collect and how it's used"
    },
    {
      icon: UserCheck,
      title: "User Control", 
      description: "You decide what to record, store, and delete"
    },
    {
      icon: Lock,
      title: "Data Minimization",
      description: "We only collect what's necessary for functionality"
    },
    {
      icon: Shield,
      title: "Privacy by Design",
      description: "Privacy considerations built into every feature"
    }
  ];

  const dataHandling = [
    {
      type: "Voice Recordings",
      storage: "Local browser storage by default",
      retention: "Session only (deleted when tab closes)",
      purpose: "Voice enrollment for personalized TTS",
      control: "Delete button always available"
    },
    {
      type: "Text Input",
      storage: "Not stored persistently", 
      retention: "Until you close the application",
      purpose: "Generate speech output",
      control: "Clear text field anytime"
    },
    {
      type: "Usage Analytics",
      storage: "Not implemented in prototype",
      retention: "N/A - demo only",
      purpose: "Future: improve user experience",
      control: "Opt-in only when implemented"
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            Your voice, your data, your choice. Clear policies for a prototype built with privacy first.
          </p>
        </div>

        {/* Disclaimer */}
        <Alert className="mb-8 border-warning/20 bg-warning/5">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription className="text-warning-foreground">
            <strong>Prototype Disclaimer:</strong> This is a research prototype for demonstration purposes only. 
            Not intended for medical diagnosis, treatment, or as a clinical device. Data handling practices 
            described here apply to this demo version only.
          </AlertDescription>
        </Alert>

        {/* Privacy Principles */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
            Our Privacy Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{principle.title}</h3>
                        <p className="text-muted-foreground">{principle.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Data Collection & Handling */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
            What Data We Handle
          </h2>
          <div className="space-y-6">
            {dataHandling.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{item.type}</span>
                    <Badge variant="outline">{item.storage.includes("Local") ? "Local" : "Remote"}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Storage & Retention</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Storage:</strong> {item.storage}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Retention:</strong> {item.retention}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Purpose & Control</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Purpose:</strong> {item.purpose}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Your Control:</strong> {item.control}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Implementation */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
            Technical Implementation
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  Client-Side Processing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Classic TTS Mode</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Runs entirely in your browser</li>
                    <li>• No data sent to external servers</li>
                    <li>• Uses browser's built-in speech synthesis</li>
                    <li>• Works offline after initial page load</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Voice Recording</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• MediaRecorder API for local capture</li>
                    <li>• Stored temporarily in browser memory</li>
                    <li>• Never auto-uploaded without consent</li>
                    <li>• Cleared when tab is closed</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-secondary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-5 h-5" />
                  Server-Side Processing (Optional)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Voice Cloning Mode</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Only when you explicitly enroll your voice</li>
                    <li>• Requires explicit consent checkbox</li>
                    <li>• Processed for this demo session only</li>
                    <li>• No long-term storage or sharing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Security Measures</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• HTTPS encryption for all transfers</li>
                    <li>• No persistent user accounts</li>
                    <li>• No third-party tracking scripts</li>
                    <li>• Minimal server logs (errors only)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* User Rights & Controls */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="w-6 h-6" />
              Your Rights & Controls
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-foreground mb-4">What You Can Do</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Trash2 className="w-4 h-4 text-destructive" />
                    Delete recorded voice data anytime
                  </li>
                  <li className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-primary" />
                    See exactly what data exists
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-secondary" />
                    Choose client-only or server-assisted modes
                  </li>
                  <li className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-primary" />
                    Revoke consent for voice cloning anytime
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-4">What We Won't Do</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Share your voice with third parties</li>
                  <li>• Use your voice for training other models</li>
                  <li>• Store voice data beyond the demo session</li>
                  <li>• Track you across other websites</li>
                  <li>• Sell or monetize your personal data</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact & Updates */}
        <Card>
          <CardHeader>
            <CardTitle>Questions & Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                If you have questions about our privacy practices or want to report a concern, 
                please contact us at <a href="mailto:privacy@revoice.dev" className="text-primary hover:underline">privacy@revoice.dev</a>.
              </p>
              <p className="text-muted-foreground">
                As this prototype evolves, we'll update this privacy policy and notify users 
                of any significant changes. The current version is effective as of the 
                prototype deployment date.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Badge variant="outline">Last Updated</Badge>
                <span>December 2025 (Prototype Version)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;