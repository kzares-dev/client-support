"use client";
import ChatContainer from "@components/ClientChat/ChatContainer";
import { Building2, HardHat, LogOut, MessagesSquare } from "lucide-react";

function ChatRoom({ params }: { params: { id: string } }) {



    return (
        <section className="flex-1 min-h-screen pt-[100px] lg:pt-[150px] px-3 py-5" >


            <div className="w-full max-w-[1500px] h-[80vh] bg-gray-100 border border-[#00000020] flex flex-row rounded-md overflow-hidden mx-auto">

                {/*-- Sidebar Navigation.. --*/}

                <div className="w-[300px] h-auto border-r bg-white flex flex-col gap-10 p-4">

                    {/*-- Worker Profile.. --*/}
                    <div className="flex flex-row items-end gap-4 border-b pb-5 border-gray-200">
                        <HardHat strokeWidth={2} size={40} color="black" />

                        <div className="flex flex-col">
                            <p className="text-lg text-black font-semibold">John Deo</p>
                            <p className="text-gray-500" >example@email.com</p>
                        </div>

                    </div>

                    {/*-- Nav Links.. --*/}
                    <div className="flex flex-col gap-5">

                        <div className="flex flex-row gap-4 py-3 group cursor-pointer">
                            <div className="group-hover:animate-bounce"><Building2 /></div>
                            <span className="text-xl text-gray-600" >Company</span>

                        </div>

                        <div className="flex flex-row gap-4 py-3 group cursor-pointer">
                            <div className="group-hover:animate-bounce"><MessagesSquare /></div>
                            <span className="text-xl text-gray-600" >Chats</span>

                        </div>

                    </div>

                    {/*-- Logout.. --*/}
                    <div className="h-auto flex-1 flex items-end ">
                        <div className="flex flex-row gap-4 py-3 group cursor-pointer w-full rounded-md border pl-4">
                            <div className="group-hover:animate-bounce"><LogOut /></div>
                            <span className="text-xl text-black font-bold" >Log Out</span>

                        </div>
                    </div>


                </div>


                {/*-- Company details, chat, etc.. --*/}
                <div className="flex-1 h-auto flex">
                    <ChatContainer id={params.id} />
                </div>

            </div>

        </section>
    )
}

export default ChatRoom