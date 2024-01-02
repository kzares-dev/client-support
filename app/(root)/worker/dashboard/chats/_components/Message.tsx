
function Message({
  fromClient
}: {
  fromClient: boolean
}) {
  return (
    <div className={`w-full flex ${fromClient? "" : "justify-end "} `}>

      <div className={`pl-3 pr-1 py-2 bg-white w-auto max-w-[300px] border pt-3  font-sans text-[15px] leading-7 ${fromClient? "rounded-tr-lg rounded-bl-lg" : "rounded-tl-lg rounded-br-lg bg-gray-100 border-[#00000020]"}`}>
        Message Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, ipsa. 
      </div>

    </div>
  )
}

export default Message
