import MessageShrimmer from "./Message.shrimmer"

function MessageShrimmerContainer() {
  return (
    <>
        <MessageShrimmer fromClient={false} />
        <MessageShrimmer fromClient={true} />
        <MessageShrimmer fromClient={false} />
        <MessageShrimmer fromClient={false} />
        <MessageShrimmer fromClient={true} />
        <MessageShrimmer fromClient={true} />
        <MessageShrimmer fromClient={false} />
        <MessageShrimmer fromClient={true} />
    </>
  )
}

export default MessageShrimmerContainer
