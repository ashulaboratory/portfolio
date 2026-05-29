"use client";

import { useEffect, useRef, useState } from "react";
import AshSvg from "./AshSvg";

export default function Ash() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [controlled, setControlled] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let mode: "follow" | "controlled" = "follow";
    let ashX = window.innerWidth - 100;
    let ashY = window.innerHeight / 2;
    let targetX = ashX;
    let targetY = ashY;
    const keys: Record<string, boolean> = {};
    let raf = 0;

    const isModalOpen = () => document.body.classList.contains("modal-open");

    const setMode = (next: "follow" | "controlled") => {
      mode = next;
      setControlled(next === "controlled");
    };

    const onMouseMove = (e: MouseEvent) => {
      if (mode === "follow") {
        targetX = e.clientX + 24;
        targetY = e.clientY + 24;
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isModalOpen()) return; // modal handles its own close
        if (mode === "controlled") setMode("follow");
      }
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        if (isModalOpen()) return;
        e.preventDefault();
        keys[e.key] = true;
        if (mode === "follow") {
          setMode("controlled");
          targetX = ashX;
          targetY = ashY;
        }
      }
    };

    const onKeyUp = (e: KeyboardEvent) => {
      keys[e.key] = false;
    };

    const tick = () => {
      if (mode === "controlled") {
        const speed = 6;
        if (keys["ArrowLeft"]) ashX -= speed;
        if (keys["ArrowRight"]) ashX += speed;
        if (keys["ArrowUp"]) ashY -= speed;
        if (keys["ArrowDown"]) ashY += speed;
        ashX = Math.max(0, Math.min(window.innerWidth - 56, ashX));
        ashY = Math.max(0, Math.min(window.innerHeight - 64, ashY));
      } else {
        ashX += (targetX - ashX) * 0.08;
        ashY += (targetY - ashY) * 0.08;
      }
      const wobble = Math.sin(Date.now() / 350) * 4;
      wrapper.style.transform = `translate(${ashX}px, ${ashY + wobble}px)`;
      raf = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  return (
    <>
      <div
        ref={wrapperRef}
        className="pointer-events-none fixed left-0 top-0 z-50 h-16 w-14 will-change-transform max-md:hidden"
      >
        <div
          className="h-full w-full transition-[filter] duration-300"
          style={{
            filter: controlled
              ? "drop-shadow(0 0 14px rgba(224,62,62,0.7))"
              : "drop-shadow(0 0 8px rgba(224,62,62,0.35))",
          }}
        >
          <AshSvg />
        </div>
      </div>
      <div className="fixed bottom-4 right-4 z-[90] rounded-md border border-border bg-[rgba(17,23,42,0.85)] px-3 py-2 text-[0.7rem] tracking-wider text-fg-dim backdrop-blur max-md:hidden">
        Ash で遊ぶ → <kbd>↑</kbd><kbd>↓</kbd><kbd>←</kbd><kbd>→</kbd> ／ <kbd>Esc</kbd>
      </div>
    </>
  );
}
