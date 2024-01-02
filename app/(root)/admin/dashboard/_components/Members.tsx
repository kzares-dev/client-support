"use client";
import {
  Users,
  SendHorizonal,
} from "lucide-react"
import MemberCard from "./MemberCard"
import MemberLink from "./MemberLink"
import { useEffect, useState } from "react";
import { Member, getCompanyMembers, getInviteLinks } from "@server/company.api";
import withResolver, { Resolver } from "@hoc/resolver.hoc";
import MemberCardShrimmer from "./MemberCard.shrimmer";
import MemberLinkShrimmer from "./MemberLink.shrimmer";

function Members({ resolver }: { resolver: Resolver }) {
  const [members, setMembers] = useState<Member[]>([])
  const [inviteLinks, setInviteLinks] = useState<string[]>([])

  useEffect(() => {
    // Calling the server to retrieve the workers link to the organization
    resolver.createResolver("members", true)

    getCompanyMembers("") // TODO: Is needed to store the session data 
      .then((res: any) => {
        setMembers(res)
      })
      .catch(() => {

      })
      .finally(() => {
        resolver.updateResolver("members", false)
      })

    // Calling the server to retrieve the invite links for the creation of new accounts

    resolver.createResolver("inviteLinks", true)

    getInviteLinks("") // TODO: Is needed to store the session data 
      .then((res: any) => {
        setInviteLinks(res)
      })
      .catch(() => {

      })
      .finally(() => {
        resolver.updateResolver("inviteLinks", false)
      })


  }, []);

  return (
    <div id='members' className='w-full bg-white rounded-lg shadow-sm border min-h-[200px] overflow-hidden'>


      {/*--  Topbar --*/}
      <div className='bg-gray-50 border-b border-black/10 px-4 py-5 flex items-center justify-between'>

        <h1 className='text-2xl font-bold flex items-center gap-4'>
          <Users strokeWidth={3} />
          Members
        </h1>

        <h1 className='text-lg font-bold flex items-center gap-1'>
          {resolver.value.members && <div className="w-10 h-10 bg-gray-200 animate-pulse rounded-full" />}

          {members.length > 0 && members.length + "/5" }

        </h1>

      </div>

      {/*--  Active members --*/}

      <div className="px-4 py-6 flex flex-col gap-5">
        {resolver.value.members && <>
          <MemberCardShrimmer />
          <MemberCardShrimmer />
          <MemberCardShrimmer />
        </>}

        {members.length > 0 && members.map(member => <MemberCard />)}

      </div>

      {/*--  Invite members --*/}

      <div className="flex items-center gap-3 flex-row px-5 py-5 cursor-pointer">
        <p className="text-xl font-bold text-gray-900/90 underline">Invite Members</p>
        <SendHorizonal size={15} color="#333" />
      </div>

      {/*--  Member Links --*/}

      <div className="flex flex-col px-4 gap-3 pb-5">
        {resolver.value.inviteLinks && <>
          <MemberLinkShrimmer />
          <MemberLinkShrimmer />
        </>}

        {inviteLinks.map((link: string) => <MemberLink />)}
      </div>




    </div>
  )
}

export default withResolver(Members, ["members"])
