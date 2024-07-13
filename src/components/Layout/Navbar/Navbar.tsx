"use client"
import Images from "@/components/Images/Images";
import navIcons from "@/data/navIcons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <nav className=" bg-[#1B1C1E] h-20">
            <div className="flex items-center mr-6 ml-6 h-full lg:max-w-[1152px] lg:mx-auto">
                <div>
                    <Link href={"/"}>
                        <Images src="/images/mobile-images/nav/logo/Logo.png" width={155} height={28} alt="logo" objectFit="cover" /></Link>
                </div >
                <div className="ml-auto flex gap-3 lg:gap-4 items-center relative h-full">
                    <div className="hidden md:contents">
                        {
                            navIcons.map((icon, index) => <Link href="#" key={index}>
                                <Image src={icon} alt="nav icon" width={40} height={40} />
                            </Link>)
                        }
                    </div>
                    <Link href={"/"} className="mr-6">
                        <Images src={"/images/big-screen/main/logo/Profile Pic (1).png"} height={40} width={40} alt="profile picture" style={{ objectFit: "cover" }} />
                    </Link>
                    <div className="md:hidden">
                        <Link href={"#"} className="" onClick={(e) => setIsActive(!isActive)}>
                            {!isActive ? <Images src="/images/mobile-images/Hamburger.svg" width={40} height={40} alt={"hamburger"} /> :
                                <RxCross1 className="text-white w-10 h-10 bg-[#2B2B2B] rounded-full" />
                            }
                        </Link>
                    </div>
                    {isActive && <div className="a absolute top-full hidden">
                        {/* <h1>This is for testing burger section</h1> */}
                    </div>}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;