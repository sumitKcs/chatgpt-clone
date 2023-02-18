'use client'

import { ArrowDownCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Message from "./Message";

type Props =  {
    chatId: string;
}

function Chat({chatId}: Props) {
  const { data: session } = useSession();
  const [messages] = useCollection( 
    session 
    && query(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      orderBy("createdAt", "asc")
    ) )
   
  const xHandler = () => {
    const sideBar: HTMLElement | null = document.getElementById("side-bar")
    const xButton: HTMLElement | null = document.getElementById("x-button")
    const topBar: HTMLElement | null = document.getElementById("top-bar")
    sideBar!.style.display = "none"
    xButton!.style.display = "none"
    topBar!.style.display = ""
  }
 



  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden" id="chats">
      <div onClick={xHandler} id="x-button" className="w-14 h-10 bg-[#202123] absolute top-5 left-36 pl-5 justify-center items-center hidden " >
      <XCircleIcon className="w-10 h-10 text-white " />
      </div>
      
      {messages?.empty && (
        <>
          <p className="mt-10 text-center text-white" >
            Type a prompt in below to get started
          </p>
          <ArrowDownCircleIcon className="h-10 w-10 mx-auto mt-5 text-white animate-bounce"  />
        </>
      ) }
      {messages?.docs.map((message) => {
        return <Message key={message.id}  message={message.data()} />
      })}
     

    </div>
  )
}

export default Chat
