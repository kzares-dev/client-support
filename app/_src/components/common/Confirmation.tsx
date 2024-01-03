"use client"
import { confirmationAtom } from '@context/confirmationAtom.context';
import { AlertOctagon, LucideSidebarClose } from 'lucide-react';
import { useRecoilState } from 'recoil'
import { Button } from '.';

function Confirmation() {

    const [confirmation, setConfirmation] = useRecoilState(confirmationAtom);

    const confirm = () => {
        confirmation.callback();

        setConfirmation({
            message: "",
            show: false,
            callback: () => { },
        })
    }

    const cancel = () => {
        setConfirmation({
            message: "",
            show: false,
            callback: () => { },
        })
    }

    if (confirmation.show) return (
        <div className='fixed inset-0 z-[100] bg-black/40 flex items-center justify-center' >

            <div className="bg-white w-full max-w-[500px] rounded-md p-5 border shadow-md flex flex-col items-center gap-8">

                <AlertOctagon width={60} height={60} />
                <h1 className='text-xl text-center'> { confirmation.message } </h1>

                <div className="flex w-full items-center justify-between flex-row">
                    <div onClick={cancel}>
                        <Button text='Cancel' />
                    </div>
                    <div onClick={confirm}>
                        <Button text='Confirm' />
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Confirmation
