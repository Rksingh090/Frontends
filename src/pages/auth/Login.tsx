import React, { useContext } from 'react'
import { FiSun } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../Context'
import { motion } from 'framer-motion'
import { AiOutlineHome } from 'react-icons/ai'

const Login = () => {
    const themeCtx = useContext(ThemeContext);
    const navigate = useNavigate();
    
    return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full  h-screen flex justify-center items-center overflow-hidden">

                <div className="flex flex-col p-4 rounded-[15px] w-[500px] items-center" style={{
                    boxShadow: themeCtx.theme === "light" ? "-1px 2px 5px #d9d9d9" : "-1px 1px 5px #39393990"
                }}>
                    <div className='w-full flex justify-between'>
                        <AiOutlineHome className='cursor-pointer self-end' onClick={() =>navigate('/')} />
                        <FiSun className='cursor-pointer self-end' onClick={() => themeCtx.toggleTheme()} />
                    </div>

                    <div className="flex flex-row my-4 gap-x-6 items-center">
                        <h2 className='text-xl font-medium'>Login</h2>
                    </div>
                    <input type="text" placeholder="Email Address" className="input focus:outline-none input-bordered w-full" />
                    <input type="text" placeholder="Password" className="input focus:outline-none input-bordered w-full my-4" />
                    <button className="btn border-none dark:bg-primary bg-warning w-full">Login</button>

                    <div className='flex flex-row justify-center py-3 gap-x-4'>
                        <p>Don't have account ?</p>
                        <Link to={'/signup'} className='dark:text-primary text-warning cursor-pointer'>Sign Up</Link>
                    </div>
                </div>
            </motion.div>
    )
}

export default Login