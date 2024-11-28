import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const subnitHandler = () => {
        navigate(`/room/${input}`)
    }
    return (
        <div className='container'>
            <div className="flex items-center justify-center h-[100%] w-[100%] mt-[25%]">
                <input className="w-[80%] p-3 rounded-l-[5px]  focus:outline-none border border-solid " value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Enter your name..." />
                <button onClick={subnitHandler} className="bg-slate-800 w-[20%] p-3 focus:outline-none rounded-r-[5px] text-gray-200 font-[500] border border-solid border-slate-800">Join</button>
            </div>
        </div>
    )
}
export default HomePage