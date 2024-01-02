import loader from "@/public/loader.gif"
import Image from "next/image"

function Loader({ styles="" } : { styles: string}) {
  return (
    <Image src={loader} className={styles} alt="" width={100} height={100} />
  )
}

export default Loader
