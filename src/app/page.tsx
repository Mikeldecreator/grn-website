import Hero from "../components/ui/Hero";
import Navbar from "../components/ui/Navbar";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
    </div>
  );
}
