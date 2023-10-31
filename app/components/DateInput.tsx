import Image from "next/image";
import { Datepicker } from 'flowbite-react';

import CaretUpIcon from "@/public/images/caret-up.svg"
import CaretDownIcon from "@/public/images/caret-down.svg"
import { useRef } from "react";


const DateInput = () => {
  const datePickerRef = useRef(null)

  return (
    <div className="relative grow">
      {/* <input value="17 Jul 2023" readOnly className="bg-[#EFF1F6] focus:bg-white cursor-pointer rounded-xl font-medium text-sm -tracking-[0.2px] focus:outline outline-[3px] w-full px-4 py-[14px] pr-10" /> */}
      {/* <Datepicker showClearButton={false} showTodayButton={false} icon={undefined} /> */}
      <input datepicker="true" datepicker-format="dd M yyyy" className="bg-[#EFF1F6] focus:bg-white cursor-pointer rounded-xl font-medium text-sm -tracking-[0.2px] border-0 focus:outline outline-[3px] w-full px-4 py-[14px] pr-10"></input>
      <Image src={CaretUpIcon} alt="caret up icon" className="absolute right-[16px] top-[50%] -translate-y-[50%]" />
    </div>
  );
}

export default DateInput;