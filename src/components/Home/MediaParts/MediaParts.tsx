import Images from "@/components/Images/Images";

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
        <div className="mt-6 flex justify-between w-full px-2">
            <div className="grid grid-cols-2 ">
                {
                    images.map((img, index) => <Images key={index} src={img} width={80} height={80} alt="Photos" className="" />)
                }
            </div>
            <div className="flex flex-col h-full">
                <Images className="col-span-3 row-span-2 w-full h-20 min-h-[100px]" src={videos[0]} width={180} height={100} alt="Videos" />
                <div className="flex gap-2 justify-center mt-2">
                    {
                        videos.filter((videos, index) => index !== 0).map((vid, index) => <Images key={index} src={vid} className={`h-12`} width={52} height={48} alt="Videos" />)
                    }
                </div>
            </div>
        </div >
    );
};

export default MediaParts;