import {
    User,
    Trash,
    Loader
} from "lucide-react"

function MemberCard({
    deleteWorker,
    id,
    email,
    name,
    resolver,
}: {
    deleteWorker: (workerId: string) => void,
    id: string,
    email: string,
    name: string,
    resolver: boolean,
}) {


    return (
        <div className="flex flex-row  items-center justify-between border-b pb-2 border-gray-100 ">

            <div className="flex flex-row items-center gap-2">
                <User strokeWidth={1} size={30} color="gray" />

                <div className="flex flex-col">
                    <p className="text-lg text-gray-800">{name}</p>
                    <p className="text-gray-400" > {email} </p>
                </div>

            </div>


            {resolver ? <Loader className="animate-spin" /> : <div className="cursor-pointer" onClick={() => deleteWorker(id)} >
                <Trash size={20} color="gray" />
            </div>}
        </div>
    )
}

export default MemberCard
