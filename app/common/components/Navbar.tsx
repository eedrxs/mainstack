"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { GoHome, GoHomeFill } from "react-icons/go"
import { BiBarChartSquare, BiSolidBarChartSquare } from "react-icons/bi"
import { FaMoneyBills } from "react-icons/fa6"
import { MdOutlinePeopleAlt } from "react-icons/md"
import { BiGridAlt, BiSolidGridAlt } from "react-icons/bi"

import Logo from "@/public/images/mainstack-logo.svg"
import NotificationIcon from "@/public/images/notifications.svg"
import ChatIcon from "@/public/images/chat.svg"
import BurgerIcon from "@/public/images/menu.svg"

const Navbar = () => {
  const currentPath = usePathname()
  const navShadow =
    "0px 2px 4px 0px rgba(45, 59, 67, 0.05), 0px 2px 6px 0px rgba(45, 59, 67, 0.06)"
  const accountInitialsGradient = "linear-gradient(139deg, #5C6670 2.33%, #131316 96.28%)"

  return (
    <nav className="fixed top-0 z-10 w-full bg-white p-4 pb-0">
      <div
        style={{ boxShadow: navShadow }}
        className="flex items-center justify-between rounded-full p-3 pl-6"
      >
        {/* logo */}
        <div>
          <Image src={Logo} alt="logo" />
        </div>

        {/* pages */}
        <div className="flex items-center gap-5">
          {pages.map((page) => {
            let isCurrentPage = currentPath == page.route
            const activePage = isCurrentPage
              ? "text-white bg-primary"
              : "text-[#56616B]"

            return (
              <Link
                key={page.title}
                href={page.route}
                className={
                  activePage +
                  " flex items-center text-sm font-semibold rounded-full h-10 py-2 pl-[14px] pr-[18px]"
                }
              >
                {!isCurrentPage && (
                  <span className="mr-1">
                    {<page.icon.outline className="text-xl" />}
                  </span>
                )}
                {isCurrentPage && (
                  <span className="mr-1">
                    {<page.icon.solid className="text-xl" />}
                  </span>
                )}
                {page.title}
              </Link>
            )
          })}
        </div>

        {/* menu */}
        <div className="flex gap-2 items-center">
          <div className="p-[10px]">
            <Image src={NotificationIcon} alt="notification" />
          </div>

          <div className="p-[10px]">
            <Image src={ChatIcon} alt="chat" />
          </div>

          <div className="flex items-center rounded-full bg-[#EFF1F6] gap-2 py-1 pl-[5px] pr-3">
            <div style={{backgroundImage: accountInitialsGradient}} className="flex justify-center items-center shrink-0 rounded-full text-white font-semibold h-8 w-8">OJ</div>

            <Image src={BurgerIcon} alt="menu" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

const pages = [
  {
    route: "/",
    title: "Home",
    icon: {
      outline: GoHome,
      solid: GoHomeFill,
    },
  },
  {
    route: "/analytics",
    title: "Analytics",
    icon: {
      outline: BiBarChartSquare,
      solid: BiSolidBarChartSquare,
    },
  },
  {
    route: "/revenue",
    title: "Revenue",
    icon: {
      outline: FaMoneyBills,
      solid: FaMoneyBills,
    },
  },
  {
    route: "/crm",
    title: "CRM",
    icon: {
      outline: MdOutlinePeopleAlt,
      solid: MdOutlinePeopleAlt,
    },
  },
  {
    route: "/apps",
    title: "Apps",
    icon: {
      outline: BiGridAlt,
      solid: BiSolidGridAlt,
    },
  },
]
