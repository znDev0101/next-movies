import DetailDescription from "@/components/layout/detail/DetailDescription";
import TabsDetailMedia from "@/components/layout/detail/TabsDetailMedia";
import HeroSection from "@/components/layout/Home-section/HeroSection";

import { ICredits } from "@/types/credits";
import { IMediaDetail } from "@/types/mediaDetail";
import { IRecommendations } from "@/types/recommendations";
import { IReviews } from "@/types/reviews";
import { ISimilar } from "@/types/similar";
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
  const results = await fetchFromAPI<IMediaDetail>(
    `${mediatype}/${id}?api_key=${process.env.API_KEY}`,
  );

  return {
    title: `${results?.title || results?.name} - Movies App`,
  };
}

export default async function Detail({
  params,
}: {
  params: Promise<{ id: string; mediatype: string }>;
}) {
  const { mediatype, id } = await params;

  const [detail, credits, watch, reviews, recommendations, similar] =
    await Promise.all([
      fetchFromAPI<IMediaDetail>(
        `${mediatype}/${id}?api_key=${process.env.API_KEY}`,
      ),
      fetchFromAPI<ICredits>(
        `${mediatype}/${id}/credits?api_key=${process.env.API_KEY}`,
      ),
      fetchFromAPI<IWatch>(
        `${mediatype}/${id}/watch/providers?api_key=${process.env.API_KEY}`,
      ),
      fetchFromAPI<IReviews>(
        `${mediatype}/${id}/reviews?api_key=${process.env.API_KEY}`,
      ),
      fetchFromAPI<IRecommendations>(
        `${mediatype}/${id}/recommendations?api_key=${process.env.API_KEY}`,
      ),
      fetchFromAPI<ISimilar>(
        `${mediatype}/${id}/similar?api_key=${process.env.API_KEY}`,
      ),
    ]);

  return (
    <main>
      <Suspense fallback={<HeroSection />}>
        <HeroSection id={id} data={detail} />
      </Suspense>
      <DetailDescription data={detail as IMediaDetail} />
      <TabsDetailMedia
        credits={credits?.cast}
        watch={watch?.results?.US}
        reviews={reviews?.results}
        recommendations={recommendations?.results}
        similar={similar?.results}
      />
    </main>
  );
}
