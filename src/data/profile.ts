export type Project = {
    slug: string;
    title: string;
    description: string;
    tech?: string[];
    highlights?: string[];
    links?: { demo?: string; github?: string };
};

export type SkillGroup = { group: string; items: string[] };
export type Profile = {
  name: string;
  roles: string[];
  summary: string;
  about: string;
  email: string;
  links: { github?: string; resume?: string; portfolio?: string };
  skills: SkillGroup[];
  projects: Project[];
};

export const projects: Project[] = [
  {
    slug: "kakeibo",
    title: "家計簿アプリ（FinTech実践）",
    description: "収支の可視化、カテゴリ別集計、口座残高の擬似連携。セキュリティとAPI設計を重視。",
    tech: ["Java (Spring Boot)", "AWS RDS", "React"],
    highlights: ["REST API 設計", "JWT 認証", "RDS 正規化/インデックス"],
    links: { demo: "https://example.com/kakeibo", github: "https://github.com/yourname/kakeibo" },
  },
  {
    slug: "mini-ec",
    title: "ミニECサイト",
    description: "カート・注文・決済(テスト)までの一連を実装。Azure上で動作させる構成。",
    tech: ["PHP (Laravel)", "Azure App Service", "Azure SQL", "Stripe"],
    highlights: ["バリデーション/認可", "決済連携", "簡易CI/CD"],
    links: { demo: "https://example.com/miniec", github: "https://github.com/yourname/miniec" },
  },
];

const profile: Profile = {
  name: "江頭 範子 (Noriko Egashira)",
  roles: ["フルスタックエンジニア志望", "金融×クラウド", "TypeScript / Java / PHP"],
  summary:
    "楽天銀行での審査・モニタリング・KPI報告の実務経験を経て、フルスタック開発とクラウド（AWS/Azure）を学習中。正確性とリスク感度を活かし、FinTech領域で価値を出すエンジニアを目指しています。",
  about:
    "新卒で楽天銀行に入社し、口座開設・海外送金の審査、不正取引モニタリング、KPI報告に従事。現在はフルスタック開発（React/Next.js、FastAPI、Node.js）とともに、Java(Spring)・PHP(Laravel)、AWS/Azureのモダン開発を実践。「安全で使いやすい金融体験」を実装で届けることを目標としています。",
  email: "norikoegashira1@gmail.com",
  links: {
    github: "https://github.com/egashira0919",
    resume: "https://example.com/resume.pdf",
    portfolio: "https://example.com/",
  },
  skills: [
    { group: "フロントエンド", items: ["TypeScript", "React / Next.js", "Tailwind CSS", "UI/UX"] },
    { group: "バックエンド", items: ["Node.js (Express)", "Java (Spring Boot)", "PHP (Laravel)", "FastAPI", "Prisma / SQL"] },
    { group: "クラウド・開発", items: ["AWS (EC2/RDS/S3/Lambda)", "Azure (App Service/Functions/SQL/Blob)", "Docker / Compose", "GitHub Actions", ".env 管理"] },
  ],
  projects,
};

export default profile;