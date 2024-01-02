"use client";

import { useState } from "react";

export default function withResolver(Component: any) {
  return function withResolver(props: any) {

    const [resolver, setResolver] = useState<any>({})

    const updateResolver = (key: string) => {

      setResolver({ ...resolver, key: !resolver[key] })
    }

    const createResolver = (key: string, value: boolean) => {

      setResolver({ ...resolver, [key]: value  })
    }



    return <Component {...props} resolver={resolver} updateResolver={updateResolver} createResolver={createResolver} />
  }
}

