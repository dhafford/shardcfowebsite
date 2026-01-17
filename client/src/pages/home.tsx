import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, BarChart3, PieChart, TrendingUp, ShieldCheck, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logoDark from '@assets/logo-dark.svg';
import ycLogo from '@assets/yc-logo.png';
import khoslaLogo from '@assets/khosla-logo.png';
import pcmLogo from '@assets/pcm-logo.webp';
import trueLogo from '@assets/true-logo.png';

// Terminal Component
const Terminal = () => {
  const [visibleLines, setVisibleLines] = React.useState<number>(0);

  const lines = [
    { type: 'prompt', text: '$ shardcfo' },
    { type: 'output', text: '>financial_modeling' },
    { type: 'output', text: '>operational_modeling' },
    { type: 'output', text: '>capitalization_optimization' },
    { type: 'output', text: '>investor_facing_material_creation' },
    { type: 'output', text: '>cashflow_modeling' },
    { type: 'output', text: '>kpi_metrics_reporting' },
    { type: 'output', text: '>transition_advisory' },
    { type: 'cursor', text: '' }
  ];

  React.useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    lines.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleLines(index + 1);
      }, index * 200);
      timers.push(timer);
    });
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <div className="bg-[#0a0a0a] rounded-lg shadow-[0_20px_60px_rgba(0,255,0,0.15)] overflow-hidden border border-[#111] w-full">
      <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-2 border-b border-[#222]">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        <span className="text-[#aaa] text-xs ml-2 font-mono">terminal — bash — 80×24</span>
      </div>
      <div className="p-6 bg-black min-h-[300px] font-mono text-base leading-relaxed">
        {lines.slice(0, visibleLines).map((line, index) => (
          <div
            key={index}
            className="animate-in fade-in slide-in-from-left-2 duration-300"
          >
            {line.type === 'prompt' && (
              <span className="text-[#00ff00] font-bold">{line.text}</span>
            )}
            {line.type === 'output' && (
              <span className="text-[#00d9ff] block">{line.text}</span>
            )}
            {line.type === 'cursor' && (
              <span>
                <span className="text-[#00ff00] font-bold">$ </span>
                <span className="inline-block w-2.5 h-[18px] bg-[#00ff00] animate-pulse"></span>
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Navigation Component
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-start pt-2 justify-between">
        <div className="flex flex-col items-start -mt-4">
          <img src={logoDark} alt="ShardCFO" className="h-20 w-auto" />
          <span className="hidden sm:block text-sm text-muted-foreground -mt-5">Fractional strategic finance that enables builders to focus on building.</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 mt-4">
          <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="/resources" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Resources</a>
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
          <a href="#services" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Services</a>
          <a href="/resources" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Resources</a>
          <a href="/contact" className="w-full">
            <Button className="w-full rounded-full">Get Started</Button>
          </a>
        </div>
      )}
    </nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary/80 mb-4 tracking-wide uppercase">Fractional CFO for Seed to Series B</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.1] mb-6">
            Stop flying blind on your runway.
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            We help tech founders build investor-ready financials, extend runway, and close rounds faster. No full-time CFO salary required.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact">
              <Button size="lg" className="rounded-full px-8 text-base">
                Get Your Free Assessment
              </Button>
            </a>
            <a href="/resources">
              <Button variant="outline" size="lg" className="rounded-full px-8 text-base group">
                View Resources <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>YC-backed founders</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>$50M+ raised</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
};

// Social Proof
const SocialProof = () => {
  return (
    <section className="py-12 border-y border-border/40 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-medium text-muted-foreground mb-8">TRUSTED BY FOUNDERS BACKED BY TOP-TIER INVESTORS</p>
        <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
           <img src={ycLogo} alt="Y Combinator" className="h-24 md:h-32 w-auto opacity-70 hover:opacity-100 transition-opacity" />
           <img src={khoslaLogo} alt="Khosla Ventures" className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
           <img src={pcmLogo} alt="PCM" className="h-8 md:h-10 w-auto bg-black p-2 rounded opacity-70 hover:opacity-100 transition-opacity" />
           <img src={trueLogo} alt="True Ventures" className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </section>
  );
};

// Services Grid
const Services = () => {
  const services = [
    {
      title: "Fractional CFO Leadership",
      description: "Part-time executive finance leadership providing board management, investor relations, strategic counsel, and cross-functional financial oversight."
    },
    {
      title: "Financial Planning & Analysis",
      description: "Long-range strategic planning, annual operating plans, departmental budgeting, rolling forecasts, and scenario modeling."
    },
    {
      title: "Three-Statement Financial Modeling",
      description: "Institutional-grade P&L, balance sheet, and cash flow models with dynamic working capital, hiring plans, and investor-ready outputs."
    },
    {
      title: "Unit Economics & KPI Architecture",
      description: "LTV, CAC, payback, contribution margin, and retention curve frameworks. Executive dashboards and KPI systems that scale."
    },
    {
      title: "Cash Management & Treasury",
      description: "13-week cash forecasting, runway analysis, liquidity planning, banking relationships, and capital allocation strategies."
    },
    {
      title: "Fundraising & Data Room Prep",
      description: "Financial models for raising capital, dilution modeling, valuation support, investor storytelling, and full data room creation."
    },
    {
      title: "Strategic Decision Support",
      description: "Pricing strategy, build-vs-buy analysis, M&A modeling, geographic expansion economics, and capital structure optimization."
    },
    {
      title: "Management Reporting Infrastructure",
      description: "Automated KPI dashboards, reporting systems, and BI tools. Real-time, decision-ready financial insights."
    },
    {
      title: "Board Materials & Executive Communication",
      description: "Institutional-grade board decks, KPI scorecards, variance analysis, strategic updates, and forward-looking guidance."
    }
  ];

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Everything you need to raise and scale.</h2>
        <p className="text-lg text-muted-foreground max-w-2xl">From first pitch deck to Series B board meetings, we embed with your team to build the financial infrastructure that investors expect.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="p-6 rounded-2xl border border-border hover:border-primary/50 hover:bg-secondary/20 transition-all group cursor-default"
          >
            <div className="text-sm font-medium text-muted-foreground mb-2">{String(i + 1).padStart(2, '0')}</div>
            <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// FAQ / Process
const Process = () => {
  return (
    <section className="py-24 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">Common Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">What is a fractional CFO?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-base leading-relaxed">
            A fractional CFO provides high-level financial strategy and leadership on a part-time or contract basis. This allows early-stage companies to access executive expertise without the cost of a full-time hire.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg">How do you integrate with our team?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-base leading-relaxed">
             We embed ourselves in your Slack, attend key leadership meetings, and work directly with your operations team. We act as a true member of your team, not an external consultant.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg">What stage companies do you work with?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-base leading-relaxed">
            We primarily specialize in Seed to Series B technology startups. Our expertise is best suited for high-growth environments where cash management and strategic forecasting are critical.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

// CTA
const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-primary text-primary-foreground rounded-[2rem] p-12 md:p-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Your next round is closer than you think.</h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Get a free 30-minute assessment of your financial readiness. We'll identify gaps and show you exactly what investors will ask for.
          </p>
          <a href="/contact">
            <Button size="lg" variant="secondary" className="rounded-full px-8 h-12 text-base font-semibold hover:bg-white transition-colors">
              Get Your Free Assessment
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/40 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <img src={logoDark} alt="ShardCFO" className="h-20 w-auto" />
        </div>
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

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
