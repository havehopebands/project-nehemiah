"use client";

import { useState } from "react";
import Link from "next/link";
import BackgroundVideo from "../BackgroundVideo";
import Reveal from "../Reveal";
import StepTransition from "../StepTransition";
import { AnimatePresence } from "framer-motion";
import { greatVibes, publicSans, redHatDisplay } from "@/lib/fonts";

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
    <main 
      className="
      relative
      h-dvh
      flex 
      flex-col 
      items-center 
      justify-center 
      px-6
      py-8 
      text-white 
      overflow-hidden
      "
    >

      <BackgroundVideo
        video="/videos/absorb.webm"
        attributionText="Video via Vecteezy.com"
        attributionHref="https://www.vecteezy.com/free-videos/flying-over-trees"
      />

      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center">

        <Reveal duration={1.6}>
          <h2
            className={
              greatVibes.className +
              " w-full text-center text-[clamp(2.75rem,8vw,4.5rem)] leading-tight mb-16"
            }
          >
            God's Message for You Today
          </h2>
        </Reveal>

        <Reveal delay={1.2}>
          <div className="relative z-10 w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">

            <div className="h-[50vh] overflow-y-auto scroll-stable px-8 py-8">

               <AnimatePresence mode="wait" initial={false}>
               <StepTransition key={step}>

    {step === "read" && (
      <>
        <h3
          className={
            redHatDisplay.className +
            " text-[clamp(1.5rem,4vw,2rem)] font-semibold text-center px-2 pt-8 mb-6"
          }
        >
          {absorb.devotionTitle}
        </h3>

        
          <p
            className={
              publicSans.className +
              " text-[clamp(1rem,3.5vw,1.25rem)] leading-relaxed whitespace-pre-line"
            }
          >
            {absorb.devotion}
          </p>


        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setStep("reflect")}
            className={
              publicSans.className +
              " mx-auto block rounded-full border border-white/40 px-6 py-3 hover:bg-white/20 transition"
            }
          >
            <span>Reflect on This</span>
            <span className="block text-[clamp(1.125rem,3vw,1.25rem)] leading-none">↓</span>
          </button>
        </div>

      </>
    )}

    {step === "reflect" && (
      <>
        <h3
          className={
            redHatDisplay.className +
            " text-[clamp(1.5rem,4vw,2rem)] font-semibold text-center px-2 pt-8 mb-6"
          }
        >
          Reflection Questions
        </h3>

        
          <ul
            className={
              publicSans.className +
              " text-[clamp(1rem,3.5vw,1.25rem)] list-disc pl-6 space-y-4"
            }
          >
            {absorb.reflectionQuestions.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>

          <button
            onClick={() => {
              setStep("respond");
           
            }}
            className={
              publicSans.className +
              " mt-8 mx-auto block rounded-full border border-white/40 px-6 py-3 hover:bg-white/20 transition"
            }
          >
            <span>Respond to God</span>
            <span className="block text-[clamp(1.125rem,3vw,1.25rem)] leading-none">↓</span>
          </button>
        
      </>
    )}

    {step === "respond" && (
      <>
        <h4
          className={
            redHatDisplay.className +
            " text-[clamp(1.25rem,3.5vw,1.5rem)] font-semibold text-center mt-8 mb-3"
          }
        >
          Personal Challenge
        </h4>

        <p
          className={
            publicSans.className +
            " text-[clamp(1rem,3.5vw,1.25rem)] leading-relaxed whitespace-pre-line mt-4 mb-8"
          }
        >
          {absorb.personalChallenge}
        </p>

        <h4
          className={
            redHatDisplay.className +
            " text-[clamp(1.25rem,3.5vw,1.5rem)] font-semibold text-center mb-3"
          }
        >
          Closing Prayer
        </h4>

        <p
          className={
            publicSans.className +
            " text-[clamp(1rem,3.5vw,1.25rem)] leading-relaxed whitespace-pre-line mt-4"
          }
        >
          {absorb.closingPrayer}
        </p>


        <div className="mt-12 flex justify-center">
        
        </div>

      </>
    )}

  </StepTransition>
</AnimatePresence>

            </div>

          </div>
        </Reveal>

         

      </div>

    </main>
  );
}