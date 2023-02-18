import Link from "next/link";
import Chat from "../../../components/Chat"
import ChatInput from "../../../components/ChatInput"

type Props = {
    params: {
        id: string;
    }
}
function ChatPage({params: {id}}: Props) {
  return (
    <div className="flex flex-col h-screen overflow-hidden" >
      <Chat chatId={id} />
      <ChatInput chatId={id} />
      <div className="h-[3.6rem] md:hidden text-[#cccccc] flex justify-center items-center ">Developed by &nbsp;<Link className="underline" href={"https://twitter.com/risesumit"} > Er. Sumit KR. </Link> </div>

    </div>
  )
}

export default ChatPage
