import Image from "next/image";

export default function Navbar() {
    return (
        <header
            className="font-inter bg-transparent bg-no-repeat bg-[length:100%_auto] bg-top w-full overflow-hidden h-[clamp(84px,11.46vw,165px)] max-[640px]:h-24 max-[600px]:!bg-none max-[600px]:bg-white max-[600px]:h-[114px] max-[480px]:h-[108px] max-[480px]:!bg-none max-[480px]:bg-white"
            style={{
                backgroundImage: 'url("/backgrounds/navbar-bg.png")',
            }}
        >
            <div className="w-full max-w-site mx-auto h-full px-[7vw] py-[clamp(6px,1vw,12px)] pb-[clamp(8px,2vw,20px)] flex items-center justify-between gap-6 max-[900px]:px-4 max-[900px]:py-2 max-[900px]:gap-3 max-[640px]:px-3 max-[640px]:py-1.5 max-[640px]:gap-2 max-[600px]:!max-w-none max-[600px]:justify-center max-[600px]:px-2.5 max-[600px]:py-1.5 max-[480px]:px-2.5 max-[480px]:py-[5px]">
                <a
                    href="#hero"
                    className="max-[600px]:w-full max-[600px]:flex max-[600px]:justify-center max-[600px]:items-center"
                >
                    <Image
                        src="/images/src-logo.svg"
                        alt="SRC Corporation"
                        width={212}
                        height={212}
                        preload
                        className="h-[clamp(106px,12.6vw,212px)] w-auto max-w-full block max-[900px]:h-[clamp(80px,9vw,140px)] max-[640px]:h-[clamp(68px,12vw,92px)] max-[600px]:h-[clamp(102px,32vw,148px)] max-[480px]:h-[clamp(96px,34vw,138px)]"
                    />
                </a>
                <nav className="flex items-center w-[min(100%,620px)] ml-auto justify-between gap-6 max-[900px]:ml-0 max-[900px]:w-auto max-[900px]:justify-end max-[900px]:gap-3 max-[600px]:!hidden">
                    <ul className="list-none flex flex-1 justify-between gap-[clamp(18px,2.2vw,34px)] text-base font-medium leading-snug text-[#166534] m-0 p-0 max-[900px]:hidden">
                        <li>
                            <a
                                href="#hero"
                                className="relative pb-0.5 after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-src-red after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-[180ms] after:ease-out"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="relative pb-0.5 after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-src-red after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-[180ms] after:ease-out"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#products"
                                className="relative pb-0.5 after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-src-red after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-[180ms] after:ease-out"
                            >
                                Products
                            </a>
                        </li>
                        <li>
                            <a
                                href="#process"
                                className="relative pb-0.5 after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-src-red after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-[180ms] after:ease-out"
                            >
                                Process
                            </a>
                        </li>
                    </ul>
                    <a
                        href="#contact"
                        className="ml-3.5 px-[18px] py-2 rounded-full bg-gradient-to-b from-[#ff4b4b] to-[#b91c1c] text-white font-medium text-base leading-snug shadow-[0_8px_14px_rgba(220,38,38,0.35)] max-[900px]:text-sm max-[900px]:py-[7px] max-[900px]:px-3.5 max-[900px]:ml-2 max-[640px]:text-[13px] max-[640px]:py-1.5 max-[640px]:px-3 max-[640px]:ml-1.5 max-[640px]:inline-flex max-[600px]:!hidden max-[480px]:text-[11px] max-[480px]:py-1 max-[480px]:px-2.5 max-[480px]:ml-1"
                    >
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
};

