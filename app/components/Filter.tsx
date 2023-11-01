'use client';
import Image from "next/image";

import XIcon from "@/public/images/x-icon.svg"
import SelectInput from './SelectInput';
import DateInput from './DateInput';

const Filter = () => {
  const boxShadow = "0px 8px 16px 4px rgba(188, 196, 204, 0.10), 0px 12px 24px 0px rgba(219, 222, 229, 0.10), 0px 16px 32px 0px rgba(219, 222, 229, 0.10)"
  const backdropFilter = "blur(8px)"

  return (
    <div style={{boxShadow, backdropFilter}} className="rounded-[20px] bg-white w-[456px] px-[22px]">
      {/* heading */}
      <div className="flex justify-between items-center py-5 px-[2px]">
        <p className="font-bold text-2xl">Filter</p>
        <div className="p-1">
          <Image src={XIcon} alt="x icon" />
        </div>
      </div>

      <div className="mb-48">
        {/* time periods */}
        <div className="flex gap-3 flex-nowrap overflow-auto no-scrollbar mb-7">
          {periods.map(period => (
            <button key={period.label} className="shrink-0 font-semibold text-sm -tracking-[0.4px] border border-[#EFF1F6] rounded-full py-[10px] px-[18px]">{period.label}</button>
          ))}
        </div>
        {/* date range */}
        <div className='mb-6'>
          <p className="font-semibold -tracking-[0.4px] mb-3">Date Range</p>
          <div className="flex justify-between gap-[6px]">
            <DateInput />
            <DateInput />
          </div>
        </div>
        {/* transaction type */}
        <div className='mb-6'>
          <p className="font-semibold -tracking-[0.4px] mb-3">Transaction Type</p>
          <SelectInput options={transactionTypeOptions} />
        </div>
        {/* transaction status */}
        <div>
          <p className="font-semibold -tracking-[0.4px] mb-3">Transaction Status</p>
          <SelectInput options={transactionStatusOptions} />
        </div>
      </div>

      {/* clear x apply */}
      <div className='flex justify-between py-5 px-[2px]'>
        <button className='border border-[#EFF1F6] rounded-full w-[198px] px-6 py-3'>Clear</button>
        <button className='bg-primary text-white border border-[#EFF1F6] rounded-full w-[198px] px-6 py-3'>Apply</button>
      </div>
    </div>
  );
}

export default Filter;

const periods = [
  {
    label: 'Today'
  },
  {
    label: 'Last 7 days'
  },
  {
    label: 'This month'
  },
  {
    label: 'Last 3 months'
  },
  {
    label: 'This year'
  },
]

const transactionTypeOptions = [
  { value: "1", label: "Store Transactions" },
  { value: "2", label: "Get Tipped" },
  { value: "3", label: "Withdrawals" },
  { value: "4", label: "Chargebacks" },
  { value: "5", label: "Cashbacks" },
  { value: "6", label: "Refer & Earn" },
];

const transactionStatusOptions = [
  { value: "1", label: "Successful" },
  { value: "2", label: "Pending" },
  { value: "3", label: "Failed" },
];