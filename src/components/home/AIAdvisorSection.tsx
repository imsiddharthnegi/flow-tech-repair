import { useState } from 'react';
import { Bot, Sparkles, ArrowRight, Zap, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

export default function AIAdvisorSection() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsLoading(true);
    // Simulate AI processing
    setTimeout(() => {
      setIsLoading(false);
      // Here you would typically navigate to results or show them
    }, 2000);
  };

  const exampleQueries = [
    'iPhone 12 screen is flickering after drop',
    'MacBook Pro won\'t turn on after water damage',
    'Samsung Galaxy battery drains very fast',
    'iPad touch screen not responding',
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="glass-card px-4 py-2 text-sm font-medium mb-4">
              <Bot className="w-4 h-4 mr-2" />
              AI-Powered Diagnostics
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Your <span className="text-gradient">AI Repair Advisor</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Describe your device issue in natural language and get instant, personalized repair recommendations
            </p>
          </div>

          {/* AI Interface */}
          <div className="glass-card p-8 mb-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Describe your device issue... (e.g., 'My iPhone 14 screen is green and flickering after I dropped it')"
                  className="pl-12 pr-32 py-6 text-lg border-border/50 focus:border-primary/50 transition-smooth"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  disabled={!query.trim() || isLoading}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 gradient-primary hover-glow transition-smooth"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 mr-2" />
                      Get AI Help
                    </>
                  )}
                </Button>
              </div>
            </form>

            {/* Example Queries */}
            <div className="mt-6">
              <p className="text-sm text-muted-foreground mb-3">Try these examples:</p>
              <div className="flex flex-wrap gap-2">
                {exampleQueries.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(example)}
                    className="text-sm bg-surface/50 hover:bg-surface text-muted-foreground hover:text-foreground px-3 py-1 rounded-full transition-smooth"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Smart Diagnosis</h3>
              <p className="text-sm text-muted-foreground">
                AI analyzes your description to identify potential issues and root causes
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Personalized Guides</h3>
              <p className="text-sm text-muted-foreground">
                Get curated repair guides tailored to your specific device and issue
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Step-by-Step</h3>
              <p className="text-sm text-muted-foreground">
                Follow detailed instructions with visual aids and expert tips
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}