import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Lightbulb, 
  Heart, 
  Code, 
  Mic,
  ArrowRight
} from "lucide-react";

const About = () => {
  const team = [
    {
      role: "Product & UX Design",
      description: "User research, accessibility design, and interface development"
    },
    {
      role: "AI/ML Engineering", 
      description: "Voice cloning implementation, model optimization, and speech processing"
    },
    {
      role: "Frontend Development",
      description: "React application, Web Speech API integration, and responsive design"
    },
    {
      role: "Accessibility Research",
      description: "WCAG compliance, user testing, and assistive technology compatibility"
    }
  ];

  const achievements = [
    {
      title: "Functional Prototype",
      description: "Working demo with both classic TTS and voice cloning capabilities",
      icon: Target
    },
    {
      title: "Accessibility First",
      description: "WCAG AA compliant design with keyboard navigation and screen reader support",
      icon: Heart
    },
    {
      title: "Privacy Focused",
      description: "Local processing options and transparent data handling practices",
      icon: Users
    },
    {
      title: "Open Source Ready",
      description: "Built with open technologies and designed for community contribution",
      icon: Code
    }
  ];

  const roadmap = [
    {
      phase: "Current Sprint",
      items: [
        "✓ Core TTS functionality",
        "✓ Voice recording and enrollment",
        "✓ Responsive web interface",
        "✓ Privacy controls and consent flows"
      ]
    },
    {
      phase: "Next Sprint",
      items: [
        "Real-time voice conversion",
        "Enhanced emotion controls",
        "Mobile app development",
        "Clinical user testing"
      ]
    },
    {
      phase: "Future Vision",
      items: [
        "Multi-language expansion (10+ languages)",
        "Edge computing deployment",
        "Healthcare integration",
        "Community voice sharing (opt-in)"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About ReVoice
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Empowering communication through innovative assistive speech technology
          </p>
        </div>

        {/* Mission */}
        <Card className="mb-12 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Heart className="w-6 h-6 text-primary" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To democratize communication by making advanced speech technology accessible, 
              fast, and respectful of personal identity. We believe everyone deserves to 
              express themselves authentically, whether through quick shortcuts or 
              their own personalized voice.
            </p>
          </CardContent>
        </Card>

        {/* What We Built */}
        <section className="mb-16">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
            What We Built This Sprint
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{achievement.title}</h3>
                        <p className="text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
            Team & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    {member.role}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section className="mb-16">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
            Development Roadmap
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {roadmap.map((phase, index) => (
              <Card key={index} className={index === 0 ? "border-primary/20" : ""}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {index === 0 && <Badge variant="secondary">Current</Badge>}
                    {index === 1 && <ArrowRight className="w-5 h-5 text-muted-foreground" />}
                    {index === 2 && <Lightbulb className="w-5 h-5 text-warning" />}
                    {phase.phase}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Open Source Acknowledgments */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-6 h-6" />
              Open Source Acknowledgments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-foreground mb-4">Core Technologies</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• React & TypeScript for robust UI development</li>
                  <li>• Tailwind CSS for responsive design system</li>
                  <li>• Web Speech API for client-side TTS</li>
                  <li>• MediaRecorder API for voice capture</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-4">AI/ML Models</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• XTTS v2 for voice cloning capabilities</li>
                  <li>• OpenVoice as alternative cloning backend</li>
                  <li>• Browser speech synthesis engines</li>
                  <li>• Community voice datasets (with consent)</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              We're grateful to the open source community and accessibility researchers 
              who make this technology possible. Special thanks to the AAC user community 
              for their invaluable feedback and guidance.
            </p>
          </CardContent>
        </Card>

        {/* Vision */}
        <Card className="border-secondary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Mic className="w-6 h-6 text-secondary" />
              Our Vision for the Future
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We envision a world where communication barriers disappear through thoughtful 
              technology design. ReVoice represents our commitment to building tools that 
              enhance human connection while respecting privacy, identity, and choice.
            </p>
            <p className="text-muted-foreground">
              This prototype is just the beginning. We're working toward clinical validation, 
              broader language support, and deeper integration with existing assistive 
              technologies—always with the AAC community at the center of our design process.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;