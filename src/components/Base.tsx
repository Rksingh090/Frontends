import React, { ReactNode, useState } from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'
interface BaseProps {
  children: ReactNode
}
const Base = ({ children }: BaseProps) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <div className='w-full overflow-hidden'>
      <Navbar onClick={() => setShowSidebar(!showSidebar)} />
      <SideBar show={showSidebar} />
      <div className='dark:bg-base-100 bg-[#FBFBFB]'>
        {children}
      </div>
    </div>
  )
}

export default Base