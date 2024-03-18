import Nav from "@/components/Nav";
import SideBar from "@/components/SideBar";
const ProtectedLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`h-full relative`}>
      <aside className="h-full flex w-[15%] flex-col bg-main fixed z-80 shadow-sm">
        <SideBar />
      </aside>
      <main className="md:pl-72 p-5 bg-[#f3f3f3] min-h-screen">
        <Nav />
        {children}
      </main>
    </div>
  );
};

export default ProtectedLayout;
