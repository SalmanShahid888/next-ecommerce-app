import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Button size={"default"} variant={"default"}>
        Click Me
      </Button>
    </>
  );
}
