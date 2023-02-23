// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import query from "../../lib/queryApi";
import type { NextApiRequest, NextApiResponse } from 'next'
import admin from "firebase-admin";
import { adminDb } from '../../firebaseAdmin';

type Data = {
    answer: string;
};



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { prompt, chatId, model, session } = req.body

    if(!prompt) {
        res.status(400).json({answer : "Please provide a prompt!"});
        return
    }
    if(!chatId) {
        res.status(400).json({answer: "Please provide a valid chat ID!"})
        return
    }

    // chatgpt query
    const response = await query(prompt, chatId, model);

    const message: Message = {
        text: response || "Server is busy. Please try again.",
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: "ChatGPT",
            name: "ChatGPT",
            avatar: "https://i.postimg.cc/CMXCBcvs/chatgpt-icon.png"
        }
    }
    await adminDb
    .collection('users')
    .doc(session?.user?.email!)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text })
}
