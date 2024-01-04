import ChatInput from "@components/WorkerChats/ChatInput"
import MessageShrimmerContainer from "@components/WorkerChats/MessageShrimmerContainer";
import withResolver, { Resolver } from "@hoc/resolver.hoc"
import { getChatMessages } from "@server/client.api";
import { Message } from "@server/worker.api";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import MessageCard from "./MessageCard";

function ChatContainer({ id, resolver }: { id: string , resolver: Resolver }) {

    const [messages, setMessages] = useState<Message[]>([])

    useEffect(() => {

        resolver.set({
            key: "chatMessages",
            action: () => getChatMessages(""),
            callback: res => setMessages(res),
            error: error => toast.error("Failed to load messages"),
        })

    }, [id])


    return (
        <div className="flex-1 h-auto flex flex-col">

            {/*-- Show messages --*/}
            <div className="flex-1 flex items-center justify-center">

                <section className="flex-1 flex h-full">
                    <div className="flex-1 bg-gray-100 overflow-auto scrollbar-hide p-5 border-b flex flex-col gap-5">

                        {resolver.value.chatMessages ? <MessageShrimmerContainer /> : (
                            messages.map((message: Message) => <MessageCard {...message} />)
                        )}

                    </div>
                </section>


            </div>

            {/*-- Input --*/}
            <ChatInput />

        </div>
    )
}

export default withResolver(ChatContainer)
