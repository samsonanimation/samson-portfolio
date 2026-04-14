import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";

const deckData: Record<string, { title: string; images: string[]; youtubeId?: string }> = {
  // --- ANIMATION PITCH DECKS ---
  "wolfgang": {
    title: "Wolfgang and Marcel",
    images: [
      "/images/Wolfgang-Cover.jpg",
      "/images/Wolfgang-1.jpg",
      "/images/Wolfgang-2.jpg", 
      "/images/Wolfgang-3.jpg",
      "/images/Wolfgang-4.jpg", 
      "/images/Wolfgang-5.jpg", 
      "/images/Wolfgang-6.jpg",
      "/images/Wolfgang-7.png"
    ]
  },
  "oswin": {
    title: "Oswin the Great",
    youtubeId: "ywWIiahM4UE",
    images: [
      "/images/Oswin-Cover.jpg",
      "/images/Oswin-1.jpg",
      "/images/Oswin-2.jpg",
      "/images/Oswin-3.jpg",
      "/images/Oswin-4.jpg",
      "/images/Oswin-5.jpg",
      "/images/Oswin-6.jpg",
      "/images/Oswin-7.jpg",
      "/images/Oswin-8.jpg",
      "/images/Oswin-9.jpg",
      "/images/Oswin-10.jpg",
      "/images/Oswin-11.jpg",
      "/images/Oswin-12.png"
    ]
  },
  "beep": {
    title: "Beep!",
    images: [
      "/images/Beep-Cover.png",
      "/images/Beep-1.png",
      "/images/Beep-2.png",
      "/images/Beep-3.png",
      "/images/Beep-4.png",
      "/images/Beep-5.png",
      "/images/Beep-6.png",
      "/images/Beep-7.png",
      "/images/Beep-8.png"
    ]
  },

  // --- WRITING SCRIPTS ---
  "black-crusader": {
    title: "The Black Crusader",
    images: [
      "/images/Black Crusader Thumbnail_.jpg", // <-- UPDATED TO MATCH YOUR FILE
      "/images/TheBlackCrusader-1.jpg", // <-- CHECK THESE SLIDES IN GITHUB!
      "/images/TheBlackCrusader-2.jpg",
      "/images/TheBlackCrusader-3.jpg",
      "/images/TheBlackCrusader-4.jpg",
      "/images/TheBlackCrusader-5.jpg"
    ]
  },
  "kars4kids": {
    title: "Kars4Kids!",
    images: [
      "/images/Kars4Kids Thumbnail.jpg", // <-- UPDATED TO MATCH YOUR FILE
      "/images/Kars4Kids-1.png", // <-- CHECK THESE SLIDES IN GITHUB!
      "/images/Kars4Kids-2.png",
      "/images/Kars4Kids-3.png",
      "/images/Kars4Kids-4.png"
    ]
  },
  "royal-flush": {
    title: "The Royal Flush",
    images: [
      "/images/TheRoyalFlush-Title.png", // <-- CHECK THIS IN GITHUB!
      "/images/TheRoyalFlush-1.png",
      "/images/TheRoyalFlush-2.png"
    ]
  }
};

// ... KEEP THE REST OF YOUR PROJECT.TSX CODE EXACTLY THE SAME DOWN HERE ...
