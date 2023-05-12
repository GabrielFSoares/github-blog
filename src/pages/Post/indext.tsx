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

export function Post() {
  return (
    <PostContainer>
      <PostHeaderContainer>
        <header>
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </Link>
          <a href="">
            Ver no GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
          </a>
        </header>
        <h1>JavaScript data types and data structures</h1>
        <footer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Há 1 dia</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>5 comentários</span>
          </div>
        </footer>
      </PostHeaderContainer>
      <PostContent>Conteúdo</PostContent>
    </PostContainer>
  )
}
