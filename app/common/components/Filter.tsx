"use client"
import { useState } from "react"
import Image from "next/image"
import moment from "moment"
import SelectInput from "./SelectInput"
import DateInput from "./DateInput"

import XIcon from "@/public/images/x-icon.svg"

const Filter: React.FC<any> = ({
  toggleFilter,
  startDate,
  endDate,
  selectedPeriod,
  transactionType,
  transactionStatus,
  onStartDate,
  onEndDate,
  onSelectPeriod,
  onTransactionType,
  onTransationStatus,
  onClearFilter,
}) => {
  const [filterStartDate, setFilterStartDate] = useState(new Date())
  const [filterEndtDate, setFilterEndDate] = useState(new Date())

  const boxShadow =
    "0px 8px 16px 4px rgba(188, 196, 204, 0.10), 0px 12px 24px 0px rgba(219, 222, 229, 0.10), 0px 16px 32px 0px rgba(219, 222, 229, 0.10)"
  const backdropFilter = "blur(8px)"

  const togglePeriod = (period: (typeof periods)[number]) => {
    if (period.label === selectedPeriod) {
      setFilterStartDate(moment().toDate())
      onStartDate(null)

      setFilterEndDate(moment().toDate())
      onEndDate(null)
      
      onSelectPeriod(null)
    } else {
      setFilterStartDate(period.startTime().toDate())
      onStartDate(period.startTime().toDate())
      
      setFilterEndDate(moment().toDate())
      onEndDate(moment().toDate())

      onSelectPeriod(period.label)
    }
  }

  return (
    <div
      data-testid="filter-component"
      style={{ boxShadow, backdropFilter }}
      className="flex flex-col rounded-[20px] bg-white w-[456px] h-full px-[22px]"
    >
      {/* heading */}
      <div className="flex justify-between items-center py-5 px-[2px]">
        <p className="font-bold text-2xl">Filter</p>
        <div onClick={toggleFilter} className="p-1">
          <Image src={XIcon} alt="x icon" />
        </div>
      </div>

      {/*  className="mb-48" */}
      <div className="grow mb-10">
        {/* time periods */}
        <div className="flex gap-3 flex-nowrap overflow-auto no-scrollbar mb-7">
          {periods.map((period) => (
            <button
              key={period.label}
              onClick={() => togglePeriod(period)}
              className={`shrink-0 font-semibold text-sm -tracking-[0.4px] border rounded-full py-[10px] px-[18px] ${
                selectedPeriod === period.label
                  ? "bg-black text-white"
                  : "border-[#EFF1F6]"
              }`}
            >
              {period.label}
            </button>
          ))}
        </div>

        {/* date range */}
        <div className="mb-6">
          <p className="font-semibold -tracking-[0.4px] mb-3">Date Range</p>
          <div className="flex justify-between gap-[6px]">
            <DateInput
              value={filterStartDate}
              onSelect={(value: any) => {
                if (selectedPeriod) {
                  onSelectPeriod(null)
                }

                onStartDate(value)
                setFilterStartDate(value)
              }}
            />

            <DateInput
              value={filterEndtDate}
              onSelect={(value: any) => {
                if (selectedPeriod) {
                  onSelectPeriod(null)
                }

                onEndDate(value)
                setFilterEndDate(value)
              }}
            />
          </div>
        </div>

        {/* transaction type */}
        <div className="mb-6">
          <p className="font-semibold -tracking-[0.4px] mb-3">
            Transaction Type
          </p>
          <SelectInput
            options={transactionTypeOptions}
            value={transactionType}
            onSelect={onTransactionType}
          />
        </div>

        {/* transaction status */}
        <div>
          <p className="font-semibold -tracking-[0.4px] mb-3">
            Transaction Status
          </p>
          <SelectInput
            options={transactionStatusOptions}
            value={transactionStatus}
            onSelect={onTransationStatus}
          />
        </div>
      </div>

      {/* clear x apply */}
      <div className="flex justify-between py-5 px-[2px]">
        <button
          onClick={() => {
            setFilterStartDate(new Date())
            setFilterEndDate(new Date())
            onClearFilter()
          }}
          className="border border-[#EFF1F6] rounded-full w-[198px] px-6 py-3"
        >
          Clear
        </button>
        <button className="bg-primary text-white border border-[#EFF1F6] rounded-full w-[198px] px-6 py-3">
          Apply
        </button>
      </div>
    </div>
  )
}

export default Filter

type FilterProps = {
  toggleFilter: () => void
}

const ISO_Format = "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"

function startOf(unit: moment.unitOfTime.DurationConstructor) {
  return () => moment().startOf(unit)
}

function timeAgo(amount: number, unit: moment.unitOfTime.DurationConstructor) {
  return () => moment().subtract(amount, unit)
}

const periods = [
  {
    label: "Today",
    startTime: startOf("day"),
  },
  {
    label: "Last 7 days",
    startTime: timeAgo(7, "days"),
  },
  {
    label: "This month",
    startTime: startOf("month"),
  },
  {
    label: "Last 3 months",
    startTime: timeAgo(3, "months"),
  },
  {
    label: "This year",
    startTime: startOf("year"),
  },
]

const transactionTypeOptions = [
  { value: "1", label: "Store Transactions" },
  { value: "2", label: "Get Tipped" },
  { value: "3", label: "Withdrawals" },
  { value: "4", label: "Chargebacks" },
  { value: "5", label: "Cashbacks" },
  { value: "6", label: "Refer & Earn" },
]

const transactionStatusOptions = [
  { value: "1", label: "Successful" },
  { value: "2", label: "Pending" },
  { value: "3", label: "Failed" },
]
