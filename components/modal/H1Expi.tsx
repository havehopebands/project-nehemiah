"use client";

import Image from "next/image";
import { quicksand } from "@/lib/fonts";

export default function H1Expi() {
    return (
        <main
            className="
                relative
                h-full
                overflow-hidden
            "
        >
            <Image
                src="/images/h1-expi.png"
                alt=""
                fill
                priority
                className="
                    object-contain
                    rounded-3xl
                "
            />

            <div
                className="
                    relative
                    z-20

                    w-full
                    h-full

                    flex
                    flex-col
                    items-center
                    justify-center

                    px-8
                "
            >
               
            </div>
        </main>
    );
}