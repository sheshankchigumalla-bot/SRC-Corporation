import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
    return (
        <>
            <section
                id="hero"
                aria-labelledby="hero-heading"
                className="relative isolate overflow-hidden min-h-[72vh] flex items-center justify-start bg-center bg-cover bg-no-repeat px-[8vw] pt-[118px] pb-[92px] max-[900px]:min-h-[62vh] max-[900px]:px-6 max-[900px]:pt-[104px] max-[900px]:pb-[74px] max-[640px]:min-h-[56vh] max-[640px]:px-3.5 max-[640px]:pt-[82px] max-[640px]:pb-[54px] max-[480px]:min-h-[50vh] max-[480px]:px-2.5 max-[480px]:pt-[60px] max-[480px]:pb-[40px]"
            >
                <Image
                    src="/images/hero-section-image.png"
                    alt="Heap of premium Indian dry red chillies supplied by SRC Corporation"
                    fill
                    preload
                    sizes="100vw"
                    className="object-cover object-center -z-10"
                />
                <div
                    className="absolute inset-0 -z-10 bg-gradient-to-b from-black/[0.72] to-black/[0.65]"
                    aria-hidden="true"
                />
                <div className="max-w-[640px]">
                    <h1
                        id="hero-heading"
                        className="font-inter text-[clamp(2.7rem,5.2vw,3.7rem)] leading-[1.22] font-bold text-white m-0 mb-3 max-[900px]:text-[2.7rem] max-[640px]:text-[2.35rem] max-[480px]:text-[1.95rem]"
                    >
                        <span className="block font-zilla text-[clamp(1.2rem,2vw,1.5rem)] leading-tight font-semibold tracking-[0.08em] uppercase text-[#fde047] mb-2">
                            SRC Corporation
                        </span>
                        Global Supply of Premium
                        <br />
                        Red Chillies &amp; Spices
                    </h1>
                    <p className="font-inter text-[clamp(1.15rem,2vw,1.25rem)] leading-[1.4] text-[#f3f6ff] max-w-[360px] m-0 mb-4 max-[900px]:text-[1.15rem] max-[640px]:text-[1.05rem] max-[480px]:text-[0.98rem]">
                        Trusted import &amp; export partner
                        <br />
                        delivering consistent quality in bulk.
                    </p>
                    <div className="flex gap-3 max-[900px]:flex-wrap max-[640px]:flex-row max-[640px]:flex-wrap max-[640px]:items-start max-[640px]:gap-2.5">
                        <a
                            href="#contact"
                            className="px-7 py-3 rounded-full border-none cursor-pointer bg-gradient-to-b from-[#ff4b4b] to-[#b91c1c] text-white font-inter font-semibold text-[1.2rem] shadow-[0_14px_26px_rgba(220,38,38,0.6)] max-[900px]:text-[1.1rem] max-[640px]:text-[1.05rem] max-[640px]:px-5 max-[640px]:py-2.5"
                        >
                            Get Quote
                        </a>
                        <a
                            href="https://wa.me/919652502121?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-full border-none cursor-pointer bg-gradient-to-b from-[#16a34a] to-[#166534] text-white font-inter font-semibold text-[1.15rem] inline-flex items-center gap-2 shadow-[0_14px_26px_rgba(22,163,74,0.55)] max-[900px]:text-[1.1rem] max-[640px]:text-[1.05rem] max-[640px]:px-5 max-[640px]:py-2.5"
                        >
                            <FaWhatsapp className="text-white text-[1.65rem] flex items-center" />
                            WhatsApp
                        </a>
                    </div>
                </div>
            </section>
            <div
                className="bg-src-red text-white flex justify-stretch items-center font-zilla not-italic text-[28px] font-bold leading-[1.25] p-0 border-b-[3px] border-[#f1f5f9] max-[900px]:text-[23px] max-[640px]:grid max-[640px]:grid-cols-2 max-[640px]:text-[19px] max-[640px]:leading-tight max-[640px]:border-b-2 max-[480px]:text-[16px]"
                aria-label="Company highlights"
            >
                <div className="flex-1 px-4 py-2.5 text-center max-[900px]:px-2.5 max-[900px]:py-[9px] max-[640px]:px-1.5 max-[640px]:py-2">
                    27+ Years Experience
                </div>
                <div className="flex-1 px-4 py-2.5 text-center max-[900px]:px-2.5 max-[900px]:py-[9px] max-[640px]:px-1.5 max-[640px]:py-2">
                    5000+ Tons Supplied
                </div>
                <div className="flex-1 px-4 py-2.5 text-center max-[900px]:px-2.5 max-[900px]:py-[9px] max-[640px]:px-1.5 max-[640px]:py-2">
                    1000+ Clients
                </div>
                <div className="flex-1 px-4 py-2.5 text-center max-[900px]:px-2.5 max-[900px]:py-[9px] max-[640px]:px-1.5 max-[640px]:py-2">
                    Global Export
                </div>
            </div>
        </>
    );
};
