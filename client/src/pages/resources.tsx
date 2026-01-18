import React from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoDark from '@assets/logo-dark.svg';
import FinancialModelingDiagram from "@/components/FinancialModelingDiagram";

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
          <a href="/resources" className="text-sm font-medium text-foreground transition-colors">Resources</a>
          <a href="/#expertise" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Expertise</a>
          <a href="/#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="/contact">
            <Button variant="default" size="sm" className="rounded-full px-6">
              Get Started
            </Button>
          </a>
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
          <a href="/contact">
            <Button className="w-full rounded-full">Get Started</Button>
          </a>
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
        </div>
        <div className="text-sm text-muted-foreground">
          © 2025 ShardCFO. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const resources = [
  {
    title: "The Board Package That Gets Investors Excited",
    description: "Learn how to transform your board deck from a compliance exercise into a strategic weapon that energizes investors and unlocks their networks.",
    href: "/resources/board-package-guide",
    category: "Board & Investor Relations"
  },
  {
    title: "Building Your First Finance Team",
    description: "How fractional CFOs architect finance functions that scale—from seed stage through Series B and beyond.",
    href: "/resources/finance-team-building",
    category: "Finance Operations"
  },
  {
    title: "R&D Tax Credits and Money Left on the Table",
    description: "American businesses leave $20-65 billion in tax credits unclaimed every year. Here's your playbook for capturing what you're owed.",
    href: "/resources/tax-credits-guide",
    category: "Tax Strategy"
  },
  {
    title: "SaaS Metrics Dashboard Guide",
    description: "Learn the core metrics every SaaS business should track: MRR, ARR, churn, CAC, LTV, and more.",
    href: "/resources/saas-metrics-guide",
    category: "SaaS Metrics"
  },
  {
    title: "From Accounting Data to Financial Models",
    description: "The transformation from backward-looking compliance to forward-looking strategy requires systematic processes, not periodic heroics.",
    href: "/resources/accounting-to-models",
    category: "Financial Modeling"
  },
  {
    title: "The Spreadsheet Mistakes That Sink Startups",
    description: "DIY financial modeling costs founders far more than they realize—in blown deals, wasted time, and lost credibility.",
    href: "/resources/spreadsheet-mistakes",
    category: "Financial Modeling"
  }
];

export default function Resources() {
  const [isDiagramOpen, setIsDiagramOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <main className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Resources</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
          Guides, frameworks, and insights to help you build investor-ready financials and scale your startup smarter.
        </p>

        {/* Financial Modeling Architecture Banner */}
        <div className="mb-12 border border-border rounded-2xl overflow-hidden">
          <button
            onClick={() => setIsDiagramOpen(!isDiagramOpen)}
            className="w-full p-6 md:p-8 flex items-center justify-between bg-secondary/20 hover:bg-secondary/30 transition-colors text-left"
          >
            <div>
              <span className="text-xs font-medium text-primary/70 uppercase tracking-wider">Interactive Diagram</span>
              <h2 className="text-xl md:text-2xl font-bold mt-1">Financial Modeling Architecture</h2>
              <p className="text-sm text-muted-foreground mt-1">Complete data flow from source transactions to executive outputs</p>
            </div>
            <ChevronDown
              className={`w-6 h-6 text-muted-foreground transition-transform duration-300 ${isDiagramOpen ? 'rotate-180' : ''}`}
            />
          </button>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${isDiagramOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <FinancialModelingDiagram />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.href}
              className="group block p-8 border border-border rounded-2xl hover:border-primary/50 hover:bg-secondary/20 transition-all"
            >
              <span className="text-xs font-medium text-primary/70 uppercase tracking-wider">{resource.category}</span>
              <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                {resource.title}
              </h3>
              <p className="text-muted-foreground">
                {resource.description}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-16 p-8 md:p-12 bg-secondary/20 border border-border/40 rounded-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need personalized guidance?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Our fractional CFO services help startups implement these strategies and build financial infrastructure that scales.
          </p>
          <a href="/contact">
            <Button className="rounded-full px-8">
              Get Your Free Assessment
            </Button>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
