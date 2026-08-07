"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { redHatDisplay } from "@/lib/fonts";
import CallingModal from "@/components/modal/CallingModal";
import Modal from "@/components/modal/Modal";
import CommitmentModal from "@/components/modal/CommitmentModal";
import AboutModal from "@/components/modal/AboutModal";



export default function Header() {

    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isCallingOpen, setIsCallingOpen] = useState(false);
    const [isCommitmentOpen, setIsCommitmentOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);

    const navItems = [
            {
                label: "Our Story",
                href: "#about",
            },
            {
                label: "Our Calling",
                href: "#our-calling",
            },
            {
                label: "Our Commitment",
                href: "#our-commitment",
            },
            {
                label: "Our Pursuit",
                href: "#our-pursuit",
            },
            {
                label: "Your Support",
                href: "#support",
            },
            ];


  useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (

<>
    <header
            className="
                    fixed
                    top-0
                    left-0
                    right-0
                    z-50

                    bg-gradient-to-r
                    from-neutral-950/85
                    via-neutral-950/20
                    via-40%
                    to-transparent
                    to-70%

                    backdrop-blur-md

                    transition-all
                    duration-300
                    "
                >

      <div 
            className="
                    flex 
                    h-20 
                    items-center 
                    justify-between
                    px-4 
                    sm:px-6 
                    lg:px-8"
                    >

        <Image
                src="/images/hope-logo.png"
                alt="Hope In Each Moment"
                width={220}
                height={110}
                priority
            className="
                    h-auto 
                    w-[160px]
                    sm:w-[180px]
                    md:w-[220px]"
                    />


        <button
                aria-label="Open menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-md
                    text-white
                    transition-all
                    duration-300
                    hover:bg-white/10
                    lg:hidden
                    "
                >
                {mobileMenuOpen ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="
                        h-6
                        w-6
                    "
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 6l12 12M18 6L6 18"
                    />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="
                        h-6
                        w-6
                    "
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            )}
        </button>


            <nav
            className={`${redHatDisplay.className} 
                    hidden 
                    lg:flex 
                    items-center 
                    gap-12 
                    text-sm 
                    font-medium 
                    tracking-wide`}
                    >

                {navItems.map((item) => (
                        <button
                            key={item.href}
                            onClick={() => {
                                if (item.label === "Our Calling") {
                                    setIsCallingOpen(true);
                                } else if (item.label === "Our Commitment") {
                                    setIsCommitmentOpen(true);
                                } else if (item.label === "Our Story") {
                                    setIsAboutOpen(true);
                                }
                            }}
                            className="nav-link"
                        >
                            {item.label}
                        </button>
                    ))}

            </nav>



      </div>

            <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: -16,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                y: -16,
                            }}
                            transition={{
                                duration: 0.25,
                                ease: "easeOut",
                            }}
                            className="
                                lg:hidden
                                absolute
                                top-full
                                left-0
                                right-0

                                bg-neutral-950/90
                                backdrop-blur-xl

                                border-t
                                border-white/10
                            "
                        >
                            <nav
                                className={`
                                    ${redHatDisplay.className}

                                    flex
                                    flex-col
                                    items-center
                                    gap-8

                                    py-10

                                    text-lg
                                    font-medium
                                    tracking-wide
                                `}
                            >
                                {navItems.map((item) => (
                                    <button
                                        key={item.href}
                                        onClick={() => {
                                            if (item.label === "Our Calling") {
                                                setIsCallingOpen(true);
                                            } else if (item.label === "Our Commitment") {
                                                setIsCommitmentOpen(true);
                                            } else if (item.label === "Our Story") {
                                                setIsAboutOpen(true);
                                            }
                                            
                                        }}
                                        className="nav-link"
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>







    </header>

<Modal
    isOpen={isCallingOpen}
    onClose={() => setIsCallingOpen(false)}
>
    <CallingModal />
</Modal>

<Modal
    isOpen={isCommitmentOpen}
    onClose={() => setIsCommitmentOpen(false)}
>
    <CommitmentModal />
</Modal>

<Modal
    isOpen={isAboutOpen}
    onClose={() => setIsAboutOpen(false)}
>
    <AboutModal />
</Modal>

</>

  );
}