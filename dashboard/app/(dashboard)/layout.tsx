import SideBar from "@/components/SideBar";
const ProtectedLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={` h-full relative `}>
      <aside className="h-full flex w-[15%] flex-col fixed z-80 bg-white shadow-sm">
        <SideBar />
      </aside>
      <main className="md:pl-72 px-6 py-6 bg-[#f4f4f4] min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default ProtectedLayout;
