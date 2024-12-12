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
    title: `${results.title || results.name} - Movies App`,
  };
}

async function getDetail(mediatype: string, id: string) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/${mediatype}/${id}?api_key=${process.env.API_KEY}`,
    );

    if (response.ok) {
      console.log("Promise resolved and HTTP status is successful");
      return response.json();
    } else {
      // Custom message for failed HTTP codes
      if (response.status === 404) throw new Error("404, Not found");
      if (response.status === 500)
        throw new Error("500, internal server error");
    }
  } catch (error) {
    console.error("Fetch", error);
  }
}

async function getCredits(mediatype: string, id: string) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/${mediatype}/${id}/credits?api_key=${process.env.API_KEY}`,
    );
    if (response.ok) {
      console.log("Promise resolved and HTTP status is successful");
      return response.json();
    }
  } catch (error) {
    console.error("Fetch", error);
  }
}

async function getWatch(mediatype: string, id: string) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/${mediatype}/${id}/watch/providers?api_key=${process.env.API_KEY}`,
    );
    if (response.ok) {
      console.log("Promise resolved and HTTP status is successful");
      return response.json();
    }
  } catch (error) {
    console.error("Fetch", error);
  }
}

export default async function Detail({
  params,
}: {
  params: Promise<{ id: string; mediatype: string }>;
}) {
  const { mediatype, id } = await params;
  const detailData = await getDetail(mediatype, id);
  const creditsData = await getCredits(mediatype, id);
  const watchData = await getWatch(mediatype, id);

  const [detail, { cast }, { results }] = await Promise.all([
    detailData,
    creditsData,
    watchData,
  ]);

  return (
    <main>
      <HeroSection id={id} data={detail} />
      <DetailDescription data={detail} />
      <TabsDetails credits={cast} watch={results.US} />
    </main>
  );
}
