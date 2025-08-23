import { ArrowRight, Mic, AudioWaveform, Cpu, Speaker, Wifi } from 'lucide-react';

export default function TechFlowChart() {
  const steps = [
    {
      icon: Mic,
      title: "Sign Language Detection",
      description: "Computer vision captures gestures",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: AudioWaveform,
      title: "Voice Cloning",
      description: "AI generates personalized speech",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Cpu,
      title: "Edge Processing",
      description: "ESP32 hardware integration",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Speaker,
      title: "Output Generation",
      description: "Natural speech synthesis",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-background via-card to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            AI Pipeline Flow
          </h2>
          <p className="text-xl text-muted-foreground">
            From gesture to voice in milliseconds
          </p>
        </div>
        
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 via-green-500 to-orange-500 transform -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <div className="w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Hardware Integration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-card border border-border rounded-2xl p-6">
            <Wifi className="w-8 h-8 text-primary" />
            <div className="text-left">
              <h3 className="font-semibold text-foreground">Hardware Integration</h3>
              <p className="text-sm text-muted-foreground">ESP32 microcontroller with real-time processing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}