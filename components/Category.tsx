import ProductCard from "@/components/ProductCard";
import { getCategory } from "@/lib/actions/actions";
import Titles from "./Titles";

const Categorys = async () => {
  const category = await getCategory();
  console.log(category);

  return (
    <div className="flex flex-col gap-10 py-8 px-5 w-[100%] max-[554px]:px-[0] max-[554px]:w-[100vw]">
      <Titles> Sản Phẩm Nổi Bật </Titles>
      {!category ? (
        <p className="text-body-bold">Không có dữ liệu</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-10 max-[554px]: max-[554px]:flex max-[554px]: max-[1023px]:grid max-[1023px]:grid-cols-2">
          {category.products?.map((product: ProductType) => (
            <>
              <ProductCard key={product._id} product={product} />
            </>
          ))}
        </div>
      )}
    </div>
    // <div className="flex flex-col gap-10 py-8 px-5 w-[100%] max-[554px]:px-[0] max-[554px]:w-[100vw]">
    //   <p
    //     key={collections._id}
    //     className="text-[35px] font-bold max-[554px]:pl-[12px]">
    //     {collections.description}
    //   </p>
    //   <p>test</p>
    //   {!collections || collections.length === 0 ? (
    //     <p className="text-body-bold">Không Có Dữ Liệu</p>
    //   ) : (
    //     <div className="flex flex-wrap gap-16 justify-center">
    //       {collections.products?.map((product: ProductType) => (
    //         <div key={product._id}>{product.title}</div>
    //         // <ProductCard key={product._id} product={product} />
    //       ))}
    //     </div>
    //   )}
    // </div>
    // </div>
  );
};

export default Categorys;
