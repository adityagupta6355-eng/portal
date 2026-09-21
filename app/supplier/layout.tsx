import SupplierLayoutWrapper from "@/components/admin/SupplierLayoutWrapper";

export default function SupplierLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SupplierLayoutWrapper>{children}</SupplierLayoutWrapper>;
}