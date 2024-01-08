import { ShoppingBag, Gift, Gem, CheckSquare, X } from "lucide-react"
import { plans } from "@/constants"
import SelectButton from "./SelectButton"
import PlanCard from "./PlanCard"

type PlanCardsType = {
    onFieldChange: ({ type, paid }: { type: string, paid: boolean }) => void,
    DrawerClose: any
}

function PlanCards({ onFieldChange, DrawerClose }: PlanCardsType) {

    const selectPlan = (type: string) => {
        onFieldChange({
            type: type,
            paid: false
        })
    }

    const parsedPlans = Object.entries(plans)
    return (
        <div className="flex-center gap-5 absolute mt-24  flex-row w-full ">

            {parsedPlans.map((item) => (
                <DrawerClose onClick={() => selectPlan(item[1].title.toLocaleLowerCase())} className="px-5 flex bg-white border min-h-[500px] w-full max-w-[400px] rounded-[10px]  hover:shadow-lg  ">
                    <PlanCard {...item[1]} />
                </DrawerClose>
            ))}

        </div>
    )
}

export default PlanCards
