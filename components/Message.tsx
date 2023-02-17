import { DocumentData } from "firebase/firestore"

type Props = {
    message:  DocumentData
}



function Message({message}: Props) {
    const isChatGPT = message.user.name === "ChatGPT"
  return (
   <div className={`py-5 text-white ${isChatGPT && "bg-[#434654]" } `} >
     <div className="flex space-x-5 px-10 max-w-2xl mx-auto" >
        <img 
        className="w-8 h-8"
        src={message.user.avatar}
        alt="user image"/> 
      <p>
        {message.text.trim()}
      </p>
    </div>
   </div>
  )
}

export default Message
