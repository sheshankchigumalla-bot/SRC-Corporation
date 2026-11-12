"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const threshold = window.innerWidth <= 640 ? 80 : 240;
            setShowScrollTop(window.scrollY > threshold);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const whatsappMessage = encodeURIComponent(
        "Hello, I would like to know more about your services."
    );

    return (
        <>
            <a
                href={`https://wa.me/919652502121?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className={`fixed right-[18px] bottom-[78px] w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center z-[9999] shadow-lg transition-all duration-200 hover:scale-110 ${showScrollTop
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible translate-y-2"
                    }`}
            >
                <FaWhatsapp size={26} />
            </a>

            <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className={`fixed right-[18px] bottom-[18px] w-12 h-12 rounded-full text-white flex items-center justify-center z-[9999] bg-gradient-to-b from-[#ff4b4b] to-[#b91c1c] transition-all duration-200 ${showScrollTop
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible translate-y-2"
                    }`}
            >
                ↑
            </button>
        </>
    );
}