import CardSearch from "@/components/ui/CardSearch";
import ListPagination from "@/components/ui/ListPagination";
import { Suspense } from "react";

export default function PageSearch() {
  return (
    <main>
      <Suspense>
        <CardSearch />
        <ListPagination />
      </Suspense>
    </main>
  );
}
