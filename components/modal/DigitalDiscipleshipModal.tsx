"use client";

import { useState } from "react";

const posters = [
    {
        desktop: "/images/dd-desktop-1.webp",
        mobile: "/images/dd-mobile-1.webp",
    },
    {
        desktop: "/images/dd-desktop-2.webp",
        mobile: "/images/dd-mobile-2.webp",
    },
    {
        desktop: "/images/dd-desktop-3.webp",
        mobile: "/images/dd-mobile-3.webp",
    },
];

export default function DigitalDiscipleshipModal() {
    const [currentPage, setCurrentPage] = useState(0);

    return (
        <main
            className="
                relative
                h-full
                overflow-hidden
            "
        >
            {/* ======================================================
                POSTER
            ====================================================== */}

            <picture>
                <source
                    media="(max-width: 1079px)"
                    srcSet={posters[currentPage].mobile}
                />

                <img
                    src={posters[currentPage].desktop}
                    alt={`Digital Discipleship ${currentPage + 1}`}
                    className="
                        absolute
                        inset-0

                        h-full
                        w-full

                        object-contain

                        rounded-3xl

                        select-none
                        pointer-events-none
                    "
                />
            </picture>

            {/* ======================================================
                PAGE INDICATOR
            ====================================================== */}

            <div
                className="
                    absolute
                    bottom-4
                    left-0
                    z-30

                    flex
                    w-full
                    justify-center
                    gap-3
                "
            >
                {posters.map((_, page) => (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        aria-label={`Go to Page ${page + 1}`}
                        className={`
                            h-3
                            w-3
                            rounded-full
                            transition-all
                            duration-300

                            ${
                                currentPage === page
                                    ? "bg-white scale-110"
                                    : "bg-white/40 hover:bg-white/70"
                            }
                        `}
                    />
                ))}
            </div>
        </main>
    );
}