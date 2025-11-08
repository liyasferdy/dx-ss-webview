import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "../components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import dataIcon from "@/assets/text-search.svg";
import chartPie from "@/assets/chart-pie.svg";
import chartLine from "@/assets/chart-line.svg";
import rightIcon from "@/assets/chevron-right.svg";
import downIcon from "@/assets/chevron-down.svg";
import houseIcon from "@/assets/house.svg";
import sendIcon from "@/assets/send.svg";

export default function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const [statusOpen, setStatusOpen] = useState(true);

  useEffect(() => {
    if (state === "collapsed") {
      setStatusOpen(false);
    }
    if (state === "expanded") setStatusOpen(true);
  }, [state]);

  // Check if current path matches
  const isActive = (path) => location.pathname === path;

  return (
    <Sidebar
      className="bg-stone-100 border-r border-slate-200"
      collapsible="icon"
    >
      <SidebarHeader className="m-1 pl-4 pt-3 font-semibold transition-all duration-300">
        {state === "collapsed" ? (
          <img src={sendIcon} alt="home" className="size-4 shrink-0 mx-auto" />
        ) : (
          <div className="flex items-center space-x-2">
            <img src={sendIcon} alt="home" className="size-4 shrink-0" />
            <span>DESI-Sample</span>
          </div>
        )}
      </SidebarHeader>

      <Separator
        centered
        className={cn(
          "transition-all duration-300",
          state === "collapsed" ? "w-8 mx-auto" : "w-[230px]"
        )}
      />

      <SidebarContent className="p-1 pt-5">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Dashboard */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/dashboard")}>
                  <Link to="/dashboard">
                    <img
                      src={chartPie}
                      alt="Dashboard"
                      className="size-4 shrink-0"
                    />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>

          <Collapsible
            open={statusOpen}
            onOpenChange={setStatusOpen}
            className="mt-2 group/collapsible"
          >
            <CollapsibleTrigger asChild>
              <SidebarMenuButton asChild>
                <button className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <img
                      src={chartLine}
                      alt="Status"
                      className="size-4 shrink-0"
                    />
                    <span>Status</span>
                  </div>

                  {/* Right icon - shown when closed */}
                  <img
                    src={rightIcon}
                    alt="Collapse"
                    className="size-4 transition-transform group-data-[state=closed]/collapsible:block hidden"
                  />

                  {/* Down icon - shown when open */}
                  <img
                    src={downIcon}
                    alt="Expand"
                    className="size-4 transition-transform group-data-[state=open]/collapsible:block hidden"
                  />
                </button>
              </SidebarMenuButton>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <SidebarGroupContent className="border-l pl-4 ml-1 border-slate-300">
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive("/status/all")}
                    >
                      <Link to="/status/all">All</Link>
                    </SidebarMenuButton>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive("/status/ongoing")}
                    >
                      <Link to="/status/ongoing">On-going</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive("/status/delay")}
                    >
                      <Link to="/status/delay">Delay</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive("/status/finish")}
                    >
                      <Link to="/status/finish">Finish</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>

          {/* === Data overview paling bawah === */}
          <SidebarGroupContent className="mt-3">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={isActive("/data-overview")}
                >
                  <Link to="/data-overview">
                    <img
                      src={dataIcon}
                      alt="Data Overview"
                      className="size-4 shrink-0"
                    />
                    <span>Data overview</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
