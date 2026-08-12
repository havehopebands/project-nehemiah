"use client";

import Image from "next/image";
import { useState } from "react";
import { quicksand } from "@/lib/fonts";

export default function H1Expi() {

    const [currentPage, setCurrentPage] = useState(0);
    return (
        <main
            className="
                relative
                h-full
                overflow-hidden
            "
        >
            {/* Posters */}
            <div
                className="
                    relative
                    h-full
                    w-full
                "
            >
                <button
                    type="button"
                    onClick={() => setCurrentPage(currentPage === 0 ? 1 : 0)}
                    className="
                        relative
                        h-full
                        w-full
                        cursor-pointer
                    "
                    aria-label={
                        currentPage === 0
                            ? "View next poster"
                            : "View previous poster"
                    }
                >

                    {/* Poster 1 */}

                    <Image
                        src="/images/h2-expi.webp"
                        alt=""
                        fill
                        priority
                        className={`
                            object-contain
                            rounded-3xl
                            transition-opacity
                            duration-300
                            ${currentPage === 0 ? "opacity-100" : "opacity-0"}
                        `}
                    />


                    {/* Poster 2 */}

                    <Image
                        src="/images/h2-expi-page2.webp"
                        alt=""
                        fill
                        className={`
                            object-contain
                            rounded-3xl
                            transition-opacity
                            duration-300
                            ${currentPage === 1 ? "opacity-100" : "opacity-0"}
                        `}
                    />

                </button>
            </div>


            {/* Page Indicator */}

            <div
                className="
                    pointer-events-none
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
                <span
                    className={`
                        h-2
                        w-2
                        rounded-full
                        transition-opacity
                        duration-300
                        ${currentPage === 0 ? "bg-white" : "bg-white/40"}
                    `}
                />

                <span
                    className={`
                        h-2
                        w-2
                        rounded-full
                        transition-opacity
                        duration-300
                        ${currentPage === 1 ? "bg-white" : "bg-white/40"}
                    `}
                />
            </div>

        </main>
    );
}