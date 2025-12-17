import { LogoIcon } from "../icons/LogoIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import HeaderSkeleton from "./skeleton/HeaderSkeleton";
import { getUserPortfolio } from "../api/api";
import { useApi } from "../hooks/useApi";

const navigationText = [
    {
        name: "About",
        path: "#"
    },
    {
        name: "Timeline",
        path: "#"
    },
    {
        name: "Skills",
        path: "#"
    },
    {
        name: "Projects",
        path: "#"
    },
    {
        name: "Applications",
        path: "#"
    }
]
const Header = () => {
  const { data: userData, loading } = useApi(getUserPortfolio);
  const user = userData?.user;
  console.log("Header User Data:", user);

  if(loading || user === undefined) {
    return <HeaderSkeleton />
  }

  // if(user !== undefined){ 
  //   return(
  //     <header className="flex items-center justify-between px-10 py-3 border-b border-[#282e39] text-white">
  //       <p>Header data not available.</p>
  //     </header>
  //   )
  // }
    
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#282e39] bg-[#111318] px-10 py-3 sticky top-0">
      <div className="flex items-center gap-4 text-white">
        <div className="size-4">
          <LogoIcon  className="w-4 h-4" />
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          {user?.fullname}
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <ul className="flex items-center gap-9">
            {navigationText?.map((navText, index) => {
                return(
                    <li key={index}>
                        <a className="text-white text-sm font-medium leading-normal" href="#">{navText.name}</a>
                    </li>
                )
            })}
        </ul>
        <div className="flex gap-2">
          <a href={user?.githubURL || "#"} target="_blank" className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#282e39] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <div
              className="text-white"
              data-icon="GithubLogo"
              data-size="20px"
              data-weight="regular"
            >
                <GithubIcon className="w-5 h-5" />
            </div>
          </a>
          <a href={user?.linkedinURL || "#"} className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#282e39] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <div
              className="text-white"
              data-icon="LinkedinLogo"
              data-size="20px"
              data-weight="regular"
            >
                <LinkedinIcon classes="w-5 h-5" />
            </div>
          </a>
        </div>
        <div
          className="rounded-full size-10"
        >
            <img src={user?.avtar?.url} alt={user?.fullname} className="h-full w-full object-cover rounded-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;
