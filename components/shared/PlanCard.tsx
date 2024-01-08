import { CheckSquare, X } from "lucide-react"
import SelectButton from "./SelectButton"

function PlanCard({ Icon, title, pricing, features, supress } : any) {

    return (
        <div className="w-full h-full flex pt-5 flex-col  gap-10">
            <h1 className="text-[40px] font-semibold flex items-center gap-3 font-sans text-neutral-700 ">  <Icon color="#666" strokeWidth={1.4} size={40} /> {title} </h1>

            <ul className="flex flex-col gap-4 items-start">
                <h3 className="text-neutral-500 text-xl">Features</h3>
                {features.map((feature: string) => (
                    <li className="flex items-center gap-2 text-neutral-500"> <CheckSquare strokeWidth={1.5} size={15} /> {feature} </li>
                )
                )}

                {supress.map((item: string) => (
                    <li className="flex items-center gap-2 text-neutral-300 line-through "> <X strokeWidth={1.5} size={15} /> {item} </li>
                ))}

            </ul>

        </div>
    )
}

export default PlanCard
