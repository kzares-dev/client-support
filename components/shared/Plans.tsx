import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import PlanCards from "./PlanCards"
import { FolderKey } from "lucide-react"
import PlanCard from "./PlanCard"
import { plans } from "@/constants"

type PlansProps = {
    value: {
        type: string;
        paid: boolean;
    },
    onFieldChange: ({ type, paid }: { type: string, paid: boolean }) => void
}

function Plans({ onFieldChange, value }: PlansProps) {

    const returnPlanIcon = () => {
        const { Icon } = plans[value.type]

        return <Icon color="#666" strokeWidth={1.4} size={40} />
    }

    return (
        <Drawer>
            <DrawerTrigger className="w-full flex-center pt-5">
                {value.type ? (
                    <div className="flex-center bg-dark-3 flex h-72 cursor-pointer flex-col overflow-hidden rounded-xl border w-full">
                        { returnPlanIcon() }
                        <h1 className="text-[40px] font-semibold flex items-center gap-3 font-sans text-neutral-700 "> {plans[value.type].title} </h1>
                    </div>
                ) : (
                    <div className="flex-center bg-dark-3 flex h-72 cursor-pointer flex-col overflow-hidden rounded-xl border w-full">
                        <FolderKey size={40} />
                        <span className="text-[30px] text-neutral-600">Browse</span>
                    </div>
                )}



            </DrawerTrigger>

            <DrawerContent className="bg-gray-50 flex-row h-[70vh]">
                <PlanCards DrawerClose={DrawerClose} onFieldChange={onFieldChange} />
            </DrawerContent>
        </Drawer >

    )
}

export default Plans
