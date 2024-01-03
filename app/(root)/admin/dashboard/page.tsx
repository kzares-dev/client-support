import Analytics from "@components/AdminDashboard/Analytics"
import Members from "@components/AdminDashboard/Members"
import Usage from "@components/AdminDashboard/Usage"


function Overview() {
  return (
    <div className="flex gap-5 flex-col ">
        <Members />
        <Analytics />
        <Usage />
    </div>
  )
}

export default Overview
