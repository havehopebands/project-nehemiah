import localFont from "next/font/local";
import { Great_Vibes, Public_Sans, Red_Hat_Display } from "next/font/google";

// =========================
// Google Fonts (Primary)
// =========================

export const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

export const publicSans = Public_Sans({
  subsets: ["latin"],
});

export const redHatDisplay = Red_Hat_Display({
    subsets: ["latin"],
});

// =========================
// Local Fonts
// =========================

export const bessita = localFont({
  src: "../public/fonts/Bessita Handwriting Free.otf",
});

export const brightwall = localFont({
  src: "../public/fonts/Brightwall Personal Use Only.ttf",
});

export const geometr212 = localFont({
  src: "../public/fonts/Geometr212 BkCn BT Book.ttf",
});

export const jasper = localFont({
  src: "../public/fonts/JaspersHandwriting-Regular.ttf",
});

export const techb = localFont({
  src: "../public/fonts/techb___.ttf",
});

export const champagne = localFont({
  src: "../public/fonts/Champagne.ttf",
});