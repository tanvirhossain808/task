import HomeHero from "@/components/Home/HomeHero/HomeHero";
import MediaParts from "@/components/Home/MediaParts/MediaParts";
import Posts from "@/components/Home/Posts/Posts";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-[#F6F6F6] mx-6 lg:max-w-[1152px] lg:mx-auto">
      <HomeHero />
      <div className="mb-[25px]">
        <MediaParts />
      </div>
      <Posts />
    </main>
  );
}
