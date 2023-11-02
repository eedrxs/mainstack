'use client'
import Image from "next/image"
import { Tooltip } from "react-tooltip"

import Icon1 from "@/public/images/sidebar-icon1.svg"
import Icon2 from "@/public/images/sidebar-icon2.svg"
import Icon3 from "@/public/images/sidebar-icon3.svg"
import Icon4 from "@/public/images/sidebar-icon4.svg"

const Sidebar = () => {
  const boxShadow =
    "0px 6px 12px 0px rgba(92, 115, 131, 0.08), 0px 4px 8px 0px rgba(92, 115, 131, 0.08)"
  return (
    <div className="sticky top-[76px] h-[calc(100vh-76px)] flex items-center pl-4">
      <div
        style={{ boxShadow }}
        className="flex flex-col shrink-0 bg-white rounded-full gap-2 p-1"
      >
        <div
          data-tooltip-id="link-in-bio"
          data-tooltip-content="Link in Bio"
          data-tooltip-place="right"
          className="flex items-center grayscale hover:grayscale-0 hover:bg-[#EFF1F6] rounded-full h-10 p-2"
        >
          <Image src={Icon1} alt="icon" />
          <Tooltip id="link-in-bio" />
        </div>

        <div
          data-tooltip-id="store"
          data-tooltip-content="Store"
          data-tooltip-place="right"
          className="flex items-center grayscale hover:grayscale-0 hover:bg-[#EFF1F6] rounded-full h-10 p-2"
        >
          <Image src={Icon2} alt="icon" />
          <Tooltip id="store" />
        </div>

        <div
          data-tooltip-id="media-kit"
          data-tooltip-content="Media Kit"
          data-tooltip-place="right"
          className="flex items-center grayscale hover:grayscale-0 hover:bg-[#EFF1F6] rounded-full h-10 p-2"
        >
          <Image src={Icon3} alt="icon" />
          <Tooltip id="media-kit" />
        </div>

        <div
          data-tooltip-id="invoicing"
          data-tooltip-content="Invoicing"
          data-tooltip-place="right"
          className="flex items-center grayscale hover:grayscale-0 hover:bg-[#EFF1F6] rounded-full h-10 p-2"
        >
          <Image src={Icon4} alt="icon" />
          <Tooltip id="invoicing" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
