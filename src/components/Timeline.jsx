import React from 'react'
import { getTimeline } from '../api/api';
import { useApi } from '../hooks/useApi';

const Timeline = () => {
   const { data: timelineData, loading, error } = useApi(getTimeline);
   const timeline = timelineData?.timeline;
   
   const sortedTimeline = timeline?.sort((a, b) => Number(b.timeline.from) - Number(a.timeline.from));

   if(loading) return <p>Loading...</p>
   if(!timeline || error) {
    return (
      <section>
        <div className="max-w-[960px] mx-auto">
          <p>Timeline is not available.</p>
        </div>
      </section>
    )
  }
  return (
    <section>
      <div className="max-w-[960px] mx-auto">
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Timeline</h2>
      <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
        {sortedTimeline?.map((timelineItem, index) => (
          <div key={index} className="contents">
            
            {/* Left timeline column */}
            <div className="flex flex-col items-center gap-1 pt-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-6"
                style={{
                  backgroundImage: timelineItem.timeline.to
                    ? "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtaHomsJ7zgrvoNob6uI6uyQPUV-4BdYFGA3DYIbhSAfMgLxhfY2hB6d5J4mod0eG26n_EI4Ds7PcXwkiyv7OeJT4qkHyjUUL05I4_zbhWNUvUelYVU9CvHJfX5nWmlF6pdkvyqpcRxUtAzk2q3SntQcB_2-CO35c-IvemQPt97_cU69dDLGHoT8mOAN6WUIGJhrSuQ3RXAUx9wEZMzDgh2189JS-LvG_0snXXU5rBwuS1FMrkAYYJDuzhkwDtR6LjEwBF7JpGZQ')"
                    : "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBR6P5xP44S8KY30HTaYYw4vNwO2zvIEHTgi-dQwM1_rjKxUuKFWeVDtBYykGDNr_2d5B354JE--LjkhHY0LAgL26BmbILB7CCgfNEtWSC96oLSmwC3lXWF80sBVEm8QPTMt4_EHq86FL3ICEv-u767EY_4IIW-xfqlT30oSNMQUfee5mbFJIsfkZopy-SVr8b8r3BkbazDMJsbWMi-hBDvYgwmKisHVMYLJjHICX0LxMnjIRshHSzGo28AkZ0CifZOMcAuzss2rw')",
                }}
              />
              {index !== sortedTimeline?.length - 1 && (
                <div className="w-[1.5px] bg-[#3b4354] h-2 grow" />
              )}
            </div>

            {/* Right content column */}
            <div className="flex flex-1 flex-col py-3">
              <p className="text-white text-base font-medium leading-normal">
                {timelineItem.title}
              </p>
              <p className="text-[#9ca6ba] text-[14px] font-normal leading-normal">
                {timelineItem.description}
              </p>
              <p className="text-[#9ca6ba] text-[14px] font-normal leading-normal">
                {timelineItem.timeline.from} -{" "}
                {timelineItem.timeline.to || "Present"}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
    </section>
  )
}

export default Timeline