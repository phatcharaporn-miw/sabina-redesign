import { RECENT_PRODUCTS } from "../data/mockdata";

export default function RecentView() {
  return (
    <section className="border-t border-[#CCAADD]/30 px-4 sm:px-8 lg:px-16 pt-6 pb-16">
      <div className="flex items-baseline justify-between mb-7">
        <h2 className="text-[21px] sm:text-[30px] tracking-[0.04em]">
          เข้าชมล่าสุด
        </h2>
        <a
          href="#"
          className="text-[12px] tracking-[0.08em] border-b border-black pb-[1px] hover:text-[#2A1F1A] transition-colors"
        >
          ดูทั้งหมด
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5">
        {RECENT_PRODUCTS.map((p) => (
          <div key={p.id} className="group cursor-pointer min-w-0">
            <div
              className="relative overflow-hidden rounded-lg sm:rounded-xl mb-3"
              style={{ backgroundColor: p.tint, aspectRatio: "4/5" }}
            >
              <img
                src={p.img}
                alt={p.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-[#3D2B22]/0 group-hover:bg-[#3D2B22]/[0.04] transition-colors duration-300" />
            </div>

            <div>
              {p.brand && (
                <p className="text-[11px] sm:text-[12px] text-[#BC8FD0] mb-1">
                  {p.brand}
                </p>
              )}

              <p className="text-[12px] sm:text-[14px] font-medium leading-[1.4] line-clamp-2">
                {p.name}
              </p>

              <div className="mt-auto flex items-center justify-between pt-3">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  {p.salePrice ? (
                    <>
                      <span className="text-[12px] sm:text-[14px] font-medium text-red-600">
                        {p.salePrice} ฿
                      </span>
                      <span className="text-[11px] sm:text-[13px] line-through text-[#888]">
                        {p.price} ฿
                      </span>
                    </>
                  ) : (
                    <span className="text-[12px] sm:text-[14px]">
                      {p.price} ฿
                    </span>
                  )}
                </div>
                <span className="text-[9px] sm:text-[11px] bg-gray-100 text-gray-500 rounded px-1.5 py-0.5">
                  {p.collection}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
