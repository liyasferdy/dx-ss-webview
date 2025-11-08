import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "./components/ui/tooltip";
import Layout from "./Layout";
import Dashboard from "./pages/dashboard";
import DataOverview from "./pages/data_overview";
import AllStatus from "./pages/status/all";
import DelayStatus from "./pages/status/delay";
import FinishStatus from "./pages/status/finish";
import OngoingStatus from "./pages/status/ongoing";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="data-overview" element={<DataOverview />} />
              <Route path="status/all" element={<AllStatus />} />
              <Route path="status/ongoing" element={<OngoingStatus />} />
              <Route path="status/delay" element={<DelayStatus />} />
              <Route path="status/finish" element={<FinishStatus />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
