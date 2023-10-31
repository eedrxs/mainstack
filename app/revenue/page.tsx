'use client'
import Image from "next/image"
import NoResult from "../components/NoResult"

import InfoIcon from "@/public/images/info.svg"
import CaretDownIcon from "@/public/images/caret-down.svg"
import DownloadIcon from "@/public/images/download.svg"
import IncomingIcon from "@/public/images/incoming.svg"
import OutgoingIcon from "@/public/images/outgoing.svg"

const Revenue = () => {

  const handleClearFilter = () => {}

  return (
    <div>
      <div className="flex justify-between mb-[86px]">
        {/* left */}
        <div>
          {/* balance x withdraw */}
          <div className="flex items-center gap-16 mb-4">
            <div>
              <p className="font-medium text-sm text-[#56616B] -tracking-[0.2px] mb-2">
                Available Balance
              </p>
              <p className="font-bold text-4xl text-primary -tracking-[1.5px]">
                USD 120,500.00
              </p>
            </div>
            <button className="bg-primary rounded-full font-semibold text-white w-[167px] px-7 py-[14px]">
              Withdraw
            </button>
          </div>

          {/* chart */}
          <div className="h-[20rem] w-[765px] border border-black"></div>
          <div className="line" ></div>
          <div className="flex justify-between text-[#56616B] text-sm font-medium">
            <p>Apr 1 ,  2022</p>
            <p>Apr 30 ,  2022</p>
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col gap-8 w-[270px]">
          {/* ledger balance */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <p className="font-medium text-sm text-[#56616B]">
                Ledger Balance
              </p>
              <Image src={InfoIcon} alt="info icon" />
            </div>

            <p className="font-bold text-[28px] text-primary -tracking-[0.6px]">USD 0.00</p>
          </div>

          {/* total payout */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <p className="font-medium text-sm text-[#56616B]">Total Payout</p>
              <Image src={InfoIcon} alt="info icon" />
            </div>

            <p className="font-bold text-[28px] text-primary -tracking-[0.6px]">USD 55,080.00</p>
          </div>

          {/* total revenue */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <p className="font-medium text-sm text-[#56616B]">
                Total Revenue
              </p>
              <Image src={InfoIcon} alt="info icon" />
            </div>

            <p className="font-bold text-[28px] text-primary -tracking-[0.6px]">USD 175,580.00</p>
          </div>

          {/* pending payout */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <p className="font-medium text-sm text-[#56616B]">Pending Payout</p>
              <Image src={InfoIcon} alt="info icon" />
            </div>

            <p className="font-bold text-[28px] text-primary -tracking-[0.6px]">USD 0.00</p>
          </div>
        </div>
      </div>

      {/* transaction list header */}
      <div className="flex justify-between border-b border-[#EFF1F6] pb-6 mb-[33px]">
        <div>
          <p className="font-bold text-2xl -tracking-[0.6px]">24 Transaction</p>
          <p className="text-[#56616B] text-sm font-medium">Your transactions for the last 7 days</p>
        </div>

        <div className="flex gap-3">
          <button className="button">
            Filter 
            <div className="flex items-center justify-center w-5 h-5 bg-primary text-white text-xs rounded-full py-1 px-[6.5px]">3</div> 
            <Image src={CaretDownIcon} alt="filter" /></button>
          <button className="button">Export list <Image src={DownloadIcon} alt="download" /></button>
        </div>
      </div>

      {/* transaction list */}
      <div className="flex flex-col gap-6">
        {/* transaction item */}
        {/* <div className="flex items-center justify-between">
          <div className="flex">
            <div className="flex items-center justify-center bg-[#E3FCF2] rounded-full h-12 w-12 shrink-0 mr-[14.5px]">
              <Image src={IncomingIcon} alt="incoming icon" />
            </div>

            <div className="-tracking-[0.2px]">
              <p className="font-bold text-primary mb-1">Psychology of Money </p>
              <p className="font-medium text-sm text-[#56616B] -tracking-[0.2px]">Roy Cash</p>
            </div>
          </div>

          <div className="-tracking-[0.2px]">
            <p className="font-bold text-primary mb-1">USD 600</p>
            <p className="font-medium text-sm text-[#56616B]">Apr 03,2022</p>
          </div>
        </div> */}

        <NoResult onClearFilter={handleClearFilter} />
      </div>

      <div></div>
    </div>
  )
}

export default Revenue
