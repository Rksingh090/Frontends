import { useContext } from 'react'
import Base from '../../components/Base'


const Home = () => {
  return (
    <Base>
      <div className='flex justify-center items-center w-full'>
        <div className='flex flex-row justify-center my-4 gap-x-3 items-center'>
          <input type="text" placeholder='Search Repository' className="input focus:outline-none border-[2px] border-base-300 w-[400px]" />
          <button className='btn text-white dark:bg-primary border-none bg-slate-800'>Connect Github</button>
        </div>
      </div>
    </Base>
  )
}

export default Home;