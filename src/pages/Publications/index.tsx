import { PublicationsHeader, UserInformationContent } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { SearchForm } from './components/SearchForm'
import { PublicationsList } from './components/PublicantionsList'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

export function Publications() {
  const { avatarUrl, bio, followers, gitUrl, name, login } =
    useContext(UserContext)

  return (
    <div>
      <PublicationsHeader>
        <img src={avatarUrl} alt="" />
        <UserInformationContent>
          <header>
            <h1>{name}</h1>
            <a href={gitUrl} target="_blank" rel="noreferrer">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
            </a>
          </header>
          <p>{bio}</p>
          <footer>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>{login}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>Rocketseat</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} size="sm" />
              <span>
                {followers} {followers === 1 ? 'seguidor' : 'seguidores'}
              </span>
            </div>
          </footer>
        </UserInformationContent>
      </PublicationsHeader>

      <SearchForm />
      <PublicationsList />
    </div>
  )
}
