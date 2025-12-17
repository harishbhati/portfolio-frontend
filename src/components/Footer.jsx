import { getUserPortfolio } from "../api/api"
import { useApi } from "../hooks/useApi"
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";

const Footer = () => {
  const {data:userData, loading} = useApi(getUserPortfolio);

  const user = userData?.user;
  if(loading) return <p>Loading...</p>
  
  return (
    <footer className="flex justify-center">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
          <div className="flex flex-wrap justify-center gap-4">
            <a href={user?.githubURL || "#"}>
              <div className="text-[#9ca6ba]" data-icon="GithubLogo" data-size="24px" data-weight="regular">
                <GithubIcon className="w-5 h-5" />
              </div>
            </a>
            <a href={user?.linkedinURL || "#"}>
              <div className="text-[#9ca6ba]" data-icon="LinkedinLogo" data-size="24px" data-weight="regular">
                <LinkedinIcon classes="w-5 h-5" />
              </div>
            </a>
          </div>
          <p className="text-[#9ca6ba] text-base font-normal leading-normal">© 2023 {user?.fullname}. All rights reserved.</p>
        </footer>
      </div>
    </footer>
  )
}

export default Footer