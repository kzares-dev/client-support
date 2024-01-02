"use client";

function InputText({ type = "text", name, placeholder, value = "", onChange = () => { } }: any) {

    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e)}
            className="bg-gray-50 border px-4 py-3 text-black placeholder:text-gray-400 w-full  "
        />
    )
}

export default InputText
