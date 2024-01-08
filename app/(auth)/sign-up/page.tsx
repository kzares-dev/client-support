"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { signUpFormSchema } from "@/lib/validator";
import { signUpInitialValues } from "@/constants";

import { Input } from "@/components/ui/input"
import Dropdown from "@/components/shared/Dropdown";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FileUploader } from "@/components/shared/FileUploader";
import Plans from "@/components/shared/Plans";
import { Loader2 } from "lucide-react";

function SignUp() {

  const [files, setFiles] = useState<File[]>([])

  const initialValues = signUpInitialValues;

  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: initialValues
  })

  // Define the submit handler

  function onSubmit(values: z.infer<typeof signUpFormSchema>) {

    console.log({values: values})
    new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(alert("resolved"));
      }, 2000);
  });
  }

  console.log(form.getValues())

  return (
    <Carousel draggable={false} className="w-full max-w-[450px] bg-white min-h-[600px] shadow-lg border rounded-xl px-4 py-5 ">

      <Form {...form} >

        <form onSubmit={form.handleSubmit(onSubmit)}>


          <CarouselContent >
            {/*-- First selection of carousel, organization, email, name, etc --*/}
            <CarouselItem className="flex flex-col gap-5">
              <h1 className="text-[40px] pb-10 pt-5 font-mono">

                <Image src="/assets/images/logo.png" alt="" width={100} height={30} />
                New Account
              </h1>

              <FormField
                control={form.control}
                name="organization"
                render={({ field }) => (
                  <FormItem className="w-full" >
                    <FormControl>
                      <Input type="text" placeholder="Organization Name" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full" >
                    <FormControl>
                      <Input type="email" placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <div className="flex flex-row gap-3">

                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="w-full" >
                      <FormControl>
                        <Input type="email" placeholder="First Name" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="w-full" >
                      <FormControl>
                        <Input type="email" placeholder="Last Name" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

              </div>

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="w-full pb-5" >
                    <FormControl>
                      <Dropdown onChangeHandler={field.onChange} value={field.value} />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <div className="flex-between mt-4 pt-10">
                <span className="w-1/5 border-b border-neutral-400  md:w-1/4"></span>
                <Link
                  className="text-[15px] text-neutral-800 uppercase dark:text-gray-400 hover:underline"
                  href="sign-in"
                >sign in </Link>
                <span className="w-1/5 border-b border-neutral-400  md:w-1/4"></span>
              </div>

            </CarouselItem>

            {/*-- Second swipe, for image upload --*/}
            <CarouselItem>

              <h1 className="text-[40px] pb-10 pt-5 font-mono">

                <Image src="/assets/images/logo.png" alt="" width={100} height={30} />
                Organization Image
              </h1>

              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem className="w-full" >
                    <FormControl>
                      <FileUploader
                        onFieldChange={field.onChange}
                        imageUrl={field.value}
                        setFiles={setFiles}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

            </CarouselItem>

            {/*-- Third swipe, for plan type --*/}
            <CarouselItem>

              <h1 className="text-[40px] pb-10 pt-5 font-mono">

                <Image src="/assets/images/logo.png" alt="" width={100} height={30} />
                Choose your plan
              </h1>

              <FormField
                control={form.control}
                name="plan"
                render={({ field }) => (
                  <FormItem className="w-full" >
                    <FormControl>
                      <Plans
                        onFieldChange={field.onChange}
                        value={field.value}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              {/*-- Button that handles the form submition --*/}
              <div className="flex w-full h-full pt-5  justify-end">
                {!form.formState.isSubmitting ? (
                  <Button className="rounded text-[15px]" variant="outline" >
                    Create Account
                  </Button>
                ) : (
                  <Button className="rounded text-[15px]" disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin " />
                    Please wait
                  </Button>
                )}
              </div>



            </CarouselItem>


          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />


        </form>


      </Form>



    </Carousel >
  )
}

export default SignUp
