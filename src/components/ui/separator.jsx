import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  centered = false, // ✅ tambahan prop biar fleksibel
  ...props
}) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0",
        orientation === "horizontal" ? "h-px w-full" : "w-px h-full",
        centered && orientation === "horizontal" && "mx-auto w-1/2", // ✅ rata tengah kalau horizontal
        className
      )}
      {...props}
    />
  );
}

export { Separator };
