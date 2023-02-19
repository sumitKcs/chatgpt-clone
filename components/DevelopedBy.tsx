import Link from "next/link"

function DevelopedBy() {
  return (
    <div className="h-[3.6rem] text-[#cccccc] flex justify-center items-center ">Developed by &nbsp;<Link className="underline" href={"https://twitter.com/risesumit"} > Er. Sumit KR. </Link> </div>
  )
}

export default DevelopedBy
