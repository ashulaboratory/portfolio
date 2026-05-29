import type { LifeEvent } from "./types";

/**
 * 生い立ちタイムライン（Life Timeline）
 *
 * - 各エントリは「年・タイトル・説明・写真（任意）」
 * - 写真は public/timeline/ に画像を置き、`image: "/timeline/xxx.jpg"` で指定
 * - 現在の画像は Lorem Flickr の仮画像（ネット拾い）。後で実画像に差し替えてください
 * - 後から自由に書き換えてください
 */
export const lifeTimeline: LifeEvent[] = [
  {
    year: "2005/08/13",
    title: "ネパールカトマンズで生まれる",
    description: "母がネパール人、父が日本人。1歳くらいで日本へ",
    // image: "https://loremflickr.com/600/600/nepal,kathmandu/all?lock=1",
  },
  {
    year: "2012~",
    title: "小学校時代",
    description: "石川県の先端の小学校に入学、野球を六年間続ける。趣味はゲーム。",
    // image: "https://loremflickr.com/600/600/baseball,kids/all?lock=2",
  },
  {
    year: "2018~",
    title: "中学校時代",
    description: "継続して野球部に入部、生徒会にも所属する。なんとなくコンピュータに興味を持つ。",
    // image: "https://loremflickr.com/600/600/classroom,computer/all?lock=3",
  },
  {
    year: "2021",
    title: "石川工業高等専門学校 入学",
    description: "プログラミングを学び始める",
    // image: "https://loremflickr.com/600/600/coding,laptop/all?lock=4",
  },
  {
    year: "2024",
    title: "奥能登地震被災",
    description: "電気や水のない生活を経験する",
    // image: "https://loremflickr.com/600/600/japan,coast/all?lock=5",
  },
  {
    year: "2024",
    title: "高専プロコン全国大会",
    description: "2年かけて完成させたシステムで特別賞を受賞。",
    // image: "https://loremflickr.com/600/600/trophy,award/all?lock=6",
  },
  {
    year: "2026",
    title: "専攻科進学",
    description: "推薦で専攻科に進学。さらに開発経験を積む",
    // image: "https://loremflickr.com/600/600/graduation,research/all?lock=7",
  },
];
