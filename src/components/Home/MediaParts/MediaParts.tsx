import Images from "@/components/Images/Images";
import Link from "next/link";

const MediaParts = () => {
    const images = [
        "/images/big-screen/Media/imgs/img.png",
        "/images/big-screen/Media/imgs/img2.png",
        "/images/big-screen/Media/imgs/img3.png",
        "/images/big-screen/Media/imgs/img4.png",
    ]
    const videos = [
        "/images/mobile-images/main/Videos/vid1.jpg",
        "/images/mobile-images/main/Videos/vid2.jpg",
        "/images/mobile-images/main/Videos/vid3.png",
        "/images/mobile-images/main/Videos/vid4.png",
    ]
    return (
        <div className="mt-6 flex justify-between mb-[25px] lg:flex-col lg:flex-nowrap gap-[4%] w-full px-2 flex-wrap lg:w-auto">
            <div className="flex-grow lg:flex-grow-0">
                <h2 className="font-semibold text-2xl text-[#2B2B2B] mb-2">
                    Photos
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(0,200px))] lg:max-w-[400px] relative">
                    {

                        images.map((img, index) => <>
                            <Images key={index} src={img} width={80} height={80} alt="Photos" className="min-w-20 w-full max-h-20 h-auto lg:max-h-[200px] lg:max-w-[200px] md:max-h-[100px]" />

                        </>
                        )
                    }
                    <Link className="absolute top-full right-0 font-Lexend-medium text-[#196AA0] text-xs" href="#">More +</Link>
                </div>
            </div>
            <div className="w-auto lg:mt-12 flex-grow xs:flex-grow-0">
                <h2 className="font-semibold text-2xl text-[#Photos] mb-2">
                    Videos
                </h2>
                <div className="flex flex-col flex-grow relative lg:max-w-[400px]">
                    <Images className="col-span-3 row-span-2 w-full max-w-[200px] md:mx-0 md:max-w-[300px] mx-auto h-20 min-h-[100px] lg:h-full lg:max-w-[400px] lg:max-h-[200px]" src={videos[0]} width={180} height={100} alt="Videos" />
                    <div className="flex es:justify-between gap-2 justify-center mt-2">
                        {
                            videos.filter((videos, index) => index !== 0).map((vid, index) =>
                                <div key={index} className=" w-[52px] xs:w-[70px] md:w-[100px] lg:w-full lg:max-w-[100px] min-h-11 relative flex-grow-1">
                                    <Images key={index} src={vid} style={{ objectFit: "cover" }} className={` w-full lg:w-full lg:h-auto`} width={52} height={48} alt="Videos" />
                                    <span className="absolute top-1/2 z-10 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <svg className="" xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
                                            <g filter="url(#filter0_b_4_232)">
                                                <rect x="1" y="1" width="20" height="14.2857" rx="3" fill="#D0D0D0" fillOpacity="0.2" />
                                                <rect x="1" y="1" width="20" height="14.2857" rx="3" stroke="#F6F6F6" strokeOpacity="0.6" strokeWidth="0.6" />
                                            </g>
                                            <path d="M13.8571 8.14285L9.57143 10.6172L9.57143 5.66849L13.8571 8.14285Z" fill="#F6F6F6" fillOpacity="0.8" />
                                            <defs>
                                                <filter id="filter0_b_4_232" x="-3.3" y="-3.3" width="28.6" height="22.8857" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4_232" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_4_232" result="shape" />
                                                </filter>
                                            </defs>
                                        </svg>
                                    </span>
                                </div>
                            )
                        }
                    </div>
                    <Link className="absolute top-full right-0 font-Lexend-medium text-[#196AA0] text-xs" href="#">More +</Link>
                </div>
            </div>
        </div >
    );
};

export default MediaParts;