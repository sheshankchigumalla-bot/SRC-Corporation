"use client";
import { useState } from "react";
import {
    FaClock,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPhoneAlt,
} from "react-icons/fa";


type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

type Status = {
    type: "idle" | "success" | "error";
    text: string;
};

const inputClass =
    "w-full rounded-none border-0 border-b border-[#c7ced7] bg-transparent pt-1 pb-1.5 font-inter text-[1.05rem] text-[#525252] outline-none";

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [status, setStatus] = useState<Status>({
        type: "idle",
        text: "We respond within 24 hours.",
    });

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = event.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsSubmitting(true);
        setStatus({ type: "idle", text: "Sending your message..." });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = (await response.json().catch(() => ({}))) as {
                ok?: boolean;
                error?: string;
            };

            if (!response.ok || !result.ok) {
                throw new Error(result.error || "Request failed");
            }

            setStatus({
                type: "success",
                text: "Message sent! We will get back to you soon.",
            });
            setFormData({ name: "", email: "", phone: "", message: "" });
        } catch (error) {
            const message =
                error instanceof Error ? error.message : "Unknown error";
            setStatus({
                type: "error",
                text: `Could not send message: ${message}`,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const noteColor =
        status.type === "success"
            ? "text-[#15803d]"
            : status.type === "error"
                ? "text-[#b91c1c]"
                : "text-[#98a2b3]";

    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className="bg-[#ece6dc] font-zilla pt-11 pb-7 px-[7vw] max-[900px]:px-[18px] max-[640px]:px-3 max-[640px]:pt-5 max-[640px]:pb-5 max-[480px]:px-2.5 max-[480px]:py-10"
        >
            <div className="w-full max-w-site mx-auto">
                <div className="bg-[#f7f1e8] border border-[#e7ddd0] rounded-[18px] px-[30px] py-6 shadow-[0_10px_24px_rgba(93,72,54,0.12)] grid grid-cols-[0.9fr_1fr] gap-6 max-w-[1040px] mx-auto -mt-2.5 max-[900px]:grid-cols-1 max-[640px]:mx-auto max-[640px]:px-4 max-[640px]:py-5 max-[640px]:rounded-[14px]">
                    <div>
                        <h2
                            id="contact-heading"
                            className="font-zilla text-[#ed1c24] text-[clamp(2.8rem,4.6vw,4.6rem)] leading-[0.92] font-bold max-w-[260px] m-0 mb-3.5 max-[900px]:max-w-full"
                        >
                            Get In Touch
                        </h2>
                        <p className="max-w-[300px] text-[#39342f] font-zain font-bold m-0 mb-4 text-[1.3rem] leading-[1.35] max-[900px]:max-w-full max-[640px]:text-[1.15rem]">
                            Contact us for bulk orders, pricing, and export enquiries. Our
                            team will respond with details tailored to your requirements.
                        </p>
                        <ul className="list-none p-0 m-0">
                            <li className="flex items-center gap-2 mb-2.5 text-[1.1rem] leading-[1.3] text-[#1f7a3e] max-[640px]:text-[1.02rem]">
                                <span
                                    className="text-src-red text-[1rem] inline-flex items-center justify-center"
                                    aria-hidden="true"
                                >
                                    <FaPhoneAlt />
                                </span>
                                <span className="font-inter font-normal">+91 98494 24568</span>
                            </li>
                            <li className="flex items-center gap-2 mb-2.5 text-[1.1rem] leading-[1.3] text-[#1f7a3e] max-[640px]:text-[1.02rem]">
                                <span
                                    className="text-src-red text-[1rem] inline-flex items-center justify-center"
                                    aria-hidden="true"
                                >
                                    <FaEnvelope />
                                </span>
                                <span className="font-zain font-normal">
                                    srccorporation2112@gmail.com
                                </span>
                            </li>
                            <li className="flex items-center gap-2 mb-2.5 text-[1.1rem] leading-[1.3] text-[#1f7a3e] max-[640px]:text-[1.02rem]">
                                <span
                                    className="text-src-red text-[1rem] inline-flex items-center justify-center"
                                    aria-hidden="true"
                                >
                                    <FaMapMarkerAlt />
                                </span>
                                <span className="font-zain font-normal">
                                    Hyderabad, Telangana, India
                                </span>
                            </li>
                            <li className="flex items-center gap-2 mb-2.5 text-[1.1rem] leading-[1.3] text-[#1f7a3e] max-[640px]:text-[1.02rem]">
                                <span
                                    className="text-src-red text-[1rem] inline-flex items-center justify-center"
                                    aria-hidden="true"
                                >
                                    <FaClock />
                                </span>
                                <span className="font-zain font-normal">9 AM - 6 PM (IST)</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-[#f0f2f4] border border-[#d7dbe0] rounded-[18px] pt-[18px] px-6 pb-4 -mt-2.5 max-[900px]:p-4 max-[900px]:mt-0">
                        <h3 className="font-inter text-[2.6rem] leading-[1.15] font-semibold m-0 mb-2.5 text-[#4b5563] max-[640px]:text-[1.9rem]">
                            Send a Message
                        </h3>
                        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    className="font-inter text-[0.92rem] text-[#98a1ad]"
                                    htmlFor="name"
                                >
                                    Name*
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    className={inputClass}
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    className="font-inter text-[0.92rem] text-[#98a1ad]"
                                    htmlFor="email"
                                >
                                    Email address*
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className={inputClass}
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    className="font-inter text-[0.92rem] text-[#98a1ad]"
                                    htmlFor="phone"
                                >
                                    Phone*
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    className={inputClass}
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    className="font-inter text-[0.92rem] text-[#98a1ad]"
                                    htmlFor="message"
                                >
                                    Message*
                                </label>
                                <textarea
                                    id="message"
                                    className={`${inputClass} resize-y min-h-[68px]`}
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="self-center mt-3 px-8 py-2.5 font-inter text-[1.2rem] font-bold text-white border-none rounded-full cursor-pointer bg-gradient-to-b from-[#ff4a4a] to-[#c90f1b] shadow-[0_12px_20px_rgba(225,29,35,0.4)] disabled:opacity-70"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : "Submit"}
                            </button>
                            <p
                                className={`mt-1 mb-0 text-center font-inter text-[0.85rem] ${noteColor}`}
                            >
                                {status.text}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

