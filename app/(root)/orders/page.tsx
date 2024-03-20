import { getOrders } from "@/lib/actions/actions";

import { auth } from "@clerk/nextjs";
import Image from "next/image";

const Orders = async () => {
  const { userId } = auth();
  const orders = await getOrders(userId as string);

  console.log(orders[0].products);

  return (
    <div className="px-10 py-5 max-sm:px-3">
      <p className="text-heading3-bold my-10 text-orange-600">
        Đơn Hàng Của Bạn
      </p>

      {orders.length === 0 && (
        <p className="text-body-bold my-5 text-orange-600">
          Bạn chưa có đơn đặt hàng nào.
        </p>
      )}

      <div className="grid grid-cols-2 h-[600px] gap-10 overflow-auto max-[554px]:flex max-[554px]:h-[100%] max-[554px]:flex-col">
        {orders?.map((order: OrderType) => (
          <div className="flex flex-col gap-8 p-4 hover:bg-grey-1">
            <div className="flex gap-20 max-md:flex-col max-md:gap-3">
              <p className="text-base-bold text-orange-600">
                ID Đơn Hàng: {order._id}
              </p>
              <p className="text-base-bold text-orange-600">
                Tổng:{" "}
                {order.totalAmount.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {order.products.map((orderItem: OrderItemType) => (
                <div className="flex items-center gap-4">
                  <Image
                    src={orderItem.product.media[0]}
                    alt={orderItem.product.title}
                    width={100}
                    height={100}
                    className="w-32 h-32 object-cover rounded-lg h-[100%]"
                  />
                  <div className="flex flex-col justify-between">
                    <p className="text-small-medium border-b-[1px] p-[10px] ">
                      Tên sản phẩm:{" "}
                      <span className="text-small-bold text-orange-600">
                        {orderItem.product.title}
                      </span>
                    </p>
                    {orderItem.color && (
                      <p className="text-small-medium border-b-[1px] p-[10px] ">
                        Màu sắc:{" "}
                        <span className="text-small-bold text-orange-600">
                          {orderItem.color}
                        </span>
                      </p>
                    )}
                    {orderItem.size && (
                      <p className="text-small-medium border-b-[1px] p-[10px] ">
                        Kích cỡ:{" "}
                        <span className="text-small-bold text-orange-600">
                          {orderItem.size}
                        </span>
                      </p>
                    )}
                    <p className="text-small-medium border-b-[1px] p-[10px] ">
                      Giá tiền:{" "}
                      <span className="text-small-bold text-orange-600">
                        {orderItem.product.price.toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </span>
                    </p>
                    <p className="text-small-medium border-b-[1px] p-[10px] ">
                      Số lượng:{" "}
                      <span className="text-small-bold text-orange-600">
                        {orderItem.quantity}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;

export const dynamic = "force-dynamic";
