import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X } from "lucide-react";
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

export default function FinanceTeamBuilding() {
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
              Building Your First Finance Team: The Fractional CFO as Architect
            </h1>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              The most successful startups don't wait until they desperately need finance leadership to start building their finance function—they partner with fractional CFOs early to architect infrastructure that scales.
            </p>

            <div className="prose prose-lg max-w-none">
              <p>
                For founders navigating the journey from seed through growth stage, a fractional CFO serves as both strategic advisor and master builder, designing systems and hiring plans that will support the company for years to come. This approach costs <strong>60-80% less</strong> than hiring a full-time CFO while delivering comparable strategic value during the critical early stages when capital efficiency matters most.
              </p>

              <p>
                Understanding when and how to build your finance team directly impacts your ability to raise capital, make informed decisions, and avoid the costly cleanup that plagues startups who neglect financial infrastructure. The founders who get this right typically bring on fractional support <strong>6-12 months before their Series A</strong>, giving them time to implement proper systems and develop the financial narrative that investors expect.
              </p>

              <h2>Why founders consistently underestimate their finance needs</h2>

              <p>
                Most founders are builders by nature—they obsess over product, customers, and growth. Finance tends to fall into the "important but not urgent" category until it suddenly becomes both. The data tells a sobering story: <strong>82% of business failures</strong> are linked to cash flow issues, and startups that wait until they're drowning in financial complexity typically spend triple or quadruple the time and effort to untangle problems that early investment would have prevented.
              </p>

              <p>
                The transition from "I can manage this in spreadsheets" to "we desperately need finance help" often happens faster than founders anticipate. Common triggers include preparing for institutional fundraising, expanding into multiple states or countries, managing increasingly complex revenue recognition, or simply losing sleep over cash runway decisions.
              </p>

              <p>
                This is where fractional CFOs fundamentally change the equation. Rather than waiting for a crisis, forward-thinking founders engage fractional support at inflection points—typically when they've achieved product-market fit with <strong>20+ paying customers</strong>, are burning <strong>$200,000+ monthly</strong>, or have raised <strong>$2 million+</strong> in seed funding. The fractional model provides strategic finance expertise at a fraction of full-time cost, typically <strong>$5,000-$15,000 per month</strong> compared to <strong>$300,000-$450,000 annually</strong> for a full-time CFO.
              </p>

              <h2>Designing a finance function that grows with your company</h2>

              <p>
                The fractional CFO's most valuable contribution isn't performing financial tasks—it's architecting a finance function designed to scale through multiple growth stages. This architectural role involves three interconnected elements: building the right tech stack, implementing processes that become institutional muscle memory, and creating a hiring roadmap aligned to company milestones.
              </p>

              <p>
                At the <strong>pre-seed and seed stage</strong>, the architecture is intentionally lightweight. Clean books through outsourced bookkeeping, basic compliance, cash flow monitoring, and fundraising support represent the core requirements. A fractional CFO at this stage typically invests 8-10 hours monthly, focusing on establishing a chart of accounts that provides operational insight and creating the first financial models.
              </p>

              <p>
                As companies approach <strong>Series A</strong> with $3-5 million in ARR, the finance architecture shifts dramatically. This stage demands transition from cash-basis to accrual accounting, implementation of planning and budgeting processes, and regular reporting cadences. The fractional CFO helps select and integrate forecasting tools, expense management systems, and cap table software.
              </p>

              <p>
                <strong>Series B and beyond</strong> introduces strategic finance requirements: robust ERP systems, advanced financial controls, specialized functions like tax and treasury, and preparation for potential audits or M&A activity.
              </p>

              <h2>Making your first finance hire count</h2>

              <p>
                Companies typically hire their first full-time finance person at <strong>$1-2 million in revenue</strong> or when they reach 30-50 employees. At the earlier end of this range, only 17% of companies have an internal finance FTE—most are still founder-led with outsourced support.
              </p>

              <p>
                The most common mistake is hiring too senior too early. A full-time CFO commanding $200,000-$300,000+ in salary is overkill for most Series A companies and often leads to frustration on both sides.
              </p>

              <p>
                The right first hire is typically a <strong>Head of Finance or VP of Finance</strong>—someone who combines financial modeling capabilities with willingness to handle operational work. Look for someone who has lived through rapid scaling and understands that startup finance requires wearing multiple hats. They should be commercially-minded rather than purely technical, comfortable with ambiguity, and capable of translating financial data into actionable insights.
              </p>

              <p>
                A predictable sequence emerges as companies scale. After the initial Head of Finance hire at Series A, companies typically add a staff accountant. Series B brings an accounting manager, FP&A analyst, and potentially a payroll manager. Only at Series C+ or $20 million+ in revenue does a full-time CFO role become justified.
              </p>

              <h2>Implementing systems before the team scales</h2>

              <p>
                The most effective fractional CFOs establish financial infrastructure that allows the eventual full-time finance team to be immediately productive. This means implementing systems and processes during the fractional engagement that will outlast it.
              </p>

              <p>
                The finance tech stack should follow a clear hierarchy of needs. <strong>Foundation systems</strong> include accounting software with automated bank feeds, dedicated business banking, payroll capable of handling multi-state employees, and corporate cards with spend controls.
              </p>

              <p>
                <strong>Growth systems</strong> layer on as complexity increases: FP&A platforms for financial modeling and scenario planning, expense management with policy enforcement and approval workflows, accounts payable automation, and cap table management.
              </p>

              <p>
                Beyond software, the fractional CFO implements processes that become operational backbone. A monthly close process targeting 5-7 business days ensures decisions are made on current data rather than stale financials. Financial controls represent another critical infrastructure element that's far easier to implement early than retrofit later.
              </p>

              <p>
                Cash management deserves special emphasis given its correlation with startup survival. Every company should maintain a <strong>13-week rolling cash forecast</strong> and have 3-6 months of operating expenses set aside as emergency reserves.
              </p>

              <h2>Navigating the transition to full-time leadership</h2>

              <p>
                Most companies make the shift to full-time CFO at <strong>$15-25 million in revenue</strong> or following a Series B or later fundraising round. A Bessemer survey found that 37% of CFOs identified $10-25 million ARR as the ideal stage for bringing on full-time finance leadership.
              </p>

              <p>
                Several indicators suggest the transition window is approaching: multi-entity structures, international operations, M&A activity, investor requirements, and consistent intensive utilization of fractional support.
              </p>

              <p>
                Effective handoffs include comprehensive documentation of all processes and systems, relationship transfers to key vendors and banking partners, board and investor relationship introductions, and team development continuity.
              </p>

              <h2>Avoiding the mistakes that derail finance team building</h2>

              <ul className="space-y-4 my-6">
                <li><strong>Hiring the wrong profile</strong> — Investment banking backgrounds often lack desire for day-to-day accounting work.</li>
                <li><strong>Conflating bookkeeping with strategic finance</strong> — Clean books don't equal forward-looking analysis for strategic decisions.</li>
                <li><strong>Underestimating step costs</strong> — About two-thirds of early-stage startups model headcount as a linear function when costs actually jump unpredictably.</li>
                <li><strong>Documentation failures</strong> — Institutional knowledge vanishes when people leave without proper documentation.</li>
                <li><strong>System fragmentation</strong> — Data scattered across disconnected spreadsheets creates reconciliation nightmares.</li>
              </ul>

              <h2>The architecture mindset that enables scale</h2>

              <p>
                Building a startup finance function resembles architecture more than accounting. The fractional CFO brings blueprints informed by experience across dozens or hundreds of companies, adapting proven frameworks to each company's specific circumstances.
              </p>

              <p>
                The return on this architectural investment compounds over time. Startups with fractional CFO support close funding rounds an average of <strong>nine months faster</strong> than those without. Individual engagements regularly uncover six-figure tax savings or identify billing errors from vendors.
              </p>

              <p>
                For founders weighing when to invest in finance leadership, the evidence suggests earlier is almost always better than later. The question isn't whether you need financial architecture—it's whether you build it intentionally with expert guidance or stumble into it reactively when problems force your hand.
              </p>

              <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/20">
                <p className="text-lg mb-4">
                  <strong>Ready to architect your startup's finance function?</strong>
                </p>
                <p className="text-muted-foreground mb-6">
                  Whether you're preparing for your first institutional round, feeling the strain of financial complexity, or simply want to build the right infrastructure before you desperately need it, ShardCFO can provide the strategic guidance and implementation expertise to set your finance function up for long-term success.
                </p>
                <a href="/contact">
                  <Button className="rounded-full px-8">
                    Schedule a Free Consultation
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
