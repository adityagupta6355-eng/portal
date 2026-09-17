import ProductPage from "@/components/products/[id]/page";

export default function ProductRoute({
    params,
}: {
    params: { id: string };
}) {
    return (
        <ProductPage params={params} />
    )
}