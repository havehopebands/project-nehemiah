"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {

  interface Window {

    onYouTubeIframeAPIReady: (() => void) | undefined;

    YT: any;

  }

}

type YouTubePlayerProps = {
  title: string;

  artist: string;

  youtubeId: string;
};

export default function YouTubePlayer({
  title,
  artist,
  youtubeId,
}: YouTubePlayerProps) {

  const playerContainerRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

useEffect(() => {

  const initializePlayer = () => {

    if (!window.YT || !window.YT.Player) {
      return;
    }

    if (playerRef.current) {
      return;
    }

    playerRef.current = new window.YT.Player(
      playerContainerRef.current,
      {
        height: "0",
        width: "0",

        videoId: youtubeId,

        playerVars: {
          autoplay: 0,
          controls: 0,
        },

        events: {

              onReady: (event: any) => {

                 setDuration(
                   event.target.getDuration()
                );

              },

               onStateChange: (event: any) => {

                 switch (event.data) {

                   case window.YT.PlayerState.PLAYING:

                     setIsPlaying(true);

                     break;

                   case window.YT.PlayerState.PAUSED:

                     setIsPlaying(false);

                     break;

                   case window.YT.PlayerState.ENDED:

                     setIsPlaying(false);

                     setCurrentTime(0);

                     break;

                     }

                   },

                },
      }
    );

  };

  if (window.YT && window.YT.Player) {

    initializePlayer();

  } else {

    window.onYouTubeIframeAPIReady = initializePlayer;

  }

}, [youtubeId]);

useEffect(() => {

  if (!isPlaying) {
    return;
  }

  const interval = setInterval(() => {

    if (!playerRef.current) {
      return;
    }

    setCurrentTime(
      playerRef.current.getCurrentTime()
    );

  }, 1000);

  return () => clearInterval(interval);

}, [isPlaying]);

  return (

  <>
              <Script
                    src="https://www.youtube.com/iframe_api"
                    strategy="afterInteractive"
               />



    <div
      className="
        px-6
        pt-6
        pb-4
        flex
        flex-col
        items-center
      "
    >

      <img
        src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
        alt="Worship Song"
        className="
          w-52
          h-52
          object-cover
          rounded-xl
          shadow-lg
        "
      />

      <h3
        className="
          text-2xl
          font-semibold
          text-center
          mt-4
        "
      >
        {title}
      </h3>

      <p
        className="
          text-white/80
          mt-1
        "
      >
        {artist}
      </p>

      <div
        className="
          w-full
          mt-4
        "
      >

        <div
          className="
            w-full
            h-1
            bg-white/20
            rounded-full
            overflow-hidden
          "
        >
          <div
            className="
               h-full
               bg-white
               rounded-full
               transition-all
               duration-300
             "
            style={{
               width: `${
                  duration
                     ? (currentTime / duration) * 100
                     : 0
                }%`,
              }}
          />

        </div>

        <div
          className="
            flex
            justify-between
            text-xs
            text-white/60
            mt-2
          "
        >
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

      </div>

      <button

          onClick={() => {

             if (!playerRef.current) {
                    return;
                   }

             if (isPlaying) {

                playerRef.current.pauseVideo();

               } else {

                playerRef.current.playVideo();

              }

          }}
        className="
          mt-4        
          w-16
          h-16
          rounded-full
          bg-white/10
          backdrop-blur-md
          border
          border-white/20
          hover:bg-white/20
          transition-all
          duration-300
          flex
          items-center
          justify-center
          shadow-lg
        "
      >
{isPlaying ? (

      <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="
                 w-8
                 h-8
                 text-white
               "
        >
       <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
      </svg>

   ) : (

       <svg
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             fill="currentColor"
             className="
             w-8
             h-8
             text-white
             ml-1
           "
        >
       <path d="M8 5v14l11-7z" />
       </svg>

  )}

      </button>

      <a
        href={`https://www.youtube.com/watch?v=${youtubeId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-4
          px-5
          py-2
          rounded-full
          bg-white/10
          backdrop-blur-md
          border
          border-white/20
          hover:bg-white/20
          transition-all
          duration-300
          text-white
          text-xs
          font-medium
        "
      >
        Watch in YouTube
      </a>

    </div>

    <div
      ref={playerContainerRef}
      className="hidden"
    />

  </>

);

function formatTime(seconds: number) {

  const mins = Math.floor(seconds / 60);

  const secs = Math.floor(seconds % 60);

  return `${mins}:${secs.toString().padStart(2, "0")}`;

}

}