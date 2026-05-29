// ============================================================
// 共通型定義
// ============================================================

export type TimelineType = "school" | "work" | "project";

export type TimelineItem = {
  date: string;
  type: TimelineType;
  title: string;
  short: string;
  award?: boolean;
};

export type WorkLink = {
  /** 何のリンクか（例: "GitHub", "デモ動画", "記事"） */
  label: string;
  /** リンク先URL */
  url: string;
};

export type WorkDetail = {
  background?: string;
  /** このプロジェクトでの自分の役割（個人作品なら "全工程個人で実装" など） */
  role?: string[];
  /** 仕組み・実装方法（システム構成、フロー、技術的な動作原理など） */
  method?: string[];
  /** 設計上の工夫・こだわった点 */
  design?: string[];
  result?: string;
  /** この作品から得た学び・気づき */
  learning?: string;
  /** 外部リンク（GitHub、デモ、記事など） */
  links?: WorkLink[];
};

export type Work = {
  id: string;
  tag: string;
  title: string;
  subtitle?: string;
  award?: string;
  desc: string;
  detail: WorkDetail;
  tech: string[];
  featured?: boolean;
};

export type Award = {
  date: string;
  type: "award" | "selection";
  title: string;
  subtitle?: string;
};

export type LifeEvent = {
  year: string;
  title: string;
  description?: string;
};

export type SkillItem = {
  name: string;
  /** public/skills/ 配下のファイル名（例: "react.png"）。省略するとテキストのみ表示 */
  icon?: string;
};

export type SkillTier = {
  tier: "S" | "A" | "B" | "C" | "D";
  label?: string; // Tierの意味（例：「主戦場」「実務経験あり」）
  skills: SkillItem[];
};

export type Profile = {
  name: string;
  nameJa: string;
  subtitle: string;
  catch: { line1: string; line2Pre: string; line2Highlight: string; line2Post: string };
  bio: string[];
  hobbies: string[];
};
