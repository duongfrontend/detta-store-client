import Categorys from "@/components/Category";
import CategoryHot from "@/components/CategoryHot";
import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import { getCollectionDetails } from "@/lib/actions/actions";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src="/banner.png"
        alt="banner"
        width={2000}
        height={1000}
        className="w-screen"
      />
      <div
        className="flex flex-col items-center justify-center w-[80%]"
        style={{ margin: "0 auto" }}>
        {/* <Collections /> */}

        <Categorys />
        <CategoryHot />

        {/* <ProductList /> */}
      </div>
    </>
  );
}

export const dynamic = "force-dynamic";
