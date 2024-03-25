import { getCollections } from "@/lib/actions/actions";
import { GalleryVerticalEnd } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Collections = async () => {
  const collections = await getCollections();
  // console.log(collections);

  return (
    <div className="flex flex-col gap-10 py-8 px-5 w-[100%] max-[554px]:px-[0] max-[554px]:w-[100%] ">
      <p className="text-[25px] font-bold max-[554px]:pl-[12px]">Danh Mục</p>
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold">Không Có Dữ Liệu</p>
      ) : (
        <>
          <div className="flex flex-wrap flex-col items-start justify-center gap-8 pl-[20px] max-[1466px]:grid max-[1466px]:grid-cols-6 max-[664px]:grid-cols-2">
            {collections.map((collection: CollectionType) => (
              <div className="pb-[10px] pl-[30px] w-[80%] max-[1466px]:p-0 max-[1466px]:w-[100%]">
                <Link
                  href={`/collections/${collection._id}`}
                  key={collection._id}
                  className="flex  justify-start items-center h-[30px] max-[1466px]:flex-col max-[664px]:flex-row">
                  <Image
                    key={collection._id}
                    src={collection.image}
                    alt={collection.title}
                    width={50}
                    height={0}
                    className="rounded-lg cursor-pointer object-contain h-[100%] "
                  />
                  <p className="p-[8px] pl-[3px] max-[664px]:text-[12px]">
                    {collection.title}
                  </p>
                </Link>
              </div>
            ))}
          </div>
          <button className=" flex justify-center items-center w-[60%] pb-[10px] pl-[30px] gap-4 max-[1466px]:w-full max-[1466px]:p-[0] max-[1466px]:pt-[5%]  max-[1466px]:justify-center max-[1466px]:items-center">
            <GalleryVerticalEnd />
            <a
              className="flex  justify-start items-center h-[30px]"
              href="/products">
              Tất cả
            </a>
          </button>
        </>
      )}
    </div>
  );
};

export default Collections;
