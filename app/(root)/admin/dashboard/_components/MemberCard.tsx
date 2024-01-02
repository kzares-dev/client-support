import {
    User,
    Trash
} from "lucide-react"

function MemberCard() {
    return (
        <div className="flex flex-row  items-center justify-between border-b pb-2 border-gray-100 ">

            <div className="flex flex-row items-center gap-2">
                <User strokeWidth={1} size={30} color="gray" />

                <div className="flex flex-col">
                    <p className="text-lg text-gray-800">John Deo</p>
                    <p className="text-gray-400" >example@email.com</p>
                </div>

            </div>


            <div className="cursor-pointer">
                <Trash size={20} color="gray" />
            </div>
        </div>
    )
}

export default MemberCard
