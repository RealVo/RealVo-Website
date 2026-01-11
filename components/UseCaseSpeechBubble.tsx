type Props = {
  photoSrc: string;
  maskSrc: string;
  bubbleSrc: string;
  alt: string;
  maxWidth?: string;
};

export default function UseCaseSpeechBubble({
  photoSrc,
  maskSrc,
  bubbleSrc,
  alt,
  maxWidth = '460px',
}: Props) {
  return (
    <div
      className="relative"
      style={{ maxWidth }}
    >
      {/* PHOTO (masked) */}
      <img
        src={photoSrc}
        alt={alt}
        className="
          block w-full h-auto
          absolute inset-0
          object-cover
          [mask-image:url(var(--mask))]
          [mask-size:contain]
          [mask-repeat:no-repeat]
          [mask-position:center]
          [-webkit-mask-image:url(var(--mask))]
          [-webkit-mask-size:contain]
          [-webkit-mask-repeat:no-repeat]
          [-webkit-mask-position:center]
        "
        style={{ '--mask': `url(${maskSrc})` } as React.CSSProperties}
        draggable={false}
      />

      {/* BUBBLE OUTLINE */}
      <img
        src={bubbleSrc}
        alt=""
        aria-hidden
        className="
          block w-full h-auto relative
          [filter:drop-shadow(0px_20px_32px_rgba(15,23,42,0.16))]
          dark:[filter:drop-shadow(0px_20px_32px_rgba(0,0,0,0.45))]
        "
        draggable={false}
      />
    </div>
  );
}
