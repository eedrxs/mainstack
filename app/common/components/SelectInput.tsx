import { useState, useRef } from "react";
import Image from "next/image";
import Select, { components, StylesConfig } from "react-select";

import CaretUpIcon from "@/public/images/caret-up.svg"
import CaretDownIcon from "@/public/images/caret-down.svg"

const SelectInput: React.FC<SelectInputProps> = ({options}) => {
  const [selectedOptions, setSelectedOptions] = useState<any[]>([]);

  return (
    <div className="relative grow">
      <Select
        defaultValue={[] as any}
        isMulti
        unstyled
        isSearchable={false}
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        onChange={(options) => {
          if (Array.isArray(options)) {
            setSelectedOptions(options.map((opt) => opt.value));
          }
        }}
        styles={customStyles}
        options={options}
        components={{
          Option: InputOption,
          MultiValue,
          MultiValueRemove: () => null
        }}
      />
      <Image src={CaretUpIcon} alt="caret up icon" className="absolute right-[16px] top-[50%] -translate-y-[50%]" />
    </div>   
  );
}

export default SelectInput

type SelectInputProps = {
  options: {value: string, label: string}[]
}

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

  let bg = "transparent";
  if (isFocused) bg = "#EEE";
  if (isActive) bg = "#B2D4FF";

  const style = {
    alignItems: "center",
    backgroundColor: bg,
    color: "inherit",
    display: "flex "
  };

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
      <input type="checkbox" checked={isSelected} className="text-primary mr-3 border-[#D9D9D9] rounded-sm" />
      {children}
    </components.Option>
  );
};

const MultiValue: React.FC<any> = (props) => (
  <components.MultiValue {...props}>
    <div className="whitespace-nowrap">{props.data.label}{props.selectProps.value.length > 1 && ", "}</div>
  </components.MultiValue>
);

const allOptions = [
  { value: "1", label: "Store Transactions" },
  { value: "2", label: "Get Tipped" },
  { value: "3", label: "Withdrawals" },
  { value: "4", label: "Chargebacks" },
  { value: "5", label: "Cashbacks" },
  { value: "6", label: "Refer & Earn" },
];

const customStyles: StylesConfig = {
  control: (base, state) => ({
    backgroundColor: state.isFocused ? 'white' : '#EFF1F6',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '0.75rem',
    fontWeight: '500',
    fontSize: '0.875rem',
    letterSpacing: '-0.2px',
    outline: state.isFocused ? '3px solid #131316' : 'none',
    width: '100%',
    padding: '14px 40px 14px 16px',
    transition: 'none',
  }),
  dropdownIndicator: () => ({
    display: 'none',
  }),
  placeholder: () => ({
    display: 'none',
  }),
  clearIndicator: () => ({
    display: 'none'
  }),
  menu: () => ({
    backgroundColor: '#fff',
    padding: '8px',
    borderRadius: '12px',
    boxShadow: '0px 6px 12px 0px rgba(92, 115, 131, 0.08), 0px 4px 8px 0px rgba(92, 115, 131, 0.08)',
    marginTop: '8px',
    position: 'absolute',
    width: '100%',
    zIndex: 20
  }),
  option: (base: any, state: any) => ({
    padding: '14px',
    borderRadius: '10px',
    fontWeight: 600,
    cursor: 'pointer'
  }),
  valueContainer: () => ({
    display: 'flex',
    flexWrap: 'nowrap',
    overflow: 'hidden'
  }),
  multiValue: () => ({
    display: 'inline'
  })
};