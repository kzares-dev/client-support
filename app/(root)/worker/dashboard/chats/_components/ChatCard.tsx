import { Chat } from "@server/worker.api"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

function ChatCard({ name, email, id, lastMsg }: Chat) {
  return (
    <Link href={`/worker/dashboard/chats/${id}`}  className="flex flex-row border rounded-md flex-end items-center py-3 px-2 gap-3 relative z-2">

      <div className="absolute top-0 right-0 w-7 h-7 flex items-center justify-center rounded-full border bg-gray-700 text-white"> 8 </div>

      <MessageCircle />

      <div className="flex-1 h-auto">
        <h1 className="text-lg text-gray-900 font-semibold"> {name} </h1>
        <p className="text-sm text-gray-600"> {email} </p>
        <p className="text-sm text-gray-300 line-clamp-1 pt-1"> {lastMsg} </p>
      </div>

    </Link>
  )
}

export default ChatCard
