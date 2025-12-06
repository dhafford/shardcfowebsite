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
import shardHeroImage from '@assets/generated_images/abstract_glass_crystal_shard_on_white_background.png';

// Navigation Component
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary rounded-sm rotate-45" />
          <span className="font-display font-bold text-xl tracking-tight">ShardCFO</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#expertise" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Expertise</a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
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
          <a href="#services" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#expertise" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Expertise</a>
          <a href="#about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>About</a>
          <Button className="w-full rounded-full">Get Started</Button>
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
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6">
            Financial clarity for <span className="text-muted-foreground">high-growth</span> startups.
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Expert fractional CFO services to help you scale smarter, fundraise faster, and operate with confidence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full px-8 text-base">
              Book a Consultation
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 text-base group">
              View Case Studies <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden flex items-center justify-center"
        >
           <img 
            src={shardHeroImage}
            alt="Abstract Financial Clarity" 
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
           />
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
        <p className="text-sm font-medium text-muted-foreground mb-8">TRUSTED BY FOUNDERS BACKED BY</p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 grayscale">
           {/* Mock Logos - Using simple text for minimalism or svg shapes */}
           <div className="text-xl font-bold tracking-widest font-mono">Y COMBINATOR</div>
           <div className="text-xl font-bold tracking-widest font-mono">SEQUOIA</div>
           <div className="text-xl font-bold tracking-widest font-mono">ANDREESSEN</div>
           <div className="text-xl font-bold tracking-widest font-mono">INDEX</div>
        </div>
      </div>
    </section>
  );
};

// Services Grid
const Services = () => {
  const services = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Financial Modeling",
      description: "Robust, scenario-based forecasting to guide strategic decisions and fundraising."
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Bookkeeping & Control",
      description: "Clean, audit-ready books and implemented controls to ensure compliance."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Strategic Finance",
      description: "Unit economics analysis, pricing strategy, and board meeting preparation."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Cash Management",
      description: "Treasury management and runway optimization to extend your company's life."
    }
  ];

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">More than just spreadsheets.</h2>
        <p className="text-lg text-muted-foreground max-w-2xl">We act as your strategic partner, embedding ourselves in your team to drive growth.</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl border border-border hover:border-primary/50 hover:bg-secondary/20 transition-all group cursor-default"
          >
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              {s.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.description}</p>
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
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Ready to scale with confidence?</h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Join the founders who trust ShardCFO for their financial infrastructure.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-8 h-12 text-base font-semibold hover:bg-white transition-colors">
            Schedule Your Free Audit
          </Button>
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
          <div className="w-5 h-5 bg-primary rounded-sm rotate-45" />
          <span className="font-display font-bold text-lg">ShardCFO</span>
        </div>
        <div className="flex gap-8 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
          <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
        </div>
        <div className="text-sm text-muted-foreground">
          © 2024 ShardCFO. All rights reserved.
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
