import React from 'react'
import { Link } from 'react-router-dom';
import "./Home.css";

export default function Home() {
    return (
        <div>
            <div id="image" className="h-96 flex flex-col items-start bg-[url('./background.jpg')] bg-cover">
                <div className='mt-24'>
                <p id="passion" className="text-3xl font-sans font-bold text-gray-800 mb-3 mt-6 ml-24">FOLLOW YOUR PASSION</p>
                <p id="stem" className="text-lg text-gray-800 ml-24 mb-5">Science Technology Engineering Mathematics</p>
                <input
                    type="text"
                    id="search"
                    placeholder="Search for colleges, courses, exams, QnAs...."
                    className="px-4 py-4 h-11 w-96 ml-24 mb-6 border border-gray-500 rounded-2xl focus:outline-none focus:border-blue-500"
                />
                </div>
            </div>

            <div>
                <p className="text-sm text-gray-800 items-center mt-5">Discover Bachelor's Program in Science and Engineering</p>
                <div id="btn" className='ml-auto mt-5 mb-5'>
                    <button  id="science"  className='h-28 w-52 bg-[#cbd5e1] border border-black-500 rounded-lg'>
                        <img src="./science.png" alt="Image Description" className='size-16 ml-16 mt-2 rounded-lg'/>
                        <Link to="#"  className="hover:underline text-gray-800 font-medium">Science</Link>
                    </button>

                    <button id="engineering" className='h-28 w-52 bg-[#cbd5e1] border border-black-800 rounded-lg items-center'>
                        <img src="./engineering.png" alt="Image Description" className='size-16 ml-16 mt-2 rounded-lg'/>
                        <Link to="#" className="hover:underline text-gray-800 font-medium">Engineering</Link>
                    </button>
                </div>
            </div>

            <div>
                <p className='font-bold'>Top Cities</p>
            </div>

            <div className='mb-8 mt-8 btn-container'>
                <button className='h-28 w-44 border border-black-800 rounded-lg  items-center'>
                    <img src="./kolkata.png" alt="Image Description" className='size-16 rounded-lg'/>
                    <Link to="#" className="hover:underline text-gray-800 font-medium">Kolkata</Link>
                </button>

                <button className='h-28 w-44 border border-black-800 rounded-lg  items-center'>
                    <img src="./pune.JPG" alt="Image Description" className='size-16 rounded-lg'/>
                    <Link to="#" className="hover:underline text-gray-800 font-medium">Pune</Link>
                </button>

                <button className='h-28 w-44 border border-black-800 rounded-lg items-center'>
                    <img src="./banglore.png" alt="Image Description" className='size-16 rounded-lg'/>
                    <Link to="#" className="hover:underline text-gray-800 font-medium">Banglore</Link>
                </button>

                <button className='h-28 w-44 border border-black-800 rounded-lg items-center'>
                    <img src="./mumbai.png" alt="Image Description" className='size-16 rounded-lg'/>
                    <Link to="#" className="hover:underline text-gray-800 font-medium">Mumbai</Link>
                </button>

                <button className='h-28 w-44 border border-black-800 rounded-lg items-center'>
                    <img src="./jaipur.png" alt="Image Description" className='size-16 rounded-lg'/>
                    <Link to="#" className="hover:underline text-gray-800 font-medium">Jaipur</Link>
                </button>

                <button className='h-28 w-44 border border-black-800 rounded-lg items-center'>
                    <img src="./gurgaon.png" alt="Image Description" className='size-16 rounded-lg'/>
                    <Link to="#" className="hover:underline text-gray-800 font-medium">Gurgaon</Link>
                </button>
            </div>  
        </div>

    );
}