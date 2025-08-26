import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageSquare, 
  Mic, 
  Globe, 
  Shield, 
  Zap, 
  Heart,
  ArrowRight,
  CheckCircle,
  Hand,
  Cpu,
  Brain,
  AudioWaveform,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import AIBrain3D from "@/components/3D/AIBrain3D";
import TechFlowChart from "@/components/FlowChart/TechFlowChart";

const Home = () => {
  const features = [
    {
      icon: Hand,
      title: "Sign Language Detection",
      description: "Real-time gesture recognition with computer vision AI.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: AudioWaveform,
      title: "Voice Cloning",
      description: "Generate speech in your own personalized voice.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Cpu,
      title: "ESP32 Hardware",
      description: "Edge computing with real-time processing capabilities.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Brain,
      title: "AI Pipeline",
      description: "Advanced neural networks for natural speech synthesis.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Pick phrase",
      description: "Choose from presets or type your message"
    },
    {
      number: 2,
      title: "Speak",
      description: "Generate natural-sounding speech instantly"
    },
    {
      number: 3,
      title: "Personalize",
      description: "Optionally use your own voice for familiar sound"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-card to-background min-h-screen flex items-center">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <h1 className="font-heading text-5xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
                AI Voice <span className="text-primary">Revolution</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 animate-slide-up">
                Sign language detection, voice cloning, and hardware integration. The future of assistive communication is here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
                <Button asChild size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link to="/login">
                    Enter Portal <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link to="#demo">
                    Watch Demo
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <AIBrain3D />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-destructive font-bold">!</span>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
                    The Problem
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Typing takes time; synthetic voices feel impersonal. People need fast, 
                    natural communication that sounds like them.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
                    Our Solution
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Predictive shortcuts + expressive TTS + optional personal voice. 
                    Communicate naturally, quickly, and authentically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Flow Chart */}
      <TechFlowChart />

      {/* Feature Cards */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-card via-background to-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              AI-Powered Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge technology for seamless communication
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border-border bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to natural, personalized communication
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0" />
                )}
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4 relative z-10">
                  {step.number}
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust/Privacy */}
      <section className="py-16 lg:py-24 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-12 h-12 text-primary mr-4" />
              <Heart className="w-12 h-12 text-secondary" />
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Your Voice, Your Privacy
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Voice stays yours. Local recording; you control deletion. 
              Built with privacy-first design and transparent data practices.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, text: "Local Processing" },
                { icon: Zap, text: "Fast & Secure" },
                { icon: Heart, text: "User Control" },
                { icon: CheckCircle, text: "Transparent" }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex flex-col items-center">
                    <IconComponent className="w-8 h-8 text-primary mb-2" />
                    <span className="text-sm font-medium text-foreground">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-card via-background to-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground">
                Have questions? We'd love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Name
                        </label>
                        <Input 
                          placeholder="Your name"
                          className="bg-input border-border text-foreground"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email
                        </label>
                        <Input 
                          type="email"
                          placeholder="your@email.com"
                          className="bg-input border-border text-foreground"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <Input 
                        placeholder="How can we help?"
                        className="bg-input border-border text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea 
                        placeholder="Tell us about your project or question..."
                        rows={4}
                        className="bg-input border-border text-foreground"
                      />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">Email Us</h3>
                      <p className="text-muted-foreground">hello@revoice.dev</p>
                      <p className="text-muted-foreground">hkumra_be23@thapar.edu</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">Call Us</h3>
                      <p className="text-muted-foreground">+91 7986520232</p>
                      <p className="text-muted-foreground">Available 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">Visit Us</h3>
                      <p className="text-muted-foreground">AI Research Lab</p>
                      <p className="text-muted-foreground">Thapar University, Patiala</p>
                    </div>
                  </div>
                </div>

                <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground text-lg mb-2">
                      Open Source Project
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      ReVoice is built with love for the community. Check out our code and contribute!
                    </p>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      View on GitHub
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Experience AI Voice?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join the future of communication technology. Access our AI models and start building.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/login">
                Enter Portal <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
