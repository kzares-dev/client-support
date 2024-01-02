import {
  Users,
  SendHorizonal,
} from "lucide-react"
import MemberCard from "./MemberCard"
import MemberLink from "./MemberLink"

function Members() {
  

  return (
    <div id='members' className='w-full bg-white rounded-lg shadow-sm border min-h-[200px] overflow-hidden'>


      {/*--  Topbar --*/}
      <div className='bg-gray-50 border-b border-black/10 px-4 py-5 flex items-center justify-between'>

        <h1 className='text-2xl font-bold flex items-center gap-4'>
          <Users strokeWidth={3} />
          Members
        </h1>

        <h1 className='text-lg font-bold flex items-center gap-1'>
          3/5
        </h1>

      </div>

      {/*--  Active members --*/}

      <div className="px-4 py-6 flex flex-col gap-5">
        <MemberCard />
        <MemberCard />
        <MemberCard />
      </div>

      {/*--  Invite members --*/}

      <div className="flex items-center gap-3 flex-row px-5 py-5 cursor-pointer">
        <p className="text-xl font-bold text-gray-900/90 underline">Invite Members</p>
        <SendHorizonal size={15} color="#333" />
      </div>

      {/*--  Member Links --*/}

      <div className="flex flex-col px-4 gap-3 pb-5">
        <MemberLink />
        <MemberLink />
      </div>




    </div>
  )
}

export default Members
