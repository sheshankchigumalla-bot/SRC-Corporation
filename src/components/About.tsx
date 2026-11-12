import Image from "next/image";

export default function About() {
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className="bg-white relative overflow-hidden pt-14 pb-[30px] px-[7vw] max-[900px]:px-[18px] max-[900px]:py-16 max-[640px]:px-3 max-[640px]:pt-[42px] max-[640px]:pb-5 max-[480px]:px-2.5 max-[480px]:py-10"
        >
            <div className="w-full max-w-site mx-auto grid grid-cols-[1.2fr_1fr] gap-5 items-start pl-[clamp(12px,2.2vw,36px)] max-[900px]:grid-cols-1 max-[900px]:pl-0">
                <div>
                    <h2
                        id="about-heading"
                        className="font-zilla font-bold text-src-red m-0 mb-[18px] text-[4.2rem] max-[900px]:text-[3.5rem] max-[640px]:text-[3rem] max-[480px]:text-[2rem]"
                    >
                        About Us
                    </h2>
                    <p className="font-zilla font-semibold m-0 mb-[18px] leading-[1.55] text-[1.25rem] max-[640px]:text-[1.18rem] max-[480px]:text-[1.05rem]">
                        At <span className="text-src-red">SRC Corporation</span>, we focus
                        on sourcing and supplying{" "}
                        <span className="text-src-red">
                            premium dry red chillies from India
                        </span>
                        . With strong roots in family-run agricultural trading, we bring
                        years of experience, reliability, and market expertise to every
                        transaction.
                    </p>
                    <p className="font-zilla font-semibold m-0 mb-[18px] leading-[1.55] text-[1.25rem] max-[640px]:text-[1.15rem] max-[480px]:text-[1.05rem]">
                        Based in <span className="text-src-red">Hyderabad</span>, we procure
                        directly from leading mandi markets (wholesale markets), ensuring
                        consistent quality and competitive pricing.
                    </p>
                    <p className="font-zilla font-semibold m-0 mb-[18px] leading-[1.55] text-[1.25rem] max-[640px]:text-[1.15rem] max-[480px]:text-[1.05rem]">
                        Our strength lies in our deep understanding of the supply chain
                        from procurement and quality control to logistics and timely
                        delivery. We specialize in bulk trading and distribution, catering
                        to wholesalers, food processors, exporters, and spice brands across
                        India, including markets in Gujarat, Rajasthan, Delhi, and
                        Maharashtra.
                    </p>
                    <Image
                        src="/images/mirchi.png"
                        alt=""
                        width={110}
                        height={110}
                        aria-hidden="true"
                        className="w-[110px] h-auto block mt-2 ml-0 rotate-[8deg] pointer-events-none max-[640px]:w-[86px]"
                    />
                </div>
                <div className="grid grid-cols-2 gap-2.5 w-full max-w-[370px] justify-self-start justify-start relative pt-7 max-[900px]:grid-cols-2 max-[900px]:max-w-[280px] max-[900px]:gap-2 max-[640px]:grid-cols-2 max-[640px]:gap-2 max-[640px]:pt-[22px] max-[480px]:grid-cols-1 max-[480px]:max-w-full max-[480px]:mb-6">
                    <Image
                        src="/images/mirchi.png"
                        alt=""
                        width={112}
                        height={112}
                        aria-hidden="true"
                        className="absolute pointer-events-none z-[1] w-[112px] h-auto top-[-34px] right-2 -scale-x-100 max-[900px]:w-[98px] max-[900px]:top-auto max-[900px]:right-1.5 max-[900px]:-bottom-8 max-[640px]:w-[84px] max-[640px]:-bottom-9 max-[640px]:right-1 max-[480px]:w-[70px] max-[480px]:-bottom-10 max-[480px]:right-0"
                    />
                    <Image
                        src="/images/about-us-1.jpeg"
                        alt="SRC Corporation sourcing dry red chillies at a Hyderabad mandi"
                        width={180}
                        height={229}
                        className="w-full h-[229px] max-w-[180px] object-cover rounded-[28px] block object-[30%_70%] max-[900px]:max-w-[140px] max-[640px]:max-w-[100px] max-[640px]:rounded-2xl max-[640px]:h-[180px] max-[480px]:max-w-full max-[480px]:max-h-[180px] max-[480px]:rounded-xl max-[480px]:h-[140px]"
                    />
                    <Image
                        src="/images/about-us-2.png"
                        alt="Dry red chilli sorting and processing for bulk export"
                        width={180}
                        height={229}
                        className="w-full h-[229px] max-w-[180px] object-cover rounded-[28px] block object-[30%_70%] max-[900px]:max-w-[140px] max-[640px]:max-w-[100px] max-[640px]:rounded-2xl max-[640px]:h-[180px] max-[480px]:max-w-full max-[480px]:max-h-[180px] max-[480px]:rounded-xl max-[480px]:h-[140px]"
                    />
                    <Image
                        src="/images/about-us-3.jpeg"
                        alt="Red chilli fields in India where SRC Corporation sources produce"
                        width={180}
                        height={229}
                        className="w-full h-[229px] max-w-[180px] object-cover rounded-[28px] block object-[30%_70%] max-[900px]:max-w-[140px] max-[640px]:max-w-[100px] max-[640px]:rounded-2xl max-[640px]:h-[180px] max-[480px]:max-w-full max-[480px]:max-h-[180px] max-[480px]:rounded-xl max-[480px]:h-[140px]"
                    />
                    <Image
                        src="/images/about-us-4.jpeg"
                        alt="SRC Corporation team at a red chilli trading yard"
                        width={180}
                        height={165}
                        className="w-full h-[165px] max-w-[180px] object-cover rounded-[28px] block ..."
                    />

                </div>
            </div>
        </section>
    );
};