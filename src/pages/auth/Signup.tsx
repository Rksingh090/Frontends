import React, { useContext } from 'react'
import { ThemeContext } from '../../Context'
import { FiSun } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
const Signup = () => {
    const themeCtx = useContext(ThemeContext);

    return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                transition={{ duration: 1 }}
                className="w-full overflow-hidden h-screen flex justify-center items-center">

                <div className="flex flex-col p-4 rounded-[15px] w-[500px] items-center" style={{
                    boxShadow: themeCtx.theme === "light" ? "-1px 2px 5px #d9d9d9" : "-1px 1px 5px #39393990"
                }}>
                    <FiSun className='cursor-pointer self-end' onClick={() => themeCtx.toggleTheme()} />
                    <div className="flex flex-row my-4 gap-x-6 items-center">
                        <h2 className='text-xl font-medium'>Sign Up</h2>
                    </div>
                    <input type="text" placeholder="Name" className="input focus:outline-none input-bordered w-full" />
                    <input type="text" placeholder="Email" className="input focus:outline-none my-4 input-bordered w-full" />
                    <input type="text" placeholder="Password" className="input focus:outline-none input-bordered w-full" />
                    <input type="text" placeholder="Confirm Password" className="input focus:outline-none input-bordered w-full my-4" />
                    <button className="btn bg-warning border-none dark:bg-primary w-full">Signup</button>
                    <div className='flex flex-row justify-center my-3 gap-x-4'>
                        <p>Already have account ?</p>
                        <Link to={"/login"} className='dark:text-primary text-warning cursor-pointer'>Login</Link>
                    </div>
                </div>
            </motion.div>
    )
}

export default Signup