"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { db } from "../firebase";

type ButtonText = {
  text?: string;
};

function NewChat({ text }: ButtonText) {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        messges: [],
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );

    router.push(`/chat/${doc.id}`);
  };

  return (
    <div onClick={createNewChat} className="border border-gray-700  chatRow">
      <PlusIcon className="h-4 w-4" />
      <p className="text-lg">{!text ? "New Chat" : text}</p>
    </div>
  );
}

export default NewChat;
