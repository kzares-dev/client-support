"use client";

import { Button, InputText, Loader } from "@components/common"
import { Plans } from "../_components/Plans"
import { ArrowBigRight, HardHat } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { toast } from "react-toastify";
import { Admin, signUp } from "@server/admin.api";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import withResolver from "@hoc/resolver.hoc";

function AdminSignUp({ resolver, createResolver, updateResolver }: any) {

  // set up router for redirecting when request is filled
  const router = useRouter()

  // State for collecting data
  const [collectedData, setCollectedData] = useState<Admin>({
    email: "",
    password: '',
    name: "",
    company: "",
    plan: "free"
  })


  // sending data from server & waiting for response 
  const submitData = () => {
    // TODO: Submit data via form event
    //e: FormEvent<HTMLFormElement>
    //e.preventDefault();

    createResolver("signUp", true)

    signUp(collectedData)
      .then(async (res: any) => {
        console.log(res.access_token)
        // saving auth jwt on cookies
        Cookies.set("adminToken", res.access_token, {
          expires: 30,
          path: "/",
        })

        toast.success("Account created succesfully")
        router.push("/admin/dashboard")

      })
      .catch((err) => {
        toast.error("Error to sign up")

      })
      .finally(() => {
        updateResolver("signIn")
      })

  }


  return (
    <div className="flex-container w-full min-h-[100vh] bg-gray-50 p-4">

      <div className="flex flex-col lg:flex-row px-5 py-2 bg-white border w-full max-w-[1200px] min-h-[600px] ">

        { /*--  Data collect from the user  --*/}
        <div className="flex-1 h-full lg:min-h-[550px] border-r px-3 py-4 flex flex-col gap-2">

          <h1 className="text-[40px] font-normal leading-1 underline text-gray-800 "> Register Company </h1>

          <div className="pt-10 flex flex-col gap-5">
            <div className="flex flex-row gap-5">

              <InputText
                value={collectedData.email}
                onChange={(e: any) => setCollectedData({ ...collectedData, email: e.target.value })}
                placeholder="Email..."
                type="email" />

              <InputText
                value={collectedData.name}
                onChange={(e: any) => setCollectedData({ ...collectedData, name: e.target.value })}
                placeholder="AdminName..."
                type="text" />
            </div>

            <InputText
              value={collectedData.company}
              onChange={(e: any) => setCollectedData({ ...collectedData, company: e.target.value })}
              placeholder="Company..."
              type="text" />

            <InputText
              value={collectedData.password}
              onChange={(e: any) => setCollectedData({ ...collectedData, password: e.target.value })}
              placeholder="Password..."
              type="password" />


          </div>


          <Link href="/admin/auth/signin" className="pt-5 underline font-bold text-gray-500 pl-2 " >
            Alredy have an account?
          </Link>


          <div className="flex-1 pt-10  flex items-end justify-between ">
            <Button text="Enter as a worker" fill={true} Icon={<HardHat color="white" />} />

            {resolver.signUp ?
              <Loader className="-mb-3" width={75} height={75} />
              :
              <Button
                onClick={submitData}
                text="Continue"
                fill={true}
                Icon={<ArrowBigRight
                  color="white" />
                }
              />

            }
          </div>


        </div>

        { /*--  Plans selection  --*/}

        <div className="flex-1 py-4">
          <h1 className="text-[40px] pl-4 leading-1 font-normal leading-1 text-gray-500 underline">Choose your plan</h1>

          <div className="pt-10">
            <Plans
              currentPlan={collectedData.plan}
              setPlanType={(plan: any) => setCollectedData({ ...collectedData, plan: plan })} />
          </div>
        </div>

      </div>

    </div>
  )
}

export default withResolver(AdminSignUp)
