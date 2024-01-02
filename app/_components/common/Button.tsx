import React from "react"

function Button({ text, fill, Icon }: { text: string, fill: boolean, Icon: React.ReactNode }) {
    return (
        <button className={`flex items-center justify-center gap-3 border  py-2 px-3 rounded-lg ${fill && "bg-black" } `} >
            <h1 className={`text-lg ${fill && "text-white" }  `}> {text} </h1>
            {Icon}
        </button>
    )
}

export default Button
