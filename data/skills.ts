import type { SkillTier } from "./types";

/**
 * スキルのTier表（できる順）
 *
 * 各スキルは `{ name, icon? }`。
 * icon は public/skills/ 配下のファイル名（例: "React-Dark.svg"）。
 * ※ name はアクセシビリティ用（読み上げ）、画面には表示されません。
 */
export const skills: SkillTier[] = [
  {
    tier: "S",
    label: "かなり",
    skills: [
      { name: "Python", icon: "Python-Dark.svg" },
      { name: "React", icon: "React-Dark.svg" },
      { name: "TypeScript", icon: "TypeScript.svg" },
      { name: "JavaScript", icon: "JavaScript.svg" },
      { name: "HTML", icon: "HTML.svg" },
      { name: "CSS", icon: "CSS.svg" },
    ],
  },
  {
    tier: "A",
    label: "そこそこ",
    skills: [
      { name: "Tailwind CSS", icon: "TailwindCSS-Dark.svg" },
      { name: "C++", icon: "CPP.svg" },
      { name: "Unity (C#)", icon: "Unity-Dark.svg" },
      { name: "Next.js", icon: "NextJS-Dark.svg" },
      { name: "Docker", icon: "Docker.svg" },
      { name: "MySQL", icon: "MySQL-Dark.svg" },
    ],
  },
  {
    tier: "B",
    label: "勉強中",
    skills: [
      { name: "Go (Echo)", icon: "GoLang.svg" },
      { name: "Ruby on Rails", icon: "Rails.svg" },
      { name: "AWS", icon: "AWS-Dark.svg" },
    ],
  },
];
