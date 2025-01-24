import SideNav from "@/ui/dashboard/sidenav";
import NavComponent from "@/ui/nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-[312px]">
        <SideNav />
      </div>
      <div className="flex-grow md:overflow-y-auto">
        <NavComponent />
        <div className="flex-grow md:overflow-y-auto p-6 md:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
