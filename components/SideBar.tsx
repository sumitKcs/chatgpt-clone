'use client'

import { collection, orderBy, query } from "firebase/firestore";
import { useSession,signOut } from "next-auth/react"
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import NewChat from "./NewChat"

function SideBar() {
    const { data: session } = useSession();

    const [chats, loading, error] = useCollection(
        session && query(collection(db, 'users', session?.user?.email!, "chats"), orderBy("createdAt", "asc"))
    )
    console.log(chats)
  return (
    <div className="p-2 flex flex-col h-screen " >
        <div className="flex-1" >
            <NewChat/>

            <div>
                {/* modal selection  */}
            </div>
                 {/* map through the chat rows  */}
               <>
               { chats?.docs.map(chat => {
                return(

                    <ChatRow key={chat.id} id={chat.id} />                )
                   
                 }) }
               </>
                
                 
                 
        </div>
        {
            session && (
                <img 
                onClick={() => signOut()}
                src={session?.user?.image!}
                alt="profile pic"
                className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50 "
                />
            )
        }
    
    </div>
  )
}

export default SideBar