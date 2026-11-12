import Image from "next/image";


import {
    FaBoxOpen,
    FaPhoneAlt,
    FaFileInvoice,
    FaCog,
    FaCheckCircle,
    FaGlobe,
    FaIndustry,
    FaRupeeSign,
    FaTruck,
    FaHandshake,
} from "react-icons/fa";

const cardClass =
    "bg-[#fff8f7] rounded-xl border border-[#fecaca] px-4 pt-4 pb-3.5 text-center max-[640px]:px-3 max-[640px]:py-3.5";

const cardIconClass =
    "text-[2.4rem] leading-none text-[#6b7280] mb-2.5 [&>svg]:block [&>svg]:mx-auto";

const cardTitleClass =
    "font-zilla font-semibold text-src-red m-0 mb-2 text-[1.25rem]";

const cardCopyClass =
    "font-zilla m-0 text-[1.05rem] leading-[1.45]";

const stepLabelClass =
    "font-zilla text-[1.2rem] font-medium text-src-red max-[640px]:text-[1.1rem]";

const stepIconClass =
    "text-[#ed1c24] text-[2.1rem] leading-none mb-2.5 [&>svg]:block [&>svg]:mx-auto";

const stepClass =
    "text-center min-w-[92px] max-[640px]:min-w-0 max-[640px]:w-full max-[640px]:max-w-[220px]";

const dividerClass =
    "process-arrow flex-[0_0_34px] min-w-[34px] mt-3 flex items-center justify-center text-[#188743] max-[900px]:flex-[0_0_30px] max-[900px]:min-w-[30px] max-[900px]:mt-4 max-[640px]:flex-none max-[640px]:min-w-0 max-[640px]:mt-0 max-[640px]:mb-0";

export default function WhyChoose() {
    return (
        <section
            id="why-choose"
            aria-labelledby="why-choose-heading"
            className="bg-[#fff1f0] relative overflow-hidden px-[7vw] py-[72px] max-[900px]:px-[18px] max-[900px]:py-16 max-[640px]:px-3 max-[640px]:py-12 max-[480px]:px-2.5 max-[480px]:py-10"
        >
            <Image
                src="/images/mirchi90.png"
                alt=""
                aria-hidden="true"
                width={90}
                height={90}
                className="absolute pointer-events-none z-[1] w-[clamp(36px,4.6vw,54px)] h-auto top-2 left-1.5 max-[900px]:w-11 max-[900px]:top-1.5 max-[900px]:left-1 max-[640px]:w-9 max-[640px]:top-1 max-[640px]:left-0.5 max-[480px]:w-[30px] max-[480px]:top-0.5 max-[480px]:left-0.5"
            />

            <Image
                src="/images/mirchi90.png"
                alt=""
                aria-hidden="true"
                width={90}
                height={90}
                className="absolute pointer-events-none z-[1] w-[clamp(44px,5.6vw,64px)] h-auto bottom-1.5 right-1.5 -scale-x-100 max-[900px]:w-[54px] max-[900px]:bottom-1 max-[900px]:right-1 max-[640px]:w-11 max-[640px]:bottom-0.5 max-[640px]:right-0.5 max-[480px]:w-[38px] max-[480px]:bottom-0.5 max-[480px]:right-0"
            />

            <div className="w-full max-w-site mx-auto">
                <h2
                    id="why-choose-heading"
                    className="font-zilla font-bold text-src-red text-center text-[4rem] mb-3.5 max-[900px]:text-[3.5rem] max-[640px]:text-[3rem] max-[480px]:text-[2rem]"
                >
                    Why Choose us?
                </h2>

                <div className="grid grid-cols-3 gap-[18px] mt-3.5 mb-7 max-[640px]:grid-cols-1">
                    <article className={cardClass}>
                        <div className={cardIconClass}>
                            <FaGlobe />
                        </div>
                        <h3 className={cardTitleClass}>Export Quality Standards</h3>
                        <p className={cardCopyClass}>
                            We maintain strict quality standards to meet global export
                            requirements.
                        </p>
                    </article>

                    <article className={cardClass}>
                        <div className={cardIconClass}>
                            <FaBoxOpen />
                        </div>
                        <h3 className={cardTitleClass}>Consistent Bulk Supply</h3>
                        <p className={cardCopyClass}>
                            Reliable supply capacity to fulfill large and recurring orders.
                        </p>
                    </article>

                    <article className={cardClass}>
                        <div className={cardIconClass}>
                            <FaRupeeSign />
                        </div>
                        <h3 className={cardTitleClass}>Competitive Pricing</h3>
                        <p className={cardCopyClass}>
                            Direct sourcing ensures cost efficiency without compromising
                            quality.
                        </p>
                    </article>

                    <article className={cardClass}>
                        <div className={cardIconClass}>
                            <FaTruck />
                        </div>
                        <h3 className={cardTitleClass}>Reliable Logistics</h3>
                        <p className={cardCopyClass}>
                            Smooth handling and timely delivery across domestic and
                            international markets.
                        </p>
                    </article>

                    <article className={cardClass}>
                        <div className={cardIconClass}>
                            <FaHandshake />
                        </div>
                        <h3 className={cardTitleClass}>Trusted Partnerships</h3>
                        <p className={cardCopyClass}>
                            Building long-term relationships with clients through consistency
                            and reliability.
                        </p>
                    </article>

                    <article className={cardClass}>
                        <div className={cardIconClass}>
                            <FaIndustry />
                        </div>
                        <h3 className={cardTitleClass}>Direct Market Sourcing</h3>
                        <p className={cardCopyClass}>
                            Sourcing directly from major markets for better quality control
                            and pricing.
                        </p>
                    </article>
                </div>

                <div
                    id="process"
                    className="mt-1 flex items-start justify-between flex-nowrap gap-2.5 max-[900px]:flex-wrap max-[900px]:gap-y-3 max-[640px]:flex-col max-[640px]:items-center max-[640px]:justify-start max-[640px]:gap-1.5"
                >
                    <div className={stepClass}>
                        <div className={stepIconClass}>
                            <FaPhoneAlt />
                        </div>
                        <div className={stepLabelClass}>Inquiry</div>
                    </div>

                    <div className={dividerClass} />

                    <div className={stepClass}>
                        <div className={stepIconClass}>
                            <FaFileInvoice />
                        </div>
                        <div className={stepLabelClass}>Quotation</div>
                    </div>

                    <div className={dividerClass} />

                    <div className={stepClass}>
                        <div className={stepIconClass}>
                            <FaCog />
                        </div>
                        <div className={stepLabelClass}>Processing</div>
                    </div>

                    <div className={dividerClass} />

                    <div className={stepClass}>
                        <div className={stepIconClass}>
                            <FaCheckCircle />
                        </div>
                        <div className={stepLabelClass}>Quality Check</div>
                    </div>

                    <div className={dividerClass} />

                    <div className={stepClass}>
                        <div className={stepIconClass}>
                            <FaTruck />
                        </div>
                        <div className={stepLabelClass}>Shipping</div>
                    </div>

                    <div className={dividerClass} />

                    <div className={stepClass}>
                        <div className={stepIconClass}>
                            <FaHandshake />
                        </div>
                        <div className={stepLabelClass}>Delivery &amp; Support</div>
                    </div>
                </div>
            </div>
        </section>
    );
}