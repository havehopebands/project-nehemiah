"use client";

import Image from "next/image";
import { quicksand } from "@/lib/fonts";

export default function H2Expi() {
    return (
        <main
            className="
                relative
                h-dvh
                overflow-hidden
            "
        >
            <Image
                src="/images/h2-expi.png"
                alt=""
                fill
                priority
                className="
                    object-contain
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