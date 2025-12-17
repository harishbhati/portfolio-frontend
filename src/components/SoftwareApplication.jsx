import { getApplication } from "../api/api"
import { useApi } from "../hooks/useApi"

const SoftwareApplication = () => {
  const {data: applicationData, loading, error} = useApi(getApplication);
  const applications = applicationData?.softwareApplication;

  if(loading) return <p>Loading...</p>
  if(!applications || error) return <p>The application list are empty.</p>

  return (
    <section>
      <div className="max-w-[960px] mx-auto">
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Software Applications</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {applications.map(applicationItem => {
            return(
              <div key={applicationItem._id} className="flex flex-1 gap-3 rounded-lg border border-[#3b4354] bg-[#3a3b3e] p-4 items-center">
                <img src={applicationItem?.applicationIcon?.url} alt={applicationItem?.name} className="w-6 h-6" />
                <h2 className="text-white text-base font-bold leading-tight">{applicationItem?.name}</h2>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SoftwareApplication