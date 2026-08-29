
import { useState } from "react";
import Image from "next/image";

export default function StoryModal() {

    const [currentChapter, setCurrentChapter] = useState(0);

    return (
            <div
                className="
                    relative
                    h-full
                    overflow-hidden
                   
                "
            >

            

           

            <div className="relative z-10 h-full">



{/* ======================================================
    STORY TRACK
====================================================== */}



{currentChapter === 0 && (
    <>
        <Image
            src="/images/story-1.webp"
            alt=""
            fill
            priority
            className="
                object-contain
                rounded-3xl
                select-none
                pointer-events-none
            "
        />
    </>
)}
                

{currentChapter === 1 && (
    <>
        <Image
            src="/images/story-2.webp"
            alt=""
            fill
            priority
            className="
                object-contain
                rounded-3xl
                select-none
                pointer-events-none
            "
        />
    </>
)}


{currentChapter === 2 && (
    <>
        <Image
            src="/images/story-3.webp"
            alt=""
            fill
            priority
            className="
                object-contain
                rounded-3xl
                select-none
                pointer-events-none
            "
        />
    </>
)} 


{currentChapter === 3 && (
    <>
        <Image
            src="/images/story-4.webp"
            alt=""
            fill
            priority
            className="
                object-contain
                rounded-3xl
                select-none
                pointer-events-none
            "
        />
    </>
)}

{currentChapter === 4 && (
    <>
        <Image
            src="/images/story-5.webp"
            alt=""
            fill
            priority
            className="
                object-contain
                rounded-3xl
                select-none
                pointer-events-none
            "
        />
    </>
)} 

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
    {[0, 1, 2, 3, 4].map((chapter) => (
        <button
            key={chapter}
            onClick={() => setCurrentChapter(chapter)}
            aria-label={`Go to Chapter ${chapter + 1}`}
            className={`
                h-3
                w-3
                gap-4
                rounded-full
                transition-all
                duration-300
                ${
                    currentChapter === chapter
                        ? "bg-white scale-110"
                        : "bg-white/40 hover:bg-white/70"
                }
            `}
        />
    ))}
</div>





            </div>

        </div>
    );
}