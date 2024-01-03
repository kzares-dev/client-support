"use client"
import { Copy } from "lucide-react"
import { useRef } from "react";
import { toast } from "react-toastify";

function MemberLink() {

    const textRef = useRef<HTMLInputElement>(null);

    const handleCopy = () => {
        if (textRef.current) {
            textRef.current.select();
            document.execCommand('copy');
            toast.success("Invitation copied")
        }

    };


    return (
        <div className="border flex items-center rounded-md overflow-hidden cursor-pointer " onClick={handleCopy}  >
            <input
                type="text"
                ref={textRef}
                className=" cursor-pointer flex-1 bg-gray-50 py-3 px-4 overflow-auto scrollbar-hide"
                
                defaultValue={"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"}
            />

            <div className="w-[50px] flex items-center justify-center border-l ">
                <Copy />
            </div>
        </div>
    )
}

export default MemberLink
