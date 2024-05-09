import { Skeleton } from "../../../@/components/ui/skeleton";

const UserListSkeleton = () => {
  return (
    <div className="w-full mt-9 p-4">
      <div className="w-8/12 flex flex-col gap-4">
        <div>
          <div className="flex w-[800px] justify-between">
            <div>
              <Skeleton className="h-4 w-[100px] bg-[#f7f1f5]" />
            </div>
            <div>
              <Skeleton className="h-4 w-[100px] bg-[#f7f1f5]" />
            </div>
            <div>
              <Skeleton className="h-4 w-[80px] bg-[#f7f1f5]" />
            </div>
            <div>
              <Skeleton className="h-4 w-[50px] bg-[#f7f1f5]" />
            </div>
            <div>
              <Skeleton className="h-4 w-[50px] bg-[#f7f1f5]" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex justify-between w-full">
                <div>
                  <Skeleton className="w-[100px] h-[40px] bg-[#f7f1f5]" />
                </div>
                <div>
                  <Skeleton className="h-[40px] w-[200px] bg-[#f7f1f5]" />
                </div>
                <div>
                  <Skeleton className="h-[40px] w-[50px] bg-[#f7f1f5]" />
                </div>
                <div>
                  <Skeleton className="h-[40px] w-[50px] bg-[#f7f1f5]" />
                </div>
                <div>
                  <Skeleton className="h-[40px] w-[50px] bg-[#f7f1f5]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserListSkeleton;
