import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cpu, 
  Globe, 
  Zap, 
  Server, 
  Smartphone, 
  Database,
  ArrowRight,
  Clock
} from "lucide-react";

const Technology = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technology Architecture
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Advanced speech synthesis powered by modern AI, designed for accessibility and privacy
          </p>
        </div>

        {/* Architecture Diagram */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cpu className="w-6 h-6" />
              System Architecture
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Frontend</h3>
                <p className="text-sm text-muted-foreground">React UI + Web Speech API</p>
              </div>
              
              <div className="flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-muted-foreground" />
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Backend API</h3>
                <p className="text-sm text-muted-foreground">Optional cloning service</p>
              </div>
              
              <div className="flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-muted-foreground" />
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-xl bg-warning/10 flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-warning" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">TTS Engine</h3>
                <p className="text-sm text-muted-foreground">XTTS v2 / OpenVoice</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Models Section */}
        <div className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
            Speech Models
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Classic TTS</span>
                  <Badge variant="secondary">Client-Side</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Browser-native Web Speech API for instant, offline text-to-speech generation.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-sm">Zero latency - runs locally</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary" />
                    <span className="text-sm">Multi-language support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm">Instant availability</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-secondary/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Clone Mode</span>
                  <Badge variant="outline">Server-Side</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Advanced voice cloning using XTTS v2 or OpenVoice for personalized speech synthesis.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-secondary" />
                    <span className="text-sm">AI-powered personalization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-secondary" />
                    <span className="text-sm">Voice profile learning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-secondary" />
                    <span className="text-sm">High-quality output</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Performance Metrics */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Performance & Latency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">&lt;700ms</div>
                <p className="text-sm text-muted-foreground">Classic TTS latency</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">2-5s</div>
                <p className="text-sm text-muted-foreground">Voice clone synthesis</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warning mb-2">95%+</div>
                <p className="text-sm text-muted-foreground">Preset phrase usage</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Implementation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Frontend Implementation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Web Speech API</h4>
                  <p className="text-sm text-muted-foreground">
                    Native browser TTS with rate, pitch, and voice selection controls
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">MediaRecorder API</h4>
                  <p className="text-sm text-muted-foreground">
                    High-quality audio capture for voice enrollment
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Responsive Design</h4>
                  <p className="text-sm text-muted-foreground">
                    Touch-optimized interface with WCAG AA accessibility
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Backend Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Voice Enrollment</h4>
                  <p className="text-sm text-muted-foreground">
                    Audio processing and embedding generation for personalization
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">TTS Synthesis</h4>
                  <p className="text-sm text-muted-foreground">
                    XTTS v2/OpenVoice integration with voice profile matching
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Privacy Controls</h4>
                  <p className="text-sm text-muted-foreground">
                    Ephemeral storage with user-controlled data deletion
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Future Roadmap */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Technical Roadmap</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Phase 1 (Current)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Web Speech API integration</li>
                  <li>• Basic voice cloning demo</li>
                  <li>• English & Hindi support</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Phase 2 (Next)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Real-time voice conversion</li>
                  <li>• Advanced emotion controls</li>
                  <li>• Mobile app development</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Phase 3 (Future)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Multi-language expansion</li>
                  <li>• Edge computing deployment</li>
                  <li>• Clinical validation</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Technology;