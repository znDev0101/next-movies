import DescriptionMovie from "@/components/layout/detail/DescriptionMovie";
import HeroSection from "@/components/layout/HomeSection/HeroSection";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string; mediatype: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { mediatype, id } = await params;

  // fetch data
  const data = await fetch(
    `https://api.themoviedb.org/3/${mediatype}/${id}?api_key=${process.env.API_KEY}`,
  ).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${data.original_title || data.original_name} - Movies App`,
    // openGraph: {
    //   images: ["/some-specific-page-image.jpg", ...previousImages],
    // },
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
      <HeroSection data={results} id={id} />
      <DescriptionMovie data={results} />
    </main>
  );
}
