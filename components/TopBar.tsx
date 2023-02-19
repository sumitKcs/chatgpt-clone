'use client'
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/outline'


function TopBar() {

  const topBarHandle = () => {
    const sideBar: HTMLElement | null = document.getElementById('side-bar');
    const topBar: HTMLElement | null = document.getElementById('top-bar')
    const xButton: HTMLElement | null = document.getElementById('x-button')
    sideBar!.style.display = "flex";
    sideBar!.style.minWidth = "60vw";
    topBar!.style.display = "none"
    xButton!.style.left = "60%"
    xButton!.style.display = "flex"

  }

  const xHandler = () => {
    const sideBar: HTMLElement | null = document.getElementById("side-bar")
    const xButton: HTMLElement | null = document.getElementById("x-button")
    const topBar: HTMLElement | null = document.getElementById("top-bar")
    sideBar!.style.display = "none"
    xButton!.style.display = "none"
    topBar!.style.display = ""
  }
 

  return (  
    <>
     <div id="top-bar" className='left-0 w-screen bg-[#333333] border-gray-700 md:hidden ' >
        <Bars3Icon onClick={topBarHandle} className='h-8 w-8 text-[#b3b3b3]  font-bold ' />
    </div>
    <div onClick={xHandler} id="x-button" className="w-14 h-10 bg-[#202123] absolute top-5 left-36 pl-5 justify-center items-center hidden " >
    <XCircleIcon className="w-10 h-10 text-white " />
    </div>
    </>
   
    
  )
}

export default TopBar
