import ProductCard from "@/components/ProductCard";
import { getCategory } from "@/lib/actions/actions";

const Categorys = async () => {
  const category = await getCategory();
  console.log(category);

  return (
    <div className="flex flex-col gap-10 py-8 px-5 w-[100%] max-[554px]:px-[0] max-[554px]:w-[100vw]">
      <div>
        <p className="text-[35px] font-bold max-[554px]:pl-[12px]">
          Sản Phẩm Nổi Bật
        </p>
      </div>
      {!category ? (
        <p className="text-body-bold">Không có dữ liệu</p>
      ) : (
        <div className="flex justify-center items-center gap-16 max-[554px]:grid max-[554px]:grid-cols-2 max-[554px]:gap-0">
          {category.products?.map((product: ProductType) => (
            <>
              <div className="max-[554px]:flex max-[554px]:justify-center max-[554px]:items-center">
                <ProductCard key={product._id} product={product} />
              </div>
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
