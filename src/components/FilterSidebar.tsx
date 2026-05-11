"use client";

import { useState } from "react";
import {
  CUP_SIZES,
  BAND_SIZES,
  STYLES,
  COLOR_FILTERS,
  COLLECTIONS,
} from "../data/mockdata";

interface FilterState {
  cupSizes: string[];
  bandSizes: string[];
  styles: string[];
  colors: string[];
  priceMax: number;
  collections: string[];
}

interface FilterSidebarProps {
  filters: FilterState;
  onChange: (f: FilterState) => void;
  drawer?: boolean;
  onClose?: () => void;
}

function SectionTitle({
  label,
  open,
  onToggle,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between pb-2.5 border-b border-[#CCAADD]/50 mb-3 bg-transparent border-l-0 border-r-0 border-t-0 cursor-pointer"
    >
      <span className="text-[13px] font-medium tracking-[0.14em]">{label}</span>
      <svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        className={`transition-transform duration-200 ${open ? "" : "-rotate-90"}`}
      >
        <path
          d="M1 1l4 4 4-4"
          stroke="#BC8FD0"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}

export default function FilterSidebar({
  filters,
  onChange,
  drawer = false,
  onClose,
}: FilterSidebarProps) {
  const [openSections, setOpenSections] = useState({
    cup: true,
    band: true,
    style: true,
    color: true,
    price: true,
    collection: true,
  });
  const toggle = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleArray = (arr: string[], val: string): string[] =>
    arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val];

  const activeCount =
    filters.cupSizes.length +
    filters.bandSizes.length +
    filters.styles.length +
    filters.colors.length +
    filters.collections.length +
    (filters.priceMax < 1890 ? 1 : 0);

  const clearAll = () =>
    onChange({
      cupSizes: [],
      bandSizes: [],
      styles: [],
      colors: [],
      collections: [],
      priceMax: 1890,
    });

  const sidebarClass = drawer ? "w-full px-4 py-6" : "py-0"; //                                                                      ^^^^ ปรับตาม navbar จริง (TopBar 40px + Navbar 80px = 120px หรือ top-[120px])er-r border-[#CCAADD]/50 sticky top-[120px] h-[calc(100vh-120px)] overflow-y-auto py-9";

  return (
    <aside className={sidebarClass}>
      {activeCount > 0 && (
        <div className="flex items-center justify-between mb-6">
          <span className="text-[12px] tracking-[0.06em] text-[#674188]">
            เลือกแล้ว {activeCount} ตัวกรอง
          </span>
          <button
            onClick={clearAll}
            className="text-[11px] text-[#674188] underline underline-offset-2 cursor-pointer border-none"
          >
            ล้างทั้งหมด
          </button>
        </div>
      )}

      {/* CUP SIZE */}
      <div className="mb-8">
        <SectionTitle
          label="คัพ"
          open={openSections.cup}
          onToggle={() => toggle("cup")}
        />
        {openSections.cup && (
          <div className="grid grid-cols-5 gap-1.5">
            {CUP_SIZES.map((s) => (
              <button
                key={s}
                onClick={() =>
                  onChange({
                    ...filters,
                    cupSizes: toggleArray(filters.cupSizes, s),
                  })
                }
                className={`px-[11px] py-[5px] rounded-[6px] text-[12px] border transition-all cursor-pointer ${
                  filters.cupSizes.includes(s)
                    ? "bg-[#674188] border-[#674188] text-white"
                    : "bg-transparent border-[#CCAADD] hover:border-[#BC8FD0]"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* BAND SIZE */}
      <div className="mb-8">
        <SectionTitle
          label="ไซซ์"
          open={openSections.band}
          onToggle={() => toggle("band")}
        />
        {openSections.band && (
          <div className="grid grid-cols-5 gap-1.5">
            {BAND_SIZES.map((s) => (
              <button
                key={s}
                onClick={() =>
                  onChange({
                    ...filters,
                    bandSizes: toggleArray(filters.bandSizes, s),
                  })
                }
                className={`px-[11px] py-[5px] rounded-[6px] text-[12px] border transition-all cursor-pointer ${
                  filters.bandSizes.includes(s)
                    ? "bg-[#674188] border-[#674188] text-white"
                    : "bg-transparent border-[#CCAADD] hover:border-[#BC8FD0]"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* STYLE */}
      <div className="mb-8">
        <SectionTitle
          label="ประเภท"
          open={openSections.style}
          onToggle={() => toggle("style")}
        />
        {openSections.style && (
          <div>
            {STYLES.map(({ label, count }) => {
              const checked = filters.styles.includes(label);
              return (
                <button
                  key={label}
                  onClick={() =>
                    onChange({
                      ...filters,
                      styles: toggleArray(filters.styles, label),
                    })
                  }
                  className="flex items-center gap-2.5 w-full py-[5px] text-left text-[13px] hover:text-[#2A1F1A] transition-colors cursor-pointer bg-transparent "
                >
                  <span
                    className={`w-4 h-4 rounded-[4px] border flex-shrink-0 flex items-center justify-center transition-all ${
                      checked
                        ? "bg-[#674188] border-[#674188]"
                        : "border-[#CCAADD]"
                    }`}
                  >
                    {checked && (
                      <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
                        <path
                          d="M1 3l2.5 2.5L8 1"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  <span className="flex-1">{label}</span>
                  <span className="text-[11px]">{count}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* COLOR */}
      <div className="mb-8">
        <SectionTitle
          label="สี"
          open={openSections.color}
          onToggle={() => toggle("color")}
        />
        {openSections.color && (
          <div className="grid grid-cols-5 gap-2">
            {COLOR_FILTERS.map(({ hex, name }) => {
              const active = filters.colors.includes(hex);
              return (
                <button
                  key={hex}
                  title={name}
                  onClick={() =>
                    onChange({
                      ...filters,
                      colors: toggleArray(filters.colors, hex),
                    })
                  }
                  className={`w-6 h-6 rounded-full border-2 border-white transition-all cursor-pointer ${
                    active
                      ? "outline outline-2 outline-[#BC8FD0] outline-offset-2"
                      : "outline outline-2 outline-transparent outline-offset-2"
                  }`}
                  style={{
                    backgroundColor: hex,
                    boxShadow: "0 0 0 1px rgba(0,0,0,0.1)",
                  }}
                />
              );
            })}
          </div>
        )}
      </div>

      {/* PRICE */}
      <div className="mb-8">
        <SectionTitle
          label="ราคา"
          open={openSections.price}
          onToggle={() => toggle("price")}
        />
        {openSections.price && (
          <div>
            <div className="flex justify-between text-[13px] mb-3">
              <span>
                <span className="font-medium">{filters.priceMax} ฿</span>
              </span>
              <span className="text-[11px]">1890 ฿</span>
            </div>
            <input
              type="range"
              min={0}
              max={1890}
              value={filters.priceMax}
              onChange={(e) =>
                onChange({ ...filters, priceMax: Number(e.target.value) })
              }
              className="w-full accent-[#674188] cursor-pointer bg-transparent"
            />
          </div>
        )}
      </div>

      {/* COLLECTION */}
      <div className="mb-8">
        <SectionTitle
          label="คอลเลคชัน"
          open={openSections.collection}
          onToggle={() => toggle("collection")}
        />
        {openSections.collection && (
          <div>
            {COLLECTIONS.map(({ name }) => {
              const checked = filters.collections.includes(name);
              return (
                <button
                  key={name}
                  onClick={() =>
                    onChange({
                      ...filters,
                      collections: toggleArray(filters.collections, name),
                    })
                  }
                  className="flex items-center gap-2.5 w-full py-[5px] text-left text-[13px] hover:text-[#2A1F1A] transition-colors cursor-pointer"
                >
                  <span
                    className={`w-4 h-4 rounded-[4px] border flex-shrink-0 flex items-center justify-center transition-all ${
                      checked
                        ? "bg-[#674188] border-[#674188]"
                        : "border-[#CCAADD]"
                    }`}
                  >
                    {checked && (
                      <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
                        <path
                          d="M1 3l2.5 2.5L8 1"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  <span className="flex-1">{name}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {drawer && (
        <div className="mt-8 pb-6">
          <button
            onClick={onClose}
            className="w-full py-3 bg-black text-white text-[12px] tracking-[0.12em] rounded-full cursor-pointer border-none hover:bg-[#2A1F1A] transition-colors"
          >
            ดูสินค้า {activeCount > 0 ? `(${activeCount})` : ""}
          </button>
        </div>
      )}
    </aside>
  );
}
