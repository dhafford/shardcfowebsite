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

// Metrics Table Data
const metricsData = [
  { metric: "Monthly Recurring Revenue (MRR)", definition: "Total predictable monthly subscription revenue from active customers" },
  { metric: "Annual Recurring Revenue (ARR)", definition: "Annualized run rate: MRR × 12" },
  { metric: "Customer Churn Rate (Logo Churn)", definition: "% of customers lost during a period (e.g. month)" },
  { metric: "Revenue Churn Rate (MRR / Dollar Churn)", definition: "% of MRR lost due to cancellations or downgrades (gross) or net of expansion (net)" },
  { metric: "Customer Acquisition Cost (CAC)", definition: "Cost to acquire a new customer (marketing + sales spend ÷ # of new customers)" },
  { metric: "Customer Lifetime Value (LTV or CLV)", definition: "Estimated gross profit from an average customer over their lifetime" },
  { metric: "LTV : CAC Ratio", definition: "LTV divided by CAC — measures return on acquisition investment" },
  { metric: "Average Revenue Per User (ARPU)", definition: "MRR ÷ number of active customers (or accounts)" },
  { metric: "Net Revenue Retention (NRR)", definition: "Revenue retained from existing customers, including expansion, contractions, and churn" },
  { metric: "CAC Payback Period", definition: "Time required to recover acquisition cost from customer revenue (or gross margin)" },
];

export default function SaaSMetricsGuide() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <main className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-4xl mx-auto">
        <a href="/resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block">
          ← Back to Resources
        </a>

        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">SaaS Metrics Dashboard Guide</h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Why Track SaaS Metrics</h2>
            <p className="text-muted-foreground leading-relaxed">
              SaaS businesses rely on recurring revenue, retention, churn and expansion — traditional GAAP metrics often miss those dynamics. A dedicated metrics dashboard helps monitor health, growth, unit economics and sustainability.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Core Metrics & Definitions</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Metric</th>
                    <th className="text-left py-3 px-4 font-semibold">Definition / What It Measures</th>
                  </tr>
                </thead>
                <tbody>
                  {metricsData.map((row, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-3 px-4 font-medium">{row.metric}</td>
                      <td className="py-3 px-4 text-muted-foreground">{row.definition}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Example: Interpreting the Metrics</h2>
            <p className="text-muted-foreground mb-4">Assume a company has the following in January:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-6">
              <li>Active customers at start: 1,000</li>
              <li>Customers lost by end of month: 20</li>
              <li>New customers added: 50</li>
              <li>Starting MRR: $100,000</li>
              <li>MRR lost (cancellations/downgrades): $5,000</li>
              <li>MRR gained (upgrades/expansion): $2,000</li>
              <li>Sales & marketing spend: $15,000</li>
              <li>Average monthly revenue per customer (pre-churn/upgrade): $100</li>
            </ul>
            <p className="text-muted-foreground mb-4">Then:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-6">
              <li>Customer churn rate = (20 ÷ 1,000) × 100 = <strong className="text-foreground">2%</strong></li>
              <li>Gross revenue churn rate = (5,000 ÷ 100,000) × 100 = <strong className="text-foreground">5%</strong></li>
              <li>Net MRR change = (50 × 100 + 2,000) − 5,000 = <strong className="text-foreground">+$7,000</strong> → end-of-month MRR = $107,000</li>
              <li>ARR ≈ $107,000 × 12 = <strong className="text-foreground">$1,284,000</strong></li>
              <li>CAC = $15,000 ÷ 50 = <strong className="text-foreground">$300 per customer</strong></li>
              <li>LTV (simple) = $100 ÷ 0.02 = <strong className="text-foreground">$5,000 per customer</strong></li>
              <li>LTV:CAC ≈ 5,000 ÷ 300 ≈ <strong className="text-foreground">16.7</strong></li>
            </ul>
            <p className="text-muted-foreground">
              This indicates strong unit economics, assuming churn and ARPU stay stable.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Track metrics monthly and consistently</li>
              <li>Segment by customer cohorts, plan type, acquisition channel to identify patterns</li>
              <li>Combine acquisition metrics (CAC, LTV) with retention metrics (churn, NRR, expansion)</li>
              <li>Visualize trends: MRR growth, churn, cohort retention, LTV:CAC over time</li>
              <li>Use model for forecasting, planning and investor reports</li>
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
