import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoDark from '@assets/logo-dark.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src={logoDark} alt="ShardCFO" className="h-20 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="/#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="/resources" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Resources</a>
          <a href="/contact">
            <Button variant="default" size="sm" className="rounded-full px-6">
              Get Started
            </Button>
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-4">
          <a href="/#services" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Services</a>
          <a href="/resources" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Resources</a>
          <a href="/contact">
            <Button className="w-full rounded-full">Get Started</Button>
          </a>
        </div>
      )}
    </nav>
  );
};

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

export default function TaxCreditsGuide() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <article className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a href="/resources" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Resources
            </a>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              R&D Tax Credits and Other Money Left on the Table
            </h1>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              American businesses leave $20-65 billion in tax credits unclaimed every year. Here's your playbook for capturing what you're owed.
            </p>

            <div className="prose prose-lg max-w-none">
              <p>
                Less than 30% of eligible small and mid-sized businesses claim R&D tax credits despite broad eligibility that extends far beyond tech companies. The Work Opportunity Tax Credit certifies 2.5 million workers annually, yet most employers never screen applicants. Section 1202 QSBS exclusions can eliminate capital gains taxes entirely on startup exits—but only for founders who planned ahead.
              </p>

              <p>
                For companies without strategic financial leadership, these opportunities simply disappear. This playbook breaks down the most valuable—and most overlooked—tax incentives, grants, and non-dilutive funding sources available to growing businesses. Every section includes specific dollar amounts, eligibility requirements, and actionable steps.
              </p>

              <h2>The R&D tax credit rewards innovation you're probably already doing</h2>

              <p>
                The federal R&D tax credit under Section 41 provides a dollar-for-dollar reduction in federal income tax liability. Most businesses underestimate their eligibility because they assume "R&D" requires scientists in lab coats or breakthrough inventions. In reality, the credit applies to any business that develops or improves products, processes, software, techniques, or formulas through a process of experimentation.
              </p>

              <p>
                <strong>The credit generates 6-10 cents per dollar of qualified research expenses.</strong> Using the Alternative Simplified Credit method, companies earn 14% of qualified expenses exceeding 50% of their three-year average. For newer companies without historical R&D spending, a 6% credit applies to all current-year qualified expenses.
              </p>

              <p>
                Qualified Research Expenses fall into three categories:
              </p>

              <ul className="space-y-2 my-6">
                <li><strong>Employee wages (69% of all QREs)</strong> — W-2 taxable wages for employees directly performing, supervising, or supporting qualified research</li>
                <li><strong>Supplies (15% of QREs)</strong> — Tangible materials consumed in research activities like raw materials for prototypes</li>
                <li><strong>Contract research (16% of QREs)</strong> — Payments to third parties qualify at 65%</li>
              </ul>

              <h3>Industries commonly surprised by eligibility</h3>

              <p>
                <strong>Manufacturing companies</strong> qualify for credits when developing new product designs, prototyping, improving production processes, automating equipment, or enhancing quality systems.
              </p>

              <p>
                <strong>Food and beverage companies</strong> earn credits for recipe development, preservation techniques, packaging innovation, scaling from test batches to full production, and allergen-free formulation development.
              </p>

              <p>
                <strong>Construction firms</strong> qualify through new building techniques, site-specific engineering challenges, energy efficiency improvements, and environmental compliance solutions.
              </p>

              <p>
                <strong>Architecture and engineering firms</strong> consistently underestimate their eligibility. Structural design innovations, energy performance optimization, advanced modeling techniques, and new material applications all qualify.
              </p>

              <h3>The startup payroll tax offset changes the game</h3>

              <p>
                Qualified small businesses can apply up to <strong>$500,000 annually</strong> in R&D credits against payroll taxes rather than income taxes—critical for pre-revenue or early-stage companies without tax liability.
              </p>

              <p>
                To qualify, the business must have gross receipts below $5 million in the current year and no gross receipts in any year before the five-year period ending with the current year. This provision effectively allows startups to monetize R&D investments years before generating taxable income.
              </p>

              <h2>State R&D credits can double your federal benefit</h2>

              <p>
                Thirty-seven states offer R&D tax credit programs, and combined federal and state benefits can exceed <strong>12-16% of qualified research expenses</strong>. State credits typically calculate independently from federal, meaning you claim both.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 pr-4 font-semibold">State</th>
                      <th className="text-left py-3 pr-4 font-semibold">Credit Rate</th>
                      <th className="text-left py-3 pr-4 font-semibold">Key Feature</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4">Louisiana</td>
                      <td className="py-3 pr-4">5-30%</td>
                      <td className="py-3 pr-4">30% for &lt;50 employees</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4">Arizona</td>
                      <td className="py-3 pr-4">24%/15%</td>
                      <td className="py-3 pr-4">Refundable for &lt;150 employees</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4">Nebraska</td>
                      <td className="py-3 pr-4">15%/35%</td>
                      <td className="py-3 pr-4">35% for university research</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4">Connecticut</td>
                      <td className="py-3 pr-4">20%/6%</td>
                      <td className="py-3 pr-4">90% cash exchange for biotech</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4">Georgia</td>
                      <td className="py-3 pr-4">10%</td>
                      <td className="py-3 pr-4">Payroll tax offset</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-4">California</td>
                      <td className="py-3 pr-4">15%/24%</td>
                      <td className="py-3 pr-4">Indefinite carryforward</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>The Work Opportunity Tax Credit pays you to hire</h2>

              <p>
                The Work Opportunity Tax Credit provides <strong>$1,200 to $9,600 per eligible hire</strong>, yet most employers never claim it because they don't screen applicants. The credit applies to ten target groups including veterans, SNAP recipients, ex-felons, long-term unemployed workers, and designated community residents.
              </p>

              <p>
                <strong>Higher credits apply to specific categories:</strong>
              </p>

              <ul className="space-y-2 my-6">
                <li>Disabled veterans unemployed for 6+ months: up to <strong>$9,600</strong></li>
                <li>Long-term TANF recipients: up to <strong>$9,000</strong> (two-year credit)</li>
                <li>Veterans unemployed for 6+ months: up to <strong>$5,600</strong></li>
                <li>Standard veterans: <strong>$2,400</strong></li>
              </ul>

              <p>
                The certification process has a strict <strong>28-day deadline</strong> that many employers miss. Form 8850 must be completed on or before the job offer date and submitted to the State Workforce Agency within 28 days of the employee's start date.
              </p>

              <h2>Section 1202 QSBS exclusions eliminate capital gains taxes</h2>

              <p>
                For founders and early investors in qualified small businesses, Section 1202 provides a <strong>100% exclusion of capital gains</strong> from federal tax on the sale of qualifying stock held for more than five years. For someone selling $10 million in appreciated startup equity, the tax savings approach <strong>$2.38 million</strong>.
              </p>

              <p>
                The exclusion limit is the greater of $10 million per taxpayer per issuer or ten times the adjusted basis in the stock. Qualification requires the stock to be in a domestic C corporation that had gross assets of $50 million or less at the time of issuance.
              </p>

              <p>
                <strong>Certain industries are explicitly excluded:</strong> health, law, accounting, engineering, architecture, actuarial science, performing arts, consulting, athletics, financial services, and any business where the principal asset is the reputation or skill of employees.
              </p>

              <h2>SBIR and STTR grants: $4.3 billion annually in non-dilutive funding</h2>

              <p>
                The Small Business Innovation Research program allocates approximately <strong>$4.3 billion annually</strong> across eleven federal agencies for technology development. Unlike venture capital, SBIR awards are non-dilutive—companies keep full ownership while receiving substantial funding.
              </p>

              <ul className="space-y-2 my-6">
                <li><strong>Phase I:</strong> Up to $314,363 for concept development (6-12 months)</li>
                <li><strong>Phase II:</strong> Up to $2,095,748 for full R&D (24 months)</li>
                <li><strong>Phase III:</strong> Commercialization through contracts (no funding limits)</li>
              </ul>

              <p>
                Success rates average approximately 17% for Phase I and 36% for Phase II. Up to 20% of applications are rejected for administrative errors rather than technical merit.
              </p>

              <h2>The fractional CFO advantage in systematic credit capture</h2>

              <p>
                Professional CFO leadership demonstrates <strong>3-10x ROI</strong> on engagements focused on tax optimization and credit capture. In documented case studies, a building materials manufacturer achieved 501% ROI through an R&D credit study that identified $225,496 in credits for a startup that didn't know it qualified.
              </p>

              <p>
                <strong>Fractional CFO services cost 60-80% less than full-time CFO compensation</strong> while providing access to the same expertise. The value creation comes from systematic, proactive approaches rather than reactive compliance.
              </p>

              <p>
                The businesses that consistently capture available credits share common characteristics: they screen all new hires for WOTC eligibility within the 28-day deadline, track employee time against projects that may qualify for R&D credits, document experimental activities contemporaneously, and review entity structure periodically to optimize state credit eligibility.
              </p>

              <p>
                The cost of inaction compounds annually. Companies leaving $100,000 in R&D credits unclaimed each year forfeit not just the credits but the compounding value of reinvesting those funds in growth. Over five years, that passive approach surrenders $500,000 or more in direct benefits.
              </p>

              <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/20">
                <p className="text-lg mb-4">
                  <strong>How much money are you leaving on the table?</strong>
                </p>
                <p className="text-muted-foreground mb-6">
                  ShardCFO helps startups systematically capture R&D credits, WOTC benefits, and other overlooked incentives. Our fractional CFO services provide the strategic oversight to identify opportunities, the specialist networks to capture them efficiently, and the systematic processes to ensure nothing falls through the cracks.
                </p>
                <a href="/contact">
                  <Button className="rounded-full px-8">
                    Get Your Free Tax Credit Assessment
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
