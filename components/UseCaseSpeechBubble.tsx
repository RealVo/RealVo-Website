import React from "react";

type Props = {
  bubbleSrc: string;
  photoSrc: string;
  maskSrc: string;
  alt: string;

  /** Tailwind sizing class for the square (optional) */
  sizeClassName?: string;

  /** Shadow control */
  shadowAlphaLight?: number; // e.g. 0.18
  shadowAlphaDark?: number;  // e.g. 0.45
};

export default function UseCaseSpeechBubble({
  bubbleSrc,
  photoSrc,
  maskSrc,
  alt,
  sizeClassName = "w-[360px] sm:w-[420px] lg:w-[460px]",
  shadowAlphaLight = 0.18,
  shadowAlphaDark = 0.45,
}: Props) {
  // drop-shadow is applied to the whole composite (bubble + masked photo)
  const lightShadow = `drop-shadow(0px 20px 32px rgba(15, 23, 42, ${shadowAlphaLight}))`;
  const darkShadow = `drop-shadow(0px 20px 32px rgba(0, 0, 0, ${shadowAlphaDark}))`;

  return (
    <div
      className={`relative bg-transparent aspect-square ${sizeClassName}`}
      style={{ filter: lightShadow }}
    >
      {/* Dark-mode shadow override (Tailwind .dark class) */}
      <div
        className="absolute inset-0 pointer-events-none dark:opacity-100 opacity-0"
        style={{ filter: darkShadow }}
      />

      {/* PHOTO (CLIPPED BY MASK) */}
      <div
        className="absolute inset-0"
        style={{
          // Chrome/Safari need WebkitMask*
          WebkitMaskImage: `url("${maskSrc}")`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          WebkitMaskSize: "100% 100%",

          // Firefox uses standard mask*
          maskImage: `url("${maskSrc}")`,
          maskRepeat: "no-repeat",
          maskPosition: "center",
          maskSize: "100% 100%",
        }}
      >
        <img
          src={photoSrc}
          alt={alt}
          className="w-full h-full object-cover select-none"
          draggable={false}
          loading="eager"
          decoding="async"
        />
      </div>

      {/* BUBBLE ON TOP */}
      <img
        src={bubbleSrc}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full select-none pointer-events-none"
        draggable={false}
        loading="eager"
        decoding="async"
      />
    </div>
  );
}

