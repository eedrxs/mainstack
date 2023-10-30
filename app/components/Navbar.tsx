'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {GoHome, GoHomeFill} from 'react-icons/go'
import {BiBarChartSquare, BiSolidBarChartSquare} from 'react-icons/bi'
import {FaMoneyBills} from 'react-icons/fa6'
import {MdOutlinePeopleAlt} from 'react-icons/md'
import {BiGridAlt, BiSolidGridAlt} from 'react-icons/bi'

import Logo from "@/public/images/mainstack-logo.svg"

const Navbar = () => {
  const currentPath = usePathname()
  const navShadow = "0px 2px 4px 0px rgba(45, 59, 67, 0.05), 0px 2px 6px 0px rgba(45, 59, 67, 0.06)"

  return (
    <nav className="fixed top-0 w-full bg-white p-4 pb-0">
      <div style={{boxShadow: navShadow}} className="flex items-center justify-between rounded-full p-3 pl-6">
        <div>
          <Image src={Logo} alt="logo" />
        </div>

        <div className="flex items-center gap-x-5">
          {pages.map(page => {
            let isCurrentPage = currentPath == page.route
            const activePage = isCurrentPage ? 'text-white bg-[#131316]' : 'text-[#56616B]'

            return (
              <Link key={page.title} href={page.route} className={activePage + " flex items-center text-sm font-semibold rounded-full py-2 pl-[14px] pr-[18px]"}>
                {!isCurrentPage && <span className="mr-1">{<page.icon.outline className="text-xl" />}</span>}
                {isCurrentPage && <span className="mr-1">{<page.icon.solid className="text-xl" />}</span>}
                {page.title}
              </Link>
            )
          })}
        </div>

        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;

const pages = [
  {
    route: '/',
    title: 'Home',
    icon: {
      outline: GoHome,
      solid: GoHomeFill
    }
  },
  {
    route: '/analytics',
    title: 'Analytics',
    icon: {
      outline: BiBarChartSquare,
      solid: BiSolidBarChartSquare
    }
  },
  {
    route: '/revenue',
    title: 'Revenue',
    icon: {
      outline: FaMoneyBills,
      solid: FaMoneyBills
    }
  },
  {
    route: '#',
    title: 'CRM',
    icon: {
      outline: MdOutlinePeopleAlt,
      solid: MdOutlinePeopleAlt
    }
  },
  {
    route: '#',
    title: 'Apps',
    icon: {
      outline: BiGridAlt,
      solid: BiSolidGridAlt
    }
  },
]