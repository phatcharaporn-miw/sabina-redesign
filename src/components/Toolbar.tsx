"use client";

import { SlidersHorizontal, ChevronDown, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Container from "./Container";

const SORT_OPTIONS = [
  "ใหม่ล่าสุด",
  "ชื่อ ก-ฮ",
  "ชื่อ ฮ-ก",
  "ราคา: ต่ำสุด - สูงสุด",  
  "ราคา: สูงสุด - ต่ำสุด",   
  "นิยมมากที่สุด",
];

interface StickyToolbarProps {
  productCount: number;
  sort: string;
  onSortChange: (v: string) => void;
  onFilterToggle?: () => void;
}

export default function Toolbar({
  productCount,
  sort,
  onSortChange,
  onFilterToggle,
}: StickyToolbarProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="mt-4 lg:mt-5">
      <Container>
        <div className="flex h-12 lg:h-14 items-center justify-between border-b border-[#CCAADD]/30 pb-3 lg:pb-0 lg:border-none">

          <button
            onClick={onFilterToggle}
            className="lg:hidden flex items-center gap-2 rounded-full border border-black px-4 py-2 text-[12px] tracking-[0.06em] cursor-pointer hover:bg-black/5 transition-colors"
          >
            <SlidersHorizontal className="h-[14px] w-[14px]" />
            ตัวกรอง
          </button>

          <div className="hidden lg:block" />

          <span className="lg:hidden text-[12px] tracking-[0.04em] text-neutral-500">
            {productCount} รายการ
          </span>

          <div className="flex items-center gap-2" ref={wrapperRef}>
            <span className="text-[13px] font-medium tracking-[0.04em] hidden sm:block text-neutral-500">
              เรียงโดย
            </span>

            <div className="relative">
              <button
                onClick={() => setOpen((v) => !v)}
                className="flex items-center justify-between gap-2 min-w-[180px] rounded-full border border-black bg-white px-4 py-1.5 text-[12px] tracking-[0.04em] cursor-pointer hover:bg-neutral-50 transition-colors"
              >
                <span>{sort}</span>
                <ChevronDown
                  className={`h-[14px] w-[14px] text-neutral-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown */}
              <div
                className={`absolute right-0 top-[calc(100%+6px)] z-50 min-w-[200px] overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg transition-all duration-200 origin-top-right ${
                  open
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
                }`}
              >
                {SORT_OPTIONS.map((option, i) => (
                  <button
                    key={option}
                    onClick={() => {
                      onSortChange(option);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center justify-between px-4 py-2.5 text-[13px] tracking-[0.03em] transition-colors hover:bg-neutral-50 ${
                      i > 0 ? "border-t border-neutral-100" : ""
                    } ${sort === option ? "text-violet-600 font-medium" : "text-neutral-800"}`}
                  >
                    {option}
                    <Check
                      className={`h-[14px] w-[14px] text-violet-500 transition-opacity ${
                        sort === option ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}