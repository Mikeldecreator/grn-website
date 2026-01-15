import Hero from "../components/ui/Hero";
import Navbar from "../components/ui/navigation/Navbar";
import { JSX } from "react";
import { HomeProps } from "../props/NavProps";

export default function Home(): JSX.Element {
  return (
    <div className="w-full">
      <Navbar navItems={HomeProps} />
      <Hero />
    </div>
  );
}
