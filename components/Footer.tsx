"use client";
import { useUser } from "@clerk/nextjs";
import {
  Facebook,
  Heart,
  Home,
  Instagram,
  Mail,
  MapPin,
  Package2,
  Phone,
  ShoppingBag,
  Twitch,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  return (
    <>
      <div className="h-[max-content] bg-black text-white ">
        <div className="w-full py-[30px] mx-[auto]">
          {/* Contact */}
          <div className="flex justify-around items-center cursor-default max-[664px]:flex-col max-[664px]:gap-4">
            <div className="flex justify-center items-center gap-4">
              <Phone />
              <p>Hotline: 085 835 8586</p>
            </div>
            <div className="flex justify-center items-center gap-4">
              <Mail />
              <p>Email: duong.fullstack.developer.com.vn</p>
            </div>
          </div>
          {/* Footer */}
          <div
            className="h-[300px] my-[30px] p-[30px] grid grid-cols-3 max-[1024px]:flex max-[1024px]:justify-center max-[1024px]:items-center"
            style={{
              borderTop: "1px solid #ffffff59",
            }}>
            {/* Logo */}
            <div className="flex flex-col justify-start items-center gap-20">
              <Link href="/">
                <Image src="/logo-ok.png" alt="logo" width={250} height={100} />
              </Link>
              <div className="flex justify-center items-center gap-14">
                <Link href="https://www.facebook.com/DangHoangDuong.19">
                  <Facebook />
                </Link>
                <Link href="https://www.instagram.com/_dhd_0712/">
                  <Instagram />
                </Link>
                <Link href="https://www.twitter.com">
                  <Twitter />
                </Link>
                <Link href="https://www.gmail.com">
                  <Mail />
                </Link>
              </div>
            </div>
            {/* Link */}
            <div className="flex flex-col justify-start items-start gap-8 mx-[auto] my-0 max-[1024px]:hidden">
              <p className="tracking-[1.06px] text-[20px] font-bold cursor-default">
                Liên kết
              </p>
              <div className="flex flex-col justify-center items-start gap-6 text-base-bold ">
                <Link
                  href="/"
                  className={`hover:text-orange-500 mx-[20px] flex animation-de2 justify-center items-center ${
                    pathname === "/"
                      ? "text-orange-600 font-bold"
                      : "text-[#333333]"
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

                <div id="hover-link">
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
                {/* <div className="hovers">
            <p>ok</p>
            <CollectionHome />
          </div> */}
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-8 mx-[auto] my-0 max-[1024px]:hidden">
              <p className="tracking-[1.06px] text-[20px] font-bold cursor-default">
                Thông tin liên hệ
              </p>
              <div className="opacity-70 pl-[20px] flex flex-col gap-8">
                <div className="flex justify-start items-center gap-3">
                  <MapPin />
                  <p>Vinhome Smart City, Tây Mỗ, Nam Từ Liêm, Hà Nội</p>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <Phone />
                  <p>085 835 8586</p>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <Mail />
                  <p>duong.fullstack.developer@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          {/* Coppyright */}
          <div className="flex justify-center items-center gap-2 tracking-[1.04px] text-[17px] mt-[30px] opacity-80 cursor-default max-[664px]:flex-col">
            Copyright © 2024 Detta Store. Thiết kế bởi{" "}
            <Link
              className="cursor-pointer hover:text-orange-400"
              href="https://www.facebook.com/DangHoangDuong.19">
              Đặng Hoàng Dương
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
