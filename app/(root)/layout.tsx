"use client";
import { Confirmation } from "@components/common";
import { RecoilRoot } from "recoil"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <RecoilRoot>
            <Confirmation />
            {children}
        </RecoilRoot>
    )
}