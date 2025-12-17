import React from 'react'

const AboutContentSkeloton = () => {
  return (
    <section className="animate-pulse">
      <div className="max-w-[960px] mx-auto">
        
        {/* Title Skeleton */}
        <div className="px-4 pb-3 pt-5">
          <div className="h-6 w-32 bg-[#3a3f4b] rounded" />
        </div>

        {/* Paragraph Skeleton */}
        <div className="px-4 pb-3 pt-1 space-y-2">
          <div className="h-4 w-full bg-[#3a3f4b] rounded" />
          <div className="h-4 w-full bg-[#3a3f4b] rounded" />
          <div className="h-4 w-11/12 bg-[#3a3f4b] rounded" />
          <div className="h-4 w-10/12 bg-[#3a3f4b] rounded" />
          <div className="h-4 w-9/12 bg-[#3a3f4b] rounded" />
        </div>

      </div>
    </section>
  )
}

export default AboutContentSkeloton