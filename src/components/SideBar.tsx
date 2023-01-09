import React, { useContext, useState } from 'react'
import {  FiSun } from 'react-icons/fi'
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineSearch } from 'react-icons/ai'
import { ThemeContext } from '../Context'
import { Link } from 'react-router-dom'

interface ISidebar {
    show: boolean
}

const SideBar = ({ show }: ISidebar) => {

    const themeCtx = useContext(ThemeContext);
    const [showSearch, setShowSearch] = useState<boolean>(false);
    return (
        <div className={`${show ? "left-4" : "left-[-20vw]"} top-[50%] fixed flex justify-center items-center`}
            style={{
                transform: "translate(0,-50%)",
                transition: "all .3s ease-in-out"
            }}
        >
            <ul className="menu gap-y-2 menu-vertical dark:bg-[#292a38] bg-white p-2 justify-center rounded-box shadow-md">
                <li>
                    <Link to={'/'}>
                        <AiOutlineHome size={18} />
                    </Link>
                </li>
                <li className='relative'>
                    <button onClick={() => setShowSearch(!showSearch)}>
                        <AiOutlineSearch size={18} />
                    </button>
                    <div className={`${show && showSearch ? "bloack" : "hidden"} absolute w-[260px] top-0 left-[80px] h-[45px]  shadow-md dark:bg-[#292a38] bg-white p-0 m-0 focus:text-base-200`}>
                        <div className='p-2 gap-x-2 w-full h-full flex items-center'>
                            <input type="text" className='w-full h-full outline-none rounded-md px-2 border-[1px] border-base-300 text-sm' />
                            <button className='px-2 rounded-md bg-base-200 h-full text-sm'>Search</button>
                        </div>
                    </div>
                </li>
                <li>
                    <button>
                        <AiOutlineInfoCircle />
                    </button>
                </li>
                <li>
                    <button onClick={() => themeCtx.toggleTheme()}>
                        <FiSun size={18} />
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default SideBar