"use client"

import { signIn } from '@/app/_server-actions/admin.action'
import { Button, InputText } from '@components/common'
import { ArrowBigRight, HardHat } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

function AdminSignIn() {

  const [collectedData, setCollectedData] = useState<{ email: string, password: string }>({
    email: "",
    password: '',
  })

  return (
    <div className="flex-container w-full min-h-[100vh] bg-gray-50 p-4">
      <div className="flex flex-col px-5 bg-white border w-full max-w-[450px] min-h-[500px] items-center py-5">

        <h1 className="text-[40px] font-normal leading-1 underline text-gray-800 "> SignIn </h1>

        <div className="pt-10 flex flex-col gap-5 w-full">

          <InputText
            name="email"
            value={collectedData.email}
            onChange={(e: any) => setCollectedData({ ...collectedData, email: e.target.value })}
            placeholder="Email..."
            type="email" />
          <InputText
            name="password"
            value={collectedData.password}
            onChange={(e: any) => setCollectedData({ ...collectedData, password: e.target.value })}
            placeholder="Password..."
            type="password" />


        </div>


        <Link href="/admin/auth/signup" className="pt-5 w-full underline font-bold text-gray-500 pl-2 " >
          Have no account?
        </Link>


        <div className="flex-1 pt-10 w-full flex items-end justify-between ">
          <Button text="Signin as a worker" fill={true} Icon={<HardHat color="white" />} />
          <Button text="Continue" fill={true} Icon={<ArrowBigRight color="white" />} />
        </div>


      </div>
    </div>
  )
}

export default AdminSignIn
