'use client'

import { XCircleIcon } from "@heroicons/react/24/outline";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession,signOut } from "next-auth/react"
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import Modelselection from "./ModelSelection";
import NewChat from "./NewChat"

function SideBar() {
    const { data: session } = useSession();

    const [chats, loading, error] = useCollection(
        session && query(collection(db, 'users', session?.user?.email!, "chats"), orderBy("createdAt", "asc"))
    )
    
  
  return (
    <div  id="side-bar" className="p-2 hidden md:flex flex-col h-screen" >
        <div className="flex-1" >
            

            <div>
                <NewChat/> 
                    {/* modal selection  */}
                    <div className="hidden sm:inline" >
                        <Modelselection /> 
                    </div>
                
                    {/* map through the chat rows  */}
                <div className="flex flex-col space-y-2 my-2" >
                    {loading && (
                        <div className="animate-pulse text-center text-white" >
                            <p>Loading Chats...</p>
                        </div>
                    )}
                { chats?.docs.map(chat => {
                    return(

                        <ChatRow key={chat.id} id={chat.id} /> 
                        )
                    
                    }) }
               </div>
            </div>
                 
                 
        </div >
        {
            session && (
                <div className="flex flex-col justify-between items-center mb-[20vh] md:mb-[10vh] h-auto" >
                    <img 
                    
                    src={session?.user?.image!}
                    alt="profile pic"
                    className="h-13 w-13 md:h-15 md:w-15 rounded-full cursor-pointer mx-auto  hover:opacity-50"
                    />
                    <div className="w-15 h-15 text-sm text-white my-5 border border-gray-700 rounded-lg px-6 "> 
                        <button className="" onClick={() => signOut()} >Sign Out</button>  
                    </div>
                </div>
               
            )
        }
    
    </div>
  )
}

export default SideBar