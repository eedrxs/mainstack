import { useState } from "react";
import Image from "next/image";
import Select, { components } from "react-select";

import CaretUpIcon from "@/public/images/caret-up.svg"
import CaretDownIcon from "@/public/images/caret-down.svg"

const SelectInput = () => {
  const [selectedOptions, setSelectedOptions] = useState<any[]>([]);

  return (
    <div className="relative grow">
      <input value="17 Jul 2023" readOnly className="bg-[#EFF1F6] focus:bg-white cursor-pointer rounded-xl font-medium text-sm -tracking-[0.2px] focus:outline outline-[3px] w-full px-4 py-[14px] pr-10" />
      <Image src={CaretUpIcon} alt="caret up icon" className="absolute right-[16px] top-[50%] -translate-y-[50%]" />

      {/* <Select
        defaultValue={[] as any}
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        onChange={(options) => {
          if (Array.isArray(options)) {
            setSelectedOptions(options.map((opt) => opt.value));
          }
        }}
        options={allOptions}
        components={{
          Option: InputOption
        }}
      /> */}
    </div>   
  );
}

export default SelectInput

const InputOption: React.FC<any> = ({
  getStyles,
  Icon,
  isDisabled,
  isFocused,
  isSelected,
  children,
  innerProps,
  ...rest
}) => {
  const [isActive, setIsActive] = useState(false);
  const onMouseDown = () => setIsActive(true);
  const onMouseUp = () => setIsActive(false);
  const onMouseLeave = () => setIsActive(false);

  // styles
  let bg = "transparent";
  if (isFocused) bg = "#eee";
  if (isActive) bg = "#B2D4FF";

  const style = {
    alignItems: "center",
    backgroundColor: bg,
    color: "inherit",
    display: "flex "
  };

  // prop assignment
  const props = {
    ...innerProps,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    style
  };

  return (
    <components.Option
      {...rest}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isSelected={isSelected}
      getStyles={getStyles}
      innerProps={props}
    >
      <input type="checkbox" checked={isSelected} />
      {children}
    </components.Option>
  );
};

const allOptions = [
  { value: "option 1", label: "option 1" },
  { value: "option 2", label: "option 2" },
  { value: "option 3", label: "option 3" },
  { value: "option 4", label: "option 4" }
];