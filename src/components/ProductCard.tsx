"use client";

import { useState } from "react";
import type { Product } from "../data/mockdata";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [wishlisted, setWishlisted] = useState(false);
  const [activeColor, setActiveColor] = useState(0);
  const [added, setAdded] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  const visibleColors = product.colors.slice(0, 4);
  const extraColors = product.colors.length > 4 ? product.colors.length - 4 : 0;

  return (
    <div className="group cursor-pointer min-w-0 w-full">
      <div
        className="relative overflow-hidden rounded-lg sm:rounded-xl mb-3 sm:mb-3"
        style={{ backgroundColor: product.tint, aspectRatio: "4/5" }}
      >
        <img
          src={product.img}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* fav */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setWishlisted((v) => !v);
          }}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 bg-white/90 rounded-full flex items-center justify-center border-none cursor-pointer transition-transform hover:scale-110 z-10"
          style={{ boxShadow: "0 1px 4px rgba(61,43,34,0.1)" }}
          aria-label="Wishlist"
        >
          <svg
            width="13"
            height="13"
            fill={wishlisted ? "#BC8FD0" : "none"}
            stroke={wishlisted ? "#BC8FD0" : "#BC8FD0"}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            className="transition-all sm:w-[15px] sm:h-[15px]"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        {product.discount && (
          <span
            className="absolute left-2 top-2 sm:left-3 sm:top-3 rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-[11px] font-medium"
            style={{ background: "#000", color: "#fff" }}
          >
            -{product.discount}%
          </span>
        )}

        <button
          onClick={handleQuickAdd}
          className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 bg-[rgba(26,20,16,0.88)] text-white border-none rounded-full py-[8px] sm:py-[10px] text-[10px] sm:text-[11px] tracking-[0.1em] cursor-pointer transition-all duration-200
            opacity-100 translate-y-0
            sm:opacity-0 sm:translate-y-[6px] sm:group-hover:opacity-100 sm:group-hover:translate-y-0
            hover:bg-[rgba(26,20,16,0.96)] z-10"
        >
          {added ? "เพิ่มแล้ว ✓" : "เพิ่มลงตะกร้า"}
        </button>
      </div>

      {/* Card */}
      <div>
        <div className="flex items-center gap-1 sm:gap-1.5 mb-1.5 sm:mb-2">
          {visibleColors.map((c, i) => (
            <button
              key={c.hex}
              title={c.name}
              onClick={(e) => {
                e.stopPropagation();
                setActiveColor(i);
              }}
              className="w-[11px] h-[11px] sm:w-[13px] sm:h-[13px] rounded-full border-[1.5px] border-white cursor-pointer transition-transform hover:scale-125"
              style={{
                backgroundColor: c.hex,
                boxShadow:
                  activeColor === i
                    ? "0 0 0 1.5px #2A1F1A"
                    : "0 0 0 1px rgba(0,0,0,0.12)",
              }}
            />
          ))}
          {extraColors > 0 && (
            <span className="text-[9px] sm:text-[10px]">+{extraColors}</span>
          )}
        </div>

        <p className="text-[11px] sm:text-[13px] text-[#BC8FD0] mb-1">
          {product.brand}
        </p>

        <p className="text-[12px] sm:text-[14px] font-medium leading-[1.4] mb-1 sm:mb-1.5 line-clamp-2">
          {product.name}
        </p>

        {/* Price */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {product.salePrice ? (
            <>
              <span className="text-[12px] sm:text-[14px] font-medium text-red-600">
                {product.salePrice} ฿
              </span>
              <span className="text-[11px] sm:text-[13px] line-through">
                {product.price} ฿
              </span>
            </>
          ) : (
            <span className="text-[12px] sm:text-[14px]">
              {product.price} ฿
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
