import AllTrending from "@/components/layout/Home-section/AllTrending";
import HeroMovies from "@/components/layout/Home-section/HeroMovies";
import HeroSection from "@/components/layout/Home-section/HeroSection";
import HeroTv from "@/components/layout/Home-section/HeroTv";
import TrendingMovies from "@/components/layout/Home-section/TrendingMovies";
import TrendingTv from "@/components/layout/Home-section/TrendingTv";
import HeroSkeleton from "@/components/skeleton/HeroSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="mx-auto w-full px-2 lg:px-5">
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection />
      </Suspense>
      <AllTrending />
      <TrendingMovies />
      <HeroMovies />
      <TrendingTv />
      <HeroTv />
    </main>
  );
}
