import Categorys from "@/components/Category";
import CategoryHot from "@/components/CategoryHot";
import Image from "next/image";
import Banner from "@/components/Banner";
import New from "@/components/New";
import Outfilt from "@/components/Outfilt";
import NewLaster from "@/components/NewLaster";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <New />

      <div
        className="flex flex-col items-center justify-center w-[80%]"
        style={{ margin: "0 auto" }}>
        <Categorys />
      </div>
      <div className="flex justify-center items-center">
        <Image src="/4.webp" alt="" width={1600} height={0} />
      </div>
      <div
        className="flex flex-col items-center justify-center w-[80%]"
        style={{ margin: "0 auto" }}>
        <CategoryHot />
        <Outfilt />
      </div>
      <NewLaster />
    </>
  );
}

export const dynamic = "force-dynamic";
