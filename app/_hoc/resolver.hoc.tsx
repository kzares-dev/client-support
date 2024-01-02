"use client";

import { useState } from "react";

export interface Resolver {
  value: any; // Tipo para resolver
  updateResolver: (key: string) => void;
  createResolver: (key: string, value: boolean) => void
}

export default function withResolver(Component: any) {
  return function withResolver(props: any) {

    const [resolver, setResolver] = useState<any>({})

    const updateResolver = (key: string) => {

      setResolver({ ...resolver, key: !resolver[key] })
    }

    const createResolver = (key: string, value: boolean) => {

      setResolver({ ...resolver, [key]: value })
    }


    const resolverObj = {
      value: resolver,
      createResolver: createResolver,
      updateResolver: updateResolver,
    }



    return <Component {...props} resolver={resolverObj} />
  }
}

