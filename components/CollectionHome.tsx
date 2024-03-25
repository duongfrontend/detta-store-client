import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";

const CollectionHome = async () => {
  const collections = await getCollections();
  // console.log(collections);

  return (
    <div className="flex flex-col gap-10 py-8 px-5 w-[100%] max-[554px]:px-[0] max-[554px]:w-[100vw]">
      {/* <p className="text-[25px] font-bold max-[554px]:pl-[12px]">Danh Mục</p> */}
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold">Không Có Dữ Liệu</p>
      ) : (
        <>
          <div className="flex justify-center items-center">
            <div className="flex flex-wrap items-start justify-center gap-8 pl-[20px] max-w-[800px]">
              {collections.map((collection: CollectionType) => (
                <div className="scales h-[70px] w-[160px] flex justify-center items-center rounded-[10px]">
                  <Link
                    href={`/collections/${collection._id}`}
                    key={collection._id}
                    className="flex  justify-start items-center h-[30px]">
                    <Image
                      key={collection._id}
                      src={collection.image}
                      alt={collection.title}
                      width={50}
                      height={0}
                      className="rounded-lg cursor-pointer object-contain h-[100%] "
                    />
                    <p className="p-[8px] pl-[3px]">{collection.title}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* <button
            style={{
              borderBottom: "1px solid #cccccc",
              width: "60%",
              padding: "0 0 10px 30px",
            }}>
            <a
              className="flex  justify-start items-center h-[30px]"
              href="/products">
              Tất cả
            </a>
          </button> */}
        </>
      )}
    </div>
  );
};

export default CollectionHome;
