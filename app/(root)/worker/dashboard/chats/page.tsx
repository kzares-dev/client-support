import { Layers } from "lucide-react"
import ChatCard from "./_components/ChatCard"
import ChatInput from "./_components/ChatInput"
import ChatContainer from "./_components/ChatContainer"

function Chats() {
    return (
        <div className="flex-1 h-auto flex flex-row" >
            {/*-- Chat Container --*/}
            <div className="flex-1 h-auto flex flex-col">

                <ChatContainer />
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
                    <ChatCard />
                    <ChatCard />
                    <ChatCard />
                    <ChatCard />
                    <ChatCard />
                    <ChatCard />
                    <ChatCard />
                    <ChatCard />
                </div>
            </div>
        </div>
    )
}

export default Chats
