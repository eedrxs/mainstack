import {useEffect, useState} from "react"
import Image from "next/image";
import Datepicker from "tailwind-datepicker-react"

import CaretUpIcon from "@/public/images/caret-up.svg"
import CaretDownIcon from "@/public/images/caret-down.svg"
import { useRef } from "react";


const DateInput: React.FC<any> = ({value, onSelect}) => {
  const [show, setShow] = useState(false)
  const datePickerRef = useRef(null)
  
	const handleClose = (state: boolean) => {
		setShow(state)
	}

  return (
    <div className="relative grow">
      <Datepicker value={value} onChange={value => onSelect(value)} options={options} show={show} setShow={handleClose} />
      <Image src={CaretUpIcon} alt="caret up icon" className="absolute right-[16px] top-[50%] -translate-y-[50%]" />
    </div>
  );
}

export default DateInput;

const options: any = {
  todayBtn: false,
  clearBtn: false,
  theme: {
    input: "bg-[#EFF1F6] focus:bg-white cursor-pointer rounded-xl font-medium text-sm -tracking-[0.2px] border-0 focus:!outline !outline-primary !outline-[3px] !outline-offset-0 !ring-0 w-full px-4 py-[14px] pr-10",
    inputIcon: "hidden",
    selected: "bg-primary"
  },
	inputDateFormatProp: {
		day: "numeric",
		month: "short",
		year: "numeric"
	}
}