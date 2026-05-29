import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import { SectionTitle, SubHeading } from "@/components/SectionTitle";
import { profile } from "@/data/profile";
import { awards } from "@/data/awards";
import { skills } from "@/data/skills";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-[1100px] px-10 py-20 max-md:px-5 max-md:py-16">
        <SectionTitle>About</SectionTitle>

        <p
          className="mb-8 font-bold leading-relaxed tracking-[0.02em]"
          style={{ fontSize: "clamp(1.4rem, 3.2vw, 2.4rem)", fontFamily: "var(--font-noto)" }}
        >
          {profile.catch.line1}
          <br />
          {profile.catch.line2Pre}
          <span className="text-accent">{profile.catch.line2Highlight}</span>
          {profile.catch.line2Post}
        </p>

        <div className="max-w-[720px] text-[0.95rem] text-fg">
          {profile.bio.map((p, i) => (
            <p key={i} className="mb-5">
              {p}
            </p>
          ))}
        </div>

        <SubHeading>— Hobbies</SubHeading>
        <div className="flex flex-wrap gap-2.5">
          {profile.hobbies.map((h) => (
            <span
              key={h}
              className="rounded-full border border-border bg-bg-soft px-4 py-2 text-[0.88rem]"
            >
              {h}
            </span>
          ))}
        </div>

        <SubHeading>— Awards & Selections</SubHeading>
        <div className="flex flex-col gap-4">
          {awards.map((a, i) => (
            <div
              key={i}
              className="flex items-start gap-5 rounded-xl border border-border border-l-[3px] border-l-accent bg-bg-soft px-5 py-5 max-md:flex-col max-md:gap-2"
            >
              <div className="flex min-w-[90px] flex-col gap-1 max-md:flex-row max-md:items-center max-md:gap-3 max-md:min-w-0">
                <div className="font-mono text-[0.85rem] font-semibold tracking-wider text-accent">
                  {a.date}
                </div>
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-fg-dim">
                  {a.type === "award" ? "🏆 Award" : "✦ Selection"}
                </div>
              </div>
              <div className="flex-1">
                <div className="text-[0.98rem] font-semibold leading-snug">{a.title}</div>
                {a.subtitle && (
                  <div className="mt-1 text-[0.82rem] text-fg-dim">{a.subtitle}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        <SubHeading>— Skills / Tier</SubHeading>
        <div className="flex flex-col gap-2.5">
          {skills.map((row) => {
            const tierStyle: Record<string, string> = {
              S: "bg-accent",
              A: "bg-orange-500",
              B: "bg-amber-400",
              C: "bg-sky-500",
              D: "bg-zinc-500",
            };
            return (
              <div
                key={row.tier}
                className="flex overflow-hidden rounded-xl border border-border bg-bg-soft"
              >
                <div
                  className={`flex w-20 shrink-0 flex-col items-center justify-center gap-1 ${tierStyle[row.tier]} px-2 py-3`}
                >
                  <span className="font-display text-3xl leading-none text-bg">{row.tier}</span>
                  {row.label && (
                    <span className="text-center text-[0.6rem] font-medium leading-tight text-bg/80">
                      {row.label}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-wrap items-center gap-3 p-4">
                  {row.skills.map((s) =>
                    s.icon ? (
                      <span
                        key={s.name}
                        title={s.name}
                        className="inline-flex h-12 w-12 items-center justify-center transition-transform hover:-translate-y-1"
                      >
                        <Image
                          src={`/skills/${s.icon}`}
                          alt={s.name}
                          width={48}
                          height={48}
                          className="h-12 w-12 object-contain"
                        />
                      </span>
                    ) : (
                      <span
                        key={s.name}
                        title={s.name}
                        className="inline-flex h-12 items-center rounded-md border border-border bg-bg px-3 font-mono text-[0.8rem] font-medium"
                      >
                        {s.name}
                      </span>
                    )
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          <Link
            href="/timeline"
            className="group relative block rounded-xl border border-border bg-bg-soft px-7 py-7 transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent/[0.04]"
          >
            <span className="absolute right-6 top-7 text-lg text-fg-dim transition-all group-hover:translate-x-1 group-hover:text-accent">
              →
            </span>
            <div className="mb-2 font-display text-[0.75rem] uppercase tracking-[0.2em] text-accent">
              Detailed
            </div>
            <div className="mb-1 text-[1.15rem] font-bold">Timeline</div>
            <div className="text-[0.85rem] text-fg-dim">
              経歴を見る
            </div>
          </Link>
          <Link
            href="/works"
            className="group relative block rounded-xl border border-border bg-bg-soft px-7 py-7 transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent/[0.04]"
          >
            <span className="absolute right-6 top-7 text-lg text-fg-dim transition-all group-hover:translate-x-1 group-hover:text-accent">
              →
            </span>
            <div className="mb-2 font-display text-[0.75rem] uppercase tracking-[0.2em] text-accent">
              Portfolio
            </div>
            <div className="mb-1 text-[1.15rem] font-bold">Works</div>
            <div className="text-[0.85rem] text-fg-dim">8 Projects + 1 Research + 2 Internships</div>
          </Link>
        </div>
      </section>
    </>
  );
}
