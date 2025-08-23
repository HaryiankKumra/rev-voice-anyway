import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Volume2, Play, Pause, Download, Mic } from 'lucide-react';

interface Voice {
  id: string;
  name: string;
  language: string;
  accent: string;
}

interface SimpleTTSProps {
  voices: Voice[];
}

export default function SimpleTTS({ voices }: SimpleTTSProps) {
  const [text, setText] = useState('Hello! This is a sample of AI-generated speech using advanced text-to-speech technology.');
  const [selectedVoice, setSelectedVoice] = useState(voices[0]?.id || '');
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState([1.0]);
  const [pitch, setPitch] = useState([1.0]);
  const audioRef = useRef<HTMLAudioElement>(null);

  const presetPhrases = [
    "Hello, how can I help you today?",
    "Thank you for your assistance.",
    "I'm feeling well, thank you for asking.",
    "Could you please help me with this?",
    "I understand what you're saying.",
    "Let me think about that for a moment.",
  ];

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      const voices = speechSynthesis.getVoices();
      const selectedVoiceObj = voices.find(v => v.name.toLowerCase().includes(selectedVoice.toLowerCase()));
      
      if (selectedVoiceObj) {
        utterance.voice = selectedVoiceObj;
      }
      
      utterance.rate = speed[0];
      utterance.pitch = pitch[0];
      
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      
      speechSynthesis.cancel();
      speechSynthesis.speak(utterance);
    }
  };

  const handleStop = () => {
    speechSynthesis.cancel();
    setIsPlaying(false);
  };

  const handleDownload = async () => {
    // This would typically call an API to generate and download audio
    // For now, we'll show a placeholder
    alert('Download feature would generate an MP3 file using a TTS API');
  };

  return (
    <div className="space-y-6">
      {/* Main TTS Interface */}
      <Card className="bg-card/50 backdrop-blur-sm border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Volume2 className="w-5 h-5 text-primary" />
            Text-to-Speech Generator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Text Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Text to Speak</label>
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text to convert to speech..."
              className="min-h-24 bg-input border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          {/* Voice Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Voice</label>
              <Select value={selectedVoice} onValueChange={setSelectedVoice}>
                <SelectTrigger className="bg-input border-border text-foreground">
                  <SelectValue placeholder="Select a voice" />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border">
                  {voices.map((voice) => (
                    <SelectItem key={voice.id} value={voice.id} className="text-foreground">
                      <div className="flex items-center justify-between w-full">
                        <span>{voice.name}</span>
                        <div className="flex gap-1 ml-2">
                          <Badge variant="secondary" className="text-xs">{voice.language}</Badge>
                          <Badge variant="outline" className="text-xs">{voice.accent}</Badge>
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Speed: {speed[0]}</label>
                <Slider
                  value={speed}
                  onValueChange={setSpeed}
                  max={2}
                  min={0.5}
                  step={0.1}
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Pitch: {pitch[0]}</label>
                <Slider
                  value={pitch}
                  onValueChange={setPitch}
                  max={2}
                  min={0.5}
                  step={0.1}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex gap-3">
            <Button 
              onClick={isPlaying ? handleStop : handleSpeak}
              disabled={!text.trim()}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4 mr-2" />
                  Stop
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Speak
                </>
              )}
            </Button>
            
            <Button variant="outline" onClick={handleDownload} disabled={!text.trim()}>
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Preset Phrases */}
      <Card className="bg-card/50 backdrop-blur-sm border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Quick Phrases</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {presetPhrases.map((phrase, index) => (
              <Button
                key={index}
                variant="outline"
                className="justify-start text-left h-auto p-3 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                onClick={() => setText(phrase)}
              >
                <Mic className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="truncate">{phrase}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}