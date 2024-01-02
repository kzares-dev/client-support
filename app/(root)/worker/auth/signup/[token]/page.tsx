import { Button, InputText, Loader } from "@components/common"
import { ArrowBigRight } from "lucide-react"
import Link from "next/link"

function WorkerSignUp({ params }: { params: { token: string } }) {


  //return (
  //  <div className="flex items-center justify-center flex-1 min-h-screen flex-col gap-1">
  //      <Loader />
  //      <h1 className="text-xl font-bold text-gray-300">Validating your invitation</h1>
  //  </div>
  //)


  return (
    <div className="flex-container w-full min-h-[100vh] bg-gray-50 p-4">
      <div className="flex flex-col px-5 bg-white border w-full max-w-[450px] min-h-[500px] items-center py-5">

        <h1 className="text-[40px] font-normal leading-1 underline text-gray-800 "> Onboard </h1>

        <div className="pt-10 flex flex-col gap-5 w-full">

          <InputText
            placeholder="Email..."
            type="email" />
          <InputText
            placeholder="Username..."
            type="text" />
          <InputText
            placeholder="Password..."
            type="password" />


        </div>

        <div className="flex-1 pt-10 w-full flex items-end justify-end ">
          <Button text="Continue" fill={true} Icon={<ArrowBigRight color="white" />} />
        </div>


      </div>
    </div>
  )

}

export default WorkerSignUp
