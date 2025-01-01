import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div
      className="w-full max-w-2xl mx-auto my-8 bg-white rounded-lg shadow-md 
                    hover:-translate-y-1 transition-transform duration-300 
                    h-[28rem] sm:h-[32rem] flex flex-col"
    >
      {/* 圖片區域 */}
      <div className="relative h-40 sm:h-48 w-full flex-shrink-0">
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>

      {/* 內容區域 */}
      <div className="flex flex-col flex-1 p-4 sm:p-6 overflow-hidden">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 flex-shrink-0">
          {product.title}
        </h3>

        {/* 可滾動的描述區域 */}
        <div className="flex-1 min-h-0">
          <div
            className="h-full overflow-y-auto pr-2 
                         scrollbar-thin scrollbar-track-gray-100 
                         scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400"
          >
            <p className="text-gray-600 text-xs sm:text-sm whitespace-pre-line">
              {product.description}
            </p>
          </div>
        </div>

        <div className="mt-3 sm:mt-4 flex-shrink-0">
          <Link
            href={product.link}
            target="_blank"
            className="block w-full bg-indigo-600 text-white py-2 sm:py-2.5 px-4 
                     rounded-md hover:bg-indigo-700 transition-colors 
                     text-center text-xs sm:text-sm font-medium"
          >
            查看專案
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
