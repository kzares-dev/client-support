import Message from "./Message"

const messages = [
  {
    fromClient: true
  },
  {
    fromClient: false
  },
  {
    fromClient: true
  },
  {
    fromClient: true
  },
  {
    fromClient: false
  },
]


function ChatContainer() {
  return (
    <div className="flex-1 bg-gray-50 overflow-auto scrollbar-hide p-5 border-b flex flex-col gap-5">

      {messages.map(({ fromClient }, index) => <Message fromClient={fromClient} />)}
    </div>
  )
}

export default ChatContainer
