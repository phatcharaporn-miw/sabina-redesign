"use client";

import { useState, useEffect } from "react";
import Container from "./Container";

const menu = [
  "สินค้าใหม่",
  "เสื้อชั้นใน",
  "กางเกงใน",
  "เสื้อผ้า",
  "ชุดกระชับสัดส่วน",
  "ชุดว่ายน้ำ",
  "เด็ก",
  "อุปกรณ์เสริมและอื่น ๆ",
  "ผู้ชาย",
  "คอลเลกชัน",
  "โปรโมชัน",
  "ราคาพิเศษ",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ล็อค scroll เมื่อเมนูเปิด
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* TopBar*/}
      <div className="bg-[#F6F6F6] h-[40px] flex items-center">
        <Container>
          <div className="flex justify-between items-center text-[12px] tracking-[0.06em]">
            <div>THAI | ฿ THB</div>

            <div className="hidden lg:flex gap-5">
              {/* Search */}
              <button className="flex items-center text-black hover:text-[#2A1F1A] transition-colors p-1 bg-transparent border-none cursor-pointer">
                <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="7" /><line x1="16.5" y1="16.5" x2="22" y2="22" />
                </svg>
              </button>
              {/* Favorite */}
              <button className="flex items-center text-black hover:text-[#CCAADD] transition-colors p-1 bg-transparent border-none cursor-pointer">
                <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
              {/* Cart */}
              <button className="relative flex items-center text-black hover:text-[#2A1F1A] transition-colors p-1 bg-transparent border-none cursor-pointer">
                <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" viewBox="0 0 24 24">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#CCAADD] text-white text-[9px] font-medium w-[15px] h-[15px] rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              {/* Account */}
              <button className="flex items-center text-black hover:text-[#2A1F1A] transition-colors p-1 bg-transparent border-none cursor-pointer">
                <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
              </button>
            </div>

            <div className="flex lg:hidden gap-3">
              <button className="flex items-center text-black p-1 bg-transparent border-none cursor-pointer">
                <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="7" /><line x1="16.5" y1="16.5" x2="22" y2="22" />
                </svg>
              </button>
              <button className="relative flex items-center text-black p-1 bg-transparent border-none cursor-pointer">
                <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" viewBox="0 0 24 24">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#CCAADD] text-white text-[9px] font-medium w-[15px] h-[15px] rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button className="flex items-center text-black p-1 bg-transparent border-none cursor-pointer">
                <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* NAVBAR */}
      <nav className="bg-white border-b border-[#CCAADD]/30">
        <div className="px-4 h-[80px] flex items-center justify-between">

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] bg-transparent border-none cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span
              className={`block w-6 h-[1.5px] bg-black transition-all duration-300 origin-center ${
                isOpen ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-black transition-all duration-300 ${
                isOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-black transition-all duration-300 origin-center ${
                isOpen ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>

          <div className="absolute left-1/2 -translate-x-1/2">
            <a href="#" className="text-[32px] sm:text-[40px] lg:text-[45px] tracking-[0.2em] font-light">
              SABINA
            </a>
          </div>

          <div className="w-10 lg:hidden" />
        </div>

        {/* desktop */}
        <div className="hidden lg:block border-t border-[#CCAADD]/30">
          <Container>
            <ul className="h-[56px] flex items-center justify-between text-[14px] tracking-[0.14em]">
              {menu.map((item) => (
                <li key={item} className="group">
                  <a href="#" className="relative py-4 block">
                    {item}
                    <span className="absolute left-0 bottom-3 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/30 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />
      <div
        className={`fixed top-0 left-0 h-full w-[280px] sm:w-[320px] bg-white z-50 lg:hidden
          transform transition-transform duration-300 ease-in-out shadow-xl
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 h-[120px] border-b border-[#CCAADD]/30">
          <span className="text-[28px] tracking-[0.2em] font-light">SABINA</span>
          <button
            className="w-8 h-8 flex items-center justify-center bg-transparent border-none cursor-pointer text-black"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <ul className="py-4 overflow-y-auto h-[calc(100%-120px)]">
          {menu.map((item, i) => (
            <li key={item}>
              <a
                href="#"
                className="block px-6 py-4 text-[14px] tracking-[0.14em] border-b border-[#F5F5F5]
                  hover:bg-[#FAF8F7] hover:text-[#C4846E] transition-colors duration-200"
                style={{ transitionDelay: isOpen ? `${i * 30}ms` : "0ms" }}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}