"use client";
import { Bars3Icon } from "@heroicons/react/24/outline";

function TopBar() {
  const topBarHandle = () => {
    const sideBar: HTMLElement | null = document.getElementById("side-bar");
    const topBar: HTMLElement | null = document.getElementById("top-bar");
    const xButton: HTMLElement | null = document.getElementById("x-button");
    sideBar!.style.display = "flex";
    topBar!.style.display = "none";
    xButton!.style.left = "60%";
    xButton!.style.display = "flex";
  };

  return (
    <>
      <div
        id="top-bar"
        className="left-0 w-screen bg-[#333333] border-gray-700 md:hidden sticky top-0"
      >
        <Bars3Icon
          onClick={topBarHandle}
          className="h-8 w-8 text-[#b3b3b3]  font-bold "
        />
      </div>
    </>
  );
}

export default TopBar;
