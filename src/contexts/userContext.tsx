import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { usersAPI } from '../lib/axios'

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({})

export function UserProvider({ children }: UserProviderProps) {
  const [userInfomations, setUserInfomations] = useState({})

  const fetchUser = useCallback(async () => {
    const response = await usersAPI.get('rocketseat-education')

    console.log(response.data)
    setUserInfomations(response.data)
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <UserContext.Provider value={userInfomations}>
      {children}
    </UserContext.Provider>
  )
}
