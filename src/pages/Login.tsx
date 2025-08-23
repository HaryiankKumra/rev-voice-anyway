import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AIBrain3D from '@/components/3D/AIBrain3D';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - 3D Animation */}
        <div className="hidden lg:block">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Welcome to <span className="text-primary">ReVoice</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              AI-powered voice cloning and sign language detection
            </p>
          </div>
          <AIBrain3D />
        </div>

        {/* Right Side - Auth Form */}
        <Card className="w-full max-w-md mx-auto bg-card/50 backdrop-blur-sm border-border">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-foreground">
              Access Portal
            </CardTitle>
            <p className="text-muted-foreground">
              Sign in to unlock AI voice features
            </p>
          </CardHeader>
          <CardContent>
            <Auth
              supabaseClient={supabase}
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: 'hsl(263 70% 60%)',
                      brandAccent: 'hsl(263 70% 50%)',
                      brandButtonText: 'white',
                      defaultButtonBackground: 'hsl(240 8% 8%)',
                      defaultButtonBackgroundHover: 'hsl(240 6% 12%)',
                      defaultButtonBorder: 'hsl(240 3.7% 15.9%)',
                      defaultButtonText: 'hsl(0 0% 98%)',
                      dividerBackground: 'hsl(240 3.7% 15.9%)',
                      inputBackground: 'hsl(240 3.7% 15.9%)',
                      inputBorder: 'hsl(240 3.7% 15.9%)',
                      inputBorderHover: 'hsl(263 70% 60%)',
                      inputBorderFocus: 'hsl(263 70% 60%)',
                      inputText: 'hsl(0 0% 98%)',
                      inputLabelText: 'hsl(240 5% 64.9%)',
                      inputPlaceholder: 'hsl(240 5% 64.9%)',
                      messageText: 'hsl(0 0% 98%)',
                      messageTextDanger: 'hsl(0 62.8% 30.6%)',
                      anchorTextColor: 'hsl(263 70% 60%)',
                      anchorTextHoverColor: 'hsl(263 70% 70%)',
                    },
                    space: {
                      spaceSmall: '4px',
                      spaceMedium: '8px',
                      spaceLarge: '16px',
                      labelBottomMargin: '8px',
                      anchorBottomMargin: '4px',
                      emailInputSpacing: '4px',
                      socialAuthSpacing: '4px',
                      buttonPadding: '10px 15px',
                      inputPadding: '10px 15px',
                    },
                    fontSizes: {
                      baseBodySize: '13px',
                      baseInputSize: '14px',
                      baseLabelSize: '14px',
                      baseButtonSize: '14px',
                    },
                    fonts: {
                      bodyFontFamily: `'Inter', ui-sans-serif, sans-serif`,
                      buttonFontFamily: `'Inter', ui-sans-serif, sans-serif`,
                      inputFontFamily: `'Inter', ui-sans-serif, sans-serif`,
                      labelFontFamily: `'Inter', ui-sans-serif, sans-serif`,
                    },
                    borderWidths: {
                      buttonBorderWidth: '1px',
                      inputBorderWidth: '1px',
                    },
                    radii: {
                      borderRadiusButton: '8px',
                      buttonBorderRadius: '8px',
                      inputBorderRadius: '8px',
                    },
                  },
                },
                className: {
                  container: 'space-y-4',
                  button: 'transition-all duration-200 hover:scale-105',
                  input: 'transition-all duration-200',
                },
              }}
              providers={['google', 'github']}
              redirectTo={`${window.location.origin}/dashboard`}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}