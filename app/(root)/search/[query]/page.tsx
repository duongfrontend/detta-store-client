import ProductCard from "@/components/ProductCard";
import { getSearchedProducts } from "@/lib/actions/actions";

const SearchPage = async ({ params }: { params: { query: string } }) => {
  const searchedProducts = await getSearchedProducts(params.query);

  const decodedQuery = decodeURIComponent(params.query);

  return (
    <div className="px-10 py-5">
      <p className="text-heading3-bold my-10 text-orange-600">
        Tìm Kiếm Kết Quả Cho Từ Khóa{" "}
        <span className="text-[#333333]">"{decodedQuery}"</span>
      </p>
      {!searchedProducts ||
        (searchedProducts.length === 0 && (
          <p className="text-body-bold my-5">Không có kết quả</p>
        ))}
      <div className="flex flex-wrap gap-16">
        {searchedProducts?.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default SearchPage;
