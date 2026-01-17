import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Resources from "@/pages/resources";
import SaaSMetricsGuide from "@/pages/saas-metrics-guide";
import BoardPackageGuide from "@/pages/resources/board-package-guide";
import FinanceTeamBuilding from "@/pages/resources/finance-team-building";
import TaxCreditsGuide from "@/pages/resources/tax-credits-guide";
import AccountingToModels from "@/pages/resources/accounting-to-models";
import SpreadsheetMistakes from "@/pages/resources/spreadsheet-mistakes";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/resources" component={Resources} />
      <Route path="/resources/saas-metrics-guide" component={SaaSMetricsGuide} />
      <Route path="/resources/board-package-guide" component={BoardPackageGuide} />
      <Route path="/resources/finance-team-building" component={FinanceTeamBuilding} />
      <Route path="/resources/tax-credits-guide" component={TaxCreditsGuide} />
      <Route path="/resources/accounting-to-models" component={AccountingToModels} />
      <Route path="/resources/spreadsheet-mistakes" component={SpreadsheetMistakes} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
