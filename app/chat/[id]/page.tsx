import Chat from "../../../components/Chat"
import ChatInput from "../../../components/ChatInput"
import DevelopedBy from "../../../components/DevelopedBy";

type Props = {
    params: {
        id: string;
    }
}
function ChatPage({params: {id}}: Props) {
  return (
    <div className="flex flex-col h-[98svh] md:h-screen overflow-hidden " >
      <Chat chatId={id} />
      <ChatInput chatId={id} />
      {/* <DevelopedBy/> */}

    </div>
  )
}

export default ChatPage
