import { useApi } from '../hooks/useApi';
import { getUserPortfolio } from '../api/api';
import AboutContentSkeloton from './skeleton/AboutContentSkeloton';

const AboutContent = () => {
  const { data: userData, loading, error } = useApi(getUserPortfolio);
  const user = userData?.user;

  if(loading) return <AboutContentSkeloton />
  if(!user || error) {
    return(
      <section>
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">About Me</h2>
          <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
            About content is not available.
          </p>
        </div>
    </section>
    )
  }
  return (
    <section>
      <div className="max-w-[960px] mx-auto">
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">About Me</h2>
        <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
        {user.aboutMe}
        </p>
      </div>
    </section>
  )
}

export default AboutContent