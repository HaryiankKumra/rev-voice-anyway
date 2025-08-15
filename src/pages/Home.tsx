import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageSquare, 
  Mic, 
  Globe, 
  Shield, 
  Zap, 
  Heart,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Quick Shortcuts",
      description: "Preset phrases mapped to big buttons for instant communication."
    },
    {
      icon: Mic,
      title: "Two Modes",
      description: "Classic TTS & New 'Clone Mode' for personalized speech."
    },
    {
      icon: Globe,
      title: "Inclusive",
      description: "English & Hindi to start; easily extendable to more languages."
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
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Find Your Voice, <span className="text-primary">Fast</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 animate-slide-up">
              One-tap phrases, natural speech, and your own voice—when you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <Button asChild size="lg" className="text-lg px-8 py-3">
                <Link to="/demo">
                  Try Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
                <Link to="/technology">
                  See Technology
                </Link>
              </Button>
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

      {/* Feature Cards */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed for speed, accessibility, and personal expression
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card/50 backdrop-blur">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
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

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Find Your Voice?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the future of assistive communication technology. 
              Try our demo and see how ReVoice can help you express yourself.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-3">
              <Link to="/demo">
                Start Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;