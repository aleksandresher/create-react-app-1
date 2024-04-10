import ProductListSkeleton from "@/components/skeletons/ProductListSkeleton";

export default function Loading() {
  return (
    <div className="flex w-full justify-center">
      <ProductListSkeleton />
    </div>
  );
}
