import HomeHero from "@/components/Home/HomeHero/HomeHero";
import ProfileSection from "@/components/Home/HomeHero/ProfileSection";
import MediaParts from "@/components/Home/MediaParts/MediaParts";
import Posts from "@/components/Home/Posts/Posts";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="">
        <HomeHero />
        <main className=" bg-[#F6F6F6] lg:mx-auto mx-6 lg:max-w-[1152px] lg:flex justify-between">
          <div className=''>
            <ProfileSection />
            <div className="hidden lg:block">
              <Posts />
            </div>
          </div>
          {/* <div className="mb-[25px] order-1"> */}
          <MediaParts />
          {/* </div> */}
          <div className="lg:hidden">
            <Posts />
          </div>
        </main>
      </div>
    </>
  );
}
