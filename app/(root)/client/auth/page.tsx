"use client"
import { Button, InputText, Loader } from "@components/common"
import withResolver, { Resolver } from "@hoc/resolver.hoc"
import { ArrowBigRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import Cookies from "js-cookie"
import { Client, signUp } from "@server/client.api"
import { useState } from "react"

function ClientAuth({ resolver }: { resolver: Resolver }) {

  // mounting the router so the client can be redirected to corresponding site
  const router = useRouter()

  const [collectedData, setCollectedData] = useState<Client>({
    email: "",
    password: '',
    username: "",
  })

  const submitData = () => {

    resolver.set({
      key: "signUp",
      action: () => signUp(collectedData),
      callback: (res) => {
        // saving auth jwt on cookies
        Cookies.set("clientToken", res.access_token, {
          expires: 30,
          path: "/",
        })

        toast.success("Account created succesfully")
        router.refresh()
      },
      error: (error) => toast.error("An error ocurred")
    })
  }

  return (
    <div className="flex-container w-full min-h-[100vh] bg-gray-50 p-4">
      <div className="flex flex-col px-5 bg-white border w-full max-w-[450px] min-h-[400px] items-center py-5">

        <h1 className="text-[40px] font-normal leading-1 underline text-gray-800 "> Open Account </h1>

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
          {resolver.value.signUp ?
            <Loader width={65} height={65} /> :
            <div onClick={submitData}>
              <Button
                text="Continue"
                fill={true}
                Icon={<ArrowBigRight
                  color="white" />
                }
              />
            </div>

          }
        </div>


      </div>
    </div>
  )
}

export default withResolver(ClientAuth)
