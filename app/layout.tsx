import type { Metadata } from "next"
import "./globals.css"
import Navbar from "./common/components/Navbar"
import Sidebar from "./common/components/Sidebar"
import AccountProvider from "./common/hooks/useAccount"


export const metadata: Metadata = {
  title: "Mainstack",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AccountProvider>
          <Navbar />
          <main className="flex">
            <Sidebar />
            <div className="grow pr-[76px] pl-[124px] mt-[calc(76px+64px)] pb-[15rem]">
              <div className="max-w-[1160px]">{children}</div>
            </div>
          </main>
        </AccountProvider>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/datepicker.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/flowbite.min.js"></script>
      </body>
    </html>
  )
}
