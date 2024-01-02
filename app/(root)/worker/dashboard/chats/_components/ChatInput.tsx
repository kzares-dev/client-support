import { SendHorizonal } from "lucide-react"

function ChatInput() {
    return (
        <div className="py-4 px-6">


            <div className="border flex items-center rounded-md overflow-hidden" >
                <input
                    type="text"
                    placeholder="type your message..."
                    className=" cursor-pointer flex-1 bg-gray-50 py-4 px-4 overflow-auto scrollbar-hide"
                />

                <div className="w-[50px] flex items-center justify-center border-l cursor-pointer">
                    <SendHorizonal />
                </div>
            </div>

        </div>
    )
}

export default ChatInput
