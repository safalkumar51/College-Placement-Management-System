import { useNavigate } from 'react-router-dom';
import HeroImg from '../../assets/heroImg.jpg';

function LandingHeroPage() {

    const navigate = useNavigate();

  const style = {
    container: {
      backgroundImage: `url(${HeroImg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "85vh",
    }
  }

  return (
    <>
      <div id='home' className='flex flex-col justify-top items-center gap-8' style={style.container}>
        <h3 className='text-4xl mt-10 p-10  bg-zinc-700 text-white rounded-full max-md:text-4xl max-sm:text-2xl'>
          WELCOME TO PLACEMENT PORTAL
        </h3>
      </div>
    </>
  )
}

export default LandingHeroPage