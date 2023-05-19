import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { issuesAPI } from '../lib/axios'

export interface Issue {
  id: number
  title: string
  content: string
  createdAt: string
  issueUrl: string
  login: string
  comments: number
}

interface IssuesContextType {
  issues: Issue[]
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])

  const fetchIssues = useCallback(async () => {
    const response = await issuesAPI.get(
      'rocketseat-education/reactjs-github-blog-challenge/issues',
    )

    const issuesList = response.data.map((data: any) => {
      return {
        id: data.id,
        title: data.title,
        content: data.body,
        createdAt: data.created_at,
        issueUrl: data.html_url,
        login: data.user.login,
        comments: data.comments,
      }
    })

    setIssues(issuesList)
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <IssuesContext.Provider value={{ issues }}>
      {children}
    </IssuesContext.Provider>
  )
}
