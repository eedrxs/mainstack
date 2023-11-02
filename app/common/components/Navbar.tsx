"use client"
import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAccountContext } from "../hooks/useAccount"
import Menu from "./Menu"

import { GoHome, GoHomeFill } from "react-icons/go"
import { BiBarChartSquare, BiSolidBarChartSquare } from "react-icons/bi"
import { FaMoneyBills } from "react-icons/fa6"
import { MdOutlinePeopleAlt } from "react-icons/md"
import { BiGridAlt, BiSolidGridAlt } from "react-icons/bi"
import { IoIosArrowDown } from "react-icons/io"

import Logo from "@/public/images/mainstack-logo.svg"
import NotificationIcon from "@/public/images/notifications.svg"
import ChatIcon from "@/public/images/chat.svg"
import BurgerIcon from "@/public/images/menu.svg"

import Icon1 from "@/public/images/sidebar-icon1.svg"
import Icon2 from "@/public/images/sidebar-icon2.svg"
import Icon3 from "@/public/images/sidebar-icon3.svg"
import Icon4 from "@/public/images/sidebar-icon4.svg"
import SubNav from "./SubNav"

const Navbar = () => {
  const currentPath = usePathname()
  const user = useAccountContext()
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const navShadow =
    "0px 2px 4px 0px rgba(45, 59, 67, 0.05), 0px 2px 6px 0px rgba(45, 59, 67, 0.06)"
  const accountInitialsGradient =
    "linear-gradient(139deg, #5C6670 2.33%, #131316 96.28%)"

  const toggleMenu = () => {
    setMenuIsOpen((prev) => !prev)
  }

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
        <div className="hidden md:flex items-center gap-5">
          {pages.map((page) => {
            const subpages = page.routes
            let isCurrentPage = currentPath == page.route
            if (subpages && currentPath.startsWith(page.route)) {
              isCurrentPage = true
            }

            const activePageStyle = isCurrentPage
              ? "text-white bg-primary"
              : "text-[#56616B] hover:bg-[#EFF1F6]"
            const pageWithSubpagesStyle =
              isCurrentPage && subpages ? "border-r border-[#ffffff30]" : ""

            const currentSubpage = page.routes?.find(
              (route) => route.route == currentPath
            )

            return (
              <div
                className={
                  activePageStyle + " flex rounded-full text-sm font-semibold"
                }
              >
                <Link
                  key={page.title}
                  href={page.route}
                  className={
                    pageWithSubpagesStyle +
                    " flex items-center transition duration-500 h-10 py-2 pl-[14px] pr-[18px]"
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
                {currentSubpage && (
                  <div className="group flex items-center relative cursor-pointer transition duration-500 h-10 py-2 pl-[14px] pr-[18px]">
                    <span className="whitespace-nowrap mr-1">{currentSubpage?.title}</span>{" "}
                    <span className="text-lg">
                      <IoIosArrowDown />
                    </span>
                    <SubNav routes={subpages!} />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* menu */}
        <div className="flex gap-2 items-center">
          <div className="cursor-pointer p-[10px]">
            <Image src={NotificationIcon} alt="notification" />
          </div>

          <div className="cursor-pointer p-[10px]">
            <Image src={ChatIcon} alt="chat" />
          </div>

          <div
            onClick={toggleMenu}
            className="flex items-center relative cursor-pointer rounded-full bg-[#EFF1F6] gap-2 py-1 pl-[5px] pr-3"
          >
            <div
              style={{ backgroundImage: accountInitialsGradient }}
              className="flex justify-center items-center shrink-0 rounded-full text-white font-semibold h-8 w-8"
            >
              {user?.initials}
            </div>

            <Image src={BurgerIcon} alt="menu" />

            <Menu isOpen={menuIsOpen} />
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
    route: "/apps/link-in-bio",
    title: "Apps",
    icon: {
      outline: BiGridAlt,
      solid: BiSolidGridAlt,
    },
    routes: [
      {
        route: "/apps/link-in-bio",
        title: "Link in Bio",
        description: "Manage your Link in Bio",
        iconUrl: Icon1,
      },
      {
        route: "/apps/store",
        title: "Store",
        description: "Manage your Store activities",
        iconUrl: Icon2,
      },
      {
        route: "/apps/media-kit",
        title: "Media Kit",
        description: "Manage your Media Kit",
        iconUrl: Icon3,
      },
      {
        route: "/apps/invoicing",
        title: "Invoicing",
        description: "Manage your Invoices",
        iconUrl: Icon4,
      },
      {
        route: "/apps/bookings",
        title: "Bookings",
        description: "Manage your Bookings",
        iconUrl: Icon4,
      },
    ],
  },
]
