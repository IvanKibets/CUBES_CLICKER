import { FaBook } from 'react-icons/fa';

function Home() {

    return (
        <div>
            <h1 className="font-bold text-1xl">Welcome to the Digital Form</h1>
            <div><span className=" font-bold text-3xl">Your dashboard is updated</span><span className='text-sm text-slate-500'>    as 0f 10/10/2023</span></div>
            <br />
            <div className="grid grid-cols-3 gap-4">

                <div className="flex items-center justify-center h-24 rounded bg-white-50 dark:bg-white-800 shadow-lg shadow-black-500/50" >
                    <FaBook color='orange' className='hover:text-blue-100 mr-5' />
                    <h1 className="font-bold text-orange-400 dark:text-blue-500">Create new proposal</h1>
                </div>
                <div className="flex items-center justify-center h-24 rounded bg-white-50 dark:bg-white-800 shadow-lg shadow-black-500/50">
                    <FaBook color='orange' className='hover:text-blue-100 mr-5' />
                    <p className="font-bold text-orange-400 dark:text-blue-500">See my proposals</p>
                </div>
                <div className="flex items-center justify-center h-24 rounded bg-white-50 dark:bg-white-800 shadow-lg shadow-black-500/50">
                    <FaBook color='orange' className='hover:text-blue-100 mr-5' />
                    <p className="font-bold text-orange-400 dark:text-blue-500">See my applications</p>
                </div>
            </div>
            <br />
            <div className=''>
                <span>
                    <fieldset className="border-t border-slate-300">
                        <legend className="px-4 text-black text-1xl"> <span className="font-bold text-1xl">Performance</span></legend>

                    </fieldset>
                </span>
            </div>

            <div>
                <div className="radial-progress bg-base-200 text-blue-content border-4 border-orange" style={{ "--value": 70 }}>70%</div>
            </div>

        </div>)

}


export default Home;
