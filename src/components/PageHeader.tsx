import Container from "./Container";

export default function PageHeader() {
  return (
    <div className="border-b  border-[#CCAADD]/30 pt-8">
      <Container>
        <div className="flex items-center gap-2 text-[12px] mb-4 tracking-[0.14em]">
          <a href="#" className="hover:border-b hover:border-black">
            หน้าหลัก
          </a>
          <span>›</span>
          <a href="#" className="font-bold">
            เสื้อผ้า
          </a>
        </div>

        <img src="/img/header.jpg" alt="header"  className="w-full h-auto block pb-6" />
      </Container>
    </div>
  );
}