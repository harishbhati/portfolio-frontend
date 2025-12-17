const AboutSkeleton = () => {
  return (
    <section className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="@container">
          <div className="@[480px]:p-4">
            <div className="flex min-h-[480px] flex-col gap-6 @[480px]:gap-8 rounded-lg items-center justify-center p-4 bg-[#1c212b] animate-pulse">
              
              {/* Avatar Skeleton */}
              <div className="w-30 h-30 rounded-2xl bg-[#3a3f4b]" />

              {/* Name Skeleton */}
              <div className="h-10 w-64 bg-[#3a3f4b] rounded" />

              {/* Email Skeleton */}
              <div className="h-4 w-48 bg-[#3a3f4b] rounded" />

              {/* Button Skeleton */}
              <div className="h-12 w-40 bg-[#3a3f4b] rounded-lg mt-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSkeleton;
