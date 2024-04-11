import Image from "next/image"
import Link from "next/link"

const SubNav: React.FC<SubNavProps> = ({ routes }) => {
  const boxShadow =
    "0px 8px 16px 4px rgba(188, 196, 204, 0.10), 0px 12px 24px 0px rgba(219, 222, 229, 0.10), 0px 16px 32px 0px rgba(219, 222, 229, 0.10)"
  const backdropFilter = "blur(8px)"

  return (
    <div className="hidden group-hover:block absolute left-0 top-0 pt-14">
      <div
        style={{ boxShadow, backdropFilter }}
        className="rounded-[20px] bg-white w-[356px] px-3 py-5"
      >
        <div className="flex flex-col gap-2.5">
          {routes.map((route, index) => (
            <Link
              key={index}
              href={route.route}
              className="flex items-center font-medium hover:shadow-sm rounded-[10px] p-[14px] cursor-pointer"
            >
              <div className="border border-[#EFF1F6] rounded-lg p-2 mr-3">
                <Image src={route.iconUrl} alt="icon" />
              </div>

              <div>
                <p className="font-medium text-primary">{route.title}</p>
                <p className="text-[#56616B]">{route.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SubNav

type SubNavProps = {
  routes: Route[]
}

type Route = {
  route: string
  title: string
  description: string
  iconUrl: string
}
