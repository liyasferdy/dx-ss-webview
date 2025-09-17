import { useState } from "react";
import { Button } from "./components/ui/button";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import AppSidebar from "./pages/sidebar";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./components/ui/tooltip";

function App() {
  const [open, setOpen] = useState(true); // default terbuka

  return (
    <TooltipProvider>
      <SidebarProvider open={open} onOpenChange={setOpen}>
        <div className="flex flex-row min-h-screen">
          {/* Sidebar */}
          <AppSidebar />

          {/* Main Content */}
          <div className="flex flex-col flex-1 p-3 bg-stone-50 min-w-screen">
            {/* Trigger Sidebar */}
            <div className="flex justify-start mb-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarTrigger>
                    <Button variant="ghost">
                      {open ? "Close Sidebar" : "Open Sidebar"}
                    </Button>
                  </SidebarTrigger>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>{open ? "Hide sidebar" : "Show sidebar"}</p>
                </TooltipContent>
              </Tooltip>
            </div>

            {/* Konten utama */}
            <div className="p-5">
              <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
              <Card className="w-full max-w-sm">
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                  <CardAction>Card Action</CardAction>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  );
}

export default App;
