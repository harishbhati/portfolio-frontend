import { getUserPortfolio } from "../api/api";
import { useApi } from "../hooks/useApi";
import AboutSkeleton from "./skeleton/AboutSkeleton";

const About = () => {
  const { data: userData, loading, error } = useApi(getUserPortfolio);
  const user = userData?.user;
  
  if(loading) return <AboutSkeleton />

  if(!user || error){
    return(
      <section className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="@container">
            <div className="@[480px]:p-4">
              Page banner data is not available.
            </div>
          </div>
        </div>
      </section>
    )
  }
  return (
    <section className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="@container">
          <div className="@[480px]:p-4">
            <div
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuArQ3HnVOz6MjsWNRHPUUt58KGT2XAvXCuAv9pcNIfQrLB4J386dhSIxU_Ab9jMgpLDW3KKi1yMuhkn3GQECIuD4JC09rCu_UqSVtJqDRhzNb1q0agofnHrsu0F1tjPU6D1vlkl3GZtf6KYPppTmfOY0Ul2Wpg_3CXTVZvph-Bd90GCO_BuinFrsBmFelH6643ECf1NEGdTCL62EgCMvn3kdp9LrF9J8bWxxLZpj0wWUjQXeuMtx2WTfYpEkDTMOqhzGD8gI_Z-S6w")`
              }}
            >
              <div className="flex flex-col gap-2 text-center">
                <img src={user?.avtar?.url} className="w-30 mx-auto rounded-2xl" />
                <h1
                  className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                >
                  {user?.fullname}
                </h1>
                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                  {user?.email}
                </h2>
              </div>
              <a href={user?.portfolio || "#"}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0d59f2] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
              >
                <span className="truncate">View My Work</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;