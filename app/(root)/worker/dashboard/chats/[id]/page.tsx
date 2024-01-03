"use client";
import { useEffect, useState } from "react";
import ChatContainer from "../_components/ChatContainer";
import withResolver, { Resolver } from "@hoc/resolver.hoc";
import { Message, getChatMessages } from "@server/worker.api";
import { toast } from "react-toastify";
import MessageCard from "../_components/Message";
import MessageShrimmerContainer from "../_components/MessageShrimmerContainer";

function ChatBox({ params, resolver }
  : { params: { id: string }, resolver: Resolver }) {

  const [messages, setMessages] = useState<Message[]>([])


  useEffect(() => {
    resolver.create("chatMessages")

    getChatMessages(params.id)
      .then((res: Message[]) => {
        setMessages(res)
      })
      .catch(() => {
        toast.error("Failed to load messages")
      })
      .finally(() => {
        resolver.end("chatMessages")
      })

  }, [params.id])

  return (
    <section className="flex-1 flex  h-full">
      <div className="flex-1 bg-gray-50 overflow-auto scrollbar-hide p-5 border-b flex flex-col gap-5">

        {resolver.value.chatMessages ? <MessageShrimmerContainer /> : (
          messages.map((message: Message ) => <MessageCard {...message} />)
        )}

      </div>
    </section>
  )
}

export default withResolver(ChatBox)
