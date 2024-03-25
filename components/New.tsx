import { datas } from "@/datas";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const New = () => {
  return (
    <div className="flex justify-center items-center gap-16 mt-[50px] w-[1600px] mx-[auto] mt-[3%] max-[1366px]:flex-col max-[1366px]:w-full max-[1366px]:gap-0">
      {datas.map((item) => (
        <div key={item.id}>
          <Link href={item.link}>
            <Image
              className="rounded-[10px] animation-img"
              src={item.image}
              alt={""}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default New;
