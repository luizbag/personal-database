import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <div>
      <h1 className="mt-5 text-6xl">Personal Database</h1>
      <p className="mt-5 text-xl">A personal database for all your needs</p>
      <Button color="primary" radius="sm" className="mt-5">
        Get Started
      </Button>
    </div>
  );
}
