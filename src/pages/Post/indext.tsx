import { PostContainer, PostContent, PostHeaderContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { Issue, IssuesContext } from '../../contexts/IssuesContext'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function Post() {
  const { issues } = useContext(IssuesContext)

  const [selectedIssue, setSelectedIssue] = useState<Issue>()

  function getSelectedIssue() {
    const postIdInStorage = localStorage.getItem('@github-blog:post-id')

    if (postIdInStorage) {
      const issue = issues.find((issue) => {
        return issue.id === parseInt(postIdInStorage)
      })

      issue && setSelectedIssue(issue)
    } 
  }

  useEffect(() => { 
    getSelectedIssue()
  }, [getSelectedIssue])

  return (
    <>
    {selectedIssue && <PostContainer>
      <PostHeaderContainer>
        <header>
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </Link>
          <a href={selectedIssue.issueUrl} target='_blank'>
            Ver no GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
          </a>
        </header>
        <h1>{selectedIssue.title}</h1>
        <footer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{selectedIssue.login}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>
              {formatDistanceToNow(new Date(selectedIssue.createdAt), {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>{selectedIssue.comments} {selectedIssue.comments === 1 ? 'comentário' : 'comentários'}</span>
          </div>
        </footer>
      </PostHeaderContainer>
      <PostContent>{selectedIssue.content}</PostContent>
    </PostContainer>}
    </>
  )
}
