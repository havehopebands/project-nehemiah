import { redHatDisplay, publicSans } from "@/lib/fonts";
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
                    bg-white
                "
            >

            <Image
                src="/images/teal-1.jpg"
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) calc(100vw - 2rem), 1024px"
                className="
                    object-cover
                    opacity-100
                    select-none
                    pointer-events-none
                "
            />

           

            <div className="relative z-10 h-full">



{/* ======================================================
    STORY TRACK
====================================================== */}



{currentChapter === 0 && (
    <>
{/* ======================================================
    CHAPTER 1
    Not Just a QR Code—It's a Quiet Reminder.
====================================================== */}               

                <section id="story-chapter-1"
                        className="
                            flex
                            min-h-full
                            shrink-0
                            flex-col
                            items-center
                            justify-between
                            
                            px-6
                            md:px-8
                            lg:px-10
                            xl:px-10
                            
                            pt-10
                            md:pt-24
                            lg:pt-24
                            xl:pt-24
                            
                            pb-12
                            md:pb-16
                            lg:pb-20
                            xl:pb-24

                            text-center
                        "
                    >
                    <div
                            className="
                                flex
                                flex-1
                                flex-col
                                items-center
                                justify-center
                            "
                        >
                        <div className="max-w-2xl xl:max-w-4xl">

                        

                            <h1
                                className={
                                    redHatDisplay.className +
                                    " mt-2 md:mt-4 text-2xl md:text-4xl xl:text-4xl font-semibold text-neutral-900"
                                }
                            >
                                Not Just a QR Code—It's a Quiet Reminder.
                            </h1>

                            <p
                                className={
                                    publicSans.className +
                                    " mt-6 md:mt-8 text-[clamp(0.875rem,2vw,1.25rem)] leading-7 md:leading-8 lg:leading-10 text-neutral-900"
                                }
                            >
                                    The wristband is wrapped in carefully designed QR codes 
                                    and letters, each pointing to a different journey. 
                                    As you scan the QR codes on your mobile device, 
                                    you'll be guided through a discipleship journey 
                                    designed to help you grow a deeper, 
                                    more personal relationship with God. 
                            </p>

                        

                            <Image
                                    src="/images/bands-1.png"
                                    alt="Wristbands"
                                    width={960}
                                    height={540}
                                    className="
                                        mt-8
                                        md:mt-12
                                        w-full
                                        max-w-[clamp(14rem,55vw,32rem)]
                                        rounded-3xl
                                        mx-auto
                                    "
                                />

                        </div>

                    </div>

                        

                </section> {/* End Chapter 1 */}

                    <div
                        className="
                            absolute
                            bottom-0
                            left-1/2
                            -translate-x-1/2
                            z-20
                        "
                    >
                        <button
                            onClick={() => setCurrentChapter(1)}
                            className="
                                flex
                                justify-center
                                mt-6

                                transition
                                hover:opacity-70
                            "
                            aria-label="Next chapter"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="
                                    h-4
                                    w-4
                                    text-neutral-900
                                "
                            >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </button>
                    </div>


                </>
                )} 
                

{currentChapter === 1 && (
    <>
{/* ======================================================
    CHAPTER 2
    Designed with Purpose.
====================================================== */}

                    <div
                            className="
                                absolute
                                top-0
                                left-1/2
                                -translate-x-1/2
                                z-20
                            "
                        >
                        <button
                            onClick={() => setCurrentChapter(0)}
                            className="
                                transition
                                hover:opacity-70
                            "
                            aria-label="Previous chapter"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="
                                    h-4
                                    w-4
                                    text-neutral-900
                                "
                            >
                                <polyline points="6 15 12 9 18 15" />
                            </svg>
                        </button>
                    </div>

                <section id="story-chapter-2"
                        className="
                            flex
                            min-h-full
                            shrink-0
                            flex-col
                            items-center
                            justify-between
                            
                            px-6
                            md:px-8
                            lg:px-10
                            xl:px-10
                            
                            pt-10
                            md:pt-24
                            lg:pt-24
                            xl:pt-24
                            
                            pb-12
                            md:pb-16
                            lg:pb-20
                            xl:pb-24

                            text-center
                        "
                    >   
                    <div
                            className="
                                flex
                                flex-1
                                flex-col
                                items-center
                                justify-center
                            "
                        >

                            <div className="max-w-2xl xl:max-w-4xl">

                            

                                <h1
                                    className={
                                        redHatDisplay.className +
                                        " mt-2 md:mt-4 text-2xl md:text-4xl xl:text-4xl font-semibold text-neutral-900"
                                    }
                                >
                                    Designed with a purpose.
                                </h1>

                                <p
                                    className={
                                        publicSans.className +
                                        " mt-6 md:mt-8 text-[clamp(0.875rem,2vw,1.25rem)] leading-7 md:leading-8 lg:leading-10 text-neutral-900"
                                    }
                                >
                                    The first four letters on the wristband—HAVE—guide you 
                                    through the foundations of daily spiritual growth: 
                                    hearing God's Word, understanding His message, embracing 
                                    your identity in Christ, and worshiping in His presence. 
                                    Each step is thoughtfully designed to help you slow down,
                                        reflect on Scripture, and deepen your relationship with 
                                        Christ. 

                                </p>

                            

                                <Image
                                        src="/images/HAVE_macro.png"
                                        alt="Wristbands"
                                        width={960}
                                        height={540}
                                        className="
                                            mt-8
                                            md:mt-12
                                            w-full
                                            max-w-[clamp(14rem,55vw,32rem)]
                                            rounded-3xl
                                            mx-auto
                                        "
                                    />

                            </div>

                    </div>
                </section> {/* End Chapter 2 */}

                    <div
                        className="
                            absolute
                            bottom-0
                            left-1/2
                            -translate-x-1/2
                            z-20
                        "
                        >
                        <button
                            onClick={() => setCurrentChapter(2)}
                            className="
                                transition
                                hover:opacity-70
                            "
                            aria-label="Next chapter"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="
                                    h-4
                                    w-4
                                    text-neutral-900
                                "
                            >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </button>
                    </div>

                </>
                )} 


{currentChapter === 2 && (
    <>
{/* ======================================================
    CHAPTER 3
    Designed with Purpose.
====================================================== */}

                    <div
                            className="
                                absolute
                                top-0
                                left-1/2
                                -translate-x-1/2
                                z-20
                            "
                        >
                        <button
                            onClick={() => setCurrentChapter(1)}
                            className="
                                transition
                                hover:opacity-70
                            "
                            aria-label="Previous chapter"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="
                                    h-4
                                    w-4
                                    text-neutral-900
                                "
                            >
                                <polyline points="6 15 12 9 18 15" />
                            </svg>
                        </button>
                    </div>

                <section id="story-chapter-3"
                        className="
                            flex
                            min-h-full
                            shrink-0
                            flex-col
                            items-center
                            justify-between
                            
                            px-6
                            md:px-8
                            lg:px-10
                            xl:px-10
                            
                            pt-10
                            md:pt-24
                            lg:pt-24
                            xl:pt-24
                            
                            pb-12
                            md:pb-16
                            lg:pb-20
                            xl:pb-24

                            text-center
                        "
                    >   
                <div
                        className="
                            flex
                            flex-1
                            flex-col
                            items-center
                            justify-center
                        "
                        >
                    <div className="max-w-2xl">

                    

                        <h1
                            className={
                                redHatDisplay.className +
                                " mt-2 md:mt-4 text-2xl md:text-4xl xl:text-4xl font-semibold text-neutral-900"
                            }
                        >
                            Designed with a purpose.
                        </h1>

                        <p
                            className={
                                publicSans.className +
                                " mt-6 md:mt-8 text-[clamp(0.875rem,2vw,1.25rem)] leading-7 md:leading-8 lg:leading-10 text-neutral-900"
                            }
                        >
                           The next four letters—HOPE—offer exactly what they promise. 
                           Through these QR codes, you'll discover stories of God's 
                           faithfulness, words of encouragement, personalized prayers, 
                           and Gospel-centered teaching that points you toward a 
                           life of faith in Jesus Christ.

                        </p>

                    

                        <Image
                                src="/images/HOPE_macro_2.png"
                                alt="Wristbands"
                                width={960}
                                height={540}
                                className="
                                    mt-8
                                    md:mt-12
                                    w-full
                                    max-w-[clamp(14rem,55vw,32rem)]
                                    rounded-3xl
                                    mx-auto
                                "
                            />

                    </div>

                </div>


                </section> {/* End Chapter 3 */}

                    <div
                        className="
                            absolute
                            bottom-0
                            left-1/2
                            -translate-x-1/2
                            z-20
                        "
                    >
                        <button
                            onClick={() => setCurrentChapter(3)}
                            className="
                                transition
                                hover:opacity-70
                            "
                            aria-label="Next chapter"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="
                                    h-4
                                    w-4
                                    text-neutral-900
                                "
                            >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </button>
                    </div>

                </>
                )} 


{currentChapter === 3 && (
    <>
{/* ======================================================
    CHAPTER 4
    Why a wristband?
====================================================== */}

                    <div
                            className="
                                absolute
                                top-0
                                left-1/2
                                -translate-x-1/2
                                z-20
                            "
                        >
                        <button
                            onClick={() => setCurrentChapter(2)}
                            className="
                                transition
                                hover:opacity-70
                            "
                            aria-label="Previous chapter"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="
                                    h-4
                                    w-4
                                    text-neutral-900
                                "
                            >
                                <polyline points="6 15 12 9 18 15" />
                            </svg>
                        </button>
                    </div>

                <section id="story-chapter-4"
                        className="
                            flex
                            min-h-full
                            shrink-0
                            flex-col
                            items-center
                            justify-between
                            
                            px-6
                            md:px-8
                            lg:px-10
                            xl:px-10
                            
                            pt-10
                            md:pt-24
                            lg:pt-24
                            xl:pt-24
                            
                            pb-12
                            md:pb-16
                            lg:pb-20
                            xl:pb-24

                            text-center
                        "
                        >   
                
                <div
                        className="
                            flex
                            flex-1
                            flex-col
                            items-center
                            justify-center
                        "
                        >


                    <div className="max-w-2xl">

                    

                        <h1
                            className={
                                redHatDisplay.className +
                                " mt-2 md:mt-4 text-2xl md:text-4xl xl:text-4xl font-semibold text-neutral-900"
                            }
                        >
                            Why a wristband?
                        </h1>

                        <p
                            className={
                                publicSans.className +
                                " mt-6 md:mt-8 text-[clamp(0.875rem,2vw,1.25rem)] leading-7 md:leading-8 lg:leading-10 text-neutral-900"
                            }
                        >
                            A wristband is simple, familiar, and easy to wear. It quietly becomes part 
                            of your everyday life. In moments when you feel discouraged or overwhelmed, 
                            hope is never far away. Whenever you need encouragement, wisdom, or a 
                            reminder of God's promises, just simply scan a QR code, 
                            and the journey begins.

                        </p>

                    

                        <div
                            className="
                                mt-8
                                md:mt-12

                                grid
                                grid-cols-2
                                gap-4
                                md:gap-6

                                justify-items-center
                            "
                        >
                            <Image
                                src="/images/boy-2.png"
                                alt="Description 1"
                                width={960}
                                height={540}
                                className="
                                    w-full
                                    max-w-[clamp(8rem,22vw,20rem)]
                                    
                                    rounded-3xl
                                "
                            />

                            <Image
                                src="/images/girl-2.png"
                                alt="Description 2"
                                width={960}
                                height={540}
                                className="
                                    w-full
                                    max-w-[clamp(8rem,22vw,20rem)]
                                    
                                    rounded-3xl
                                "
                            />
                        </div>
                    </div>
                </div>


                </section> {/* End Chapter 4 */}

                    <div
                        className="
                            absolute
                            bottom-0
                            left-1/2
                            -translate-x-1/2
                            z-20
                        "
                    >
                        <button
                            onClick={() => setCurrentChapter(4)}
                            className="
                                transition
                                hover:opacity-70
                            "
                            aria-label="Next chapter"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="
                                    h-4
                                    w-4
                                    text-neutral-900
                                "
                            >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </button>
                    </div>

                </>
                )} 

{currentChapter === 4 && (
    <>
{/* ======================================================
    CHAPTER 5
    Beginning of a journey.
====================================================== */}

                    <div
                            className="
                                absolute
                                top-0
                                left-1/2
                                -translate-x-1/2
                                z-20
                            "
                        >
                        <button
                            onClick={() => setCurrentChapter(3)}
                            className="
                                transition
                                hover:opacity-70
                            "
                            aria-label="Previous chapter"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="
                                    h-4
                                    w-4
                                    text-neutral-900
                                "
                            >
                                <polyline points="6 15 12 9 18 15" />
                            </svg>
                        </button>
                    </div>

                <section id="story-chapter-5"
                        className="
                            flex
                            min-h-full
                            shrink-0
                            flex-col
                            items-center
                            justify-between
                            
                            px-6
                            md:px-8
                            lg:px-10
                            xl:px-10
                            
                            pt-10
                            md:pt-24
                            lg:pt-24
                            xl:pt-24
                            
                            pb-12
                            md:pb-16
                            lg:pb-20
                            xl:pb-24

                            text-center
                        "
                        >   
                
                <div
                        className="
                            flex
                            flex-1
                            flex-col
                            items-center
                            justify-center
                        "
                        >


                    <div className="max-w-2xl">

                    

                        <h1
                            className={
                                redHatDisplay.className +
                                " mt-2 md:mt-4 text-3xl md:text-5xl xl:text-5xl font-semibold text-neutral-900"
                            }
                        >
                            Your journey begins here.
                        </h1>

                        <p
                            className={
                                publicSans.className +
                                " mt-6 md:mt-8 text-[clamp(0.875rem,2vw,1.25rem)] leading-7 md:leading-8 lg:leading-10 text-neutral-900"
                            }
                        >
                            Every scan is an invitation to pause and spend a quiet moment with God. 
                            In the middle of busy days, unexpected struggles, or seasons of uncertainty, 
                            we all need gentle reminders that we are not walking alone. Whether you are 
                            seeking wisdom, strength, hope, or simply a moment of peace, our prayer is 
                            that this wristband will gently point your heart back to Jesus. One scan, one prayer, 
                            one Scripture at a time, may every moment become another opportunity to 
                            encounter His presence and discover Hope In Each Moment.

                        </p>

                    

                       
                    </div>
                </div>


                </section> {/* End Chapter 5 */}

                   
                        

                </>
                )} 







            </div>

        </div>
    );
}