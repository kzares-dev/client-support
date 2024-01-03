import Sidebar from "@components/Sidebar/Sidebar"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="flex px-5 h-screen  overflow-hidden " >

            <div className="flex flex-col lg:flex-row w-full gap-5 pt-[100px] lg:pt-[150px]">

                <div className="w-full lg:w-1/3 h-[600px] section-container">
                    <Sidebar />
                </div>

                <div className="flex-grow auto pb-[100px] overflow-auto">
                    {children}
                </div>
            </div>

        </section>
    )
}