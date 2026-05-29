type Props = { children: React.ReactNode };

export function SectionTitle({ children }: Props) {
  return (
    <h2
      className="mb-12 flex items-center gap-4 font-display tracking-[-0.01em]"
      style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)" }}
    >
      <span className="inline-block h-[3px] w-8 bg-accent" />
      {children}
    </h2>
  );
}

export function SubHeading({ children }: Props) {
  return (
    <h3 className="mt-14 mb-6 font-display text-[0.85rem] uppercase tracking-[0.2em] text-accent first:mt-0">
      {children}
    </h3>
  );
}

export function PageHeader({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-[1100px] px-10 pt-36 pb-12 max-md:px-5 max-md:pt-28 max-md:pb-8">
      <h1
        className="font-display leading-none tracking-[-0.02em]"
        style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
      >
        {title}
      </h1>
      {sub && <div className="mt-4 text-[0.95rem] tracking-wide text-fg-dim">{sub}</div>}
    </div>
  );
}
