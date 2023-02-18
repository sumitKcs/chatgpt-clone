'use client'
import { Bars3Icon } from '@heroicons/react/24/outline'


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

  return (  
    <div id="top-bar" className='absolute top-0 left-0 w-screen bg-[#333333]  md:hidden border border-gray-700' >
        <Bars3Icon onClick={topBarHandle} className='h-8 w-8 text-[#b3b3b3]  font-bold ' />
    </div>
    
  )
}

export default TopBar
