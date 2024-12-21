"use client";

import { Tabs } from "@nextui-org/tabs";
import React from "react";

const TabsDetails = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="mx-auto mt-10 w-[95%] lg:w-[85%]">
      <div className="flex w-full flex-col gap-y-5">
        <Tabs aria-label="Options">{children}</Tabs>
      </div>
    </section>
  );
};

export default TabsDetails;
