import { Header } from '../../components/Header'
import {
  PublicationsContainer,
  PublicationsHeaderContainer,
  PublicationsHeaderContent,
} from './styles'
import Avatar from '../../assets/avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

export function Publications() {
  return (
    <>
      <Header />
      <PublicationsContainer>
        <PublicationsHeaderContainer>
          <img src={Avatar} alt="" />
          <PublicationsHeaderContent>
            <header>
              <h1>Cameron Williamson</h1>
              <a href="">
                GITHUB
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
              </a>
            </header>
            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </p>
            <footer>
              <div>
                <FontAwesomeIcon icon={faGithub} />
                <span>cameronwll</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faBuilding} />
                <span>Rocketseat</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faUserGroup} size="sm" />
                <span>32 seguidores</span>
              </div>
            </footer>
          </PublicationsHeaderContent>
        </PublicationsHeaderContainer>
      </PublicationsContainer>
    </>
  )
}
