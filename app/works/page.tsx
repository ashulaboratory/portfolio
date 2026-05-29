import { PageHeader } from "@/components/SectionTitle";
import WorksSection from "@/components/WorksSection";

export const metadata = {
  title: "Works | Ashisu Murakami",
};

export default function WorksPage() {
  return (
    <>
      <PageHeader
        title="Works"
        sub="Projects 8 / Research 1 / Internships 2. カードをクリックすると詳細が開きます。"
      />
      <section className="mx-auto max-w-[1100px] px-10 pt-8 pb-20 max-md:px-5 max-md:pb-16">
        <WorksSection />
      </section>
    </>
  );
}
