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
          <a href="/#expertise" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Expertise</a>
          <a href="/#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="/contact">
            <Button variant="default" size="sm" className="rounded-full px-6">Get Started</Button>
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
          <a href="/#expertise" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Expertise</a>
          <a href="/#about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>About</a>
          <a href="/contact"><Button className="w-full rounded-full">Get Started</Button></a>
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
        <div className="text-sm text-muted-foreground">© 2025 ShardCFO. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default function SpreadsheetMistakes() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <article className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <a href="/resources" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Resources
            </a>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              The Spreadsheet Mistakes That Sink Startups
            </h1>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              DIY financial modeling costs founders far more than they realize—in blown deals, wasted time, and lost credibility.
            </p>

            <div className="prose prose-lg max-w-none">
              <p>
                The evidence is stark: <strong>88-94% of spreadsheets contain critical errors</strong>, and venture capitalists reject roughly 250 deals for every investment they make. Many of those rejections trace back to financial models riddled with broken formulas, unrealistic assumptions, and metrics calculated incorrectly.
              </p>

              <p>
                For founders bootstrapping their way through pre-seed or rushing toward Series A, the temptation to build their own models is understandable. But the hidden costs—measured in lost funding, squandered strategic time, and investor trust—add up to a tax that most startups cannot afford to pay.
              </p>

              <h2>When copy-paste errors cost billions</h2>

              <p>
                The corporate world offers sobering precedents. In 2012, JPMorgan Chase lost <strong>$6.2 billion</strong> after copy-paste errors corrupted their Value at Risk models. The formulas "divided by the sum instead of the average" because a modeler made a manual error in a spreadsheet that "should have been automated."
              </p>

              <p>
                Harvard economists Carmen Reinhart and Kenneth Rogoff influenced global austerity policy with a paper that contained a simple formula error—excluding five countries entirely. The corrected analysis reversed their conclusions, transforming -0.1% growth into <strong>+2.2% growth</strong>.
              </p>

              <p>
                In M&A, when Lazard advised SolarCity during Tesla's acquisition, a computational error double-counted projected debt, undervaluing the company by roughly <strong>$400 million</strong>. Goldman Sachs made a similar mistake with Tibco Software, costing shareholders <strong>$100 million</strong>.
              </p>

              <h2>Founders lose 120 working days per year to admin work</h2>

              <p>
                The opportunity cost extends beyond errors. Research reveals that <strong>small businesses spend 120 working days annually</strong> on administrative tasks, with accounting consuming nearly 25% of all administrative time.
              </p>

              <p>
                Sam Corcos, CEO of Levels, tracked 17,784 hours over five years as a founder and discovered that strategy work consumed only <strong>5% of his total time</strong>. Harvard Business School found CEOs advance their own agenda only 43% of the time, with 36% of hours consumed by reactive firefighting.
              </p>

              <p>
                The data on delegation is striking: entrepreneurs with strong delegation skills generate <strong>33% more revenue</strong> and achieve growth rates more than 100% higher than those who try to do everything themselves.
              </p>

              <h2>The SaaS metrics minefield</h2>

              <p>
                SaaS financial modeling presents unique challenges that catch even experienced operators.
              </p>

              <p>
                <strong>Churn calculation errors</strong> top the list. Founders routinely confuse gross churn with net churn. A 5% monthly churn rate compounds to roughly <strong>46% annual churn</strong>, not the 60% that simple multiplication suggests.
              </p>

              <p>
                <strong>LTV/CAC miscalculations</strong> follow close behind. Paddle's analysis found that common CAC errors can make the metric appear as low as <strong>1/75th of the true fully-loaded cost</strong>. Founders count only paid advertising while ignoring employee salaries, content creation, and CRM costs.
              </p>

              <p>
                <strong>Revenue recognition confusion</strong> creates insidious errors. When a customer pays $12,000 upfront for an annual contract, founders often recognize the full amount immediately. Under proper accounting, only $1,000 is revenue each month; the remaining $11,000 sits as deferred revenue—a liability.
              </p>

              <h2>What VCs actually look for in your model</h2>

              <p>
                Contrary to founder assumptions, investors at early stages care less about projection precision than about what the model reveals about the founder's thinking. Lauren Epstein of OMERS Ventures states it bluntly: "A financial model that contains bad, baseless, or improper assumptions is a double red flag."
              </p>

              <p>The red flags that kill deals:</p>

              <ul className="space-y-2 my-6">
                <li><strong>Refusing to share financials</strong> after a first meeting signals disorganization</li>
                <li><strong>Variances exceeding 50%</strong> between budget and actuals suggest inability to manage cash</li>
                <li><strong>Inability to articulate assumptions</strong> indicates the founder doesn't understand their business</li>
                <li><strong>Revenue growth slowing below 30%</strong> paired with promises of acceleration rarely materializes</li>
                <li><strong>Prior investors declining to re-invest</strong> raises immediate questions</li>
              </ul>

              <p>
                By Series B, one TechCrunch analysis suggests, "the financial model should be able to accurately predict revenue for a month with a margin of error of less than 5%."
              </p>

              <h2>The inflection points where professional help pays for itself</h2>

              <p>
                The signals are often obvious in retrospect: revenue growing while profitability lags, monthly reports taking more than 10 days to close, major decisions based on gut feeling, or being surprised by low bank balances.
              </p>

              <p>
                At <strong>$1-2M ARR</strong>, Jason Lemkin recommends considering a full-time finance hire. The sweet spot for CFO hiring, according to 37% of Bessemer's CFO community, falls between <strong>$10-25M ARR</strong>. Before that threshold, fractional CFO support offers a compelling middle path.
              </p>

              <p>
                The economics favor fractional arrangements. Full-time CFO compensation runs <strong>$200,000-500,000 annually</strong>. Fractional services typically cost <strong>$3,000-15,000 monthly</strong>—representing 60-80% savings while providing senior-level strategic guidance.
              </p>

              <p>
                The fundraising impact deserves attention. Companies with professional financial leadership reportedly raise capital <strong>40% faster</strong> at <strong>15-25% higher valuations</strong>. For a company raising a $10M Series A, even a 15% valuation improvement represents $1.5M in reduced dilution.
              </p>

              <h2>Conclusion</h2>

              <p>
                The hidden cost of DIY financial modeling isn't just the risk of catastrophic errors—though JPMorgan's $6.2 billion loss demonstrates that risk is real. The deeper cost lies in opportunity foregone: founders spending 120 days per year on administrative work while strategic planning consumes only 5% of their time.
              </p>

              <p>
                The inflection point typically arrives before founders recognize it. If monthly closes take too long, if burn calculations don't reconcile, if you're preparing to raise—the ROI on professional financial support has likely already turned positive.
              </p>

              <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/20">
                <p className="text-lg mb-4">
                  <strong>Is your financial model investor-ready?</strong>
                </p>
                <p className="text-muted-foreground mb-6">
                  ShardCFO helps startups build institutional-grade financial models that withstand investor scrutiny. Stop leaving money on the table with DIY spreadsheets.
                </p>
                <a href="/contact">
                  <Button className="rounded-full px-8">Get Your Free Model Review</Button>
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
