'use client'
import { createContext, useEffect, useState } from "react";

const AccountContext = createContext<User | undefined>({
  firstName: '',
  lastName: '',
  email: ''
})

const AccountProvider: React.FC<AccountProviderProps> = ({children}) => {
  const [user, setUser] = useState<User>()
  
  useEffect(() => {
    const getUserDetails = async () => {
      const res = await fetch('https://fe-task-api.mainstack.io/user', {
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        method: 'GET'
      })
      const user = await res.json()
      console.log(user)
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
  email: string
}