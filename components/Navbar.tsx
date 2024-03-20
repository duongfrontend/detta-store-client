"use client";

import useCart from "@/lib/hooks/useCart";

import { UserButton, useUser } from "@clerk/nextjs";
import {
  CircleUserRound,
  Heart,
  Home,
  Menu,
  Package2,
  Search,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="sticky top-0 z-10 p-[25px] flex gap-2 justify-between items-center bg-white max-sm:px-2">
      <Link href="/">
        <Image src="/logo-ok.png" alt="logo" width={130} height={100} />
      </Link>

      <div className="flex gap-4 text-base-bold max-[1466px]:hidden">
        <Link
          href="/"
          className={`hover:text-orange-500 mx-[20px] flex animation-de2 justify-center items-center ${
            pathname === "/" ? "text-orange-600 font-bold" : "text-[#333333]"
          }`}>
          <Home className="mr-[5px]" />
          Trang Chủ
        </Link>
        <Link
          href={user ? "/wishlist" : "/sign-in"}
          className={`hover:text-orange-500 mx-[20px] flex animation-de2 justify-center items-center ${
            pathname === "/wishlist"
              ? "text-orange-600 font-bold"
              : "text-[#333333]"
          }`}>
          <Heart className="mr-[5px]" />
          Yêu Thích
        </Link>
        <Link
          href={user ? "/orders" : "/sign-in"}
          className={`hover:text-orange-500 mx-[20px] flex animation-de2 justify-center items-center ${
            pathname === "/orders"
              ? "text-orange-600 font-bold"
              : "text-[#333333]"
          }`}>
          <ShoppingBag className="mr-[5px]" />
          Đơn Hàng Của Bạn
        </Link>
        <Link
          target="_blank"
          href={user ? "/products" : "/sign-in"}
          className={`hover:text-orange-500 mx-[20px] flex animation-de2 justify-center items-center ${
            pathname === "/products"
              ? "text-orange-600 font-bold"
              : "text-[#333333]"
          }`}>
          <Package2 className="mr-[5px]" />
          Sản Phẩm
        </Link>
      </div>

      <div className="flex gap-3 w-[30%] max-[554px]:w-[100%] max-[1466px]:w-[100%] px-3 py-1 items-center rounded-lg">
        <input
          className="outline-none w-[100%] pb-[6px]"
          style={{ borderBottom: "1px solid rgb(163 163 163)" }}
          placeholder="Tìm kiếm sản phẩm..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          disabled={query === ""}
          onClick={() => router.push(`/search/${query}`)}>
          <Search className="cursor-pointer h-4 w-4 hover:text-orange-600" />
        </button>
      </div>

      <div className="relative flex gap-3 items-center ">
        <Link
          href="/cart"
          className="hover-target flex relative justify-center items-center w-[50px] h-[50px]  bg-[#393939] text-white items-center gap-3 animation-de border rounded-full px-[5px] py-[8px] hover:bg-orange-500 hover:text-[#252525] max-md:hidden">
          <ShoppingCart />
          <p className="text-base-bold cart-item ok bg-orange-500 ">
            {" "}
            {cart.cartItems.length}
          </p>
        </Link>

        <Menu
          className="cursor-pointer max-[1366px]:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />

        {dropdownMenu && (
          <div className="absolute w-[300px] h-[300px] pb-[20px] top-12 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-white text-base-bold lg:hidden">
            <Link
              href="/"
              className="hover:text-orange-600 animation-de2 flex items-center p-[10px]">
              <Home className="mr-[8px]" />
              Trang Chủ
            </Link>
            <Link
              href={user ? "/wishlist" : "/sign-in"}
              className="hover:text-orange-600 animation-de2 flex items-center p-[10px]">
              <Heart className="mr-[8px]" />
              Yêu Thích
            </Link>
            <Link
              href={user ? "/orders" : "/sign-in"}
              className="hover:text-orange-600 animation-de2 flex items-center p-[10px]">
              <ShoppingBag className="mr-[8px]" />
              Đơn Hàng Của Bạn
            </Link>
            <Link
              href="/cart"
              className="flex bg-[#393939] text-white justify-center animation-de p-[20px] items-center gap-3 border rounded-lg hover:bg-orange-500 hover:text-[#252525]">
              <ShoppingCart />
              <p className="text-base-bold">
                Giỏ hàng ({cart.cartItems.length})
              </p>
            </Link>
            {/* <div className="flex gap-3 w-[30%] px-3 py-1 items-center rounded-lg">
              <input
                className="outline-none max-sm:max-w-[120px] w-[100%] pb-[6px]"
                style={{ borderBottom: "1px solid rgb(163 163 163)" }}
                placeholder="Tìm kiếm sản phẩm..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                disabled={query === ""}
                onClick={() => router.push(`/search/${query}`)}>
                <Search className="cursor-pointer h-4 w-4 hover:text-orange-600" />
              </button>
            </div> */}
          </div>
        )}

        {user ? (
          <UserButton afterSignOutUrl="/sign-in" />
        ) : (
          <Link href="/sign-in">
            <CircleUserRound />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
