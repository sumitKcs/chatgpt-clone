import Link from "next/link"

function DevelopedBy() {
  return (
    <div className="h-[3.6rem] text-[#cccccc] flex-col justify-center items-center border">
        <div className="flex-1">
        Developed by &nbsp;
        <Link className="underline" href={"https://twitter.com/risesumit"} >
             Er. Sumit KR. 
        </Link>
        </div>
         </div>
  )
}

export default DevelopedBy
