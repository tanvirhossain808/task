import HomeHero from "@/components/Home/HomeHero/HomeHero";
import ProfileSection from "@/components/Home/HomeHero/ProfileSection";
import MediaParts from "@/components/Home/MediaParts/MediaParts";
import Posts from "@/components/Home/Posts/Posts";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeHero />
      <main className=" bg-[#F6F6F6] lg:mx-auto mx-6 lg:max-w-[1152px]">
        <div className='bg-[#F6F6F6]'>
          <ProfileSection />
        </div>
        <div className="mb-[25px]">
          <MediaParts />
        </div>
        <Posts />
      </main>
    </>
  );
}
