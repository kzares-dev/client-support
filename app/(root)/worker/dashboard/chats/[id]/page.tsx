"use client";
import { useEffect, useState } from "react";
import withResolver, { Resolver } from "@hoc/resolver.hoc";
import { Message, getChatMessages } from "@server/worker.api";
import { toast } from "react-toastify";
import MessageCard from "@components/WorkerChats/Message";
import MessageShrimmerContainer from "@components/WorkerChats/MessageShrimmerContainer";

function ChatBox({ params, resolver }
  : { params: { id: string }, resolver: Resolver }) {

  const [messages, setMessages] = useState<Message[]>([])


  useEffect(() => {
   
    resolver.set({
      key: "chatMessages",
      action: () => getChatMessages(""),
      callback: res => setMessages(res),
      error: error => toast.error("Failed to load messages"),
    })
    
  }, [params.id])

  return (
    <section className="flex-1 flex h-full">
      <div className="flex-1 bg-gray-100 overflow-auto scrollbar-hide p-5 border-b flex flex-col gap-5">

        {resolver.value.chatMessages ? <MessageShrimmerContainer /> : (
          messages.map((message: Message ) => <MessageCard {...message} />)
        )}

      </div>
    </section>
  )
}

export default withResolver(ChatBox)
