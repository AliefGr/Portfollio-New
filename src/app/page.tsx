import HomeSection from "@/components/sections/home-section";
import GradientBackground from "@/components/utils/gradient-bg";
import Image from "next/image";

export default function Home() {
  return (
    <GradientBackground>
      <main className="relative min-h-screen">
        <HomeSection />
      </main>
    </GradientBackground>
  );
}
