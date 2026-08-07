"use client";

import { useEffect } from "react";

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
    useEffect(() => {
        if (!isOpen) {
            document.body.style.overflow = "";
            return;
        }

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;


    return (
    <>

{/* ======================================================
    MODAL OVERLAY
====================================================== */}


    <div
        
        className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/60
            backdrop-blur-sm
            p-4
        "
    >

{/* ======================================================
    MODAL FRAME
====================================================== */}

        <div
            className="
                relative

                w-full
                max-w-sm

                sm:max-w-md
                md:max-w-2xl
                lg:max-w-4xl
                xl:max-w-5xl

                h-[90dvh]
                sm:h-[80dvh]
                md:h-[75dvh]
                lg:h-[75dvh]
                xl:h-[90dvh]

                rounded-3xl
                bg-black
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
                            bg-black/10
                            text-neutral-900
                            backdrop-blur-sm
                            transition
                            hover:bg-black/20
                            hover:text-neutral-500
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