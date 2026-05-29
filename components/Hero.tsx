import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center p-8 text-center"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(224,62,62,0.04), transparent 60%)",
      }}
    >
      <h1
        className="font-display leading-[0.92] tracking-[-0.03em]"
        style={{ fontSize: "clamp(3rem, 12vw, 10rem)" }}
      >
        Ashisu<br />Murakami
      </h1>
      <div
        className="mt-7 uppercase tracking-[0.25em] text-fg-dim"
        style={{ fontSize: "clamp(0.8rem, 1.3vw, 1rem)" }}
      >
        {profile.subtitle}
      </div>
      <div className="absolute bottom-10 text-[0.7rem] uppercase tracking-[0.2em] text-fg-dim">
        Scroll ↓ &nbsp;／&nbsp; <kbd>↑</kbd><kbd>↓</kbd><kbd>←</kbd><kbd>→</kbd> to play with Ash
      </div>
    </section>
  );
}
