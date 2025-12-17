import { getProject } from "../api/api"
import { useApi } from "../hooks/useApi"

const Projects = () => {
  const {data: projectData, loading, error} = useApi(getProject);
  const projects = projectData?.project;

  if(loading) return <p>Loading</p>
  if(!projects || error) return <p>Project list is empty.</p>
  return (
    <section>
      <div className="max-w-[960px] mx-auto">
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Projects</h2>
        <div className="grid grid-cols-[repeat(4,minmax(158px,1fr))] gap-3 p-4">
          {projects?.map(projectItem => {
            return(
            <div key={projectItem._id} className="flex flex-col bg-[#32343a] rounded-xl overflow-hidden">
              <img src={projectItem.projectBanner?.url} alt={projectItem.title} className="h-[125px] object-cover"/>
              <div className="px-3 py-2 flex-1 flex flex-col">
                <p className="text-white text-base font-medium leading-normal">{projectItem.title}</p>
                <p className="text-[#9ca6ba] text-sm font-normal leading-normal">{projectItem.description}</p>
                <ul className="flex items-center gap-2 mt-auto">
                  {projectItem?.technology?.map((techItem, index) => {
                    return(
                      <li key={index} className="flex items-center justify-center rounded-lg bg-[#282e39] p-1 text-white text-[12px] font-medium leading-normal">{techItem}</li>
                    )
                  })}
                </ul>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects