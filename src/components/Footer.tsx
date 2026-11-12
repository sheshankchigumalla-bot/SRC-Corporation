import Image from "next/image";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#f6f6f5] border-t-0 mt-0">
            <div className="w-full max-w-site mx-auto px-[2.8vw] py-[18px] pb-3.5 grid grid-cols-[1.5fr_0.72fr_1.02fr] gap-6 items-start min-h-[250px] max-[640px]:grid-cols-1 max-[640px]:gap-3.5 max-[640px]:px-[18px] max-[640px]:py-4 max-[640px]:pb-3 max-[640px]:min-h-0">
                <div className="flex flex-col justify-start items-start">
                    <Image
                        src="/images/src-logo.svg"
                        alt="SRC Corporation"
                        width={190}
                        height={190}
                        className="w-[190px] h-auto -mt-1.5 -mb-[34px] block max-[640px]:w-[138px]"
                    />
                    <p className="m-0 max-w-[460px] text-[1.15rem] leading-[1.4] text-[#4b5563] font-zilla font-normal max-[640px]:text-[1.05rem] max-[640px]:max-w-full">
                        SRC Corporation supplies premium chilli and spice products with
                        consistent quality, competitive pricing, and reliable global
                        delivery.
                    </p>
                </div>
                <div className="flex flex-col justify-start pt-12 max-[640px]:pt-0">
                    <h2 className="font-inter font-bold text-[1.1rem] m-0 mb-2 text-[#1f2937]">
                        Quick Links
                    </h2>
                    <ul className="list-none m-0 p-0 font-inter font-normal text-[1rem] leading-[1.55] text-[#4f5966]">
                        <li>
                            <a href="#hero">Home</a>
                        </li>
                        <li className="mt-0.5">
                            <a href="#about">About</a>
                        </li>
                        <li className="mt-0.5">
                            <a href="#products">Products</a>
                        </li>
                        <li className="mt-0.5">
                            <a href="#process">Process</a>
                        </li>
                        <li className="mt-0.5">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col justify-start pt-12 font-zain font-normal text-[#4f5966] max-[640px]:pt-0">
                    <p className="m-0 mb-2 flex flex-col gap-0.5 text-[0.92rem] leading-[1.4]">
                        <span className="inline-flex items-center gap-1.5 font-zain text-[#253246] text-[0.95rem] font-normal">
                            <FaPhoneAlt aria-hidden="true" /> Phone
                        </span>
                        <span>
                            <a href="tel:+919849424568" className="hover:text-src-red">+91 98494 24568</a> &nbsp;&nbsp;{" "}
                            <a href="tel:+918885024568" className="hover:text-src-red">+91 88850 24568</a>
                        </span>
                        <span>
                            <a href="tel:+919652502121" className="hover:text-src-red">+91 96525 02121</a> &nbsp;&nbsp;{" "}
                            <a href="tel:+4917661749674" className="hover:text-src-red">+49 176 61749674</a>
                        </span>
                    </p>
                    <p className="m-0 mb-2 flex flex-col gap-0.5 text-[0.92rem] leading-[1.4]">
                        <span className="inline-flex items-center gap-1.5 font-zain text-[#253246] text-[0.95rem] font-normal">
                            <FaEnvelope aria-hidden="true" /> Email
                        </span>
                        <a
                            href="mailto:srccorporation2112@gmail.com"
                            className="w-fit text-inherit no-underline hover:text-src-red hover:underline focus-visible:text-src-red focus-visible:underline"
                        >
                            srccorporation2112@gmail.com
                        </a>
                        <a
                            href="mailto:sheshankchigumalla@gmail.com"
                            className="w-fit text-inherit no-underline hover:text-src-red hover:underline focus-visible:text-src-red focus-visible:underline"
                        >
                            sheshankchigumalla@gmail.com
                        </a>
                    </p>
                    <p className="m-0 mb-2 flex flex-col gap-0.5 text-[0.92rem] leading-[1.4]">
                        <span className="inline-flex items-center gap-1.5 font-zain text-[#253246] text-[0.95rem] font-normal">
                            <FaMapMarkerAlt aria-hidden="true" /> Location
                        </span>
                        <span>
                            Shop No-112, 1st Floor, 16-10-1, Malakpet Gunj, Sri Krupa Market,
                            Hyderabad, Telangana 500036, India
                        </span>
                    </p>
                </div>
            </div>
            <div className="border-t border-[#d9dde2] py-3 pb-3.5 px-[2.8vw] w-full max-w-site mx-auto flex justify-between font-inter text-[0.85rem] text-[#6b7280] max-[640px]:flex-col max-[640px]:gap-1 max-[640px]:px-[18px] max-[640px]:pt-2.5 max-[640px]:pb-3.5 max-[640px]:text-center max-[640px]:text-[0.88rem] max-[640px]:leading-[1.4]">
                <p className="m-0">© 2026 SRC Corporation | All Rights Reserved</p>
            </div>
        </footer>
    );
};
