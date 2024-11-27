import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
import React, { Suspense, useCallback, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiTrendingUp } from "react-icons/fi";
import CardSearchTrending from "./CardSearchTrending";
import useDebounce from "@/hooks/useDebounce";

interface ModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

const ModalSearchTrending = ({ isOpen, onOpenChange }: ModalProps) => {
  const [dataTreding, setDataTreding] = useState([]);
  //   const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [debouncedValue] = useDebounce(searchKeyword, 500);

  const fetchResults = useCallback(
    async (searchKeyword: string | (() => void)): Promise<void> => {
      if (searchKeyword.length !== 0) {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${searchKeyword}&api_key=${process.env.API_KEY}`,
        );
        const data = await response.json();
        setDataTreding(data.results);
      }

      if (searchKeyword.length === 0) {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`,
        );
        const data = await response.json();
        setDataTreding(data.results);
      }
    },
    [],
  );

  useEffect(() => {
    fetchResults(debouncedValue);
    return () => {
      // cancelDebounce();
    };
  }, [debouncedValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <Modal
      backdrop="opaque"
      size="3xl"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      classNames={{
        base: "h-[90dvh] lg:h-[90dvh] dark:bg-[#3C3D37]",
        body: "px-2 lg:px-5 pt-5",
        closeButton: "right-1 top-1 lg:right-3 lg:top-3 text-3xl lg:text-4xl",
        backdrop:
          "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
      }}
    >
      <ModalContent>
        <>
          <ModalHeader className="mx-2 mt-16 flex items-center gap-x-2 rounded-full border-3 border-gray-400 px-3 py-1 lg:mx-7 lg:mt-20">
            <CiSearch className="text-2xl lg:text-4xl" />
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => handleChange(e)}
              className="h-full w-full bg-transparent text-medium text-black placeholder:text-medium placeholder:text-gray-500 focus:outline-none dark:text-white dark:placeholder:text-gray-200 lg:text-xl"
              placeholder="Search for a movies,tv shows, trending..."
            />
          </ModalHeader>
          <ModalBody>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex w-max items-center gap-x-2 rounded-full bg-gray-200 px-4 py-1 text-xl lg:gap-x-4">
                <FiTrendingUp className="text-medium text-black" />
                <h1 className="text-medium font-bold text-black">Trending</h1>
              </div>
              <div className="rounded-full bg-gray-200 px-2 py-1 duration-200 hover:cursor-pointer hover:bg-gray-400">
                <span className="font-semibold text-black">More..</span>
              </div>
            </div>
            <div className="grid lg:grid-cols-2">
              {dataTreding?.slice(0, 6).map((data, i: number) => {
                return (
                  <Suspense fallback={<p>Loading...</p>} key={i}>
                    <CardSearchTrending data={data} />
                  </Suspense>
                );
              })}
            </div>
          </ModalBody>
        </>
      </ModalContent>
    </Modal>
  );
};

export default ModalSearchTrending;
