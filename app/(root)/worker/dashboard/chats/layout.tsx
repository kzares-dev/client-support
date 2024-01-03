"use client";
import { Layers } from "lucide-react"
import ChatCard from "@components/WorkerChats/ChatCard"
import ChatInput from "@components/WorkerChats/ChatInput"
import { useEffect, useState } from "react"
import { Chat, getActiveChats } from "@server/worker.api"
import withResolver, { Resolver } from "@hoc/resolver.hoc"
import { toast } from "react-toastify";
import ChatCardShrimmer from "@components/WorkerChats/ChatCard.shrimmer";

function Chats({ resolver, children }: { resolver: Resolver, children: React.ReactNode }) {


    const [activeChats, setActiveChats] = useState<Chat[]>([])

    useEffect(() => {

        resolver.create("getChats");

        // Fetch the active chats
        getActiveChats()
            .then((res: Chat[]) => {
                setActiveChats(res)
            })
            .catch(() => {
                toast.error("Failed to load chats")
            })
            .finally(() => {
                resolver.end("getChats");
            })

    }, [])

    return (
        <div className="flex-1 h-auto flex flex-row" >
            {/*-- Chat Container --*/}
            <div className="flex-1 h-auto flex flex-col">

                <div className="flex-1 flex items-center justify-center">
                    {children}
                </div>
                <ChatInput />

            </div>

            {/*-- Available chats --*/}
            <div className="w-[300px] h-auto border-l bg-white flex flex-col py-4 px-2">
                {/*-- Chat title --*/}
                <div className="flex flex-row items-center gap-4 border-b pb-5 border-gray-200 px-4">
                    <Layers strokeWidth={2} size={35} color="black" />

                    <div className="flex flex-col">
                        <p className="text-lg text-black font-semibold">Active Chats</p>
                        <p className="text-gray-500" >website.com</p>
                    </div>

                </div>

                {/*-- Chats List --*/}
                <div className="flex flex-col gap-5 pt-10 overflow-auto scrollbar-hide">
                    {resolver.value.getChats ? (
                        <>
                            <ChatCardShrimmer />
                            <ChatCardShrimmer />
                            <ChatCardShrimmer />
                            <ChatCardShrimmer />
                            <ChatCardShrimmer />
                            <ChatCardShrimmer />
                        </>
                    ) : (
                        activeChats.map((chat: Chat) => <ChatCard {...chat} />)
                    )}
                </div>
            </div>
        </div>
    )
}

export default withResolver(Chats)
