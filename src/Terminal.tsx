import React, { useState, useRef } from 'react'
import Base from './components/Base';

const Terminal = () => {
    const inputRef = useRef<HTMLInputElement | any>();
    const [commandHistory, setCommandHistory] = useState<Array<any>>([]);
    const [commandList, setCommandList] = useState([
        {
            cmd: "ls",
            out: "jackrapper"
        },
        {
            cmd: "pwd",
            out: "/home/rishab"
        },
        {
            cmd: "cp",
            out: "Copying.. content"
        },
        {
            cmd: "git",
            out: "Git command not found."
        },
        {
            cmd: "vicky",
            out: "Vicky is sleeping."
        },
    ])

    const [input, setInput] = useState("");

    const executeCommand = (usercmd: string) => {
        if(usercmd === ""){
            setCommandHistory([...commandHistory, {
                cmd: usercmd,
                out: ""
            }]);
            return;
        }

        // get cmd 
        const getCmd = commandList.filter((cmd) => cmd.cmd === usercmd);

        // get cmd length 
        if (getCmd.length > 0) {
            setCommandHistory([...commandHistory, getCmd[0]]);
        } else {
            setCommandHistory([...commandHistory, {
                cmd: usercmd,
                out: "Command not found"
            }]);
        }
        setInput("");
        let ele =  document.querySelector(".hideScrollbar");
        ele !== null && ele.scrollTo(0, ele?.scrollHeight || 0);
    }
    return (
        <Base>
            <div className='flex justify-center items-center h-[90vh] w-full'>
                <div
                    onClick={() => inputRef.current.focus()}
                    className='bg-slate-900 border-[5px] border-gray-300 max-w-[90%] w-[90%] overflow-y-auto overflow-x-hidden h-[90%] p-2 hideScrollbar' >

                    {commandHistory.length > 0 &&
                        commandHistory.map((cmditem, index) => {
                            return (
                                <div className='flex flex-col text-white' key={index}>
                                    <div className='flex flex-row w-full my-1 text-white'>
                                        <p className='w-auto'> /usr/bin ~# </p>
                                        <p className='mx-2 max-w-full border-none text-white outline-none bg-transparent'>{cmditem.cmd}</p>
                                    </div>
                                    {cmditem.out.length > 0 && (

                                        <div className='py-2 text-white'>
                                            {cmditem.out}
                                        </div>
                                    )}
                                </div>
                            )
                        })}


                    <div className='grid w-full my-1' style={{
                        gridTemplateColumns: "auto 1fr"
                    }}>
                        <p className='text-white w-auto '> /usr/bin ~#</p>
                        <input
                            ref={inputRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && executeCommand(input)}
                            type="text"
                            className='mx-2 text-white border-none w-auto outline-none bg-transparent'
                            placeholder='type here' />
                    </div>
                </div>
            </div>
        </Base>
    )
}

export default Terminal