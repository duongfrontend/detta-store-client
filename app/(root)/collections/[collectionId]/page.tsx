import Categorys from "@/components/Category";
import Collections from "@/components/Collections";
import ProductCard from "@/components/ProductCard";
import { getCollectionDetails } from "@/lib/actions/actions";
import Image from "next/image";
import React from "react";

const CollectionDetails = async ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const collectionDetails = await getCollectionDetails(params.collectionId);

  console.log(collectionDetails);

  return (
    <>
      <div className="flex justify-center items-start max-[1466px]:flex-col">
        <div className="sticky top-0 left-0 flex-1 h-[100vh] max-[1466px]:hidden">
          <Collections />
        </div>
        <div
          style={{ borderBottom: "1px solid rgb(149 149 149)" }}
          className="flex-1 py-8 px-5 min-[1466px]:hidden">
          <Collections />
        </div>
        <div className="px-10 py-5 flex flex-col items-center gap-8 flex-[4] justify-center w-full">
          {/* <Image
            src={collectionDetails.image}
            width={1500}
            height={1000}
            alt="collection"
            className="w-full h-[400px] object-cover rounded-xl"
          /> */}
          <p className="text-grey-2 text-[12px] ">
            Danh mục:
            <span className="text-heading3-bold text-grey-2 ml-[10px]">
              {collectionDetails.title}
            </span>
          </p>
          {/* <p className="text-body-normal text-grey-2 text-center max-w-[900px]">
            {collectionDetails.description}
          </p> */}

          {collectionDetails.products.length === 0 ? (
            <p className="text-body-bold">Không Có Sản Phẩm Nào</p>
          ) : (
            <div className="flex flex-wrap gap-10 justify-center">
              {collectionDetails.products.map((product: ProductType) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CollectionDetails;

export const dynamic = "force-dynamic";
