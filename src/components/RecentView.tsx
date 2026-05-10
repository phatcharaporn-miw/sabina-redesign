import { RECENT_PRODUCTS } from "../data/mockdata";

export default function RecentView() {
  return (
    <section className="border-t border-[#EDE5DC] bg-[#FFFEFB] px-4 sm:px-8 lg:px-16 pt-12 pb-16">
      <div className="flex items-baseline justify-between mb-7">
        <h2 className="font-serif text-[22px] sm:text-[30px] font-light tracking-[0.04em] text-[#2A1F1A]">
          Recently Viewed
        </h2>
        <a
          href="#"
          className="text-[12px] text-[#A89990] tracking-[0.08em] no-underline border-b border-[#DDD0C4] pb-[1px] hover:text-[#2A1F1A] transition-colors"
        >
          View All
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {RECENT_PRODUCTS.map((p) => (
          <div key={p.id} className="group cursor-pointer">
            <div
              className="rounded-[10px] overflow-hidden mb-2 relative"
              style={{ aspectRatio: "2/3", backgroundColor: p.tint }}
            >
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
                style={{
                  width: "55%",
                  height: "75%",
                  background: "#B8907E",
                  opacity: 0.12,
                  borderRadius: "48% 48% 38% 38% / 38% 38% 55% 55%",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center font-serif text-[11px] italic tracking-[0.08em] text-[#8A7268] select-none">
                {p.name.split(" ")[0]}
              </div>
              <div className="absolute inset-0 bg-[#3D2B22]/0 group-hover:bg-[#3D2B22]/[0.04] transition-colors duration-300" />
            </div>
            <p className="text-[11px] sm:text-[12px] text-[#2A1F1A] mb-0.5 line-clamp-1">{p.name}</p>
            <p className="text-[11px] sm:text-[12px] text-[#A89990]">฿{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}