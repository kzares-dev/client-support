import { atom } from "recoil"


export const confirmationAtom = atom({
    key: "confirmationAtom",
    default: {
        show: false,
        message: "",
        callback: () => {} ,

    }
})