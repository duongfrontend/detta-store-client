import ProductCard from "@/components/ProductCard";
import { getCategoryHot } from "@/lib/actions/actions";

const CategoryHot = async () => {
  const categoryHot = await getCategoryHot();
  console.log(categoryHot);

  return (
    <div className="flex flex-col gap-10 py-8 px-5 w-[100%] max-[554px]:px-[0] max-[554px]:w-[100vw]">
      <div>
        <p className="text-[35px] font-bold max-[554px]:pl-[12px]">
          Sản Phẩm Hot
        </p>
      </div>
      {!categoryHot ? (
        <p className="text-body-bold">Không có dữ liệu</p>
      ) : (
        <div className="flex justify-center items-center gap-16 max-[554px]:grid max-[554px]:grid-cols-2 max-[554px]:gap-0 ">
          {categoryHot.products?.map((productHot: ProductType) => (
            <>
              <div className="max-[554px]:flex max-[554px]:justify-center max-[554px]:items-center">
                <ProductCard key={productHot._id} product={productHot} />
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryHot;
