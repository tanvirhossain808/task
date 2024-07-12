import Image from "next/image";
type LayoutProps = {
    radius?: number,
    height: number,
    width: number,
    src: string,
    alt: string,
    objectFit?: string
};


const Images = ({ radius = 0, ...rest }: LayoutProps) => {
    return (
        <Image className="" {...rest} alt="logo" />
    );
};

export default Images;