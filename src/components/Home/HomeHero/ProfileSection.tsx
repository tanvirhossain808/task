import Images from "@/components/Images/Images";

const ProfileSection = () => {
    return (
        <div className="flex items-center lg:items-end pl-[18px] pr-1 flex-wrap lg:-translate-y-1/2">
            <Images src="/images/big-screen/main/logo/Profile Pic (1).png" className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] -translate-y-1/2 lg:-translate-y-0" width={200} height={200} alt="profile picture" />
            <div className="ml-4 basis-[177px] flex-grow">
                <div className="flex gap-x-2 h-full items-center lg:text-2xl">
                    <h1 className="font-Lexend-semi text-[#1d1919] h-full text-xl">
                        John Doe
                    </h1>
                    <span className="font-Lexend-semi text-[#2B2B2B] text-xl lg:text-inherit">•</span>
                    <p className="h-full font-Lexend-light cursor-pointer text-[#76A4CE] text-xs">@johndoe</p>
                    <button className="w-20 h-[30px] hidden lg:block ml-auto bg-[#196AA0] font-Lexend-semi rounded-[100px] text-[#FEFEFE] text-[14px]">Follow</button>
                </div>
                <div className="flex items-center flex-wrap gap-y-2 w-full justify-between">
                    <p className="w-[127px] lg:w-[148px] text-[12px] text-[#1B1C1E] lg:text-[14px]">Astrophotography 🌌 Gamer 👾
                    </p>
                    <button className="w-20 h-[30px] lg:hidden bg-[#196AA0] font-Lexend-semi rounded-[100px] text-[#FEFEFE] text-[14px]">Follow</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;