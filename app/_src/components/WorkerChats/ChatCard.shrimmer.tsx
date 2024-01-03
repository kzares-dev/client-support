
function ChatCardShrimmer() {
    return (
        <div className="flex flex-row border rounded-md flex-end items-center py-3 px-2 gap-3 relative z-2">

            <div className="absolute top-0 right-0 w-7 h-7 rounded-full border bg-gray-200  animate-pulse " />

            <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />

            <div className="flex-1 h-auto">
                <p className="w-[70px] h-[15px] bg-gray-200 animate-pulse rounded-md" />
                <p className="w-[100px] h-[10px] bg-gray-200 animate-pulse rounded-md mt-2" />

                <p className="w-full h-[10px] bg-gray-200 animate-pulse rounded-md mt-2" />

            </div>

        </div>
    )
}

export default ChatCardShrimmer
