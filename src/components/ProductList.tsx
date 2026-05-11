"use client";

import { useState, useMemo } from "react";
import FilterSidebar from "../components/FilterSidebar";
import ProductCard from "../components/ProductCard";
import Toolbar from "../components/Toolbar";
import { PRODUCTS } from "../data/mockdata";

interface FilterState {
  cupSizes: string[];
  bandSizes: string[];
  styles: string[];
  colors: string[];
  priceMax: number;
  collections: string[];
}

const DEFAULT_FILTERS: FilterState = {
  cupSizes: ["A", "C"],
  bandSizes: ["34"],
  styles: ["เสื้อ"],
  colors: ["#F5EDE4", "#C2AEC8"],
  priceMax: 890,
  collections: [],
};

const PAGE_SIZE = 8;

export default function ProductListingPage() {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [sort, setSort] = useState("ใหม่ล่าสุด");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [filterOpen, setFilterOpen] = useState(false);

  const sorted = useMemo(() => {
  const list = [...PRODUCTS];
  switch (sort) {
    case "ชื่อ ก-ฮ":
      return list.sort((a, b) => a.name.localeCompare(b.name, "th"));
    case "ชื่อ ฮ-ก":
      return list.sort((a, b) => b.name.localeCompare(a.name, "th"));
    case "ราคา: ต่ำสุด - สูงสุด":
      return list.sort((a, b) => (a.salePrice ?? a.price) - (b.salePrice ?? b.price));
    case "ราคา: สูงสุด - ต่ำสุด":
      return list.sort((a, b) => (b.salePrice ?? b.price) - (a.salePrice ?? a.price));
    case "นิยมมากที่สุด":
    default:
      return list;
  }
}, [sort]);

  const visible = sorted.slice(0, visibleCount);
  const hasMore = visibleCount < sorted.length;

  return (
    <>
      <Toolbar
        productCount={sorted.length}
        sort={sort}
        onSortChange={setSort}
        onFilterToggle={() => setFilterOpen(true)}
      />

      {/* Mobile/Tablet filter */}
      <>
        <div
          className={`fixed inset-0 bg-black/30 z-40 lg:hidden transition-opacity duration-300 ${
            filterOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setFilterOpen(false)}
        />

        <div
          className={`fixed top-0 left-0 h-full w-[300px] sm:w-[340px] bg-white z-50 lg:hidden
            transform transition-transform duration-300 ease-in-out shadow-xl overflow-y-auto
            ${filterOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#CCAADD] sticky top-0 bg-white z-10">
            <span className="text-[13px] font-medium tracking-[0.14em] uppercase">
              ตัวกรอง
            </span>
            <button
              onClick={() => setFilterOpen(false)}
              className="w-8 h-8 flex items-center justify-center bg-transparent border-none cursor-pointer"
            >
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                viewBox="0 0 24 24"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div className="px-2">
            <FilterSidebar
              filters={filters}
              onChange={setFilters}
              drawer
              onClose={() => setFilterOpen(false)}
            />
          </div>
        </div>
      </>

     <div className="mt-6 lg:mt-10 grid grid-cols-12 gap-4 lg:gap-10 px-3 sm:px-5 lg:px-16 max-w-[1440px] mx-auto">
        <div className="hidden lg:block col-span-3">
          <FilterSidebar filters={filters} onChange={setFilters} />
        </div>

        <div className="col-span-12 lg:col-span-9 py-4 lg:py-0 min-w-0">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-4 sm:gap-x-4 sm:gap-y-6 lg:gap-x-7 lg:gap-y-8 mb-10 lg:mb-14">
            {visible.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Load more */}
          <div className="flex flex-col items-center gap-4 pb-10 lg:pb-14">
            <span className="text-[12px] tracking-[0.04em]">
              แสดง {visible.length} จาก {sorted.length} รายการ
            </span>
            <div className="w-[200px] h-[2px] bg-[#EDE5DC] rounded-[1px] overflow-hidden">
              <div
                className="h-full bg-black rounded-[1px] transition-all duration-500"
                style={{ width: `${(visible.length / sorted.length) * 100}%` }}
              />
            </div>
            {hasMore && (
              <button
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                className="mt-2 px-10 py-3 border-[1.5px] border-black rounded-full bg-transparent font-sans text-[12px] tracking-[0.1em] uppercase cursor-pointer hover:bg-black hover:text-white transition-all duration-250"
              >
                ดูเพิ่มเติม
              </button>
            )}
            {!hasMore && (
              <p className="text-[12px] mt-1">You&apos;ve seen it all</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
