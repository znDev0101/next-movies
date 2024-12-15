import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export default function useSearch(auto: boolean = true) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const [page, setPage] = useState<string>("");
  const [term, setTerm] = useState("");
  const [value] = useDebounce(term, 500);

  function handleSearch(value: string): void {
    if (value !== "") {
      router.push(`/search?query=${value}`);
    }

    if (!page && pathname === "/search") {
      router.replace("/", {
        scroll: true,
      });
    }

    if (page && pathname !== page) {
      router.replace(page, {
        scroll: true,
      });
    }
  }

  useEffect(() => {
    if (pathname !== "/search") {
      setPage(pathname);
    }
    if (!query) {
      setTerm("");
    }
  }, [pathname, query]);

  useEffect(() => {
    if (auto) {
      handleSearch(value);
    }
  }, [value, auto]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setTerm(event.target.value);
  }

  function clearSearchQuery(): void {
    setTerm("");
  }

  return { term, handleChange, clearSearchQuery };
}
