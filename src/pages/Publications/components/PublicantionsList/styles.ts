import { styled } from 'styled-components'

export const PublicationsListContainer = styled.div`
  display: grid;
  grid-template-columns: 26rem 26rem;
  gap: 2rem;
  margin-top: 3rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme['base-text']};
  }
`

export const PublicationCard = styled.div`
  background-color: ${(props) => props.theme['base-post']};
  border: 2px solid ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
  height: 16.25rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  cursor: pointer;

  transition: border-color 0.4s;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    h1 {
      font-size: 1.25rem;
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
      white-space: nowrap;
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`
