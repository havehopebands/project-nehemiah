"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import Image from "next/image";
import { redHatDisplay, publicSans } from "@/lib/fonts";
import Modal from "@/components/modal/Modal";
import StoryModal from "@/components/modal/StoryModal";


export default function WristbandSection() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="relative overflow-hidden bg-neutral-950 py-24"
    >
      <div className="
                mx-auto 
                flex 
                max-w-7xl 
                flex-col 
                items-center 
                gap-16
                px-6 
                lg:flex-row
                lg:justify-between
                "
    >  

        {/* LEFT */}
        <Reveal>
          <div className="max-w-xl">

            <p
              className={
                redHatDisplay.className +
                " mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400"
              }
            >
              Have Hope Wristbands
            </p>

            <h2
              className={
                redHatDisplay.className +
                " text-4xl font-semibold leading-tight text-white md:text-5xl"
              }
            >
              It's more than just a wristband.
            </h2>

            <p
              className={
                publicSans.className +
                " mt-6 text-lg leading-8 text-neutral-300"
              }
            >
              It is a digital pathway to discovering the hope, peace, purpose, and life found in Jesus Christ—inviting you into a journey of faith, where every step draws you closer to Him.
            </p>

            <button
               onClick={() => setIsModalOpen(true)}
              className={
                publicSans.className +
                " mt-10 text-lg font-medium text-yellow-400 transition hover:translate-x-1"
              }
            >
              Explore the Journey →
            </button>

          </div>
        </Reveal>

        {/* RIGHT */}
        <Reveal delay={0.2}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center"
          >
            <Image
                src="/images/pray-1.png"
                alt="Praying hands"

                width={1448}
                height={1086}

                className="
                    w-full
                    h-auto

                    max-w-[520px]

                    rounded-3xl
                "
                />
          </motion.div>
        </Reveal>

      </div>

            <Modal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
              >
                  <StoryModal />
              </Modal>




    </section>
  );
}