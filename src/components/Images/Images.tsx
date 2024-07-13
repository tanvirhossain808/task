import Image from "next/image";
import { CSSProperties } from "react";
type LayoutProps = {
    radius?: number,
    height: number,
    width: number,
    src: string,
    alt: string,
    objectFit?: string,
    className?: string,
    style?: CSSProperties
};


const Images = ({ radius = 0, ...rest }: LayoutProps) => {
    return (
        <Image className="" {...rest} alt="logo" />
    );
};

export default Images;