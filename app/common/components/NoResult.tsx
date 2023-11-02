import Image from "next/image"
import ReceiptIcon from "@/public/images/receipt.svg"

const NoResult: React.FC<NoResultProps> = ({onClearFilter}) => {
  const receiptIconGradient =
    "linear-gradient(135deg, #DBDEE5 1.89%, #F6F7F9 98.77%)"

  return (
    <div className="max-w-[369px] m-auto mt-[65px]">
      <div
        style={{ background: receiptIconGradient }}
        className="rounded-2xl w-12 p-3 mb-5"
      >
        <Image src={ReceiptIcon} alt="receipt icon" />
      </div>

      <div className="mb-8">
        <p className="font-bold text-[28px] text-primary -tracking-[0.6px] mb-[10px]">
          No matching transaction found for the selected filter
        </p>
        <p className="font-medium text-[#56616B] -tracking-[0.6px]">
          Change your filters to see more results, or add a new product.
        </p>
      </div>

      <button onClick={onClearFilter} className="font-semibold bg-[#EFF1F6] rounded-full py-3 px-6">
        Clear Filter
      </button>
    </div>
  )
}

export default NoResult

type NoResultProps = {
  onClearFilter: () => void
}