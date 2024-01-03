import {
    User,
    Trash
} from "lucide-react"

function MemberCardShrimmer() {
    return (
        <div className="flex flex-row  items-center justify-between border-b pb-2 border-gray-100 ">

            <div className="flex flex-row items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse " />

                <div className="flex flex-col">
                    <p className="w-[70px] h-[15px] bg-gray-200 animate-pulse rounded-md" />
                    <p className="w-[100px] h-[10px] bg-gray-200 animate-pulse rounded-md mt-2" />
                </div>

            </div>


            <div className="cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse " />
            </div>
        </div>
    )
}

export default MemberCardShrimmer
