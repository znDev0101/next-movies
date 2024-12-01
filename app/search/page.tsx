import CardSearch from "@/components/ui/CardSearch";
import { Suspense } from "react";

export default function PageSearch() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CardSearch />
    </Suspense>
  );
}
