"use client";

import Image from "next/image";
import { quicksand } from "@/lib/fonts";

export default function AExpi() {
    return (
        <main
            className="
                relative
                h-dvh
                overflow-hidden
            "
        >
            <Image
                src="/images/qr-grid.png"
                alt=""
                fill
                priority
                className="
                    object-cover
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
                <h1
                    className={
                        quicksand.className +
                        `
                        text-white
                        text-[clamp(2.4rem,7vw,5rem)]
                        leading-none
                        text-center
                        `
                    }
                >
                    ABSORB
                </h1>

                <p
                    className={
                        quicksand.className +
                        `
                        mt-8

                        text-white/80
                        text-center
                        `
                    }
                >
                    Body placeholder
                </p>
            </div>
        </main>
    );
}