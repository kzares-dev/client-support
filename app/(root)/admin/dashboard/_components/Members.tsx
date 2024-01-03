"use client";
import {
  Users,
  SendHorizonal,
} from "lucide-react"
import MemberCard from "./MemberCard"
import MemberLink from "./MemberLink"
import { useEffect, useState } from "react";
import { Member, deleteWorkers, generateInviteLink, getCompanyMembers, getInviteLinks } from "@server/company.api";
import withResolver, { Resolver } from "@hoc/resolver.hoc";
import MemberCardShrimmer from "./MemberCard.shrimmer";
import MemberLinkShrimmer from "./MemberLink.shrimmer";
import { useRecoilState } from "recoil";
import { confirmationAtom } from "@context/confirmationAtom.context";
import { toast } from "react-toastify";

function Members({ resolver }: { resolver: Resolver }) {

  const [confirmation, setConfirmation] = useRecoilState(confirmationAtom)
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

  // Requesting confirmation using `confirmationAtom` 
  // then the logic is pased to the global component <Confirmation /> in project root
  const confirmInvitation = () => {
    setConfirmation({
      message: "This action will generate a new invitation link",
      show: true,
      callback: requestInvitation,
    })
  }

  // This function is to request a new user invitation
  const requestInvitation = () => {
    resolver.createResolver("requestInvitation", true);

    generateInviteLink("")
      .then((res: any) => {
        setInviteLinks(res);
        toast.success("Invite link generated")
      })
      .catch(() => {
        toast.error("Failed to create invite link")
      })
      .finally(() => resolver.updateResolver("requestInvitation", false))

  }

  // Method to delete user
  // this is passed to MemberCard as a prop

  const confirmDeleteWorker = (workerId: string) => {

    setConfirmation({
      message: "Are you shure you whant to remove this worker?",
      show: true,
      callback: () => deleteWorker(workerId) ,
    })
  }

  const deleteWorker = (workerId: string) => {
    resolver.createResolver(workerId, true);

    deleteWorkers("companyId", "workerId")
      .then((res: any) => {
        setMembers(res)
        toast.success("Worker deleted succesfully")
      })
      .catch(() => {
        toast.error("Failed to delete worker")
      })
      .finally(() => {
        resolver.updateResolver(`deleteWorker${workerId}`, false)
      })


  }

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

          {members.length > 0 && members.length + "/5"}

        </h1>

      </div>

      {/*--  Active members --*/}

      <div className="px-4 py-6 flex flex-col gap-5">

        {/*--  Loader for getting the company members --*/}
        {resolver.value.members && <>
          <MemberCardShrimmer />
          <MemberCardShrimmer />
          <MemberCardShrimmer />
        </>}

        {/*--  rendering the member list--*/}
        {members.length > 0 && members.map(member => <MemberCard key={member.id} {...member} deleteWorker={confirmDeleteWorker} resolver={resolver.value[member.id]} />)}

      </div>

      {/*--  Invite members --*/}

      <div onClick={confirmInvitation} className="flex items-center gap-3 flex-row px-5 py-5 cursor-pointer">
        <p className="text-xl font-bold text-gray-900/90 underline">Invite Members</p>
        <SendHorizonal size={15} color="#333" />
      </div>

      {/*--  Member Links --*/}

      <div className="flex flex-col px-4 gap-3 pb-5">
        {/*--  Loader for requesting an invitation --*/}
        {resolver.value.requestInvitation && <MemberLinkShrimmer />}

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
