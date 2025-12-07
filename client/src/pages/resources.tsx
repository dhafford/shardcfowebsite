import React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoDark from '@assets/logo-dark.svg';

// Navigation Component
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src={logoDark} alt="ShardCFO" className="h-20 w-auto" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="/resources" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Resources</a>
          <a href="/#expertise" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Expertise</a>
          <a href="/#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
          <Button variant="default" size="sm" className="rounded-full px-6">
            Get Started
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-4">
          <a href="/#services" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Services</a>
          <a href="/resources" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Resources</a>
          <a href="/#expertise" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Expertise</a>
          <a href="/#about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>About</a>
          <Button className="w-full rounded-full">Get Started</Button>
        </div>
      )}
    </nav>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/40 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <a href="/" className="flex items-center gap-2">
          <img src={logoDark} alt="ShardCFO" className="h-20 w-auto" />
        </a>
        <div className="flex gap-8 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
        </div>
        <div className="text-sm text-muted-foreground">
          © 2025 ShardCFO. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default function Resources() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <main className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Resources</h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Guides, templates, and insights to help you manage your startup's finances.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <a
            href="/resources/saas-metrics-guide"
            className="group block p-6 border border-border rounded-lg hover:border-primary/50 hover:bg-muted/50 transition-all"
          >
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              SaaS Metrics Dashboard Guide
            </h3>
            <p className="text-muted-foreground text-sm">
              Learn the core metrics every SaaS business should track: MRR, ARR, churn, CAC, LTV, and more.
            </p>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
