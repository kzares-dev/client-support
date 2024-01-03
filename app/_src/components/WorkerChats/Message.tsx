import { Message } from "@server/worker.api"

function Message({
  fromClient,
  id,
  text,
  date,
}: Message) {
  return (
    <div className={`w-full flex ${fromClient ? "" : "justify-end "} `}>

      <div className={`p-6 py-2 w-full bg-white shadow  
      rounded-bl-none text-left max-w-[400px] text-gray-700 border pt-3 rounded-md font-sans text-[15px] leading-7 ${!fromClient && "bg-gray-50 rounded-br-none text-gray-600 "}`}>
        {text}
      </div>

    </div>
  )
}

export default Message
