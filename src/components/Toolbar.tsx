"use client";

import { SlidersHorizontal } from "lucide-react";
import Container from "./Container";

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
  return (
    <div className="mt-4 lg:mt-5">
      <Container>
        <div className="flex h-12 lg:h-14 items-center justify-between border-b border-[#CCAADD]/30 pb-3 lg:pb-0 lg:border-none">

          <button
            onClick={onFilterToggle}
            className="lg:hidden flex items-center gap-2 rounded-full border border-black px-4 py-2 text-[12px] tracking-[0.06em] cursor-pointer"
          >
            <SlidersHorizontal className="h-[14px] w-[14px]" />
            ตัวกรอง
          </button>

          <div className="hidden lg:block" />

          <span className="lg:hidden text-[12px] tracking-[0.04em]">
            {productCount} รายการ
          </span>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-[12px] lg:text-[14px] font-medium tracking-[0.04em] hidden sm:block">
              เรียงโดย
            </span>
            <select
              value={sort}
              onChange={(e) => onSortChange(e.target.value)}
              className="border border-black rounded-full bg-transparent text-[12px] tracking-[0.04em] cursor-pointer outline-none px-3 py-1.5"
            >
              <option>ใหม่ล่าสุด</option>
              <option>ชื่อ ก-ฮ</option>
              <option>ชื่อ ฮ-ก</option>
              <option>ราคา: ต่ำสุด - สูงสุด</option>
              <option>ราคา: สูงสุด - ต่ำสุด</option>
              <option>นิยมมากที่สุด</option>
            </select>
          </div>

        </div>
      </Container>
    </div>
  );
}