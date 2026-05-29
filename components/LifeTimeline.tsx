"use client";

import { useEffect, useRef, useState } from "react";
import type { LifeEvent } from "@/data/types";
import { lifeTimeline } from "@/data/timeline";

function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function TimelineRow({ event, index }: { event: LifeEvent; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
      className={`relative mb-16 last:mb-0 pl-16 transition-all duration-700 ease-out md:pl-20 ${
        inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
      }`}
    >
      {/* ドット（左の縦線上に配置） */}
      <div className="pointer-events-none absolute left-6 top-4 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-accent ring-4 ring-bg md:left-8" />

      {/* テキスト */}
      <div>
        <div className="font-display text-2xl tracking-tight text-accent md:text-3xl">
          {event.year}
        </div>
        <h3 className="mt-2 text-2xl font-bold leading-snug md:text-3xl">{event.title}</h3>
        {event.description && (
          <p className="mt-4 max-w-2xl text-lg font-medium leading-relaxed text-fg md:text-xl">
            {event.description}
          </p>
        )}
      </div>
    </div>
  );
}

export default function LifeTimeline() {
  return (
    <div className="relative">
      {/* 左の縦線 */}
      <div className="pointer-events-none absolute bottom-0 left-6 top-0 w-px bg-border md:left-8" />
      {lifeTimeline.map((event, i) => (
        <TimelineRow key={i} event={event} index={i} />
      ))}
    </div>
  );
}
