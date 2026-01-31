import React, { useState, useEffect } from 'react';

interface Definition {
  title: string;
  definition: string;
  example: string;
}

interface Definitions {
  [key: string]: Definition;
}

interface ColorScheme {
  bg: string;
  border: string;
  text: string;
}

// Custom hook to detect viewport size for responsive design
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const FinancialModelingDiagram = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const { width } = useWindowSize();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  // Comprehensive definitions for all components
  const definitions: Definitions = {
    // Source Transactions
    salesTransactions: {
      title: "Sales Transactions",
      definition: "Revenue-generating events including invoices, receipts, and sales orders. These create accounts receivable entries and recognize revenue per ASC 606 guidelines.",
      example: "Customer invoice for $50,000 SaaS subscription -> Debit AR, Credit Deferred Revenue"
    },
    purchaseOrders: {
      title: "Purchase Orders",
      definition: "Commitments to vendors for goods/services. Creates accounts payable upon receipt and impacts inventory or expense accounts depending on nature.",
      example: "PO for $10,000 cloud hosting -> Debit Prepaid Expense, Credit AP"
    },
    payrollProcessing: {
      title: "Payroll Processing",
      definition: "Employee compensation including salaries, benefits, taxes, and equity-based compensation. Largest expense category for most tech companies.",
      example: "Monthly payroll $500K -> Debit Salaries Expense, Credit Cash/Payroll Liabilities"
    },
    assetAcquisitions: {
      title: "Asset Acquisitions",
      definition: "Capital expenditures for property, equipment, or intangible assets that provide benefit beyond one year. Subject to capitalization thresholds.",
      example: "$100K server purchase -> Debit Fixed Assets, Credit Cash/AP"
    },
    debtEquityEvents: {
      title: "Debt/Equity Events",
      definition: "Financing transactions including loans, lines of credit, equity raises, and conversions. Impact capital structure and dilution.",
      example: "Series A $10M raise -> Debit Cash, Credit Preferred Stock + APIC"
    },
    accrualsDeferrals: {
      title: "Accruals & Deferrals",
      definition: "Timing adjustments ensuring revenue/expenses are recognized in the correct period per GAAP matching principle. Critical for SaaS revenue recognition.",
      example: "Annual contract billed upfront -> Debit Cash, Credit Deferred Revenue (recognized monthly)"
    },

    // Accounting System
    journalEntries: {
      title: "Journal Entries",
      definition: "The fundamental recording mechanism in double-entry bookkeeping. Every transaction requires equal debits and credits across appropriate accounts.",
      example: "Standard JE: Date, Description, Account, Debit Amount, Credit Amount, Supporting Documentation"
    },
    chartOfAccounts: {
      title: "Chart of Accounts",
      definition: "Hierarchical structure organizing all accounts by type (Assets, Liabilities, Equity, Revenue, Expenses). Determines financial statement mapping and reporting granularity.",
      example: "4000-Revenue, 4100-Product Revenue, 4110-SaaS Subscriptions, 4120-Professional Services"
    },
    generalLedger: {
      title: "General Ledger",
      definition: "Master record containing all financial transactions organized by account. The authoritative source for all financial reporting and the foundation of the accounting system.",
      example: "GL Account 1100-Cash shows all cash receipts and disbursements with running balance"
    },
    trialBalance: {
      title: "Trial Balance",
      definition: "Summary report listing all GL accounts with their debit/credit balances. Total debits must equal total credits. Used to verify accuracy before preparing financial statements.",
      example: "Pre-close TB shows all accounts; adjusting entries bring to GAAP; post-close TB starts new period"
    },
    subledgers: {
      title: "Subledgers",
      definition: "Detailed subsidiary records that roll up to GL control accounts. Provide granular detail for AR, AP, inventory, and fixed assets while keeping GL manageable.",
      example: "AR Subledger shows each customer's invoices, payments, and aging; totals to GL AR account"
    },

    // 3-Statement Model
    incomeStatement: {
      title: "Income Statement (P&L)",
      definition: "Reports financial performance over a period. Shows Revenue -> Gross Profit -> Operating Income -> EBITDA -> Net Income. The starting point for cash flow and key driver of equity changes.",
      example: "Revenue $10M - COGS $3M = Gross Profit $7M - OpEx $5M = Operating Income $2M"
    },
    balanceSheet: {
      title: "Balance Sheet",
      definition: "Point-in-time snapshot of financial position. Assets = Liabilities + Equity must always balance. Links to P&L via retained earnings and to cash flow via cash balance.",
      example: "Assets $50M = Liabilities $20M + Equity $30M (including $15M retained earnings)"
    },
    cashFlowStatement: {
      title: "Cash Flow Statement",
      definition: "Reconciles net income to actual cash movement across three categories: Operating (core business), Investing (CapEx, acquisitions), Financing (debt, equity). Critical for runway analysis.",
      example: "Net Income $2M + D&A $500K - AR Increase $300K - CapEx $1M + Debt $5M = Cash Change $6.2M"
    },

    // Driver-Based Assumptions
    revenueDrivers: {
      title: "Revenue Drivers",
      definition: "Bottom-up assumptions that build the revenue forecast. For SaaS: customers x ARPU x retention. For transactional: volume x price x conversion rates.",
      example: "1,000 customers x $1,000 ARPU x 95% retention x 10% expansion = $1.05M MRR"
    },
    costDrivers: {
      title: "Cost Drivers",
      definition: "Variables that determine cost behavior. Includes fixed vs. variable cost structures, step functions, and economies of scale assumptions.",
      example: "Hosting costs = $0.05/user/month (variable) + $50K/month platform fee (fixed)"
    },
    headcountPlan: {
      title: "Headcount Plan",
      definition: "Detailed staffing model by department, role, start date, and fully-loaded cost. Largest expense driver for most startups. Includes salary, benefits, taxes, equity.",
      example: "Engineering: 20 -> 35 heads, avg $180K fully-loaded = $6.3M annual run rate"
    },
    capexSchedule: {
      title: "CapEx Schedule",
      definition: "Capital expenditure forecast for equipment, software, leasehold improvements. Determines depreciation expense and impacts cash flow timing differently than P&L.",
      example: "Q1: $500K servers (5-yr life), Q3: $200K office buildout (lease term) = $140K annual D&A"
    },
    financingAssumptions: {
      title: "Financing Assumptions",
      definition: "Debt and equity raise assumptions including timing, amount, terms, and dilution. Drives interest expense, cash runway, and cap table evolution.",
      example: "Series B: $25M at $100M pre, 20% dilution, 1x non-participating preferred, closes Q2"
    },
    workingCapitalAssumptions: {
      title: "Working Capital Assumptions",
      definition: "Assumptions for AR, AP, inventory, and deferred revenue days. Determines cash conversion cycle and operating cash flow timing.",
      example: "DSO: 45 days, DPO: 30 days, Deferred Revenue: 6 months avg contract = negative working capital benefit"
    },

    // Detailed Financial Models
    revenueModel: {
      title: "Revenue Model",
      definition: "Granular revenue build by product, segment, geography, or customer cohort. Includes new sales, expansion, churn, and pricing assumptions. Foundation for all downstream models.",
      example: "Cohort model: 100 new customers/month x $500 ACV, 5% monthly churn, 2% monthly expansion"
    },
    cogsModel: {
      title: "COGS/Gross Margin Model",
      definition: "Direct costs tied to revenue delivery. For SaaS: hosting, third-party APIs, customer success. Target gross margins typically 70-85% for software.",
      example: "Hosting $2/user + Support $1/user + Third-party APIs $0.50/user = 75% gross margin at $15 ARPU"
    },
    opexModel: {
      title: "OpEx Model",
      definition: "Operating expenses by department (S&M, R&D, G&A) built from headcount, programs, and fixed costs. Key for understanding burn rate and path to profitability.",
      example: "S&M: 40% of revenue, R&D: 25% of revenue, G&A: 15% of revenue = 80% OpEx ratio"
    },
    workingCapitalModel: {
      title: "Working Capital Model",
      definition: "Models AR, AP, inventory, prepaid expenses, and deferred revenue based on revenue/expense drivers and days assumptions. Critical for cash forecasting.",
      example: "Revenue $1M/month x 45 DSO = $1.5M AR; Deferred Revenue = 50% annual contracts x 6 mo avg = $3M"
    },
    debtSchedule: {
      title: "Debt Schedule",
      definition: "Detailed amortization of all debt instruments including principal, interest, fees, and covenants. Includes term loans, revolvers, venture debt, and convertible notes.",
      example: "Venture debt $5M, 3-yr term, 10% interest, 2% end-of-term fee, 36-mo amort after 12-mo IO"
    },
    depreciationSchedule: {
      title: "Depreciation Schedule",
      definition: "Asset-by-asset depreciation calculation by method (straight-line, accelerated) and useful life. Links CapEx to P&L expense and balance sheet NBV.",
      example: "Servers: $500K, 5-yr SL = $100K/yr D&A; Software: $300K, 3-yr SL = $100K/yr amort"
    },
    equityCapTable: {
      title: "Equity/Cap Table",
      definition: "Complete ownership ledger showing all shareholders, share classes, options, warrants, and SAFEs. Calculates dilution, liquidation preferences, and waterfall analysis.",
      example: "Founders 60%, Series A 25%, Option Pool 15% on 10M shares fully diluted"
    },
    scenarioAnalysis: {
      title: "Scenario Analysis",
      definition: "Multiple forecast cases (Base, Bull, Bear) with different assumption sets. Enables sensitivity analysis on key drivers and stress testing of business model.",
      example: "Base: 100% growth, Bear: 50% growth with +3 mo runway buffer, Bull: 150% growth with earlier raise"
    },

    // Financial KPIs
    grossMargin: {
      title: "Gross Margin %",
      definition: "(Revenue - COGS) / Revenue. Measures production/delivery efficiency and pricing power. SaaS benchmark: 70-85%.",
      example: "$10M revenue - $2.5M COGS = $7.5M gross profit = 75% gross margin"
    },
    operatingMargin: {
      title: "Operating Margin %",
      definition: "Operating Income / Revenue. Measures core business profitability before financing and taxes. Shows operational leverage.",
      example: "$10M revenue - $8M total costs = $2M operating income = 20% operating margin"
    },
    ebitdaMargin: {
      title: "EBITDA Margin %",
      definition: "EBITDA / Revenue. Proxy for operating cash generation. Adds back non-cash D&A to operating income. Common valuation metric.",
      example: "$2M operating income + $500K D&A = $2.5M EBITDA = 25% EBITDA margin"
    },
    netProfitMargin: {
      title: "Net Profit Margin %",
      definition: "Net Income / Revenue. Bottom-line profitability after all expenses including interest and taxes. Ultimate measure of profitability.",
      example: "$2.5M EBITDA - $200K interest - $500K taxes = $1.8M net income = 18% net margin"
    },
    returnMetrics: {
      title: "ROE / ROA / ROIC",
      definition: "Return on Equity (NI/Equity), Return on Assets (NI/Assets), Return on Invested Capital (NOPAT/Invested Capital). Measures capital efficiency.",
      example: "$1.8M NI / $15M equity = 12% ROE; $1.8M / $50M assets = 3.6% ROA"
    },
    liquidityRatios: {
      title: "Current/Quick Ratio",
      definition: "Current Ratio = Current Assets / Current Liabilities. Quick Ratio excludes inventory. Measures short-term liquidity. Target >1.5x.",
      example: "$20M current assets / $10M current liabilities = 2.0x current ratio"
    },

    // Growth KPIs
    revenueGrowthRate: {
      title: "Revenue Growth Rate",
      definition: "(Current Period Revenue - Prior Period Revenue) / Prior Period Revenue. Primary top-line performance metric. YoY most common for annual comparisons.",
      example: "$12M current year / $8M prior year - 1 = 50% YoY revenue growth"
    },
    periodGrowth: {
      title: "MoM/QoQ/YoY Growth",
      definition: "Growth rates across different time horizons. MoM shows momentum, QoQ removes seasonality noise, YoY provides annual comparison.",
      example: "MoM: +5% (strong), QoQ: +18% (healthy), YoY: +100% (high-growth)"
    },
    customerGrowthRate: {
      title: "Customer Growth Rate",
      definition: "Net new customer growth after accounting for churn. Leading indicator of future revenue. Segment by size, industry, or acquisition channel.",
      example: "100 new customers - 10 churned = 90 net new = 15% customer growth rate"
    },
    marketShare: {
      title: "Market Share %",
      definition: "Company Revenue / Total Addressable Market (or Serviceable Addressable Market). Indicates competitive position and growth runway remaining.",
      example: "$10M revenue / $500M SAM = 2% market share with 98% runway"
    },

    // Unit Economics
    cac: {
      title: "Customer Acquisition Cost (CAC)",
      definition: "Total S&M Spend / New Customers Acquired. Fully-loaded includes salaries. Benchmark against LTV for payback analysis.",
      example: "$1M S&M spend / 200 new customers = $5,000 CAC"
    },
    ltv: {
      title: "Lifetime Value (LTV)",
      definition: "ARPU x Gross Margin x Customer Lifetime (1/Churn Rate). Represents total gross profit from average customer relationship.",
      example: "$1,000 ARPU x 75% GM x 40 months (2.5% monthly churn) = $30,000 LTV"
    },
    ltvCacRatio: {
      title: "LTV:CAC Ratio",
      definition: "Lifetime Value / Customer Acquisition Cost. Measures unit economics health. Target >3:1 for sustainable growth, >5:1 indicates underinvestment.",
      example: "$30,000 LTV / $5,000 CAC = 6:1 ratio (healthy, may be underinvesting in growth)"
    },
    paybackPeriod: {
      title: "CAC Payback Period",
      definition: "CAC / (ARPU x Gross Margin). Months to recover customer acquisition investment. Target <18 months for SaaS.",
      example: "$5,000 CAC / ($1,000 ARPU x 75% GM) = 6.7 months payback"
    },
    arpu: {
      title: "ARPU/ARPA",
      definition: "Average Revenue Per User/Account. Total Revenue / Total Customers. Track trends over time to monitor pricing power and expansion revenue.",
      example: "$1M MRR / 1,000 customers = $1,000 ARPU; up from $800 12 months ago (+25%)"
    },
    churnRate: {
      title: "Churn Rate",
      definition: "Customers Lost / Beginning Customers (logo churn) or Revenue Lost / Beginning Revenue (revenue churn). Track gross and net (including expansion).",
      example: "10 churned / 1,000 beginning = 1% monthly logo churn; 5% annual revenue churn net of expansion"
    },

    // Cash/Efficiency KPIs
    burnRate: {
      title: "Burn Rate",
      definition: "Net cash consumed per month. Gross burn = total cash out; Net burn = cash out - cash in. Primary metric for runway calculation.",
      example: "$800K cash out - $500K cash in = $300K net monthly burn"
    },
    runwayMonths: {
      title: "Runway (Months)",
      definition: "Cash Balance / Monthly Net Burn. Months until cash runs out at current burn rate. Target 18+ months; raise when 9-12 months remaining.",
      example: "$6M cash / $300K monthly burn = 20 months runway"
    },
    cashConversionCycle: {
      title: "Cash Conversion Cycle",
      definition: "DSO + DIO - DPO. Days between paying suppliers and collecting from customers. Negative CCC (like SaaS with annual prepay) is highly favorable.",
      example: "45 DSO + 0 DIO - 30 DPO = 15 days; but with deferred revenue, effective CCC is negative"
    },
    workingCapitalDays: {
      title: "DSO/DPO/DIO",
      definition: "Days Sales Outstanding (AR), Days Payable Outstanding (AP), Days Inventory Outstanding. Working capital efficiency metrics.",
      example: "DSO: $1.5M AR / ($10M revenue / 365) = 55 days; DPO: $500K AP / ($3M COGS / 365) = 61 days"
    },
    ruleOf40: {
      title: "Rule of 40",
      definition: "Revenue Growth Rate + Profit Margin (typically EBITDA or FCF margin) >= 40%. Balances growth vs. profitability for SaaS companies.",
      example: "50% growth + (-10%) EBITDA margin = 40 (threshold); 30% growth + 15% margin = 45 (strong)"
    },

    // Operational KPIs
    revenuePerEmployee: {
      title: "Revenue per Employee",
      definition: "Total Revenue / FTE Count. Productivity metric indicating operational efficiency. Benchmark varies by industry and stage.",
      example: "$10M ARR / 50 employees = $200K/employee (good for early-stage SaaS)"
    },
    quotaAttainment: {
      title: "Quota Attainment",
      definition: "Actual Sales / Sales Quota. Measures sales team performance. Target 70-80% attainment indicates well-set quotas.",
      example: "$800K closed / $1M quota = 80% attainment (healthy)"
    },
    pipelineCoverage: {
      title: "Pipeline Coverage",
      definition: "Total Pipeline Value / Quota. Required pipeline to hit targets given close rates. Target 3-4x coverage for enterprise sales.",
      example: "$4M pipeline / $1M quota = 4x coverage (healthy with 25% close rate)"
    },
    npsScore: {
      title: "NPS Score",
      definition: "Net Promoter Score = % Promoters (9-10) - % Detractors (0-6). Measures customer satisfaction and loyalty. Range -100 to +100.",
      example: "60% promoters - 15% detractors = +45 NPS (good; >50 is excellent)"
    },

    // Internal Outputs
    managementDashboard: {
      title: "Management Dashboard",
      definition: "Real-time or weekly KPI summary for leadership. Includes financial metrics, operational KPIs, and trend indicators. Single source of truth for decision-making.",
      example: "Weekly dashboard: ARR, burn, runway, pipeline, headcount, key deals, product metrics"
    },
    budgetVsActual: {
      title: "Budget vs. Actual",
      definition: "Comparison of planned budget to actual results by line item, department, or project. Identifies variances requiring explanation or action.",
      example: "Marketing budget $200K vs. actual $180K = $20K favorable; headcount 50 vs. 45 = 5 unfilled"
    },
    varianceAnalysis: {
      title: "Variance Analysis",
      definition: "Decomposition of differences between budget/forecast and actual. Separates volume, price, mix, and timing variances. Essential for accountability.",
      example: "Revenue variance: +$100K total = +$150K volume (more deals) - $50K price (discounting)"
    },
    rollingForecasts: {
      title: "Rolling Forecasts",
      definition: "Continuously updated forecast extending fixed periods forward (e.g., always 12-18 months out). More adaptive than annual budgets.",
      example: "Monthly reforecast: Update assumptions, rerun model, compare to prior forecast, explain changes"
    },
    departmentalPLs: {
      title: "Departmental P&Ls",
      definition: "Profit and loss statements by business unit, product line, or cost center. Enables accountability and resource allocation decisions.",
      example: "Product A: $5M revenue, $3M costs, $2M contribution; Product B: $3M revenue, $2.5M costs, $500K contribution"
    },

    // External Outputs
    boardDeck: {
      title: "Board Deck",
      definition: "Quarterly or monthly presentation for board of directors. Covers financial performance, KPIs, strategic initiatives, risks, and asks. Typically 20-30 slides.",
      example: "Sections: Executive Summary, Financial Review, Key Metrics, Product Update, Go-to-Market, Team, Strategic Discussion"
    },
    investorUpdates: {
      title: "Investor Updates",
      definition: "Regular communication to existing investors (monthly/quarterly). Highlights wins, challenges, key metrics, and asks (intros, advice). Builds trust and engagement.",
      example: "Monthly email: 5 bullets on wins, 3 on challenges, key metrics, specific asks"
    },
    fundraisingModel: {
      title: "Fundraising Model",
      definition: "Investor-ready financial model supporting capital raise. Shows historical, current, and projected performance with clear assumptions and scenario analysis.",
      example: "3-statement model with 3-5 year forecast, monthly detail Year 1, quarterly Years 2-3, annual Years 4-5"
    },
    dueDiligencePackage: {
      title: "Due Diligence Package",
      definition: "Comprehensive data room for investor or acquirer review. Includes financials, contracts, cap table, legal docs, and supporting schedules.",
      example: "VDR folders: Financials, Legal, HR, IP, Customers, Product, Corporate Governance"
    },
    auditSchedules: {
      title: "Audit Schedules",
      definition: "Supporting documentation for external auditors. Includes account reconciliations, transaction testing samples, and management representations.",
      example: "PBC list: Revenue recognition memo, AR aging, stock comp schedule, lease analysis, debt roll-forward"
    },

    // Strategic Outputs
    valuationModel: {
      title: "Valuation Model",
      definition: "Analysis determining company value using DCF, comparable companies, precedent transactions, or VC method. Critical for fundraising and M&A.",
      example: "DCF: 5-year projections + terminal value, 15% WACC = $150M; Comps: 10x ARR = $100M"
    },
    maAnalysis: {
      title: "M&A Analysis",
      definition: "Financial modeling for mergers, acquisitions, or divestitures. Includes synergy analysis, accretion/dilution, integration costs, and pro forma statements.",
      example: "Target $50M revenue + $10M synergies - $5M integration costs = $55M pro forma; 2-year payback"
    },
    exitScenarios: {
      title: "Exit Scenarios",
      definition: "Modeling potential exit outcomes (IPO, acquisition, secondary) with timing, valuation, and proceeds waterfall. Informs strategy and investor expectations.",
      example: "Base case: $500M exit Year 5, 3x MOIC for Series B; Bull case: $1B exit, 7x MOIC"
    },
    capitalAllocation: {
      title: "Capital Allocation",
      definition: "Framework for deploying capital across growth investments, operations, and returns. Balances growth rate, profitability, and risk.",
      example: "60% R&D (growth), 30% S&M (customer acquisition), 10% G&A (infrastructure)"
    },
    strategicPlan: {
      title: "Strategic Plan",
      definition: "Long-term financial plan (3-5 years) aligned with corporate strategy. Translates strategic objectives into financial targets and resource requirements.",
      example: "3-year plan: $100M ARR by Year 3, path to profitability Year 4, IPO-ready Year 5"
    }
  };

  // Color palette - ShardCFO professional style
  const colors = {
    primary: '#1B2B4B',
    secondary: '#2D4A7C',
    accent: '#4A90D9',
    success: '#10B981',
    warning: '#F59E0B',
    background: '#F8FAFC',
    card: '#FFFFFF',
    text: '#1E293B',
    textLight: '#64748B',
    border: '#E2E8F0',

    source: { bg: '#EEF2FF', border: '#6366F1', text: '#4338CA' },
    accounting: { bg: '#E0F2FE', border: '#0284C7', text: '#0369A1' },
    threeStatement: { bg: '#F0FDF4', border: '#16A34A', text: '#15803D' },
    drivers: { bg: '#FEF3C7', border: '#D97706', text: '#B45309' },
    detailed: { bg: '#FCE7F3', border: '#DB2777', text: '#BE185D' },
    kpis: { bg: '#F3E8FF', border: '#9333EA', text: '#7C3AED' },
    outputs: { bg: '#ECFDF5', border: '#059669', text: '#047857' }
  };

  const handleMouseEnter = (key: string, event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.top
    });
    setActiveTooltip(key);
  };

  const handleMouseLeave = () => {
    setActiveTooltip(null);
  };

  // Reusable component for diagram items
  const DiagramItem = ({ id, label, color }: { id: string; label: string; color: ColorScheme }) => (
    <div
      onMouseEnter={(e) => handleMouseEnter(id, e)}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => {
        if (isMobile) {
          if (activeTooltip === id) {
            setActiveTooltip(null);
          } else {
            handleMouseEnter(id, e);
          }
        }
      }}
      style={{
        padding: isMobile ? '8px 10px' : '10px 14px',
        backgroundColor: color.bg,
        border: `2px solid ${color.border}`,
        borderRadius: '8px',
        fontSize: isMobile ? '11px' : '13px',
        fontWeight: '500',
        color: color.text,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        textAlign: 'center',
        boxShadow: activeTooltip === id ? `0 4px 12px ${color.border}40` : 'none',
        transform: activeTooltip === id ? 'translateY(-2px)' : 'none',
        wordBreak: isMobile ? 'break-word' : 'normal',
      }}
    >
      {label}
    </div>
  );

  // Section header component
  const SectionHeader = ({ title, subtitle, color }: { title: string; subtitle?: string; color: ColorScheme }) => (
    <div style={{ marginBottom: isMobile ? '12px' : '16px' }}>
      <h3 style={{
        fontSize: isMobile ? '14px' : '16px',
        fontWeight: '700',
        color: color.text,
        marginBottom: '4px',
        letterSpacing: '-0.025em'
      }}>
        {title}
      </h3>
      {subtitle && (
        <p style={{ fontSize: isMobile ? '11px' : '12px', color: colors.textLight }}>{subtitle}</p>
      )}
    </div>
  );

  // Arrow connector component
  const Arrow = ({ direction = 'down', color: arrowColor = colors.textLight }: { direction?: 'down' | 'right' | 'bidirectional'; color?: string }) => {
    const styles: Record<string, React.CSSProperties> = {
      down: { width: '2px', height: '24px', margin: '8px auto' },
      right: { width: '24px', height: '2px', margin: 'auto 8px' },
      bidirectional: { width: '24px', height: '2px', margin: 'auto 8px' }
    };

    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          ...styles[direction],
          backgroundColor: arrowColor,
          position: 'relative'
        }}>
          {direction === 'down' && (
            <div style={{
              position: 'absolute',
              bottom: '-6px',
              left: '-4px',
              width: 0,
              height: 0,
              borderLeft: '5px solid transparent',
              borderRight: '5px solid transparent',
              borderTop: `8px solid ${arrowColor}`
            }} />
          )}
          {direction === 'bidirectional' && (
            <>
              <div style={{
                position: 'absolute',
                left: '-6px',
                top: '-4px',
                width: 0,
                height: 0,
                borderTop: '5px solid transparent',
                borderBottom: '5px solid transparent',
                borderRight: `8px solid ${arrowColor}`
              }} />
              <div style={{
                position: 'absolute',
                right: '-6px',
                top: '-4px',
                width: 0,
                height: 0,
                borderTop: '5px solid transparent',
                borderBottom: '5px solid transparent',
                borderLeft: `8px solid ${arrowColor}`
              }} />
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, sans-serif',
      backgroundColor: colors.background,
      padding: isMobile ? '16px' : '32px',
      borderRadius: '16px',
    }}>
      {/* Header */}
      <div style={{
        maxWidth: '1400px',
        margin: isMobile ? '0 auto 16px' : '0 auto 32px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: isMobile ? '20px' : '28px',
          fontWeight: '800',
          color: colors.text,
          marginBottom: '8px',
          letterSpacing: '-0.025em'
        }}>
          Financial Modeling Architecture
        </h2>
        <p style={{
          fontSize: isMobile ? '14px' : '16px',
          color: colors.textLight,
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Complete data flow from source transactions to executive outputs.
          <span style={{ color: colors.accent, fontWeight: '500' }}> {isMobile ? 'Tap' : 'Hover over'} any element for detailed definitions.</span>
        </p>
      </div>

      {/* Main Diagram Container */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>

        {/* Layer 1: Source Transactions */}
        <div style={{
          backgroundColor: colors.card,
          borderRadius: '16px',
          padding: isMobile ? '16px' : '24px',
          border: `1px solid ${colors.border}`,
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
          <SectionHeader
            title="1. SOURCE TRANSACTIONS"
            subtitle="Raw business activity data entry points"
            color={colors.source}
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(3, 1fr)' : 'repeat(6, 1fr)',
            gap: isMobile ? '8px' : '12px'
          }}>
            <DiagramItem id="salesTransactions" label="Sales Transactions" color={colors.source} />
            <DiagramItem id="purchaseOrders" label="Purchase Orders" color={colors.source} />
            <DiagramItem id="payrollProcessing" label="Payroll Processing" color={colors.source} />
            <DiagramItem id="assetAcquisitions" label="Asset Acquisitions" color={colors.source} />
            <DiagramItem id="debtEquityEvents" label="Debt/Equity Events" color={colors.source} />
            <DiagramItem id="accrualsDeferrals" label="Accruals & Deferrals" color={colors.source} />
          </div>
        </div>

        <Arrow direction="down" color={colors.source.border} />

        {/* Layer 2: Accounting System */}
        <div style={{
          backgroundColor: colors.card,
          borderRadius: '16px',
          padding: isMobile ? '16px' : '24px',
          border: `1px solid ${colors.border}`,
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
          <SectionHeader
            title="2. ACCOUNTING SYSTEM"
            subtitle="Double-entry bookkeeping and record management"
            color={colors.accounting}
          />
          {isMobile ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '8px'
            }}>
              <DiagramItem id="journalEntries" label="Journal Entries" color={colors.accounting} />
              <DiagramItem id="chartOfAccounts" label="Chart of Accounts" color={colors.accounting} />
              <DiagramItem id="subledgers" label="Subledgers" color={colors.accounting} />
              <DiagramItem id="generalLedger" label="General Ledger" color={colors.accounting} />
              <div style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'center' }}>
                <DiagramItem id="trialBalance" label="Trial Balance" color={colors.accounting} />
              </div>
            </div>
          ) : (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap'
            }}>
              <DiagramItem id="journalEntries" label="Journal Entries" color={colors.accounting} />
              <span style={{ color: colors.textLight }}>-&gt;</span>
              <DiagramItem id="chartOfAccounts" label="Chart of Accounts" color={colors.accounting} />
              <span style={{ color: colors.textLight }}>-&gt;</span>
              <DiagramItem id="subledgers" label="Subledgers" color={colors.accounting} />
              <span style={{ color: colors.textLight }}>-&gt;</span>
              <DiagramItem id="generalLedger" label="General Ledger" color={colors.accounting} />
              <span style={{ color: colors.textLight }}>-&gt;</span>
              <DiagramItem id="trialBalance" label="Trial Balance" color={colors.accounting} />
            </div>
          )}
        </div>

        <Arrow direction="down" color={colors.accounting.border} />

        {/* Layer 3 & 4: 3-Statement Model + Driver Assumptions (Side by Side on desktop, stacked on mobile) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '16px'
        }}>
          {/* 3-Statement Model */}
          <div style={{
            backgroundColor: colors.card,
            borderRadius: '16px',
            padding: isMobile ? '16px' : '24px',
            border: `1px solid ${colors.border}`,
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
          }}>
            <SectionHeader
              title="3. THREE-STATEMENT MODEL"
              subtitle="Integrated financial statements"
              color={colors.threeStatement}
            />
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: isMobile ? '8px' : '12px'
            }}>
              <DiagramItem id="incomeStatement" label="Income Statement (P&L)" color={colors.threeStatement} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <Arrow direction="bidirectional" color={colors.threeStatement.border} />
              </div>
              <div style={{ display: 'flex', gap: isMobile ? '8px' : '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <DiagramItem id="balanceSheet" label="Balance Sheet" color={colors.threeStatement} />
                <DiagramItem id="cashFlowStatement" label="Cash Flow Statement" color={colors.threeStatement} />
              </div>
              <div style={{
                fontSize: isMobile ? '10px' : '11px',
                color: colors.textLight,
                textAlign: 'center',
                marginTop: '8px',
                padding: '8px',
                backgroundColor: colors.threeStatement.bg,
                borderRadius: '6px'
              }}>
                Circular linkage: Net Income -&gt; Retained Earnings -&gt; Cash Changes -&gt; Cash Balance
              </div>
            </div>
          </div>

          {/* Driver-Based Assumptions */}
          <div style={{
            backgroundColor: colors.card,
            borderRadius: '16px',
            padding: isMobile ? '16px' : '24px',
            border: `1px solid ${colors.border}`,
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
          }}>
            <SectionHeader
              title="4. DRIVER-BASED ASSUMPTIONS"
              subtitle="Forward-looking forecast inputs"
              color={colors.drivers}
            />
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: isMobile ? '8px' : '12px'
            }}>
              <DiagramItem id="revenueDrivers" label="Revenue Drivers" color={colors.drivers} />
              <DiagramItem id="costDrivers" label="Cost Drivers" color={colors.drivers} />
              <DiagramItem id="headcountPlan" label="Headcount Plan" color={colors.drivers} />
              <DiagramItem id="capexSchedule" label="CapEx Schedule" color={colors.drivers} />
              <DiagramItem id="financingAssumptions" label="Financing Assumptions" color={colors.drivers} />
              <DiagramItem id="workingCapitalAssumptions" label="Working Capital Assumptions" color={colors.drivers} />
            </div>
          </div>
        </div>

        <Arrow direction="down" color={colors.detailed.border} />

        {/* Layer 5: Detailed Financial Models */}
        <div style={{
          backgroundColor: colors.card,
          borderRadius: '16px',
          padding: isMobile ? '16px' : '24px',
          border: `1px solid ${colors.border}`,
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
          <SectionHeader
            title="5. DETAILED FINANCIAL MODELS"
            subtitle="Granular bottom-up model components"
            color={colors.detailed}
          />
          {isMobile ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '8px'
            }}>
              <DiagramItem id="revenueModel" label="Revenue Model" color={colors.detailed} />
              <DiagramItem id="cogsModel" label="COGS/GM Model" color={colors.detailed} />
              <DiagramItem id="opexModel" label="OpEx Model" color={colors.detailed} />
              <DiagramItem id="workingCapitalModel" label="Working Capital" color={colors.detailed} />
              <DiagramItem id="debtSchedule" label="Debt Schedule" color={colors.detailed} />
              <DiagramItem id="depreciationSchedule" label="D&A Schedule" color={colors.detailed} />
              <div style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'center' }}>
                <DiagramItem id="equityCapTable" label="Equity/Cap Table" color={colors.detailed} />
              </div>
            </div>
          ) : (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap'
            }}>
              <DiagramItem id="revenueModel" label="Revenue Model" color={colors.detailed} />
              <span style={{ color: colors.textLight }}>-&gt;</span>
              <DiagramItem id="cogsModel" label="COGS/GM Model" color={colors.detailed} />
              <span style={{ color: colors.textLight }}>-&gt;</span>
              <DiagramItem id="opexModel" label="OpEx Model" color={colors.detailed} />
              <span style={{ color: colors.textLight }}>-&gt;</span>
              <DiagramItem id="workingCapitalModel" label="Working Capital" color={colors.detailed} />
              <span style={{ color: colors.textLight }}>-&gt;</span>
              <DiagramItem id="debtSchedule" label="Debt Schedule" color={colors.detailed} />
              <span style={{ color: colors.textLight }}>-&gt;</span>
              <DiagramItem id="depreciationSchedule" label="D&A Schedule" color={colors.detailed} />
              <span style={{ color: colors.textLight }}>-&gt;</span>
              <DiagramItem id="equityCapTable" label="Equity/Cap Table" color={colors.detailed} />
            </div>
          )}
          <div style={{
            marginTop: isMobile ? '8px' : '16px',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <DiagramItem id="scenarioAnalysis" label="Scenario Analysis (Base / Bull / Bear)" color={colors.detailed} />
          </div>
        </div>

        <Arrow direction="down" color={colors.kpis.border} />

        {/* Layer 6: KPIs */}
        <div style={{
          backgroundColor: colors.card,
          borderRadius: '16px',
          padding: isMobile ? '16px' : '24px',
          border: `1px solid ${colors.border}`,
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
          <SectionHeader
            title="6. KEY PERFORMANCE INDICATORS"
            subtitle="Metrics derived from financial models"
            color={colors.kpis}
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)',
            gap: isMobile ? '12px' : '16px'
          }}>
            {/* Financial KPIs */}
            <div style={{
              backgroundColor: colors.kpis.bg,
              borderRadius: '12px',
              padding: '16px',
              border: `1px solid ${colors.kpis.border}30`
            }}>
              <h4 style={{ fontSize: '12px', fontWeight: '700', color: colors.kpis.text, marginBottom: '12px' }}>
                Financial KPIs
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <DiagramItem id="grossMargin" label="Gross Margin %" color={colors.kpis} />
                <DiagramItem id="operatingMargin" label="Operating Margin %" color={colors.kpis} />
                <DiagramItem id="ebitdaMargin" label="EBITDA Margin %" color={colors.kpis} />
                <DiagramItem id="netProfitMargin" label="Net Profit Margin %" color={colors.kpis} />
                <DiagramItem id="returnMetrics" label="ROE / ROA / ROIC" color={colors.kpis} />
                <DiagramItem id="liquidityRatios" label="Current/Quick Ratio" color={colors.kpis} />
              </div>
            </div>

            {/* Growth KPIs */}
            <div style={{
              backgroundColor: colors.kpis.bg,
              borderRadius: '12px',
              padding: '16px',
              border: `1px solid ${colors.kpis.border}30`
            }}>
              <h4 style={{ fontSize: '12px', fontWeight: '700', color: colors.kpis.text, marginBottom: '12px' }}>
                Growth KPIs
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <DiagramItem id="revenueGrowthRate" label="Revenue Growth Rate" color={colors.kpis} />
                <DiagramItem id="periodGrowth" label="MoM/QoQ/YoY Growth" color={colors.kpis} />
                <DiagramItem id="customerGrowthRate" label="Customer Growth Rate" color={colors.kpis} />
                <DiagramItem id="marketShare" label="Market Share %" color={colors.kpis} />
              </div>
            </div>

            {/* Unit Economics */}
            <div style={{
              backgroundColor: colors.kpis.bg,
              borderRadius: '12px',
              padding: '16px',
              border: `1px solid ${colors.kpis.border}30`
            }}>
              <h4 style={{ fontSize: '12px', fontWeight: '700', color: colors.kpis.text, marginBottom: '12px' }}>
                Unit Economics
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <DiagramItem id="cac" label="CAC" color={colors.kpis} />
                <DiagramItem id="ltv" label="LTV" color={colors.kpis} />
                <DiagramItem id="ltvCacRatio" label="LTV:CAC Ratio" color={colors.kpis} />
                <DiagramItem id="paybackPeriod" label="Payback Period" color={colors.kpis} />
                <DiagramItem id="arpu" label="ARPU/ARPA" color={colors.kpis} />
                <DiagramItem id="churnRate" label="Churn Rate" color={colors.kpis} />
              </div>
            </div>

            {/* Cash/Efficiency KPIs */}
            <div style={{
              backgroundColor: colors.kpis.bg,
              borderRadius: '12px',
              padding: '16px',
              border: `1px solid ${colors.kpis.border}30`
            }}>
              <h4 style={{ fontSize: '12px', fontWeight: '700', color: colors.kpis.text, marginBottom: '12px' }}>
                Cash & Efficiency
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <DiagramItem id="burnRate" label="Burn Rate" color={colors.kpis} />
                <DiagramItem id="runwayMonths" label="Runway (Months)" color={colors.kpis} />
                <DiagramItem id="cashConversionCycle" label="Cash Conversion Cycle" color={colors.kpis} />
                <DiagramItem id="workingCapitalDays" label="DSO/DPO/DIO" color={colors.kpis} />
                <DiagramItem id="ruleOf40" label="Rule of 40" color={colors.kpis} />
              </div>
            </div>

            {/* Operational KPIs */}
            <div style={{
              backgroundColor: colors.kpis.bg,
              borderRadius: '12px',
              padding: '16px',
              border: `1px solid ${colors.kpis.border}30`
            }}>
              <h4 style={{ fontSize: '12px', fontWeight: '700', color: colors.kpis.text, marginBottom: '12px' }}>
                Operational KPIs
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <DiagramItem id="revenuePerEmployee" label="Revenue per Employee" color={colors.kpis} />
                <DiagramItem id="quotaAttainment" label="Quota Attainment" color={colors.kpis} />
                <DiagramItem id="pipelineCoverage" label="Pipeline Coverage" color={colors.kpis} />
                <DiagramItem id="npsScore" label="NPS Score" color={colors.kpis} />
              </div>
            </div>
          </div>
        </div>

        <Arrow direction="down" color={colors.outputs.border} />

        {/* Layer 7: Executive Outputs */}
        <div style={{
          backgroundColor: colors.card,
          borderRadius: '16px',
          padding: isMobile ? '16px' : '24px',
          border: `1px solid ${colors.border}`,
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
          <SectionHeader
            title="7. EXECUTIVE OUTPUTS"
            subtitle="Consumable deliverables for stakeholders"
            color={colors.outputs}
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '12px' : '16px'
          }}>
            {/* Internal Outputs */}
            <div style={{
              backgroundColor: colors.outputs.bg,
              borderRadius: '12px',
              padding: isMobile ? '12px' : '16px',
              border: `1px solid ${colors.outputs.border}30`
            }}>
              <h4 style={{ fontSize: '12px', fontWeight: '700', color: colors.outputs.text, marginBottom: '12px' }}>
                Internal Outputs
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <DiagramItem id="managementDashboard" label="Management Dashboard" color={colors.outputs} />
                <DiagramItem id="budgetVsActual" label="Budget vs. Actual" color={colors.outputs} />
                <DiagramItem id="varianceAnalysis" label="Variance Analysis" color={colors.outputs} />
                <DiagramItem id="rollingForecasts" label="Rolling Forecasts" color={colors.outputs} />
                <DiagramItem id="departmentalPLs" label="Departmental P&Ls" color={colors.outputs} />
              </div>
            </div>

            {/* External Outputs */}
            <div style={{
              backgroundColor: colors.outputs.bg,
              borderRadius: '12px',
              padding: isMobile ? '12px' : '16px',
              border: `1px solid ${colors.outputs.border}30`
            }}>
              <h4 style={{ fontSize: '12px', fontWeight: '700', color: colors.outputs.text, marginBottom: '12px' }}>
                External Outputs
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <DiagramItem id="boardDeck" label="Board Deck" color={colors.outputs} />
                <DiagramItem id="investorUpdates" label="Investor Updates" color={colors.outputs} />
                <DiagramItem id="fundraisingModel" label="Fundraising Model" color={colors.outputs} />
                <DiagramItem id="dueDiligencePackage" label="Due Diligence Package" color={colors.outputs} />
                <DiagramItem id="auditSchedules" label="Audit Schedules" color={colors.outputs} />
              </div>
            </div>

            {/* Strategic Outputs */}
            <div style={{
              backgroundColor: colors.outputs.bg,
              borderRadius: '12px',
              padding: isMobile ? '12px' : '16px',
              border: `1px solid ${colors.outputs.border}30`
            }}>
              <h4 style={{ fontSize: '12px', fontWeight: '700', color: colors.outputs.text, marginBottom: '12px' }}>
                Strategic Outputs
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <DiagramItem id="valuationModel" label="Valuation Model" color={colors.outputs} />
                <DiagramItem id="maAnalysis" label="M&A Analysis" color={colors.outputs} />
                <DiagramItem id="exitScenarios" label="Exit Scenarios" color={colors.outputs} />
                <DiagramItem id="capitalAllocation" label="Capital Allocation" color={colors.outputs} />
                <DiagramItem id="strategicPlan" label="Strategic Plan" color={colors.outputs} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tooltip */}
      {activeTooltip && definitions[activeTooltip] && (
        <div
          style={{
            position: 'fixed',
            top: isMobile ? 'auto' : tooltipPosition.y - 10,
            bottom: isMobile ? '20px' : 'auto',
            left: isMobile ? '16px' : Math.min(Math.max(tooltipPosition.x, 200), typeof window !== 'undefined' ? window.innerWidth - 200 : 1000),
            right: isMobile ? '16px' : 'auto',
            transform: isMobile ? 'none' : 'translate(-50%, -100%)',
            backgroundColor: colors.primary,
            color: 'white',
            padding: isMobile ? '12px 16px' : '16px 20px',
            borderRadius: '12px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
            maxWidth: isMobile ? 'none' : '400px',
            zIndex: 1000,
            pointerEvents: 'none',
          }}
        >
          {!isMobile && (
            <div style={{
              position: 'absolute',
              bottom: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderTop: `10px solid ${colors.primary}`
            }} />
          )}
          <h4 style={{
            fontSize: isMobile ? '14px' : '15px',
            fontWeight: '700',
            marginBottom: '8px',
            color: colors.accent
          }}>
            {definitions[activeTooltip].title}
          </h4>
          <p style={{
            fontSize: isMobile ? '12px' : '13px',
            lineHeight: '1.5',
            marginBottom: '10px',
            opacity: 0.95
          }}>
            {definitions[activeTooltip].definition}
          </p>
          <div style={{
            fontSize: isMobile ? '11px' : '12px',
            padding: isMobile ? '8px 10px' : '10px 12px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '6px',
            borderLeft: `3px solid ${colors.accent}`
          }}>
            <span style={{ fontWeight: '600', color: colors.accent }}>Example: </span>
            {definitions[activeTooltip].example}
          </div>
        </div>
      )}
    </div>
  );
};

export default FinancialModelingDiagram;
