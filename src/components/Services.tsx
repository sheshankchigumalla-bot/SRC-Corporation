"use client"
import Image from "next/image";
import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

type Slide = {
    title: string;
    lines: string[];
    highlight: string;
    highlightColor: string;
    cardBackgroundColor: string;
    image: string;
    alt: string;
};

const slides: Slide[] = [
    {
        title: "Dry Red Chilli",
        lines: [
            "Premium Indian dry red chillies known for their high pungency, vibrant color, and rich aroma. Carefully sourced from top farms and hygienically processed to meet export standards and bulk supply requirements.",
        ],
        highlight: "High Pungency , Vibrant Color",
        highlightColor: "#e11d23",
        cardBackgroundColor: "linear-gradient(135deg, #ffe6e6, #ffd9d9)",
        image: '/products/dry-red-chilli.png',
        alt: "Premium dry red chillies in burlap sack",
    },
    {
        title: "Red Onion",
        lines: [
            "Fresh export-quality onions",
            "Firm texture and uniform size",
            "Suitable for bulk supply and export",
        ],
        highlight: "Fresh Quality • Bulk Supply",
        highlightColor: "#924960",
        cardBackgroundColor: "linear-gradient(135deg, #f5e6eb, #ead5dc)",
        image: "/products/onion.png",
        alt: "Whole red onions on a rustic surface",
    },
    {
        title: "Red Chilli Powder",
        lines: [
            "Teja - high heat ",
            "Byadgi - deep red colour ",
            "Sannam - balanced flavour.",
        ],
        highlight: "High colour, premium quality",
        highlightColor: "#e11d23",
        cardBackgroundColor: "linear-gradient(135deg, #ffe6e6, #ffd9d9)",
        image: "/products/specialty-chilli-powder.png",
        alt: "Speciality chilli powder with dry chillies",
    },
    {
        title: "Dehydrated Onion",
        lines: [
            "Processed onion with extended shelf life .",
            "Retains natural flavor and aroma",
            "Ideal for food processing and industrial use",
        ],
        highlight: "Long Shelf Life • Natural Flavour",
        highlightColor: "#b45309",
        cardBackgroundColor: "linear-gradient(135deg, #fef5e7, #fce8cc)",
        image: "/products/de-onion.png",
        alt: "Dehydrated onion flakes in a bowl",
    },
    {
        title: "Turmeric",
        lines: [
            "Premium high-curcumin turmeric known for its bright color, natural purity, and strong aroma. Carefully sourced and processed to meet export standards across food and pharmaceutical industries.",
        ],
        highlight: "High Curcumin • Natural Purity",
        highlightColor: "#d97706",
        cardBackgroundColor: "linear-gradient(135deg, #fef3e2, #fce7c3)",
        image: "/products/turmeric-powder-and-roots-display.png",
        alt: "Turmeric roots and turmeric powder in a bowl",
    },
    {
        title: "Dehydrated Garlic",
        lines: [
            "High-quality dehydrated garlic powder",
            "Strong aroma and consistent texture",
            "Suitable for food and industrial use",
        ],
        highlight: "Strong Aroma • Food-Grade Quality",
        highlightColor: "#b45309",
        cardBackgroundColor: "linear-gradient(135deg, #fef5e7, #fce8cc)",
        image: "/products/garlic.png",
        alt: "Garlic powder in a bowl with garlic bulbs",
    },
];

export default function Services() {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const current = slides[activeIndex];

    return (
        <section
            id="products"
            aria-labelledby="products-heading"
            className="bg-white relative px-[7vw] py-[72px] max-[900px]:px-[18px] max-[900px]:py-16 max-[640px]:px-3 max-[640px]:py-12 max-[480px]:px-2.5 max-[480px]:py-10"
        >
            <div className="w-full max-w-site mx-auto">
                <h2
                    id="products-heading"
                    className="font-zilla font-bold text-src-red text-center text-[4.2rem] m-0 mb-[18px] max-[900px]:text-[3.5rem] max-[640px]:text-[3rem] max-[480px]:text-[2rem]"
                >
                    Products
                </h2>
                <div
                    className="grid grid-cols-[1.1fr_1fr] gap-8 p-12 pt-12 px-14 pb-14 rounded-[40px] shadow-[0_28px_60px_rgba(148,27,18,0.18)] max-[900px]:grid-cols-1 max-[900px]:p-7 max-[900px]:rounded-3xl max-[900px]:gap-5 max-[640px]:p-[14px] max-[640px]:pt-[18px] max-[640px]:pb-5 max-[640px]:rounded-[18px] max-[640px]:min-h-[590px] max-[480px]:min-h-[520px]"
                    style={{ background: current.cardBackgroundColor }}
                >
                    {slides.map((slide, index) => (
                        <article
                            key={slide.title}
                            className={index === activeIndex ? "contents" : "hidden"}
                        >
                            <div className="flex flex-col justify-center max-[640px]:min-h-[360px] max-[640px]:justify-start max-[480px]:min-h-[330px]">
                                <h3
                                    className="font-zilla text-[5.2rem] m-0 mb-4 italic font-bold text-left max-[900px]:text-[3.6rem] max-[640px]:text-[2.8rem]"
                                    style={{ color: slide.highlightColor }}
                                >
                                    {slide.title}
                                </h3>
                                {slide.lines.map((line, lineIndex) => (
                                    <p
                                        key={lineIndex}
                                        className="font-zilla m-0 mb-4 leading-[1.7] text-[1.3rem] font-semibold max-[640px]:text-[1.15rem] max-[640px]:mb-3"
                                    >
                                        {line}
                                    </p>
                                ))}
                                <p
                                    className="font-georgia text-[1.85rem] mb-5 max-[640px]:text-[1.45rem]"
                                    style={{ color: slide.highlightColor }}
                                >
                                    {slide.highlight}
                                </p>
                                <a
                                    href="#contact"
                                    className="px-7 py-3 rounded-full border-none cursor-pointer bg-gradient-to-b from-[#ff4b4b] to-[#b91c1c] text-white font-zilla font-semibold text-[1.2rem] shadow-[0_14px_26px_rgba(220,38,38,0.6)] self-start max-[640px]:mt-auto max-[640px]:text-[1.1rem]"
                                >
                                    Get Quote
                                </a>
                            </div>
                            <div className="max-[640px]:h-[220px] max-[480px]:h-[165px]">
                                <div className="relative w-full h-[400px] max-[900px]:h-[360px] max-[640px]:h-full max-[480px]:h-full">
                                    <Image
                                        src={slide.image}
                                        alt={slide.alt}
                                        fill
                                        sizes="(max-width: 900px) 100vw, 50vw"
                                        className="object-cover rounded-[30px] max-[640px]:rounded-[18px]"
                                    />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="mt-[26px] flex items-center justify-center gap-6 max-[640px]:mt-4 max-[640px]:gap-3">
                    <button
                        type="button"
                        className="w-9 h-9 rounded-full border-none cursor-pointer bg-gradient-to-b from-[#ff4b4b] to-[#b91c1c] text-white text-[1.1rem] flex items-center justify-center shadow-[0_8px_16px_rgba(220,38,38,0.3)] max-[640px]:w-8 max-[640px]:h-8 max-[640px]:text-base"
                        onClick={handlePrev}
                        aria-label="Previous product"
                    >
                        <FaAngleLeft />
                    </button>
                    <div className="flex justify-center gap-2" aria-hidden="true">
                        {slides.map((_, index) => (
                            <span
                                key={index}
                                className={
                                    index === activeIndex
                                        ? "w-2.5 h-2 rounded-full bg-src-red"
                                        : "w-2 h-2 rounded-full bg-[#e2e8f0]"
                                }
                            />
                        ))}
                    </div>
                    <button
                        type="button"
                        className="w-9 h-9 rounded-full border-none cursor-pointer bg-gradient-to-b from-[#ff4b4b] to-[#b91c1c] text-white text-[1.1rem] flex items-center justify-center shadow-[0_8px_16px_rgba(220,38,38,0.3)] max-[640px]:w-8 max-[640px]:h-8 max-[640px]:text-base"
                        onClick={handleNext}
                        aria-label="Next product"
                    >
                        <FaAngleRight />
                    </button>
                </div>
            </div>
        </section>
    );
};
