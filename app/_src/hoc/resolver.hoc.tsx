import { useState } from "react"

type setProps = {
    action: () => Promise<unknown>
    key: string,
    callback: (res: any) => void,
    error: (res: any) => void,
}

export interface Resolver {
    value: any,
    set: ({ key, callback, error, action }: setProps) => Promise<any>
}

export default function withResolver(Component: any) {
    return function withResolver(props: any) {

        const [resolvers, setResolvers] = useState<any>({})


        const create = (key: string) => {

            setResolvers((prev: any) => {
                return { ...prev, [key]: true }
            })
        }

        const end = (key: string) => {

            setResolvers((prev: any) => {
                return { ...prev, [key]: false }
            })


        }

        const set = async ({ action, key, callback, error }: setProps) => {

            
            // First create a resolve atribute to track the promise progress
           create(key)

            action()
                .then((res) => callback(res))
                .catch((err) => error(err))
                .finally(() => end(key) )
                    


        }

        const resolver = {
            value: resolvers,
            set
        }

        return <Component {...props} resolver={resolver} />
    }
}

