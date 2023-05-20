import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { usersAPI } from '../lib/axios'

interface UserInformationProps {
  id: number
  avatarUrl: string
  name: string
  bio: string
  gitUrl: string
  followers: number
  gitName: string
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserInformationProps)

export function UserProvider({ children }: UserProviderProps) {
  const [userInfomation, setUserInfomation] = useState(
    {} as UserInformationProps,
  )

  const gitName = 'rocketseat-education'

  const fetchUser = useCallback(async () => {
    const response = await usersAPI.get(gitName)
    const user: UserInformationProps = {
      id: response.data.id,
      avatarUrl: response.data.avatar_url,
      name: response.data.name,
      bio: response.data.bio,
      gitUrl: response.data.html_url,
      followers: response.data.followers,
      gitName,
    }

    setUserInfomation(user)
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <UserContext.Provider value={userInfomation}>
      {children}
    </UserContext.Provider>
  )
}
