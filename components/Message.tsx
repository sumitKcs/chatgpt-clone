import { DocumentData } from "firebase/firestore";
import Typewriter from "react-ts-typewriter";

type Props = {
  message: DocumentData;
};

function Message({ message }: Props) {
  const isChatGPT = message.user.name === "ChatGPT";
  const text = message.text.toString();
  const chats = document.getElementById("chats")!;
  let lastScrollTop: number;
  let timeDiff;

  let messageTimestamp = message?.createdAt?.seconds!;
  const currentTimeStamp = Math.floor(Date.now() / 1000);
  timeDiff = currentTimeStamp - messageTimestamp;

  let inetervalTIme = setInterval(function () {
    chats.scrollTop = chats?.scrollHeight;
  }, 1000);

  lastScrollTop = chats.scrollTop;
  chats.addEventListener(
    "touchmove",
    function () {
      clearInterval(inetervalTIme);
    },
    false
  );

  chats.addEventListener(
    "scroll",
    function () {
      let st = window.pageYOffset || chats.scrollTop;
      if (st > lastScrollTop) {
        // downscroll code
      } else if (st < lastScrollTop) {
        //upscroll code
        clearInterval(inetervalTIme);
      } // else was horizontal scroll
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    },
    false
  );

  return (
    <div className={`py-5 text-white ${isChatGPT && "bg-[#434654]"} `}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img className="w-8 h-8" src={message.user.avatar} alt="user image" />
        <p className="whitespace-pre-wrap">
          {/* prevent typewriter effect by comparing msg time  */}
          {isChatGPT && timeDiff < 20 ? (
            <Typewriter text={text} cursor={false} speed={10} />
          ) : (
            text
          )}
        </p>
      </div>
    </div>
  );
}

export default Message;
