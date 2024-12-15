import DetailDescription from "@/components/layout/detail/DetailDescription";
import HeroSection from "@/components/layout/HomeSection/HeroSection";
import HeroSkeleton from "@/components/skeleton/HeroSkeleton";
import TabsDetails from "@/components/ui/TabsDetails";
import { ICredits } from "@/types/credits";
import { IMediaDetail } from "@/types/mediaDetail";
import { IReviews } from "@/types/reviews";
import { IWatch } from "@/types/watch";
import { fetchFromAPI } from "@/utils/fetchApi";
import { Metadata } from "next";
import { Suspense } from "react";

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
    title: `${results.title || results.name} - Movies App`,
  };
}

export default async function Detail({
  params,
}: {
  params: Promise<{ id: string; mediatype: string }>;
}) {
  const { mediatype, id } = await params;

  const [detail, credits, watch, reviews] = await Promise.all([
    fetchFromAPI<IMediaDetail>(`${mediatype}/${id}`),
    fetchFromAPI<ICredits>(`${mediatype}/${id}/credits`),
    fetchFromAPI<IWatch>(`${mediatype}/${id}/watch/providers`),
    fetchFromAPI<IReviews>(`${mediatype}/${id}/reviews`),
  ]);

  return (
    <main>
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection id={id} data={detail} />
      </Suspense>
      <DetailDescription data={detail as IMediaDetail} />
      <TabsDetails
        credits={credits?.cast}
        watch={watch?.results.US}
        reviews={reviews?.results}
      />
    </main>
  );
}
