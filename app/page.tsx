import HeroMovies from "@/components/layout/HomeSection/HeroMovies";
import HeroTv from "@/components/layout/HomeSection/HeroTv";

export default function Home() {
  return (
    <main className="mx-auto w-[95%] lg:w-[98%]">
      {/* <HeroSection /> */}
      {/* <TrendingMovies /> */}
      <HeroMovies />
      {/* <TrendingTv /> */}
      <HeroTv />
    </main>
  );
}
