import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export default function useSearch(auto: boolean = true) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const [term, setTerm] = useState<string>("");
  const [value] = useDebounce<string>(term, 650);

  function handleSearch(value: string): void {
    if (value !== "") {
      router.push(`/search?query=${value}`);
    }
    if (value === "" && pathname === "/search") {
      router.push("/");
    }
  }

  useEffect(() => {
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
