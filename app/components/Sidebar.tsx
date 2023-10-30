import Image from "next/image";
import Icon1 from "@/public/images/sidebar-icon1.svg"
import Icon2 from "@/public/images/sidebar-icon2.svg"
import Icon3 from "@/public/images/sidebar-icon3.svg"
import Icon4 from "@/public/images/sidebar-icon4.svg"

const Sidebar = () => {
  const boxShadow = "0px 6px 12px 0px rgba(92, 115, 131, 0.08), 0px 4px 8px 0px rgba(92, 115, 131, 0.08)"
  return (
    <div className="sticky top-[76px] h-[calc(100vh-76px)] flex items-center pl-4">
      <div style={{boxShadow}} className="flex flex-col bg-white rounded-full gap-2 p-1">
        <div className="grayscale p-2">
          <Image src={Icon1} alt="icon" />
        </div>

        <div className="grayscale p-2">
          <Image src={Icon2} alt="icon" />
        </div>

        <div className="grayscale p-2">
          <Image src={Icon3} alt="icon" />
        </div>

        <div className="grayscale p-2">
          <Image src={Icon4} alt="icon" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;