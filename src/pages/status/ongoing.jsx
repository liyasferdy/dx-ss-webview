import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

export default function OngoingStatus() {
  return (
    <div className="p-5">
      {/* <h1 className="text-2xl font-bold mb-4">Dashboard</h1> */}
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>On-going status</CardTitle>
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
  );
}
