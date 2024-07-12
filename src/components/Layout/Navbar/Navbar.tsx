import Images from "@/components/Images/Images";
const Navbar = () => {
    return (
        <nav className=" bg-[#1B1C1E]">
            <div>
                <Images src="/images/mobile-images/nav/logo/Logo.png" width={155} height={28} alt="logo" objectFit="cover" />
            </div >
            <div>
                <Images src={"/images/big-screen/main/logo/Profile Pic (1).png"} height={40} width={40} alt="profile picture" objectFit="cover" />
                <div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;