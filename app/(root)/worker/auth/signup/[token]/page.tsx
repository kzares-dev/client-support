"use client";
import withResolver, { Resolver } from "@hoc/resolver.hoc"
import { Button, InputText, Loader } from "@components/common"
import { ArrowBigRight } from "lucide-react"
import { useEffect, useState } from "react"
import { signUp, validateInvitation } from "@server/worker.api";
import { toast } from "react-toastify";
import Cookies from "js-cookie"
import { useRouter } from "next/navigation";


function WorkerSignUp(
  { params, resolver, createResolver, updateResolver }
    : { params: { token: string }, resolver: Resolver["resolver"], createResolver: Resolver["createResolver"], updateResolver: Resolver["updateResolver"] }
) {

  // Collect data from the user 
  const [collectedData, setCollectedData] = useState<{ email: string, password: string, name: string, companyId: "" }>({
    email: "",
    password: '',
    name: "",
    companyId: ""
  })

  // creating a resolver and requesting an invitation verification to the server 
  useEffect(() => {
    createResolver("validateInvitation", true);

    validateInvitation(params.token)
      .then((res: any) => {
        setCollectedData({ ...collectedData, companyId: res.companyId })
        toast.success("Invitation Confirmed")
      })
      .catch(() => {
        toast.error("Invalid Invitation")
      })
      .finally(() => {
        updateResolver("validateInvitation")
      })

  }, [])

  // set up router for redirecting when request is filled
  const router = useRouter()

  // sending data from server & wait for response 
  const submitData = () => {

    createResolver("signUp", true)

    signUp(collectedData)
      .then((res: any) => {
        // saving auth jwt on cookies
        Cookies.set("workerToken", res.access_token, {
          expires: 30,
          path: "/"
        })

        toast.success("Account created succesfully")
        router.push("/worker/dashboard")

      })
      .catch((err) => {
        console.log(err)
        toast.error("Error to sign up")

      })
      .finally(() => {
        updateResolver("signUp")
      })
  }

  // render page loader while verification is pending 
  if (resolver.validateInvitation) return (
    <div className="flex items-center justify-center flex-1 min-h-screen flex-col gap-1">
      <Loader />
      <h1 className="text-xl font-bold text-gray-300">Validating your invitation</h1>
    </div>
  )


  if (collectedData.companyId) return (
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
          {resolver.signUp ?
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

export default withResolver(WorkerSignUp)
