import { getSkill } from "../api/api";
import { useApi } from "../hooks/useApi";

const Skills = () => {
  const {data: skillData, loading, error} = useApi(getSkill);
  const skills = skillData?.skill;

  if(loading) return <p>Loading...</p>
  if(!skills || error) return <p>No data found.</p>
  return (
    <section>
      <div className="max-w-[960px] mx-auto">
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Skills</h2>
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          {skills?.map(skillItem => {
            return(
              <div key={skillItem._id} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#282e39] pl-4 pr-4">
                <img src={skillItem?.skillIcon?.url} alt={skillItem.title} className="max-w-6 max-h-6" />
                <p className="text-white text-sm font-medium leading-normal">
                  {skillItem.title}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills;