import HomeHero from "@/components/Home/HomeHero/HomeHero";
import MediaParts from "@/components/Home/MediaParts/MediaParts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <HomeHero />
      <div className="mx-6">
        <MediaParts />
      </div>

    </main>
  );
}
