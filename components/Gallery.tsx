"use client";

// import Image from "next/image";
import { Image } from "antd";
import React, { useState } from "react";

const Gallery = ({ productMedia }: { productMedia: string[] }) => {
  const [mainImage, setMainImage] = useState(productMedia[0]);

  return (
    <div className="flex flex-col gap-3 max-w-[500px">
      <Image
        src={mainImage}
        width={500}
        height={500}
        alt="product"
        className="w-96 h-96 rounded-lg shadow-xl object-cover cursor-pointer"
      />
      <div className="flex gap-2 overflow-auto tailwind-scrollbar-hide max-[554px]:width-[80%] max-[554px]:ml-[60px]">
        {productMedia.map((image, index) => (
          <img
            key={index}
            src={image}
            height={200}
            width={200}
            alt="product"
            className={`w-20 h-20 rounded-lg object-cover cursor-pointer ${
              mainImage === image ? "border-2 border-orange-400" : ""
            }`}
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
