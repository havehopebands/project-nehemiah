"use client";

import { quicksand } from "@/lib/fonts";
import BackgroundVideo from "@/components/BackgroundVideo";
import BraceletViewer from "./BraceletViewer";
import {
    useEffect,
    useRef,
    useState,
} from "react";
import {
    CornerDownLeft,
    CornerDownRight,
} from "lucide-react";


export default function Experience() {

    const braceletRef = useRef(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const [braceletScale, setBraceletScale] = useState(25);
    const [controlGap, setControlGap] = useState(24);

    useEffect(() => {

        if (!experienceRef.current) return;

        const resizeObserver = new ResizeObserver((entries) => {

            const width = entries[0].contentRect.width;


            // Scale Bracelet

            const MIN_SCALE = 30;
            const MAX_SCALE = 50;

            const preferredScale = width / 50;

            const scale = Math.max(
                MIN_SCALE,
                Math.min(preferredScale, MAX_SCALE)
            );

            setBraceletScale(scale);

            
            // Rotate Arrows Gap

            const MIN_GAP = 12;
            const MAX_GAP = 40;

            const preferredGap = width / 30;

            const gap = Math.max(
                MIN_GAP,
                Math.min(preferredGap, MAX_GAP)
            );

            setControlGap(gap);

            console.log({
                width,
                preferredGap,
                gap,
                controlGap: gap,
            });

        });

            resizeObserver.observe(experienceRef.current);

            return () => {
                resizeObserver.disconnect();
            };

        }, []);

    return (



        <main
                ref={experienceRef}
                className="
                    relative
                    h-dvh
                    overflow-hidden
                "
            >


            <BackgroundVideo
                video="/videos/space-3.webm"
            />

            <div
                className="
                    relative
                    w-full
                    h-full
                    z-20
                
                    pt-[10dvh]

                    flex
                    flex-col
                    items-center
                "
            >    

                    <div
                        className="
                            
                            flex
                            flex-col
                            items-center

                            
                            px-6

                            pointer-events-none
                        "
                    >

                        <h2
                            className={
                                quicksand.className +
                                `
                                text-white

                                text-center

                                text-[clamp(2.4rem,7vw,5rem)]

                                leading-none
                                font-normal
                                `
                            }
                        >
                            Experience a Moment
                        </h2>

                        <p
                            className={
                                quicksand.className +
                                `
                                mt-6
                                px-6

                                text-center
                                text-white/90

                                text-[clamp(0.9rem,2vw,1.5rem)]

                                leading-relaxed

                                pointer-events-none
                                `
                            }
                        >
                            Rotate the wristband
                            <br />
                            and tap a QR code.
                        </p>

                    </div>


                    <BraceletViewer
                        ref={braceletRef}
                        scale={braceletScale}
                    />


                    <div
                        className="
                                                      
                            flex
                            items-center
                            justify-center

                           

                            pointer-events-none
                            "
                            style={{
                            gap: `${controlGap}px`,
                        }}
                    >

                        <button
                            onClick={() => braceletRef.current?.rotateLeft()}
                            className="
                                pointer-events-auto
                                text-white/80
                                hover:text-white
                                transition
                            "
                            aria-label="Rotate Left"
                        >
                            <CornerDownLeft
                                    className="
                                        w-8
                                        h-8
                                        sm:w-9
                                        sm:h-9
                                        md:w-10
                                        md:h-10
                                    "
                                    strokeWidth={2}
                                />
                        </button>


                        <span
                            className="
                                text-white/80

                                text-sm
                                sm:text-base
                                md:text-lg

                                font-medium

                                select-none
                            "
                        >
                            ROTATE
                        </span>


                        <button
                            onClick={() => braceletRef.current?.rotateRight()}
                            className="
                                pointer-events-auto
                                text-white/80
                                hover:text-white
                                transition
                            "
                            aria-label="Rotate Right"
                        >
                        <CornerDownRight
                            className="
                                w-8
                                h-8
                                sm:w-9
                                sm:h-9
                                md:w-10
                                md:h-10
                            "
                            strokeWidth={2}
                        />
                        </button>

                    </div>

                    

            </div>    

        </main>
    );
}