import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Mic, 
  Hand, 
  Cpu, 
  Volume2, 
  ExternalLink, 
  Zap,
  Brain,
  AudioWaveform,
  Settings
} from 'lucide-react';
import SimpleTTS from '@/components/Voice/SimpleTTS';

export default function Dashboard() {
  const [activeModel, setActiveModel] = useState<string | null>(null);

  const models = [
    {
      id: 'voice-cloning',
      title: 'Voice Cloning',
      description: 'Generate speech in your own voice',
      icon: Mic,
      status: 'available',
      link: 'https://huggingface.co/spaces/your-username/voice-cloning',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'sign-language',
      title: 'Sign Language Detection',
      description: 'Real-time gesture recognition',
      icon: Hand,
      status: 'available',
      link: 'https://huggingface.co/spaces/your-username/sign-language',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'esp32-hardware',
      title: 'ESP32 Integration',
      description: 'Hardware controller interface',
      icon: Cpu,
      status: 'connected',
      link: '/hardware',
      color: 'from-green-500 to-green-600'
    }
  ];

  const voiceOptions = [
    { id: 'alloy', name: 'Alloy', language: 'English', accent: 'Neutral' },
    { id: 'echo', name: 'Echo', language: 'English', accent: 'Calm' },
    { id: 'fable', name: 'Fable', language: 'English', accent: 'Expressive' },
    { id: 'onyx', name: 'Onyx', language: 'English', accent: 'Deep' },
    { id: 'nova', name: 'Nova', language: 'English', accent: 'Bright' },
    { id: 'shimmer', name: 'Shimmer', language: 'English', accent: 'Warm' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            AI Voice Control Center
          </h1>
          <p className="text-xl text-muted-foreground">
            Manage your voice models and hardware integrations
          </p>
        </div>

        <Tabs defaultValue="models" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-card">
            <TabsTrigger value="models" className="data-[state=active]:bg-primary">
              <Brain className="w-4 h-4 mr-2" />
              AI Models
            </TabsTrigger>
            <TabsTrigger value="voice-gen" className="data-[state=active]:bg-primary">
              <Volume2 className="w-4 h-4 mr-2" />
              Voice Generator
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-primary">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* AI Models Tab */}
          <TabsContent value="models" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {models.map((model) => {
                const IconComponent = model.icon;
                return (
                  <Card key={model.id} className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${model.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <Badge 
                          variant={model.status === 'connected' ? 'default' : 'secondary'}
                          className="capitalize"
                        >
                          {model.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-foreground">{model.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{model.description}</p>
                      <Button 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                        onClick={() => {
                          if (model.link.startsWith('http')) {
                            window.open(model.link, '_blank');
                          } else {
                            // Handle internal routing
                            setActiveModel(model.id);
                          }
                        }}
                      >
                        {model.link.startsWith('http') ? (
                          <>
                            Launch Model <ExternalLink className="w-4 h-4 ml-2" />
                          </>
                        ) : (
                          <>
                            Configure <Settings className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick Actions */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Zap className="w-5 h-5 text-primary" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-auto p-4 flex-col gap-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                    <AudioWaveform className="w-6 h-6" />
                    <span>Record Voice Sample</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex-col gap-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                    <Hand className="w-6 h-6" />
                    <span>Test Sign Detection</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex-col gap-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                    <Cpu className="w-6 h-6" />
                    <span>ESP32 Status</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Voice Generator Tab */}
          <TabsContent value="voice-gen" className="space-y-6">
            <SimpleTTS voices={voiceOptions} />
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-foreground">System Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <h3 className="font-medium text-foreground">Hardware Connection</h3>
                    <p className="text-sm text-muted-foreground">ESP32 microcontroller status</p>
                  </div>
                  <Badge variant="default">Connected</Badge>
                </div>
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <h3 className="font-medium text-foreground">Model Cache</h3>
                    <p className="text-sm text-muted-foreground">Clear downloaded AI models</p>
                  </div>
                  <Button variant="outline" size="sm">Clear Cache</Button>
                </div>
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <h3 className="font-medium text-foreground">Privacy Settings</h3>
                    <p className="text-sm text-muted-foreground">Manage voice data and recordings</p>
                  </div>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}