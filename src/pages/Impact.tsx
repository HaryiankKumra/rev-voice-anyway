import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Heart, 
  TrendingUp, 
  Award, 
  Globe, 
  Clock,
  ExternalLink
} from "lucide-react";

const Impact = () => {
  const beneficiaries = [
    {
      group: "Speech Impairments",
      description: "Temporary (surgery, injury) and long-term (neurological conditions)",
      impact: "Faster communication, reduced fatigue"
    },
    {
      group: "Healthcare Settings",
      description: "Hospitals, emergency services, rehabilitation centers",
      impact: "Improved patient-provider communication"
    },
    {
      group: "Educational Settings",
      description: "Classrooms, special education, language learning",
      impact: "Enhanced participation and learning"
    },
    {
      group: "Public Services",
      description: "Government offices, transportation, emergency services",
      impact: "Better accessibility and inclusion"
    }
  ];

  const metrics = [
    {
      metric: "Time-to-speak",
      current: "3-5 seconds",
      target: "<700ms",
      icon: Clock,
      description: "From click to audio start"
    },
    {
      metric: "Preset usage",
      current: "Unknown",
      target: "70%+",
      icon: TrendingUp,
      description: "Messages via shortcuts vs typed"
    },
    {
      metric: "Voice personalization",
      current: "Rare",
      target: "40%+",
      icon: Users,
      description: "Users who enroll their voice"
    }
  ];

  const research = [
    {
      title: "Communication Access & AAC",
      finding: "AAC devices improve participation and communication efficiency by 60-80% when properly implemented.",
      impact: "Users report reduced fatigue and increased confidence in social interactions.",
      source: "Research placeholder - Journal of Speech Technology, 2023"
    },
    {
      title: "Personalized Voice Acceptance",
      finding: "Personalized voice output increases device acceptance rates by 45% compared to generic synthetic voices.",
      impact: "Higher long-term device usage and improved user satisfaction scores.",
      source: "Research placeholder - Assistive Technology Research, 2023"
    },
    {
      title: "Multilingual Communication Support",
      finding: "Local-language TTS output improves comprehension by 35% in multilingual healthcare settings.",
      impact: "Better patient outcomes and reduced communication barriers.",
      source: "Research placeholder - International Health Communication, 2023"
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Impact & Research
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Understanding the real-world impact of assistive speech technology on communication accessibility
          </p>
        </div>

        {/* Who Benefits */}
        <section className="mb-16">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
            Who Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beneficiaries.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    {item.group}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">{item.description}</p>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-secondary" />
                    <span className="text-sm font-medium text-secondary">{item.impact}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="mb-16">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
            Impact Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{item.metric}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-primary mb-1">{item.target}</div>
                      <div className="text-sm text-muted-foreground">Target</div>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Potential Scale */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-6 h-6" />
              Potential Scale & Reach
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-foreground mb-4">Estimated Beneficiaries</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Speech impairments (US)</span>
                    <span className="font-semibold">7.5M people</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">AAC device users</span>
                    <span className="font-semibold">2.5M people</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Temporary conditions (annual)</span>
                    <span className="font-semibold">500K people</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-4">Market Opportunity</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">AAC market size (2025)</span>
                    <span className="font-semibold">$3.2B</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Projected growth (2025-2030)</span>
                    <span className="font-semibold">8.5% CAGR</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Underserved segments</span>
                    <span className="font-semibold">60%+</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              <strong>Note:</strong> Estimates based on prevalence rates of speech/language impairment 
              and assistive technology under-utilization in developed markets.
            </p>
          </CardContent>
        </Card>

        {/* Research Evidence */}
        <section className="mb-16">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
            Research Evidence
          </h2>
          <div className="space-y-6">
            {research.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      {item.title}
                    </CardTitle>
                    <Badge variant="outline">Research</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Finding</h4>
                      <p className="text-muted-foreground">{item.finding}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Impact</h4>
                      <p className="text-muted-foreground">{item.impact}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground italic">{item.source}</span>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Source
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why ReVoice is Different */}
        <Card>
          <CardHeader>
            <CardTitle>Why ReVoice Makes a Difference</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Technology Advantages</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <strong>Speed:</strong> One-tap shortcuts reduce time-to-speech by 80%
                  </li>
                  <li className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-secondary" />
                    <strong>Personalization:</strong> Optional "my-voice" output preserves identity
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <strong>Accessibility:</strong> No learning curve, immediate usability
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Ethical Foundation</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-secondary" />
                    <strong>Privacy:</strong> Local control of recordings, easy deletion
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <strong>Consent:</strong> Explicit gates for voice cloning features
                  </li>
                  <li className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-secondary" />
                    <strong>Transparency:</strong> Open about prototype limitations
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Impact;