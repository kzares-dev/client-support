import { Message } from "@server/worker.api"

function MessageShrimmer({
  fromClient,

}: { fromClient: boolean} ) {
  return (
    <div className={`w-full flex ${fromClient ? "" : "justify-end "} `}>

      <div className={`w-full pl-3 pr-1 py-2 bg-gray-100 animate-pulse  max-w-[400px] h-[40px]  pt-3 rounded-md ${!fromClient && "bg-gray-200 "}`} />

    </div>
  )
}

export default MessageShrimmer
