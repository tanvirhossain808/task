"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type LayoutProps = {
    postTitle: string,
    postBody: string,

}

const Post = ({ postTitle, postBody }: LayoutProps) => {
    const [readMore, setReadMore] = useState(false)
    return (
        <div className="mx-[20px] mt-6">
            <h2 className="font-semibold text-[#2B2B2B] text-base">{postTitle}</h2>
            <p className={`${!readMore ? "line-clamp-6" : ""} indent-[15px] whitespace-pre-line text-xs mt-2 text-[#5F5F5F]`}>{postBody}</p>
            <hr className="bg-gray-800 bg-opacity-10 my-2 h-[1px]" />
            <div className="flex justify-between items-center mb-2">
                <div className="flex flex-wrap items-center gap-2">
                    {
                        ["#photography", "#astronomy", "#astrophotography"].map((link, index) => <Link key={index} href="#" className="text-[#76A4CE] text-[8px] bg-[#FEFEFE] px-2 rounded-[100px]">
                            {link}
                        </Link>)
                    }
                    <Link href="#">
                        <Image src="/images/More Tags.svg" width={10} height={10} alt="more option" />
                    </Link>
                </div>
                <button className="text-[#196AA0] font-Lexend-medium text-xs" onClick={() => setReadMore(!readMore)}>
                    {!readMore ? "Read more" : "Show less"}
                </button>
            </div>
        </div>
    );
};

export default Post;