import CardSearch from "@/components/ui/CardSearch";
import ListPagination from "@/components/ui/ListPagination";
import { IAllList } from "@/types/allList";
import { fetchFromAPI } from "@/utils/fetchApi";
import { Suspense } from "react";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

interface ISearchQuery {
  page: number;
  resulst: IAllList;
  total_pages: number;
  total_results: number;
}

export default async function PageSearch(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;

  const { query } = searchParams;

  const data = await fetchFromAPI<ISearchQuery>(
    `search/multi?query=${query}&api_key=${process.env.API_KEY}`,
  );

  return (
    <main className="w-full px-2 lg:px-5">
      <Suspense>
        <CardSearch />
        {data?.total_pages !== 1 && (
          <ListPagination totalPage={data?.total_pages} />
        )}
      </Suspense>
    </main>
  );
}
