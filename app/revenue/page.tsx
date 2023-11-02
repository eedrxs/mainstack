"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import axios from "axios"
import moment from "moment"
import Drawer from "react-modern-drawer"
import Filter from "../common/components/Filter"
import Chart from "../common/components/Chart"
import NoResult from "../common/components/NoResult"

import InfoIcon from "@/public/images/info.svg"
import CaretDownIcon from "@/public/images/caret-down.svg"
import DownloadIcon from "@/public/images/download.svg"
import IncomingIcon from "@/public/images/incoming.svg"
import OutgoingIcon from "@/public/images/outgoing.svg"
import "react-modern-drawer/dist/index.css"

const Revenue = () => {
  const [wallet, setWallet] = useState<IWallet>()
  const [transactions, setTransactions] = useState<ITransaction[]>([])
  const [filterOpen, setFilterOpen] = useState(false)
  const [dateRange, setDateRange] = useState({ start: null, end: null })
  const [transactionType, setTransactionType] = useState()
  const [transactionStatus, setTransactionStatus] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const walletCall = axios.get("https://fe-task-api.mainstack.io/wallet")
      const transactionsCall = axios.get(
        "https://fe-task-api.mainstack.io/transactions"
      )

      Promise.all([walletCall, transactionsCall]).then(
        ([wallet, transactions]) => {
          setWallet(wallet.data)
          setTransactions(transactions.data)
        }
      )
    }

    fetchData()
  }, [])

  const toggleFilter = () => {
    setFilterOpen((prev) => !prev)
  }

  const formatTransaction = (transaction: ITransaction) => {
    const { metadata, type, status } = transaction
    const subtext = status.charAt(0).toUpperCase() + status.substring(1)
    const date = moment(transaction.date).format("MMM DD,YYYY")

    if (metadata?.product_name) {
      return { title: metadata.product_name, subtext: metadata.name, date }
    } else if (type == "deposit") {
      return { title: "Cash deposit", subtext, date }
    } else if (type == "withdrawal") {
      return { title: "Cash withdrawal", subtext, date }
    }
  }

  const handleClearFilter = () => {}
  return (
    <div>
      <div className="flex justify-between mb-[86px]">
        {/* left */}
        <div className="grow  mr-[124px]">
          {/* balance x withdraw */}
          <div className="flex items-center gap-16 mb-8">
            <div>
              <p className="font-medium text-sm text-[#56616B] -tracking-[0.2px] mb-2">
                Available Balance
              </p>
              <p className="font-bold text-4xl text-primary -tracking-[1.5px]">
                USD {wallet?.balance?.toFixed(2)}
              </p>
            </div>

            <button className="bg-primary rounded-full font-semibold text-white w-[167px] px-7 py-[14px]">
              Withdraw
            </button>
          </div>

          {/* chart */}
          <Chart />
        </div>

        {/* right */}
        <div className="flex flex-col gap-8 w-[270px]">
          {/* ledger balance */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <p className="font-medium text-sm text-[#56616B]">
                Ledger Balance
              </p>
              <Image src={InfoIcon} alt="info icon" />
            </div>

            <p className="font-bold text-[28px] text-primary -tracking-[0.6px]">
              USD {wallet?.ledger_balance?.toFixed(2)}
            </p>
          </div>

          {/* total payout */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <p className="font-medium text-sm text-[#56616B]">Total Payout</p>
              <Image src={InfoIcon} alt="info icon" />
            </div>

            <p className="font-bold text-[28px] text-primary -tracking-[0.6px]">
              USD {wallet?.total_payout?.toFixed(2)}
            </p>
          </div>

          {/* total revenue */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <p className="font-medium text-sm text-[#56616B]">
                Total Revenue
              </p>
              <Image src={InfoIcon} alt="info icon" />
            </div>

            <p className="font-bold text-[28px] text-primary -tracking-[0.6px]">
              USD {wallet?.total_revenue?.toFixed(2)}
            </p>
          </div>

          {/* pending payout */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <p className="font-medium text-sm text-[#56616B]">
                Pending Payout
              </p>
              <Image src={InfoIcon} alt="info icon" />
            </div>

            <p className="font-bold text-[28px] text-primary -tracking-[0.6px]">
              USD {wallet?.pending_payout?.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {/* transaction list header */}
      <div className="flex justify-between border-b border-[#EFF1F6] pb-6 mb-[33px]">
        <div>
          <p className="font-bold text-2xl -tracking-[0.6px]">
            {transactions.length} Transaction{transactions.length && "s"}
          </p>
          <p className="text-[#56616B] text-sm font-medium">
            Your transactions for the last 7 days
          </p>
        </div>

        <div className="flex gap-3">
          <button onClick={toggleFilter} className="button mr-3">
            Filter
            <div className="flex items-center justify-center w-5 h-5 bg-primary text-white text-xs rounded-full py-1 px-[6.5px]">
              3
            </div>
            <Image src={CaretDownIcon} alt="filter" />
          </button>
          <button className="button">
            Export list <Image src={DownloadIcon} alt="download" />
          </button>
        </div>
      </div>

      {/* transaction list */}
      <div className="flex flex-col gap-6">
        {/* transaction item */}
        {!transactions.length ||
          transactions.map((transaction) => {
            const transactionInfo = formatTransaction(transaction)
            const isDeposit = transaction.type == 'deposit'

            return (
              <div className="flex items-center justify-between">
                <div className="flex">
                  <div className={(isDeposit ? "bg-[#E3FCF2]" : "bg-[#F9E3E0]") + " flex items-center justify-center rounded-full h-12 w-12 shrink-0 mr-[14.5px]"}>
                    <Image src={isDeposit ? IncomingIcon : OutgoingIcon} alt="icon" />
                  </div>

                  <div className="-tracking-[0.2px]">
                    <p className="font-medium text-primary mb-1">
                      {transactionInfo?.title}
                    </p>
                    {transactionInfo?.subtext == 'Successful' && <p className="font-medium text-sm text-[#0EA163] -tracking-[0.2px]">
                      {transactionInfo?.subtext}
                    </p>}
                    {transactionInfo?.subtext == 'Pending' && <p className="font-medium text-sm text-[#A77A07] -tracking-[0.2px]">
                      {transactionInfo?.subtext}
                    </p>}
                    {(transactionInfo?.subtext != 'Successful' && transactionInfo?.subtext != 'Pending') && <p className="font-medium text-sm text-[#56616B] -tracking-[0.2px]">
                      {transactionInfo?.subtext}
                    </p>}
                  </div>
                </div>

                <div className="flex flex-col items-end -tracking-[0.2px]">
                  <p className="font-bold text-primary mb-1">
                    USD {transaction.amount}
                  </p>
                  <p className="font-medium text-sm text-[#56616B]">
                    {transactionInfo?.date}
                  </p>
                </div>
              </div>
            )
          })}

        {!transactions.length && <NoResult onClearFilter={handleClearFilter} />}
      </div>

      <Drawer
        open={filterOpen}
        onClose={toggleFilter}
        direction="right"
        size={456}
        overlayColor="#e7e7e7"
        overlayOpacity={0.2}
        lockBackgroundScroll
      >
        <div>
          <Filter />
        </div>
      </Drawer>
    </div>
  )
}

export default Revenue

interface IWallet {
  balance: number
  total_payout: number
  total_revenue: number
  ledger_balance: number
  pending_payout: number
}

export interface ITransaction {
  amount: number
  metadata?: Metadata
  payment_reference?: string
  status: string
  type: string
  date: string
}

interface Metadata {
  name: string
  type: string
  email: string
  quantity: number
  country: string
  product_name?: string
}
