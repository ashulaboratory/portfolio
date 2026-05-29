import type { Work } from "./types";

export const projects: Work[] = [
  {
    id: "domitool",
    featured: true,
    tag: "IoT × Web",
    title: "どみとる｜DormiTool",
    subtitle: "学生寮共用設備の利用状態管理システム",
    award: "第35回 高専プロコン全国大会 自由部門 特別賞",
    desc: "約200名が共用する寮の大浴場・シャワー室・洗濯機・乾燥機の利用状況を可視化。実用されることにこだわった設計が特徴。",
    detail: {
      background:
        "約200名が大浴場・シャワー室・洗濯機・乾燥機を共用する寮で、「設備まで行かないと空きが分からない」「特定時間帯の混雑」を全寮生が抱えていた。この問題を解決するためにIoT × Webで利用状況を可視化するシステムを開発した。",
      role: [
        "要件定義",
        "UI/UX デザイン",
        "フロントエンド",
        "プロコン本選プレゼン 資料作成",
      ],
      method: [
        "大浴場：M5Stack CoreS3で玄関を撮影 → サーバ側 YOLOv8で靴を物体認識し人数判別",
        "シャワー室：M5Stack Core2 + 光センサで照明の点灯/消灯を検知",
        "洗濯機・乾燥機：SwitchBot プラグミニで消費電力を測定 → Bluetoothで Raspberry Pi Zero W に集約してサーバ送信",
        "可視化：Next.js + Chart.js で空き状況と混雑傾向をリアルタイム表示",
      ],
      design: [
        "寮生がいつも通り設備を利用するだけで利用状況を判別できる、学習コストゼロの設計",
        "外部依存ゼロの寮内LAN構成で、セキュリティリスクを低減",
        "IoT-サーバ間はクライアント証明書認証、Nginxで IPフィルタリング ＋ リファラ制限の多層防御",
        "分析機能は「指定／過去1週間／1ヶ月／半年」を重ねて表示し、混雑傾向を直感的に把握",
      ],
      result:
        "高専プロコン全国大会で特別賞を受賞。「実用性を考えた設計」が高く評価された。1年以上の保守運用を継続。",
      learning:
        "実際に使われるプロダクトとして仕様や設計を考え抜いた経験。学生という立場で持続可能なシステムを作る難しさを、卒寮後の保守運用引き継ぎが続かなかった経験から当事者として学んだ。",
      links: [
        // { label: "GitHub", url: "https://github.com/..." },
         { label: "プレゼン映像", url: "https://www.youtube.com/live/jqgV2giFKyw?si=tiOMnJEsO9S3bjM_&t=17958" },
      ],
    },
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Chakra UI",
      "Python",
      "Flask",
      "uWSGI",
      "MySQL",
      "YOLOv8",
      "Nginx",
      "M5Stack CoreS3 / Core2",
      "SwitchBot",
      "Raspberry Pi Zero W",
      "HTTPS / クライアント証明書認証",
    ],
  },
  {
    id: "fest-app",
    tag: "Web",
    title: "学園祭 露店運用アプリ",
    subtitle: "受付・会計・受け渡しをWebで一気通貫に管理",
    desc: "学生6名チームで要件定義からデプロイまで完遂し、学園祭2日間で実運用された注文管理システム。",
    detail: {
      background:
        "学園祭の露店における「受付 → 会計 → 受け渡し」をWebシステム化し、現場が迷わず動ける動線を突き詰めた。学生6名チームで要件定義からインフラ構築・デプロイまで完遂し、2日間で実運用された。",
      role: ["要件定義", "UI/UX デザイン", "フロントエンド実装"],
      method: [
        "受付 → 注文情報をサーバに登録 → 会計 → 受け渡しのステータスをリアルタイムで共有",
        "Next.js (App Router) + Jotai でフロント実装、Go (Echo) + Gorm でAPI実装",
        "JWT認証で店員のスマホからログイン、AWS (ECR / CloudFront) にデプロイ",
      ],
      design: [
        "現場で一切迷わない設計：客が次々と回るため、画面と動線を最小限まで削ぎ落とした",
        "専用機材を持たない運用設計：店員の個人スマホからログインして使えるため、不安定な会場Wi-Fi下でも特定ネットワーク・デバイスに依存しない",
        "学生6名で要件定義／UI・UXデザイン／フロントエンド／バックエンド／インフラ／デプロイまで完遂",
      ],
      result:
        "学園祭2日間で実運用され、注文内容がシステムに記録されることで事後の会計処理が圧倒的に楽になった。",
      learning:
        "飲食バイトでの接客経験が要件定義に活きた。実際の現場で動くアプリを通じて、「使う側の体験」を観察してから設計に落とすことの重要性を実感した。",
      links: [{ label: "GitHub", url: "https://github.com/hirune05/EasyCreateRotenAppWeb" },

      ],
    },
    tech: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Jotai",
      "Go (Echo)",
      "Gorm",
      "REST API",
      "JWT認証",
      "MySQL",
      "AWS (ECR / CloudFront)",
      "Docker",
      "docker-compose",
    ],
  },
  // {
  //   id: "shooting",
  //   tag: "IoT × Hardware",
  //   title: "シューティングギャラリー v5",
  //   subtitle: "実機アーケード型シューティング（マイコン × サーバ × ブラウザ）",
  //   desc: "動く車に取り付けた的を銃で狙う実機アーケード。ESP32-S3マスタを中心に、無線(ESP-NOW)・有線(I2C)で多モジュール接続。",
  //   detail: {
  //     background:
  //       "ESP32-S3 マスタCPUを中心に、銃 (ESP32-C3) はESP-NOWで無線接続、車・的面 (Arduino Nano) はI2Cで有線接続。Webアプリは miniPC 上のGoサーバから配信し、ブラウザ → サーバ → マスタ → 車CPU まで動的にモーション定義を流せる構成。",
  //     method: [
  //       "Phase1 基本：同じ面でたまに回転",
  //       "Phase2 回転：常に回転しながら移動",
  //       "Phase3 早打ち：停止後に的が有効化、1発で無効化",
  //       "Phase4 ボーナス：総合力",
  //     ],
  //     design: [
  //       "「命令と実行の分離」をAPI契約として定義し、各モジュールはゲームのフェーズを知らず、自身のローレベル制御を自律実行",
  //       "無線は最小限・有線は徹底冗長：CRC8 (CRC-8/MAXIM) と packed 構造体でノイズ耐性を確保し、フラットケーブル＋ストレインリリーフで断線を防止",
  //       "v4ではESP32 SoftAPで配信していたWeb UIを、Go製 miniPC サーバへ移設。モーション定義をJSONで編集可能に",
  //       "3点キャリブレーション（左右リミットSW＋中央ホールセンサ）で車位置を絶対座標化し、HOME_CENTERコマンドで確実な中央復帰を実現",
  //     ],
  //     result:
  //       "学園祭で展示し、実機アーケードとして稼働。ブラウザからモーション定義を編集して即時反映できるため、当日の調整も柔軟に対応できた。",
  //     learning:
  //       "信頼性のあるシステムは「無線は最小限・有線は徹底冗長」「命令と実行の分離」といった明確な原則で支えられる、ということを実装を通じて体得した。複数モジュールが連携するシステムでは、各モジュールの責務をAPIで明確に区切ることが品質を担保することを学んだ。",
  //     links: [],
  //   },
  //   tech: [
  //     "Go (net/http / WebSocket)",
  //     "ESP32-S3-DevKitC-1-N8R8",
  //     "Arduino IDE",
  //     "ESP-NOW",
  //     "I2C (CRC8)",
  //     "ESP32-C3 SuperMini",
  //     "Arduino Nano",
  //     "TSAL6100 IR LED",
  //     "TSOP4838",
  //     "L298N",
  //     "28BYJ-48",
  //     "EC11",
  //     "A3144E ホールセンサ",
  //     "WS2812B NeoPixel",
  //   ],
  // },
  {
    id: "magic-wand",
    tag: "Physical × Game",
    title: "Magic Wand｜マジックワンド",
    subtitle: "杖を振ると魔法が発動する、フィジカル × ゲームのプロジェクト",
    desc: "3Dプリント製の杖にESP32と慣性センサを内蔵。Bluetooth経由でUnityに送信し、雷・水・氷・爆発の魔法を演出。",
    detail: {
      background:
        "3Dプリント製の杖の中に慣性センサ（ICM-20602）／ESP32／LED／モバイルバッテリーを内蔵。BluetoothでPC側のUnityに加速度・角速度を送信し、Unityがリアルタイムで杖の動きを判定して魔法エフェクトを画面に演出する。",
      role: [
        "プリント基板の設計",
        "ESP32 ファームウェア実装",
        "Bluetooth 連携実装",
      ],
      method: [
        "杖：ICM-20602 で加速度・角速度を取得 → ESP32 → BluetoothでUnityに送信",
        "Unity：受信した動きパターンを判定 → 雷・水・氷・爆発の魔法エフェクトを再生",
        "LED：接続状態を可視化（赤＝電源／青＝Bluetooth接続／紫＝魔法発動可）",
      ],
      design: [
        "「これ以上小さくするのは不可能」というレベルまで追い込んだ極小プリント基板を自分で設計",
        "モバイルバッテリーが電流ゼロで給電を停止する問題に対し、ループ回路で常時微小電流を流し続ける仕組みで電源供給を維持",
        "LEDの色変更をBluetoothコマンド経由にしたことで、再ビルド不要のカスタマイズ性を確保",
      ],
      result:
        "杖を振ると魔法が発動する体験を実現。効果音出力はESP32のメモリ不足で断念。複雑な動きの判別は加速度のノイズ処理が追いつかず未実装。",
      learning:
        "物理的な制約を考慮した設計",
      links: [],
    },
    tech: ["ESP32", "Bluetooth", "慣性センサ ICM-20602", "自作プリント基板", "Unity (C#)", "3Dプリンタ"],
  },
  {
    id: "led-suit",
    tag: "Performance",
    title: "学園祭ダンス用 LEDスーツ",
    subtitle: "全身に NeoPixel LEDを仕込んだ自作スーツ（2023 / 2025）",
    desc: "全身442個のNeoPixel LEDを29パーツに分割制御するスーツを自作。自分で着て踊った。",
    detail: {
      background:
        "学園祭のダンスステージで使用する自作衣装。マイコン：ESP32 / LED：WS2812B 系 NeoPixel ×442個（2025版）／物理スタートピンで踊り出しのタイミングをトリガー。",
      role: ["ソフトウェア,配線修理,演出設計"],
      method: [
        "ESP32 + NeoPixelBus (RMT 800kbps) でLEDを非ブロッキング送信制御",
        "BasePart を継承した Part / SerialParts でパーツ単位の抽象化",
        "TimeControler クラスで音楽の小節・展開ごとの間隔(ms)を配列で保持し、ダンスの進行に合わせて演出を切り替え",
        "物理スタートピンで踊り出しのタイミングをトリガー",
      ],
      design: [
        "スーツを29パーツに分割し、それぞれ独立に色・パターンを制御できる設計",
        "脚・靴・背中・胸・腕・手首・頭まで全身を網羅",
        "曲のサビで全身が流れる、Aメロで脚だけ点滅、など部位ごとの細かい演出を可能に",
      ],
      result:
        "本番直前まで配線・実装・演出調整が続いたが、なんとか披露できた",
      learning:
        "地道な作業をやり抜く力を身につけた",
      links: [],
    },
    tech: ["ESP32", "NeoPixelBus", "Adafruit_NeoPixel", "Arduino IDE"],
  },
  {
    id: "yoga-site",
    tag: "Web",
    title: "デビプラナヨガ公式サイト",
    subtitle: "母のヨガ教室Webサイト",
    desc: "実際に家族の事業で運用されるWebサイトを目指して、HTML/CSS/JSの基礎から自分で組み上げた。",
    detail: {
      background:
        "石川県・奥能登のヨガ教室「デビプラナヨガ」のサイト。HOME / 講師紹介 / コース内容（ハタヨガ・アシュタンガヨガ・マタニティーヨガ）／料金 / 開催情報 / お問い合わせ で構成。",
      role: ["全工程を個人で担当（要件定義 / デザイン / 実装 / デプロイ）"],
      method: [
        "HTML / CSS (Bootstrap 3.3.6) / バニラ JavaScript で実装",
        "GitHub Pages で配信",
      ],
      design: [
        "母の経歴と人柄が伝わるレイアウト",
        "スマホ閲覧を意識したレスポンシブ対応のハンバーガーメニューを自前で実装",
      ],
      learning:
        "「人に使われるものを作る」感覚を初めて持った作品。またWeb技術に初めて触れた作品。",
      links: [
        { label: "サイトを見る", url: "https://ashulaboratory.github.io/asushidao.github.io/" },
        { label: "Github", url: "https://github.com/ashulaboratory/asushidao.github.io" },
      ],
    },
    tech: ["HTML", "CSS (Bootstrap 3.3.6)", "Google Fonts (kokoro)", "JavaScript (バニラ)", "GitHub Pages"],
  },
  {
    id: "mental-math",
    tag: "Game",
    title: "暗算させられるマシーン",
    subtitle: "プログラミング初学時、初めて「動くものを最後まで作り切った」作品",
    desc: "3モード×4難易度の暗算ゲーム。",
    detail: {
      background:
        "プログラミングを学び始めた初期に Processing で作った暗算ゲーム。3モード（ノーマル／タイムアタック／エンドレス）×4難易度（簡単／普通／難しい／鬼）の組み合わせで遊べる。",
      role: ["全工程を個人で実装"],
      method: [
        "Processing で状態遷移（スタート画面 → モード選択 → 難易度選択 → 出題 → 採点 → 結果表示",
        "問題の生成・採点・タイマー処理を全て自分で実装",
      ],
      design: ["グラフィックは自作の化け物キャラクターと吹き出しで世界観を作り込んだ"],
      result: "ループ・配列・状態管理の基礎をゲームを通して身につけた、最初の完成作品。",
      learning:
        "「動くものを最後まで作り切る」体験を得た最初の作品。今もプログラミングを続けている原点になっている。",
      links: [
        { label: "Github", url: "https://github.com/ashulaboratory/asushidao.github.io" },
      ],
    },
    tech: ["Processing"],
  },
  {
    id: "shishi",
    tag: "Fieldwork",
    title: "ししミエール｜AKATSUKIプロジェクト",
    subtitle: "獅子舞の伝統文化保存・伝承ルートの解析（石川県羽咋市）",
    desc: "羽咋市の獅子舞伝統文化保存プロジェクトとしてAKATSUKIプロジェクトに採択された。",
    detail: {
      background:
        "少子高齢化・災害・コロナ禍の影響で、各地の伝統行事が中止・縮小されている。石川県羽咋市でも獅子舞の伝統文化保存が行政課題となっており、本プロジェクトでは獅子舞のモーションデータ保存と、集落ごとの伝承ルート解析を通じて羽咋市の獅子舞を盛り上げることを目指した。",
      role: ["課題解決方法の模索","フィールドワーク（集落へ訪問・地域ヒアリング）", "モーションデータ収集"],
      method: [
        "実際に集落へ足を運び、地域の方々への対面ヒアリング",
        "獅子舞のモーションキャプチャによるデータ収集",
        "集落間の獅子舞の振りを比較し、伝承ルートを解析",
      ],
      result:
        "AKATSUKIプロジェクトに採択。北國新聞に掲載され、地域文化保存の取り組みとして認知された。",
      learning:
        "リアルな課題に向き合い、最適な解決方法を模索した経験",
      links: [
        { label: "北國新聞 掲載記事", url: "https://www.hokkoku.co.jp/articles/-/2050579" },
      ],
    },
    tech: ["python"],
  },
];
