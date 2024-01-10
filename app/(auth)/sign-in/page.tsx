"use client"

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { signInInitialValues } from '@/constants';
import { signInFormSchema } from '@/lib/validator';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form';
import * as z from "zod"

function SignIn() {

  const initialValues = signInInitialValues;

  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: initialValues
  })

  const onSubmit = () => {
\  }

  return (

    <Form {...form} >

      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full max-w-[450px] bg-white min-h-[600px] shadow-lg border rounded-xl px-4 py-5 flex flex-col gap-5 ' >

        <h1 className="text-[40px] pb-10 pt-5 font-mono">

          <Image src="/assets/images/logo.png" alt="" width={100} height={30} />
          Welcome Back
        </h1>


        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full" >
              <FormControl>
                <Input type="email" placeholder="Email..." {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-full" >
              <FormControl>
                <Input type="password" placeholder="Password..." {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="isAdmin"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex items-center">
                  <label htmlFor="isAdmin" className="whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Login as admin</label>
                  <Checkbox
                    onCheckedChange={field.onChange}
                    checked={field.value}
                    id="isFree" className="mr-2 h-5 w-5 border-2 " />
                </div>

              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-end items-end justify-end pb-10 flex-1 h-auto"> 
            <Button variant="outline" >
              Sign In
            </Button>
        </div>


      </form>

    </Form>
  )
}

export default SignIn
