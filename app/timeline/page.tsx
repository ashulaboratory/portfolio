import { PageHeader } from "@/components/SectionTitle";
import LifeTimeline from "@/components/LifeTimeline";

export const metadata = {
  title: "Timeline | Ashisu Murakami",
};

export default function TimelinePage() {
  return (
    <>
      <PageHeader title="Timeline" sub="生まれてから今までの歩み。" />
      <section className="mx-auto max-w-[1100px] px-10 pt-12 pb-32 max-md:px-5 max-md:pb-20">
        <LifeTimeline />
      </section>
    </>
  );
}
