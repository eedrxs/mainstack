'use client'
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AccountContext = createContext<User | undefined>({
  firstName: '',
  lastName: '',
  fullName: '',
  email: '',
  initials: '',
})

const AccountProvider: React.FC<AccountProviderProps> = ({children}) => {
  const [user, setUser] = useState<User>()
  
  useEffect(() => {
    const getUserDetails = async () => {
      const {data} = await axios.get('https://fe-task-api.mainstack.io/user')
      const user = {
        firstName: data.first_name,
        lastName: data.last_name,
        fullName: data.first_name + " " + data.last_name,
        email: data.email,
        initials: data.first_name[0] + data.last_name[0]
      }
      setUser(user)
    }

    getUserDetails()
  }, [])

  return (
    <AccountContext.Provider value={user}>
      {children}
    </AccountContext.Provider>
  );
}

export default AccountProvider;

type AccountProviderProps = {
  children: React.ReactNode
}

interface User {
  firstName: string
  lastName: string
  fullName: string
  email: string
  initials: string
}

export const useAccountContext = () => {
  return useContext(AccountContext)
}