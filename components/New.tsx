import Image from "next/image";
import Link from "next/link";
import React from "react";

const New = () => {
  return (
    <div className="flex justify-center items-center gap-16 mt-[50px] w-[1600px] mx-[auto] mt-[3%] max-[1366px]:flex-col max-[1366px]:w-full max-[1366px]:gap-0">
      <div>
        <Link
          href={`${process.env.NEXT_URL_NEW}/collections/65faa6dc1782038590df0e52`}>
          <Image
            className="rounded-[10px] animation-img"
            src="/2.webp"
            alt={""}
          />
        </Link>
      </div>
      <div>
        <Link
          href={`${process.env.NEXT_URL_NEW}/collections/65faa6581782038590df0e4d`}>
          <Image
            className="rounded-[10px] animation-img"
            src="/3.webp"
            alt={""}
          />
        </Link>
      </div>
      <div>
        <Link
          href={`${process.env.NEXT_URL_NEW}/collections/65faa6f51782038590df0e58`}>
          <Image
            className="rounded-[10px] animation-img"
            src="/1.jpg"
            alt={""}
          />
        </Link>
      </div>
    </div>
  );
};

export default New;
