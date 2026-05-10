export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-5 lg:px-10 w-full">
      {children}
    </div>
  );
}