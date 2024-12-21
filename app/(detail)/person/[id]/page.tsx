import DetailPerson from "@/components/layout/detail-person/DetailPerson";
import HeroSection from "@/components/layout/Home-section/HeroSection";
import { IDetailPerson } from "@/types/detailperson";
import { IBackdropImagePerson } from "@/types/backdropimageperson";
import { fetchFromAPI } from "@/utils/fetchApi";
import { Metadata } from "next";
import TabsDetailPerson from "@/components/layout/detail-person/TabsDetailPerson";
import { IExternalIdPerson } from "@/types/externalidperson";

type Props = {
  params: Promise<{ mediatype: string; id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { id } = await params;

  // fetch data
  const results = await fetchFromAPI<IDetailPerson>(`person/${id}`);

  return {
    title: `${results?.name} - Movies App`,
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [heroImage, detailPerson, exteranlIdPerson, imagesPerson] =
    await Promise.all([
      fetchFromAPI<IBackdropImagePerson>(`person/${id}/combined_credits`),
      fetchFromAPI<IDetailPerson>(`person/${id}`),
      fetchFromAPI<IExternalIdPerson>(`person/${id}/external_ids`),
      fetchFromAPI<Record<string, any>>(`person/${id}/images`),
    ]);

  return (
    <main>
      <HeroSection id={id} data={heroImage} />
      <DetailPerson
        detailPersonData={detailPerson}
        externalIdPersonData={exteranlIdPerson}
      />
      <TabsDetailPerson
        knownForData={heroImage?.cast}
        imagesPersonData={imagesPerson?.profiles}
      />
    </main>
  );
}
