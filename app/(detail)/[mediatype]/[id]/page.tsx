import DetailDescription from "@/components/layout/detail/DetailDescription";
import HeroSection from "@/components/layout/HomeSection/HeroSection";
import TabsDetails from "@/components/ui/TabsDetails";
import { Metadata } from "next";

type Props = {
  params: Promise<{ mediatype: string; id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { mediatype, id } = await params;

  // fetch data
  const results = await fetch(
    `https://api.themoviedb.org/3/${mediatype}/${id}?api_key=${process.env.API_KEY}`,
  ).then((res) => res.json());

  return {
    title: results.title,
  };
}

export default async function Detail({
  params,
}: {
  params: Promise<{ id: string; mediatype: string }>;
}) {
  const { mediatype, id } = await params;

  const response = await fetch(
    `https://api.themoviedb.org/3/${mediatype}/${id}?api_key=${process.env.API_KEY}`,
  );

  const results = await response.json();

  return (
    <main>
      <HeroSection id={id} data={results} />
      <DetailDescription data={results} />
      <TabsDetails mediatype={mediatype} id={id} />
    </main>
  );
}
