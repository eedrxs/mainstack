import { ITransaction } from "@/app/revenue/page"
import { LineChart, Line } from "recharts"

const Chart: React.FC<ChartProps> = ({data, dataKey}) => {
  return (
    <div>
      <div className="max-w-[765px]">
        <LineChart width={765} height={260} className="w-full" data={data}>
          <Line type="monotone" dataKey={dataKey} stroke="#FF5403" dot={false} />
        </LineChart>
      </div>
      <div className="line"></div>
      <div className="flex justify-between text-[#56616B] text-sm font-medium">
        <p>Apr 1 , 2022</p>
        <p>Apr 30 , 2022</p>
      </div>
    </div>
  )
}

export default Chart

type ChartProps = {
  data: ITransaction[]
  dataKey: string
}