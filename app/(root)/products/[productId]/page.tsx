import Gallery from "@/components/Gallery";
import ProductCard from "@/components/ProductCard";
import ProductInfo from "@/components/ProductInfo";
import { getProductDetails, getRelatedProducts } from "@/lib/actions/actions";

const ProductDetails = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const productDetails = await getProductDetails(params.productId);
  const relatedProducts = await getRelatedProducts(params.productId);

  console.log(productDetails);

  return (
    <>
      <div className="flex justify-around mt-[2%] max-[1366px]:flex-col">
        <div className="w-[1000px] max-[1366px]:w-[100%]" style={{ flex: "4" }}>
          <div className="flex justify-center items-start gap-16 py-10 px-5 max-md:flex-col max-md:items-center ">
            <Gallery productMedia={productDetails.media} />
            <ProductInfo productInfo={productDetails} />
          </div>
          <div className="flex flex-col gap-2 py-5 px-[1.5rem] max-[1366px]:hidden">
            <p className="text-base-medium text-neutral-800 text-[18px] font-bold">
              Mô tả sản phẩm :
            </p>
            <p className="text-small-medium leading-[2.5] text-[18px] pl-[10px] text-neutral-600 text-justify">
              {productDetails.description}
            </p>
          </div>
        </div>

        <div
          className="flex flex-col items-center px-10 py-5 max-[1024px]:px-3"
          style={{ flex: "1", height: "80vh" }}>
          <p className="text-heading3-bold">Sản Phẩm Liên Quan</p>
          <div
            // style={{ borderLeft: "1px solid #cccccc", overflowY: "auto" }}
            className="flex flex-wrap justify-center items-center gap-16 mx-auto mt-8 h-[650px] overflow-auto">
            {relatedProducts?.map((product: ProductType) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const dynamic = "force-dynamic";

export default ProductDetails;
