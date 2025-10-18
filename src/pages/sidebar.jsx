import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "../components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";

export default function AppSidebar() {
  return (
    <Sidebar className="w-64 bg-stone-100 border-r border-slate-200">
      <SidebarHeader className="font-mono m-2">DESI-Sample</SidebarHeader>
      <Separator centered className="w-[230px]" />

      <SidebarContent className="p-1 pt-5 font-stretch-90%">
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>Dashboard</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>

          {/* Collapsible Status Section */}
          <Collapsible defaultOpen className="group/collapsible">
            {/* Collapsible Trigger */}
            <CollapsibleTrigger asChild>
              <SidebarGroupLabel className="cursor-pointer hover:opacity-80">
                Status
              </SidebarGroupLabel>
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

          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>Data overview</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
