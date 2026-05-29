"use client";

import { useEffect, useState } from "react";
import type { Work } from "@/data/types";
import { projects } from "@/data/projects";
import { research } from "@/data/research";
import { internships } from "@/data/internships";

function Card({ item, onClick }: { item: Work; onClick: () => void }) {
  const featured = item.featured;
  return (
    <div
      onClick={onClick}
      className={`group relative cursor-pointer rounded-xl border border-border p-7 transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent/[0.03] ${
        featured
          ? "col-span-full p-10 max-md:p-7"
          : "bg-white/[0.015]"
      }`}
      style={
        featured
          ? {
              background:
                "linear-gradient(135deg, rgba(224,62,62,0.08), rgba(255,255,255,0.02))",
            }
          : undefined
      }
    >
      <span className="absolute right-5 top-4 text-xl text-fg-dim transition-all group-hover:rotate-90 group-hover:text-accent">
        +
      </span>
      <span className="mb-3 inline-block font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent">
        {featured ? "Featured — " : ""}
        {item.tag}
      </span>
      <h3
        className={
          featured
            ? "mb-2 font-display text-3xl tracking-[-0.01em] max-md:text-2xl"
            : "mb-2 text-[1.2rem] font-bold tracking-tight"
        }
      >
        {item.title}
      </h3>
      {(item.subtitle || item.award) && (
        <p className="mb-4 text-[0.85rem] leading-relaxed text-fg-dim">
          {item.subtitle}
          {item.award && (
            <>
              <br />
              {item.award}
            </>
          )}
        </p>
      )}
      <p
        className={`mb-4 text-[0.88rem] leading-relaxed ${
          featured ? "text-fg" : "text-fg-dim"
        }`}
      >
        {item.desc}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {item.tech.slice(0, 8).map((t) => (
          <span
            key={t}
            className="rounded bg-white/[0.03] px-2 py-1 font-mono text-[0.7rem] text-fg-dim"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function CardGrid({ items, onOpen }: { items: Work[]; onOpen: (w: Work) => void }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
      {items.map((item) => (
        <Card key={item.id} item={item} onClick={() => onOpen(item)} />
      ))}
    </div>
  );
}

function Modal({ work, onClose }: { work: Work | null; onClose: () => void }) {
  useEffect(() => {
    if (work) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && work) onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("modal-open");
    };
  }, [work, onClose]);

  if (!work) return null;
  const d = work.detail;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[rgba(5,7,14,0.85)] p-8 backdrop-blur max-md:p-4"
    >
      <div className="relative max-h-[88vh] w-full max-w-[760px] overflow-y-auto rounded-2xl border border-border bg-bg p-12 max-md:p-6">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-4 rounded-md px-2.5 py-1 text-2xl leading-none text-fg-dim transition-colors hover:bg-bg-soft hover:text-accent"
        >
          ×
        </button>
        <span className="mb-3 inline-block font-mono text-[0.72rem] uppercase tracking-[0.18em] text-accent">
          {work.tag}
        </span>
        <h2
          className="mb-2 font-display tracking-[-0.01em]"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2.4rem)" }}
        >
          {work.title}
        </h2>
        {work.subtitle && (
          <p className="mb-7 text-[0.95rem] leading-relaxed text-fg-dim">{work.subtitle}</p>
        )}
        {work.award && (
          <div className="mb-7 inline-block rounded border border-accent/30 bg-accent/10 px-3 py-1 text-[0.85rem] text-accent">
            🏆 {work.award}
          </div>
        )}
        {d.background && (
          <Section title="Background">
            <p>{d.background}</p>
          </Section>
        )}
        {d.role && d.role.length > 0 && (
          <Section title="Role / 自分の役割">
            <ul className="list-none p-0">
              {d.role.map((x, i) => (
                <li key={i} className="relative mb-1.5 pl-5 text-[0.9rem] leading-relaxed">
                  <span className="absolute left-0 text-accent">—</span>
                  {x}
                </li>
              ))}
            </ul>
          </Section>
        )}
        {d.method && d.method.length > 0 && (
          <Section title="Method / 仕組み">
            <ul className="list-none p-0">
              {d.method.map((x, i) => (
                <li key={i} className="relative mb-1.5 pl-5 text-[0.9rem] leading-relaxed">
                  <span className="absolute left-0 text-accent">—</span>
                  {x}
                </li>
              ))}
            </ul>
          </Section>
        )}
        {d.design && d.design.length > 0 && (
          <Section title="Design / 工夫">
            <ul className="list-none p-0">
              {d.design.map((x, i) => (
                <li key={i} className="relative mb-1.5 pl-5 text-[0.9rem] leading-relaxed">
                  <span className="absolute left-0 text-accent">—</span>
                  {x}
                </li>
              ))}
            </ul>
          </Section>
        )}
        {d.result && (
          <Section title="Result">
            <p>{d.result}</p>
          </Section>
        )}
        {d.learning && (
          <Section title="Learning / 学び">
            <p>{d.learning}</p>
          </Section>
        )}
        {d.links && d.links.length > 0 && (
          <Section title="Links">
            <ul className="list-none p-0">
              {d.links.map((link, i) => (
                <li key={i} className="mb-1.5 text-[0.9rem]">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent underline decoration-accent/40 underline-offset-2 transition-colors hover:decoration-accent"
                  >
                    {link.label} <span className="text-xs">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </Section>
        )}
        <Section title="Tech Stack">
          <div className="mt-2 flex flex-wrap gap-1.5">
            {work.tech.map((t) => (
              <span
                key={t}
                className="rounded bg-white/[0.03] px-2 py-1 font-mono text-[0.7rem] text-fg-dim"
              >
                {t}
              </span>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-7">
      <h4 className="mb-3 font-display text-[0.78rem] uppercase tracking-[0.18em] text-accent">
        {title}
      </h4>
      <div className="text-[0.92rem] leading-relaxed text-fg">{children}</div>
    </div>
  );
}

export default function WorksSection() {
  const [active, setActive] = useState<Work | null>(null);

  return (
    <>
      <SubGroupTitle label="Projects" count={projects.length} />
      <CardGrid items={projects} onOpen={setActive} />

      <SubGroupTitle label="Research" count={research.length} />
      <CardGrid items={research} onOpen={setActive} />

      <SubGroupTitle label="Internships" count={internships.length} />
      <CardGrid items={internships} onOpen={setActive} />

      <Modal work={active} onClose={() => setActive(null)} />
    </>
  );
}

function SubGroupTitle({ label, count }: { label: string; count: number }) {
  return (
    <h3 className="mb-7 mt-[4.5rem] flex items-baseline gap-3 font-display text-[0.95rem] uppercase tracking-[0.18em] text-accent first-of-type:mt-0">
      {label}
      <span className="font-mono text-[0.78rem] font-normal tracking-wider text-fg-dim">
        / {count}
      </span>
    </h3>
  );
}
