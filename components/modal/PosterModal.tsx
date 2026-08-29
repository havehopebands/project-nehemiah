"use client";

import { useEffect, useState } from "react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};



export default function Modal({
    isOpen,
    onClose,
    children,
}: ModalProps) {

    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
    if (isOpen) {
        setIsVisible(true);
        document.body.style.overflow = "hidden";

        return;
    }

    document.body.style.overflow = "";

    const timeout = setTimeout(() => {
        setIsVisible(false);
    }, 250);

    return () => {
        clearTimeout(timeout);
        document.body.style.overflow = "";
    };
}, [isOpen]);

    if (!isVisible) return null;


    return (
    <>

{/* ======================================================
    MODAL OVERLAY
====================================================== */}


    <div
        
        className={`
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/60
            backdrop-blur-sm
            p-4

            transition-opacity
            duration-300

            isOpen ? "opacity-100" : "opacity-0"
        `}
    >

{/* ======================================================
    MODAL FRAME
====================================================== */}

        <div
            className="
                relative

                w-fit
                h-[90dvh]
                aspect-[1344/1920]

                rounded-3xl
                bg-transparent
                shadow-2xl
                overflow-hidden
                
                "
        >
            
{/* ======================================================
    MODAL VIEWPORT
====================================================== */}

                <div
                    className="
                        relative
                        h-full
                        overflow-hidden
                    "
                >

{/* ======================================================
    CLOSE BUTTON
====================================================== */}

                    <button
                        onClick={onClose}
                        className="
                            absolute
                            top-5
                            right-5
                            z-50
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            bg-black/40
                            text-white
                            backdrop-blur-sm
                            transition
                            hover:bg-black/60
                            hover:text-white
                        "
                        aria-label="Close modal"
                    >
                        <span
                            className="
                                text-2xl
                                leading-none
                            "
                        >
                            &times;
                        </span>
                    </button>

{/* ======================================================
    MODAL CONTENT SLOT
====================================================== */}


                    {children}
                </div>
        </div>
    </div>

    </>
);
}