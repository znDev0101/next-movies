import { IDetailPerson } from "@/types/detailperson";
import { IExternalIdPerson } from "@/types/externalidperson";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaImdb, FaInstagram } from "react-icons/fa6";

const DetailPerson = ({
  detailPersonData,
  externalIdPersonData,
}: {
  detailPersonData: IDetailPerson | undefined;
  externalIdPersonData: IExternalIdPerson | undefined;
}) => {
  const convertFormatDate = new Date(detailPersonData?.birthday as string);

  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    convertFormatDate,
  );

  return (
    <section className="mx-auto mt-20 w-[96%] lg:my-24 lg:max-w-7xl">
      <div className="flex flex-col lg:flex-row lg:gap-x-16">
        <div className="relative h-[70vh] w-full flex-shrink-0 justify-self-center overflow-hidden rounded-lg border dark:border-gray-500 lg:h-[30rem] lg:w-96">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMG_PATH}/original/${detailPersonData?.profile_path}`}
            alt="profile img"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="mt-10">
          <div className="flex flex-col gap-x-5 gap-y-3">
            <h1 className="text-4xl font-semibold">{detailPersonData?.name}</h1>

            <div className="flex gap-x-4">
              {externalIdPersonData?.instagram_id !== null && (
                <Link
                  href={`https://www.instagram.com/${externalIdPersonData?.instagram_id}`}
                  target="_blank"
                  className="flex flex-col items-center"
                >
                  <FaInstagram className="text-2xl" />
                </Link>
              )}
              {externalIdPersonData?.facebook_id !== null && (
                <Link
                  href={`https://www.facebook.com/${externalIdPersonData?.facebook_id}`}
                  target="_blank"
                  className="flex flex-col items-center"
                >
                  <FaFacebook className="text-2xl" />
                </Link>
              )}
              <Link
                href={`https://www.imdb.com/name/${externalIdPersonData?.imdb_id}/`}
                target="_blank"
                className="flex flex-col items-center"
              >
                <FaImdb className="text-2xl" />
              </Link>
            </div>
          </div>
          <div className="my-5 flex gap-x-3">
            <h5>{formattedDate}</h5>
            <span>-</span>
            <h5>{detailPersonData?.place_of_birth}</h5>
          </div>
          <p className="mt-5">{detailPersonData?.biography}</p>
        </div>
      </div>
    </section>
  );
};

export default DetailPerson;
