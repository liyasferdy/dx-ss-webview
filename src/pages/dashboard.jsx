import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { TotalSampleCharts } from "./charts/total-sample";
import { PartDelayCharts } from "./charts/part-delay";
import SampleDistribution from "./charts/sample-distribution";

export default function Dashboard() {
  return (
    <div className=" flex flex-row w-full space-x-5 max-h-1/2">
      <TotalSampleCharts />
      <PartDelayCharts />
      <div className="w-[600px]">
        <SampleDistribution />
      </div>
    </div>
  );
}
