import React from "react"

function Button({ text, fill, Icon }: any) {

    // TODO: set up de default onClick
    return (
        <button form="signInForm" className={`flex items-center justify-center gap-3 border  py-2 px-3 rounded-lg ${fill && "bg-black" } `} >
            <h1 className={`text-lg ${fill && "text-white" }  `}> {text} </h1>
            {Icon}
        </button>
    )
}

export default Button
