
const Footer = () => {
    const date = new Date(Date.now()).getFullYear();
    return (
        <div className="bg-black flex items-center justify-center mt-5 text-white h-10">
            <p>All copyright reserved@ by .. {date}</p>
        </div>
    );
};

export default Footer;