"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { links } from "@/data/links";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/timeline", label: "Timeline" },
  { href: "/works", label: "Works" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // ページ遷移時にメニューを閉じる
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // メニュー開いてる間は背後のスクロールを止める
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-border backdrop-blur-xl bg-bg/65">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-10 py-4 max-md:px-5 max-md:py-3.5">
        <Link
          href="/"
          className="font-display text-base tracking-[0.12em] text-fg"
          onClick={() => setOpen(false)}
        >
          ASHISU
        </Link>

        {/* デスクトップメニュー */}
        <ul className="flex items-center gap-9 max-md:hidden">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative text-[0.85rem] font-medium uppercase tracking-[0.08em] transition-colors hover:text-accent ${
                    active ? "text-accent" : "text-fg"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute inset-x-0 -bottom-1.5 h-0.5 bg-accent" />
                  )}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href={links.github}
              target="_blank"
              rel="noopener"
              className="text-[0.85rem] font-medium uppercase tracking-[0.08em] text-fg transition-colors hover:text-accent"
            >
              GitHub ↗
            </a>
          </li>
        </ul>

        {/* モバイル用ハンバーガーボタン */}
        <button
          type="button"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="hidden h-10 w-10 flex-col items-center justify-center gap-1.5 max-md:flex"
        >
          <span
            className={`block h-[2px] w-6 bg-fg transition-all duration-300 ${
              open ? "translate-y-[8px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-fg transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-fg transition-all duration-300 ${
              open ? "-translate-y-[8px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* モバイル用ドロップダウンメニュー */}
      <div
        className={`hidden max-md:block overflow-hidden border-t border-border transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-3">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block py-3 text-base font-medium uppercase tracking-[0.08em] transition-colors ${
                    active ? "text-accent" : "text-fg"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href={links.github}
              target="_blank"
              rel="noopener"
              className="block py-3 text-base font-medium uppercase tracking-[0.08em] text-fg"
            >
              GitHub ↗
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
