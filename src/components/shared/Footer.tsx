import { Link } from 'react-router-dom';
import { Zap, Heart, Github, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="glass-nav border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-gradient">FixFlow</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering your repair journey with AI-powered guides and expert knowledge.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="hover-scale">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-scale">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-scale">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/guides" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Repair Guides
                </Link>
              </li>
              <li>
                <Link to="/devices" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Device Library
                </Link>
              </li>
              <li>
                <Link to="/ai-advisor" className="text-muted-foreground hover:text-foreground transition-smooth">
                  AI Advisor
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Tool Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/forum" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Forum
                </Link>
              </li>
              <li>
                <Link to="/contribute" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Contribute
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/experts" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Expert Network
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © 2024 FixFlow. Made with <Heart className="w-4 h-4 inline text-destructive" /> for the repair community.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Version 1.0.0 • Built with React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}