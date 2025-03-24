"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen((prev) => !prev);
    }, []);

    const openCalendly = useCallback(() => {
        window.Calendly.initPopupWidget({ url: "https://calendly.com/hokagecreativelabs001/30mins" });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`w-full h-[104px] px-6 md:px-24 mx-auto flex items-center justify-center fixed top-0 z-50 transition-all duration-300 ${
                isScrolled ? "bg-white/60 backdrop-blur-md shadow-md" : "bg-white"
            }`}
        >
            <div className="w-full max-w-[1248px] h-full flex items-center justify-between gap-10">
                {/* Logo */}
                <div className="ml-4 flex items-center justify-center relative h-[40px] w-auto">
                    <Link href="/">
                        <Image
                            src="/images/LOGO.webp"
                            alt="Logo"
                            width={150}
                            height={40}
                            priority
                            loading="eager"
                            className="object-contain h-auto w-auto"
                        />
                    </Link>
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center justify-center gap-8 bg-[#F0F2F5] w-[318px] h-[55px] py-4 px-10 rounded-full">
                    <Link href="/about" className="font-nohemi text-[#101928] text-base font-medium">About</Link>
                    <Link href="/services" className="font-nohemi text-[#101928] text-base font-medium">Services</Link>
                    <Link href="/projects" className="font-nohemi text-[#101928] text-base font-medium">Projects</Link>
                </div>

                {/* CTA Button */}
                <button
                    role="button"
                    aria-label="Book a Call"
                    title="Book a Call"
                    onClick={openCalendly}
                    className="hidden md:flex font-medium tracking-relaxed font-nohemi items-center justify-center gap-2 bg-purple text-white w-[150px] h-[56px] px-4 py-4 rounded-full transition duration-300 ease-out hover:bg-white hover:text-purple"
                >
                    <span className="font-vastago">Book a Call</span>
                    <Image
                        src="/images/call-icon.webp"
                        alt="Call Icon"
                        width={24}
                        height={24}
                        loading="lazy"
                        className="flex-shrink-0"
                    />
                </button>

                {/* Mobile Menu Toggle */}
                <div className="flex md:hidden">
                    <button
                        role="button"
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        title={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                        onClick={toggleMobileMenu}
                        className="text-2xl text-gray-800"
                    >
                        {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden w-full bg-white shadow-md absolute top-[100px] left-0 p-6 z-50 transition-all duration-300 ${
                    isMobileMenuOpen ? "block" : "hidden"
                }`}
            >
                <div className="flex flex-col gap-6">
                    <Link href="/about" className="font-nohemi text-[#101928] text-base font-medium">About</Link>
                    <Link href="/services" className="font-nohemi text-[#101928] text-base font-medium">Services</Link>
                    <Link href="/projects" className="font-nohemi text-[#101928] text-base font-medium">Projects</Link>
                    <button
                        role="button"
                        aria-label="Book a Call"
                        title="Book a Call"
                        onClick={() => {
                            openCalendly();
                            setIsMobileMenuOpen(false);
                        }}
                        className="font-medium tracking-relaxed font-nohemi flex items-center gap-2 bg-purple text-white w-full h-[56px] px-4 py-4 rounded-full"
                    >
                        <span>Book a Call</span>
                        <Image
                            src="/images/call-icon.webp"
                            alt="Call Icon"
                            width={24}
                            height={24}
                            loading="lazy"
                        />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
