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

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</a>
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

export default function BoardPackageGuide() {
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
              The Board Package That Gets Investors Excited: Financial Storytelling 101
            </h1>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Your board deck might be the most consequential presentation you create each quarter—yet most founders treat it as a compliance exercise rather than a strategic weapon.
            </p>

            <div className="prose prose-lg max-w-none">
              <p>
                The difference between a forgettable data dump and a board package that energizes investors and unlocks their networks comes down to one skill: <strong>financial storytelling</strong>.
              </p>

              <p>
                Here's the uncomfortable truth: board members sit through dozens of presentations monthly, and most blur together into a gray fog of charts and metrics. But the founders who master the art of narrative-driven finance don't just survive board meetings—they transform their boards into actively engaged advisors who leave the room texting introductions and brainstorming solutions. This guide breaks down exactly how to build board packages that achieve that transformation.
              </p>

              <h2>Most board meetings waste everyone's time</h2>

              <p>
                "Most board meetings are administrative updates that accomplish very little other than informing board members about the performance of the company since the last board meeting," writes Mark Suster, Managing Partner at Upfront Ventures. "If your board is your 'brain trust,' then it's a shame if you don't get more value."
              </p>

              <p>
                This diagnosis appears repeatedly across investor commentary. Board meetings have devolved into reporting sessions where founders march through slides while investors half-listen, mentally drafting emails. Peter Levine of Andreessen Horowitz puts it bluntly: <strong>"70% of the meetings should focus on the future and the issues at hand,"</strong> not backward-looking metrics recitation.
              </p>

              <p>
                The structural problem? Most founders approach board prep as data assembly rather than narrative construction. They pull numbers from various dashboards, format them into slides, and call it done. But as Bryan Schreier of Sequoia Capital observes, "It is very easy to add chart after chart. What is much harder is picking the fewest number of correct metrics to properly frame the current status of the company."
              </p>

              <p>
                The consequences extend beyond boring meetings. Boards that don't understand your real situation can't help you navigate it. Worse, they may lose confidence in your judgment when reality eventually surfaces.
              </p>

              <h2>What separates compelling decks from forgettable ones</h2>

              <p>
                The distinction between a data dump and a strategic narrative isn't about presentation polish—it's about purpose. Data dumps walk through metrics sequentially, presenting numbers without context or implications. Strategic narratives use data selectively to illuminate a business story and drive specific decisions.
              </p>

              <p>
                Consider this transformation example. Here's the data dump version of a quarterly update:
              </p>

              <blockquote className="border-l-4 border-muted pl-6 italic my-6">
                "Revenue reached $4.2M against a budget of $4.5M (-6.7%). EBIT was $840K versus a budgeted $945K (-11.1%). Cash balance ended at $3.6M..."
              </blockquote>

              <p>
                Now the narrative version addressing the same situation:
              </p>

              <blockquote className="border-l-4 border-primary pl-6 italic my-6">
                "Our sales team delivered on Product B, hitting 107% of target despite supply chain chaos. But poor sales elsewhere meant our EBIT fell to $840K (11.1% below budget), and cash flow is hemorrhaging. We have $1.8M trapped between slow inventory and stretched receivables. Without action, our EBIT shortfall will compound to $1.5M by Q3, and we'll face a $1.2M cash shortfall by July. By Friday, I need: Sales to implement Product A's new pricing, Operations to cut 12 worst-moving SKUs to free $430K, and Finance to accelerate collections on $520K in receivables."
              </blockquote>

              <p>
                Both versions contain identical financial facts. But the second creates urgency, assigns accountability, and specifies action. Board members leave knowing exactly what's at stake and how they can help.
              </p>

              <p>
                <strong>The transformation framework</strong> structures financial narratives around five elements: a hero (your team or customers), a villain (the obstacle—churn, competitors, market conditions), a struggle (the trade-offs required), stakes (consequences of inaction), and specific action required.
              </p>

              <h2>The anatomy of a board package that performs</h2>

              <p>
                Effective board packages follow a consistent structure that experienced investors recognize and appreciate.
              </p>

              <p>
                <strong>The CEO update</strong> opens with a candid "state of the union"—what's working, what isn't, and what the leadership team has learned since the last meeting. This section should include explicit asks where you need board help. Assign board members action items. Make introductions. Connect you to potential customers. They have the networks—use them.
              </p>

              <p>
                <strong>Financial performance</strong> follows, but not as a spreadsheet walkthrough. Present actuals versus plan with variance explanations for significant deviations. Cash runway and burn rate deserve prominence—nothing concentrates board attention like countdown to zero.
              </p>

              <p>
                <strong>Business updates by function</strong> cover sales pipeline, product progress, and marketing results, but keep these tight. Resist the temptation to prove how hard everyone is working. Boards care about outcomes and trajectory, not activity levels.
              </p>

              <p>
                <strong>Strategic discussion</strong> represents the meeting's core value—one or two topics requiring board input. Come with a point of view and proposed direction; ask for refinement, not blank-slate brainstorming.
              </p>

              <p>
                <strong>A closed session</strong> at the end allows board-only discussion and candid CEO feedback. Don't skip this—it prevents issues from festering.
              </p>

              <h2>Stage-specific metrics that actually matter</h2>

              <p>
                The metrics that demonstrate progress vary dramatically by company stage, and mismatched metrics signal inexperience to sophisticated investors.
              </p>

              <p>
                <strong>Seed-stage companies</strong> should focus on engagement, retention, and product-market fit indicators rather than revenue metrics that may be negligible. Track DAU/MAU ratios, feature adoption rates, early cohort retention curves, and qualitative customer feedback like NPS scores. At this stage, the board deck should be 10-12 slides maximum.
              </p>

              <p>
                <strong>Series A companies</strong> shift focus to proving repeatable sales motion and unit economics. The critical metrics become ARR growth rate (targeting 2-3x year-over-year), net dollar retention above 100%, LTV:CAC ratio exceeding 3:1, and CAC payback period under 12 months.
              </p>

              <p>
                <strong>Series B and beyond</strong> demands metrics proving business model maturity and path to profitability. The Rule of 40 becomes relevant—growth rate plus EBITDA margin should exceed 40%. Track gross margins (70%+ for SaaS), burn multiple, and sales efficiency metrics.
              </p>

              <p>
                The critical point: <strong>maintain consistent metrics meeting-to-meeting</strong>. Boards can't track progress when the measurement system shifts constantly.
              </p>

              <h2>How to present bad news without destroying trust</h2>

              <p>
                Every company hits rough patches. How you communicate setbacks determines whether your board remains supportive or starts questioning your judgment.
              </p>

              <p>
                The cardinal rule: <strong>no surprises in board meetings</strong>. It's much better to be direct and upfront about what's not working than to bury it. Eventually, the truth will come out, and it will destroy your board's trust in you.
              </p>

              <p>
                This means pre-wiring significant issues before the meeting. One-on-ones with board members in advance allow them to process difficult news individually, preventing emotional reactions in group settings.
              </p>

              <p>
                <strong>Present problems alongside proposed solutions.</strong> Coming to the board with "our enterprise sales are stalling and I don't know what to do" signals weakness. Coming with "enterprise sales are stalling because our product lacks SSO integration that prospects require; here's our plan to address this in 90 days with these resource implications" demonstrates leadership.
              </p>

              <h2>The mechanics of board preparation that professionals use</h2>

              <p>
                The timing and process of board preparation matter as much as content. Sending your deck the night before guarantees a superficial meeting.
              </p>

              <p>
                <strong>Professional-grade preparation starts four weeks out.</strong> Identify key discussion topics and share with board members for input. Two weeks before, department heads submit their sections. One week out, conduct a full run-through with the executive team. Send final materials 3-5 days before the meeting—this is the minimum for meaningful board engagement.
              </p>

              <p>
                The deck format itself should enable quick comprehension. Use minimum 18-point font for body text. Follow the 5/5/5 rule: maximum five words per line, five bullets per slide, five text-heavy slides per deck. Red/yellow/green status indicators communicate health instantly.
              </p>

              <p>
                <strong>Consistency compounds trust.</strong> Using the same structure meeting-to-meeting allows board members to quickly orient and focus on substance rather than navigation.
              </p>

              <h2>Why finance professionals transform board outcomes</h2>

              <p>
                The distinction between CEOs who struggle with board preparation and those who excel often comes down to dedicated finance leadership. A skilled CFO—whether full-time or fractional—brings capabilities that founders typically lack.
              </p>

              <p>
                <strong>Narrative construction from raw data</strong> represents the core value-add. Finance professionals bring established frameworks proven across multiple companies. They know which metrics matter at each stage, how to structure variance analysis that illuminates rather than obscures, and how to present forecasts that balance aspiration with credibility.
              </p>

              <p>
                For companies not yet at scale for a full-time CFO, fractional arrangements offer access to this expertise at a fraction of the cost. A fractional CFO typically operates across multiple portfolio companies, bringing pattern recognition from diverse contexts.
              </p>

              <h2>Practical shifts you can implement immediately</h2>

              <ul className="space-y-4 my-6">
                <li><strong>Start your deck with "The Good, The Bad, and The Ugly"</strong>—a single slide with equal weight given to wins and challenges.</li>
                <li><strong>Cut your slide count in half</strong> by moving supporting detail to an appendix.</li>
                <li><strong>Add explicit asks to every CEO update.</strong> What specific help do you need from board members before the next meeting?</li>
                <li><strong>Adopt trailing nine-quarter metric presentation</strong> to provide context without extensive explanation.</li>
                <li><strong>Schedule 1:1 calls with each board member</strong> the week before the meeting.</li>
                <li><strong>End every board meeting with documented action items</strong>—including items assigned to board members.</li>
              </ul>

              <h2>The board package as competitive advantage</h2>

              <p>
                Your board exists to help your company succeed. But boards can only help when they understand your situation accurately, trust your judgment, and have clear channels for contribution. The board package is your primary tool for achieving all three.
              </p>

              <p>
                Founders who view board preparation as a compliance burden endure quarterly interrogations. Founders who master financial storytelling unlock strategic partnerships that accelerate their companies. The difference lies not in having better numbers—it lies in presenting numbers within narratives that drive action.
              </p>

              <p>
                Your next board meeting is an opportunity. Make it count.
              </p>

              <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/20">
                <p className="text-lg mb-4">
                  <strong>Building a startup and need help crafting board packages that actually move the needle?</strong>
                </p>
                <p className="text-muted-foreground mb-6">
                  ShardCFO provides fractional CFO services specifically designed for growth-stage companies. We bring the financial storytelling expertise that transforms board relationships—without the full-time executive price tag.
                </p>
                <a href="/contact">
                  <Button className="rounded-full px-8">
                    Let's Talk About Your Board Prep Challenges
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
