import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";

const ProductList = async () => {
  const products = await getProducts();

  return (
    <div className="flex flex-col gap-10 py-8 px-5 w-[100%] max-[554px]:px-[0] max-[554px]:w-[100vw]">
      <p className="text-[25px] font-bold max-[554px]:pl-[12px]">
        Tất cả sản phẩm
      </p>
      {!products || products.length === 0 ? (
        <p className="text-body-bold">Không có dữ liệu</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-16 max-[554px]: max-[554px]:flex max-[554px]:">
          {products.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
