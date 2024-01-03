import {
    Gem,
    Key,
    ShoppingBag,
    TrendingUp
  } from "lucide-react"
  import React from "react"
  
  const PlanCard = ({ onCLick, title, description, Icon, currentPlan }: { onCLick: any, title: string, description: string, Icon: React.ReactNode, currentPlan: string }) => {
  
    return <div onClick={onCLick} className={`flex py-3 px-5 items-center rounded-md gap-3 cursor-pointer bg-gray-50 border ${ currentPlan === title.toLocaleLowerCase() && "border-[2x] border-black" } `}>
  
      {Icon}
  
      <div className="text-neutral-800 transition ease-in duration-100 text-[20px]">
  
        <div className="font-normal transition ease-in duration-100"> {title} Plan</div>
        <div className="text-sm text-gray-400"> {description} </div>
      </div>
    </div>
  }
  
  function Plans({ setPlanType, currentPlan }: any) {
    return (
      <div className="flex-1 flex p-5 pt-0 gap-4 flex-col h-full" >
  
  
        <PlanCard
          currentPlan={currentPlan}
          onCLick={() => setPlanType("free")}
          title="Free"
          description="description of the product"
          Icon={<Key size={30} strokeWidth={1} color="#333" />} />
  
        <PlanCard
          currentPlan={currentPlan}
          onCLick={() => setPlanType("basic")}
          title="Basic"
          description="description of the product"
          Icon={<ShoppingBag strokeWidth={1} size={30} color="#333" />} />
  
        <PlanCard
          currentPlan={currentPlan}
          onCLick={() => setPlanType("premium")}
          title="Premium"
          description="description of the product"
          Icon={<Gem strokeWidth={1} size={30} color="#333" />} />
  
        <PlanCard
          currentPlan={currentPlan}
          onCLick={() => setPlanType("custom")}
          title="Custom"
          description="description of the product"
          Icon={<TrendingUp strokeWidth={1} size={30} color="#333" />} />
  
      </div>
    )
  }
  
  export { PlanCard, Plans }
  