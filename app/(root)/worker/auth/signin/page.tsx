"use client"
import { Button, InputText, Loader } from '@components/common'
import { ArrowBigRight, Key } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import Cookies from "js-cookie"
import { useRouter } from 'next/navigation'
import withResolver, { Resolver } from '@hoc/resolver.hoc'
import { toast } from 'react-toastify'
import { signIn } from '@server/worker.api'


function WorkerSignIn({ resolver }: { resolver: Resolver }) {

  const [collectedData, setCollectedData] = useState<{ email: string, password: string }>({
    email: "",
    password: '',
  })

  // set up router for redirecting when request is filled
  const router = useRouter()

  // sending data from server & waiting for response 
  const submitData = () => {

    resolver.set({
      key: "signIn",
      callback: (res: any) => {

        // saving auth jwt on cookies
        Cookies.set("workerToken", res.access_token, {
          expires: 30,
          path: "/"
        })

        toast.success("Sign-in completed")
        router.push("/worker/dashboard")
      },
      error: (err: any) => {

        toast.error("Error to sign in")
      },
      action: () => signIn(collectedData),
    })

  }


  return (
    <div className="flex-container w-full min-h-[100vh] bg-gray-50 p-4">
      <div className="flex flex-col px-5 bg-white border w-full max-w-[450px] min-h-[500px] items-center py-5">

        <h1 className="text-[40px] font-normal leading-1 underline text-gray-800 "> SignIn </h1>

        <div className="pt-10 flex flex-col gap-5 w-full">

          <InputText
            value={collectedData.email}
            onChange={(e: any) => setCollectedData({ ...collectedData, email: e.target.value })}
            placeholder="Email..."
            type="email" />
          <InputText
            value={collectedData.password}
            onChange={(e: any) => setCollectedData({ ...collectedData, password: e.target.value })}
            placeholder="Password..."
            type="password" />


        </div>


        <Link href="/admin/auth/signup" className="pt-5 w-full underline font-bold text-gray-500 pl-2 pr-10" >
          To create a worker account you need invitation.
        </Link>


        <div className="flex-1 pt-10 w-full flex items-end justify-between ">
          <Button text="Signin as admin" fill={true} Icon={<Key color="white" />} />
          {resolver.value.signIn ?
            <Loader width={65} height={65} /> :
            <div onClick={submitData} >
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

export default withResolver(WorkerSignIn)
