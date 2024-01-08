
type SelectButtonTypes = {
    placeholder: string,
    onClick?: () => void,
}

function SelectButton({ placeholder, onClick }: SelectButtonTypes) {
    return (
        <button onClick={onClick} className="bg-gray-950 text-gray-400 border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group w-[100px]">
            <span className="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            {placeholder}
        </button>
    )
}

export default SelectButton
