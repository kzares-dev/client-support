"use client";

import { useEffect, useState } from "react";

export interface Resolver {
  value: any; // Tipo para resolver
  end: (key: string) => void;
  create: (key: string) => void
}

export default function withResolver(Component: any, initialResolver?: string[]) {
  return function withResolver(props: any) {

    const [resolver, setResolver] = useState<any>({})

    const end = (key: string) => {

      setResolver((prev: any) => {
        return { ...prev, [key]: false }
      })


    }

    const create = (key: string) => {

      setResolver((prev: any) => {
        return { ...prev, [key]: true }
      })
      console.log(resolver)
    }

    const resolverObj = {
      value: resolver,
      create: create,
      end: end,
    }

    return <Component {...props} resolver={resolverObj} />
  }
}

