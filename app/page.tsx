import AllTrending from "@/components/layout/HomeSection/AllTrending";
import HeroMovies from "@/components/layout/HomeSection/HeroMovies";
import HeroSection from "@/components/layout/HomeSection/HeroSection";
import HeroTv from "@/components/layout/HomeSection/HeroTv";
import TrendingMovies from "@/components/layout/HomeSection/TrendingMovies";
import TrendingTv from "@/components/layout/HomeSection/TrendingTv";
import HeroSkeleton from "@/components/skeleton/HeroSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="mx-auto w-[95%] lg:w-[98%]">
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
