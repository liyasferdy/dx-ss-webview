import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "./components/ui/sidebar";
import AppSidebar from "./pages/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./components/ui/tooltip";
import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";

import panelRight from "@/assets/panel-right-open.svg";
import panelLeft from "@/assets/panel-left-open.svg";

export default function Layout() {
  const [open, setOpen] = useState(true);

  return (
    <SidebarProvider open={open} onOpenChange={setOpen}>
      <div className="flex flex-row min-h-screen min-w-screen">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content Area */}
        <div className="flex flex-col flex-1 p-3">
          {/* Top Bar - Sidebar Trigger & Mode Toggle */}
          <div className="flex justify-between items-center mb-4">
            {/* Sidebar Toggle - Left */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(!open)}
                  className="h-9 w-9"
                >
                  <img
                    src={open ? panelLeft : panelRight}
                    alt="Toggle Sidebar"
                    className="size-5"
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>{open ? "Hide sidebar" : "Show sidebar"}</p>
              </TooltipContent>
            </Tooltip>

            {/* Mode Toggle - Right */}
            <ModeToggle />
          </div>

          {/* Page Content */}
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  );
}
