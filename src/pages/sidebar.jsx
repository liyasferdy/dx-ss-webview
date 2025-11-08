import { useState, useEffect } from "react";
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

import dataIcon from "@/assets/text-search.svg";
import chartPie from "@/assets/chart-pie.svg";
import chartLine from "@/assets/chart-line.svg";
import rightIcon from "@/assets/chevron-right.svg";
import downIcon from "@/assets/chevron-down.svg";

export default function AppSidebar() {
  const { state } = useSidebar();
  const [statusOpen, setStatusOpen] = useState(true);

  useEffect(() => {
    if (state === "collapsed") {
      setStatusOpen(false);
    }
    if (state === "expanded") setStatusOpen(true);
  }, [state]);

  return (
    <Sidebar
      className="bg-stone-100 border-r border-slate-200"
      collapsible="icon">
      <SidebarHeader className="m-2 font-semibold">DESI-Sample</SidebarHeader>

      <Separator centered className="w-[230px]" />

      <SidebarContent className="p-1 pt-5">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Dashboard */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <img
                      src={chartPie}
                      alt="Dashboard"
                      className="size-4 shrink-0"
                    />
                    <span>Dashboard</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>

          {/* Collapsible Status Section */}
          <Collapsible
            open={statusOpen}
            onOpenChange={setStatusOpen}
            className="mt-2">
            <CollapsibleTrigger asChild>
              <SidebarMenuButton asChild>
                <a
                  href="#"
                  className="flex items-center justify-between w-full">
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
                </a>
              </SidebarMenuButton>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <SidebarGroupContent className="border-l pl-4 ml-1 border-slate-300">
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>On-going</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>Delay</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>Finish</SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>

          {/* === Data overview paling bawah === */}
          <SidebarGroupContent className="mt-3">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <img
                      src={dataIcon}
                      alt="Data Overview"
                      className="size-4 shrink-0"
                    />
                    <span>Data overview</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
