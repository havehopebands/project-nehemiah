"use client";

export default function SupportMinistryModal() {
    return (
        <div
            className="
                relative
                h-full
                w-full
                overflow-y-auto
                overflow-x-hidden
                bg-white
            "
        >
            <iframe
                src="https://www.givesendgo.com/have-hope-wristbands-a-digital-disciples/grabwidget"
                title="Support the Ministry"
                width="260"
                height="800"
                frameBorder="0"
                scrolling="no"
                className="
                    mx-auto
                    block
                    w-full
                    max-w-[400px]
                    border-none
                "
            />
        </div>
    );
}