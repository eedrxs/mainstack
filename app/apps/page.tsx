import { redirect } from "next/navigation"

const Apps = () => {
  redirect("/apps/link-in-bio")
  return <div className="font-black text-2xl">Apps</div>
}

export default Apps
