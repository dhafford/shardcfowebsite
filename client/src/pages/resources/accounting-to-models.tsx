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

export default function AccountingToModels() {
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
              Transforming Accounting Data Into Strategic Financial Models
            </h1>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              The bridge between raw bookkeeping outputs and sophisticated financial models represents one of the highest-value activities a growing company can undertake.
            </p>

            <div className="prose prose-lg max-w-none">
              <p>
                This transformation—turning historical transaction records into forward-looking decision tools—is precisely where fractional CFOs deliver outsized ROI. Companies that master this transition gain real-time cash flow visibility, investor-ready forecasting, and the strategic clarity needed to navigate uncertainty.
              </p>

              <h2>Accounting systems generate standardized outputs with critical limitations</h2>

              <p>
                Modern accounting platforms share common output capabilities but differ significantly in their export flexibility, API access, and data granularity. Understanding these limitations is essential before building any financial model.
              </p>

              <h3>Major platform export capabilities</h3>

              <p>
                <strong>QuickBooks</strong> exports to Excel, CSV, and PDF formats. Critical limitation: the API enforces a 400,000 cell response limit, and custom reports are not accessible via API.
              </p>

              <p>
                <strong>Xero</strong> provides Trial Balance, P&L, and Balance Sheet via API endpoints. Rate limits cap usage at 60 calls per minute and 5,000 calls per day.
              </p>

              <p>
                <strong>NetSuite</strong> offers CSV, PDF, Excel, and Tableau Workbook exports. Key limitations include 2-decimal precision truncation in CSV and no Unicode support in Excel exports.
              </p>

              <p>
                <strong>Sage Intacct</strong> features a Data Delivery Service that extracts large datasets to cloud storage. Excel exports are limited to the older XLS format with a 65,536 row ceiling.
              </p>

              <h3>Data quality issues that derail financial models</h3>

              <p>
                <strong>Uncategorized transactions</strong> plague bank feed imports without matching rules, causing P&L and Balance Sheet misstatements.
              </p>

              <p>
                <strong>Inconsistent naming conventions</strong> create duplicate vendor/customer entries ("ABC Corp" vs. "ABC Corporation"), complicating consolidation. According to APQC research, <strong>1-2.5% of total disbursements</strong> processed annually are duplicated or erroneous.
              </p>

              <p>
                <strong>Timing and cutoff issues</strong> arise from checks written but not cashed before statement cutoff, deposits in transit, and accruals recorded in wrong periods.
              </p>

              <h2>Financial modeling best practices establish the framework</h2>

              <h3>Three-statement model architecture</h3>

              <p>
                The three-statement model integrates Income Statement, Balance Sheet, and Cash Flow Statement into one dynamically linked system. <strong>Net income flows to two places simultaneously</strong>: to the top of the Cash Flow Statement and to Retained Earnings on the Balance Sheet.
              </p>

              <p>
                Depreciation represents the most important non-cash adjustment: it appears as an expense on the Income Statement, gets added back on the Cash Flow Statement (since no cash actually left), and reduces PP&E on the Balance Sheet.
              </p>

              <p>
                Working capital changes create critical linkages. The formulas for working capital drivers use days metrics:
              </p>

              <ul className="space-y-2 my-6">
                <li><strong>Accounts Receivable</strong> = (DSO ÷ 365) × Revenue</li>
                <li><strong>Inventory</strong> = (DIO ÷ 365) × COGS</li>
                <li><strong>Accounts Payable</strong> = (DPO ÷ 365) × COGS</li>
              </ul>

              <p>
                The <strong>Cash Conversion Cycle = DSO + DIO – DPO</strong> measures total days cash remains tied up in operations.
              </p>

              <h3>Driver-based planning replaces static forecasting</h3>

              <p>
                Financial drivers are the operational and financial factors that directly impact performance. Rather than projecting each line item independently, driver-based models link projections to real business activities.
              </p>

              <p>
                <strong>Revenue drivers</strong> for a SaaS company cascade from total revenue through number of sales reps and quota attainment, customer metrics (new acquisition from MQL-to-SQL conversion rates, churn, ARPU), and pricing.
              </p>

              <p>
                <strong>Cost drivers</strong> distinguish fixed costs (rent, base salaries), variable costs (materials, commissions), and semi-variable costs (utilities with base plus usage components).
              </p>

              <h3>Rolling forecasts versus static budgets</h3>

              <p>
                Static budgets represent fixed financial plans created once per year, becoming outdated as business conditions shift. Rolling forecasts continuously update, always projecting 12-18 months ahead.
              </p>

              <p>
                The fundamental trade-off: static budgets provide <strong>clear accountability targets</strong> but become increasingly irrelevant by mid-year; rolling forecasts enable <strong>real-time variance analysis</strong> but require more maintenance.
              </p>

              <h2>The transformation process bridges accounting to model inputs</h2>

              <h3>Data cleaning and normalization</h3>

              <p>
                The cleaning process follows a systematic sequence: explore the dataset, identify quality issues, standardize formats, remove duplicates, fill missing values, reconcile discrepancies, and validate with audit trails.
              </p>

              <p>
                <strong>Power Query</strong> represents the most efficient tool for repeatable ETL processes, offering 200+ data source connections, step recording creating automatic audit trails, and refresh capabilities for ongoing extractions.
              </p>

              <h3>Model structure and auditability standards</h3>

              <p>
                <strong>Color coding conventions</strong> are universal in professional finance: blue font for hard-coded inputs, black for formulas within the same sheet, green for links to other worksheets, red for external file links.
              </p>

              <p>
                <strong>The "One Row, One Formula" rule</strong> requires every cell in a row to share the same formula structure—copy formulas across, never recreate them independently.
              </p>

              <h2>Fractional CFOs bridge the gap</h2>

              <p>
                Bookkeepers focus on transactional work: recording daily transactions, processing payroll, reconciling accounts. Their cost ranges from <strong>$250-$5,000 monthly</strong>. Controllers oversee accounting teams and ensure compliance, typically costing <strong>$2,000-$3,500 monthly</strong> for fractional services.
              </p>

              <p>
                CFOs operate at "30,000 feet"—planning what happens next year while others analyze last month. Fractional CFO services cost <strong>$3,000-$15,000 monthly</strong>, representing 30-50% of full-time CFO compensation.
              </p>

              <p>
                The key distinction: "Bookkeepers track yesterday's money; CFOs shape tomorrow's growth. Most businesses need both."
              </p>

              <h3>Pain points without sophisticated financial infrastructure</h3>

              <p>
                <strong>Cash flow visibility problems</strong> cause 38% of startup failures. Without real-time financial insights, companies cannot maintain sufficient runway or anticipate shortfalls.
              </p>

              <p>
                <strong>Forecasting gaps</strong> leave companies vulnerable: 38% of finance leaders report revenue recognition challenges leading to inaccurate forecasting.
              </p>

              <p>
                <strong>ROI on fractional CFO services ranges from 2-9x</strong>, with 96% of early-adopter CEOs reporting that fractional leaders met or exceeded ROI expectations.
              </p>

              <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/20">
                <p className="text-lg mb-4">
                  <strong>Ready to transform your accounting data into strategic insights?</strong>
                </p>
                <p className="text-muted-foreground mb-6">
                  ShardCFO helps startups bridge the gap between raw bookkeeping and investor-ready financial models. We build the infrastructure that turns historical data into forward-looking decision tools.
                </p>
                <a href="/contact">
                  <Button className="rounded-full px-8">Get Your Free Assessment</Button>
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
