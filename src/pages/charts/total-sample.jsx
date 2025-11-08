import * as React from "react";
import { Label, Pie, PieChart, Sector } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An interactive pie chart";

const desktopData = [
  { month: "january", desktop: 186, fill: "var(--color-january)" },
  { month: "february", desktop: 305, fill: "var(--color-february)" },
  { month: "march", desktop: 237, fill: "var(--color-march)" },
  { month: "april", desktop: 173, fill: "var(--color-april)" },
  { month: "may", desktop: 209, fill: "var(--color-may)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
  },
  mobile: {
    label: "Mobile",
  },
  january: {
    label: "January",
    color: "oklch(0.646 0.222 41.116)",
  },
  february: {
    label: "February",
    color: "oklch(0.6 0.118 184.704)",
  },
  march: {
    label: "March",
    color: "oklch(0.398 0.07 227.392)",
  },
  april: {
    label: "April",
    color: "oklch(0.828 0.189 84.429)",
  },
  may: {
    label: "May",
    color: "oklch(0.769 0.188 70.08)",
  },
};

export function TotalSampleCharts() {
  const id = "pie-interactive";
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isHovering, setIsHovering] = React.useState(false);

  // Auto-rotate every 5 seconds
  React.useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % desktopData.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isHovering]);

  const handlePieEnter = (_, index) => {
    setIsHovering(true);
    setActiveIndex(index);
  };

  const handlePieLeave = () => {
    setIsHovering(false);
  };

  return (
    <Card data-chart={id} className="flex flex-col w-full max-w-md">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="pb-0">
        <CardTitle>Total Sample</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={desktopData}
              dataKey="desktop"
              nameKey="month"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              onMouseEnter={handlePieEnter}
              onMouseLeave={handlePieLeave}
              activeShape={({ outerRadius = 0, ...props }) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {desktopData[activeIndex].desktop.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          {chartConfig[desktopData[activeIndex].month]?.label}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
