import { MessageCircle } from "lucide-react"

function ChatCard() {
  return (
    <div className="flex flex-row border rounded-md flex-end items-center py-3 px-2 gap-3 relative z-2">

      <div className="absolute top-0 right-0 w-7 h-7 flex items-center justify-center rounded-full border bg-gray-700 text-white"> 8 </div>

      <MessageCircle />

      <div className="flex-1 h-auto">
        <h1 className="text-lg text-gray-900 font-semibold">John Doe</h1>
        <p className="text-sm text-gray-600">johndoe@email.com</p>
        <p className="text-sm text-gray-300 line-clamp-1 pt-1">Lorem ipsum dolor sit dolor is ameth consecureo...</p>
      </div>

    </div>
  )
}

export default ChatCard
