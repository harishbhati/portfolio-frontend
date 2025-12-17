const HeaderSkeleton = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-[#282e39] px-10 py-3 animate-pulse">
      {/* Logo + Name */}
      <div className="flex items-center gap-4">
        <div className="size-4 bg-[#3a3f4b] rounded"></div>

        <div className="h-5 w-32 bg-[#3a3f4b] rounded"></div>
      </div>

      {/* Nav + Social + Avatar */}
      <div className="flex flex-1 justify-end gap-8">
        {/* Navigation Skeleton */}
        <ul className="flex items-center gap-9">
          <li className="h-4 w-12 bg-[#3a3f4b] rounded"></li>
          <li className="h-4 w-12 bg-[#3a3f4b] rounded"></li>
          <li className="h-4 w-12 bg-[#3a3f4b] rounded"></li>
          <li className="h-4 w-12 bg-[#3a3f4b] rounded"></li>
          <li className="h-4 w-16 bg-[#3a3f4b] rounded"></li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-2">
          <div className="h-10 w-10 bg-[#3a3f4b] rounded-lg"></div>
          <div className="h-10 w-10 bg-[#3a3f4b] rounded-lg"></div>
        </div>

        {/* Avatar */}
        <div className="size-10 bg-[#3a3f4b] rounded-full"></div>
      </div>
    </header>
  );
};

export default HeaderSkeleton;
