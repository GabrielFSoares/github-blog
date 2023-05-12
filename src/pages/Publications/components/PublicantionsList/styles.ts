import { styled } from 'styled-components'

export const PublicationsListContainer = styled.div`
  display: grid;
  grid-template-columns: 26rem 26rem;
  gap: 2rem;
  margin-top: 3rem;
`

export const PublicationCard = styled.div`
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

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
