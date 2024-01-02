"use client";

import { useEffect, useState } from "react";

export interface Resolver {
  value: any; // Tipo para resolver
  updateResolver: (key: string, value? : boolean) => void;
  createResolver: (key: string, value: boolean) => void
}

export default function withResolver(Component: any, initialResolver?: string[]) {
  return function withResolver(props: any) {

    const [resolver, setResolver] = useState<any>({})

    const updateResolver = (key: string, value?: boolean) => {

      if (value !== undefined) {
        setResolver(value)
      } else {
        setResolver((prev: any) => {
          return { ...prev, key: !resolver[key] }
        })
      }


    }

    const createResolver = (key: string, value: boolean) => {

      setResolver((prev: any) => {
        return { ...prev, [key]: value }
      })
      console.log(resolver)
    }

    const resolverObj = {
      value: resolver,
      createResolver: createResolver,
      updateResolver: updateResolver,
    }

    return <Component {...props} resolver={resolverObj} />
  }
}

