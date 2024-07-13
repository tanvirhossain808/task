import Images from "@/components/Images/Images";

const ProfileSection = () => {
    return (
        <div className="flex items-center pl-[18px] pr-1 flex-wrap ">
            <Images src="/images/big-screen/main/logo/Profile Pic (1).png" className="-translate-y-1/2" width={100} height={100} alt="profile picture" />
            <div className="ml-4 basis-[177px] flex-grow">
                <div className="flex gap-x-2 h-full items-center">
                    <h1 className="font-Lexend-semi text-[#1d1919] h-full text-xl">
                        John Doe
                    </h1>
                    <span className="font-Lexend-semi text-[#2B2B2B] text-xl">•</span>
                    <p className="h-full font-Lexend-light cursor-pointer text-[#76A4CE] text-xs">@johndoe</p>
                </div>
                <div className="flex items-center flex-wrap gap-y-2 w-full justify-between">
                    <p className="w-[127px] text-[12px] text-[#1B1C1E]">Astrophotography 🌌 Gamer 👾
                    </p>
                    <button className="w-20 h-[30px] bg-[#196AA0] font-Lexend-semi rounded-[100px] text-[#FEFEFE] text-[14px]">Follow</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;