import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";

export default function SupplierLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f7f7fa]">
      <Sidebar />

      <div className="ml-[250px] min-h-screen">
        <Header />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}