"use client";

import { useState } from "react";
import Link from "next/link";
import BackgroundVideo from "./BackgroundVideo";
import Reveal from "./Reveal";
import { AnimatePresence } from "framer-motion";
import { champagne } from "@/lib/fonts";

type AbsorbContentProps = {
 absorb: {
  devotionTitle: string;
  devotion: string;
  reflectionQuestions: string[];
  personalChallenge: string;
  closingPrayer: string;
};
};

export default function AbsorbContent({
  absorb,
}: AbsorbContentProps) {
  const [step, setStep] = useState("read");

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 text-white overflow-hidden">

      <BackgroundVideo
        video="/videos/absorb.mp4"
        attributionText="Video via Vecteezy.com"
        attributionHref="https://www.vecteezy.com/free-videos/flying-over-trees"
      />

      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center">

        <Reveal duration={1.6}>
          <h2
            className={
              champagne.className +
              " w-full text-center text-5xl sm:text-6xl md:text-7xl leading-tight mb-16"
            }
          >
            God's Message for You Today
          </h2>
        </Reveal>

        <Reveal delay={1.2}>
          <div className="relative z-10 w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">

            <div className="max-h-[50vh] overflow-y-auto scroll-stable">

               <AnimatePresence mode="wait">
              {step === "read" && (
                  <Reveal key="read" duration={0.35}>
                  <h3 className="text-2xl font-semibold text-center px-2 pt-8 mb-6">
                    {absorb.devotionTitle}
                  </h3>

                  <div className="px-8 pb-8">
                    <p className="leading-relaxed whitespace-pre-line">
                      {absorb.devotion}
                    </p>

                    <button
                      onClick={() => setStep("reflect")}
                      className="mt-8 mx-auto block rounded-full border border-white/40 px-6 py-3 hover:bg-white/20 transition"
                    >
                      <span>Reflect on This</span>
                      <span className="block text-xl leading-none">↓</span>
                    </button>
                  </div>
                  </Reveal>
                )}

              {step === "reflect" && (
                 <Reveal key="reflect" duration={0.35}>
                  <h3 className="text-2xl font-semibold text-center px-2 pt-8 mb-6">
                    Reflection Questions
                  </h3>

                  <div className="px-8 pb-8">
                    <ul className="list-disc pl-6 space-y-4">
                      {absorb.reflectionQuestions.map((question, index) => (
                        <li key={index}>{question}</li>
                      ))}
                    </ul>

                    <button
                       onClick={() => setStep("respond")}
                       className="mt-8 mx-auto block rounded-full border border-white/40 px-6 py-3 hover:bg-white/20 transition">
                       <span>Respond to God</span>
                       <span className="block text-xl leading-none">↓</span>
                    </button>


                  </div>
                 </Reveal>
               )}

              {step === "respond" && (
                 <Reveal key="respond" duration={0.35}>
                     

                  <div className="px-8 pb-8">
                     <h4 className="text-xl font-semibold text-center mt-8 mb-3">
                         Personal Challenge
                     </h4>

                     <p className="leading-relaxed mb-8 whitespace-pre-line mt-4">
                       {absorb.personalChallenge}
                     </p>

                     <h4 className="text-xl font-semibold text-center mb-3">
                        Closing Prayer
                     </h4>

                     <p className="leading-relaxed whitespace-pre-line mt-4">
                         {absorb.closingPrayer}
                     </p>

                     

                  </div>
                </Reveal>
               )}

                    </AnimatePresence>

            </div>

          </div>
        </Reveal>

      </div>

    </main>
  );
}