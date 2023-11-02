import {LiaCogSolid} from "react-icons/lia"
import {IoReceiptOutline} from "react-icons/io5"
import {CiGift, CiLogout} from "react-icons/ci"
import {BiGridAlt} from "react-icons/bi"
import {VscBug} from "react-icons/vsc"
import {PiUserSquare} from "react-icons/pi"

const Menu: React.FC<MenuProps> = ({isOpen}) => {
  const boxShadow =
    "0px 8px 16px 4px rgba(188, 196, 204, 0.10), 0px 12px 24px 0px rgba(219, 222, 229, 0.10), 0px 16px 32px 0px rgba(219, 222, 229, 0.10)"
  const backdropFilter = "blur(8px)"
  const accountInitialsGradient =
    "linear-gradient(139deg, #5C6670 2.33%, #131316 96.28%)"

  return (
    <div
      style={{ boxShadow, backdropFilter, display: isOpen ? 'block' : 'none' }}
      className="absolute right-0 top-[150%] rounded-[20px] bg-white w-[356px] px-4 py-6"
    >
      <div className="flex items-center px-3 mb-6">
        <div
          style={{ backgroundImage: accountInitialsGradient }}
          className="flex justify-center items-center shrink-0 rounded-full text-white font-semibold h-12 w-12 mr-3"
        >
          OJ
        </div>

        <div>
          <p className="font-medium text-lg mb-1">Olivier Jones</p>
          <p className="text-sm text-[#56616B]">olivierjones@gmail.com</p>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        {menuItems.map(menuItem => (<div>
          <div className="flex items-center font-medium hover:bg-[#EFF1F6] rounded-[10px] p-[14px] cursor-pointer">
            <span className="text-xl mr-2">{<menuItem.icon />}</span>
            {menuItem.label}
          </div>
        </div>))}
      </div>
    </div>
  )
}

export default Menu

type MenuProps = {
  isOpen: boolean
}

const menuItems = [
  {
    label: 'Settings',
    icon: LiaCogSolid
  },
  {
    label: 'Purchase History',
    icon: IoReceiptOutline
  },
  {
    label: 'Reger and Earn',
    icon: CiGift
  },
  {
    label: 'Integrations',
    icon: BiGridAlt
  },
  {
    label: 'Report Bug',
    icon: VscBug
  },
  {
    label: 'Switch Account',
    icon: PiUserSquare
  },
  {
    label: 'Sign Out',
    icon: CiLogout
  },
]