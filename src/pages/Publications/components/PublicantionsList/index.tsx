import { Link } from 'react-router-dom'
import { PublicationCard, PublicationsListContainer } from './styles'
import { IssuesContext } from '../../../../contexts/IssuesContext'
import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function PublicationsList() {
  const { issues } = useContext(IssuesContext)

  function handleSetIdPostInStorage(id: number) {
    localStorage.setItem('@github-blog:post-id', id.toString())
  }

  return (
    <PublicationsListContainer>
      {issues.map((issue) => {
        return (
          <Link to="/post" key={issue.id} onClick={() => handleSetIdPostInStorage(issue.id)}>
            <PublicationCard>
              <header>
                <h1>{issue.title}</h1>
                <span>
                  {formatDistanceToNow(new Date(issue.createdAt), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </span>
              </header>
              <p>{issue.content}</p>
            </PublicationCard>
          </Link>
        )
      })}
    </PublicationsListContainer>
  )
}
