import loader from "@/public/loader.gif"
import Image from "next/image"

function Loader({ className="", width=100, height=100 } : { className?: string, width?: number, height?: number}) {
  return (
    <Image src={loader} className={className} alt="" width={width} height={height} />
  )
}

export default Loader
