import ProductCard from "@/components/ProductCard";
import { getCategoryHot } from "@/lib/actions/actions";
import Titles from "./Titles";

const CategoryHot = async () => {
  const categoryHot = await getCategoryHot();
  console.log(categoryHot);

  return (
    <div className="flex flex-col gap-10 py-8 px-5 w-[100%] max-[554px]:px-[0] max-[554px]:w-[100vw]">
      <Titles> Sản Phẩm Hot </Titles>
      {!categoryHot ? (
        <p className="text-body-bold">Không có dữ liệu</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-10 max-[554px]: max-[554px]:flex max-[554px]:height-[max-content] max-[1023px]:grid max-[1023px]:grid-cols-2">
          {categoryHot.products?.map((productHot: ProductType) => (
            <>
              <ProductCard key={productHot._id} product={productHot} />
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryHot;
