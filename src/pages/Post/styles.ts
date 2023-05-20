import { styled } from 'styled-components'

export const PostContainer = styled.div``

export const PostHeaderContainer = styled.header`
  background-color: ${(props) => props.theme['base-profile']};

  border-radius: 10px;
  margin-top: -5.5rem;
  padding: 2rem 2rem 2rem 2.5rem;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.75rem;
      font-weight: 700;
      color: ${(props) => props.theme.blue};
      text-decoration: none;
      text-transform: uppercase;
      border-bottom: 1px solid transparent;
      height: 1.1875rem;
      transition: border-bottom 0.4s;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }
  }

  h1 {
    margin-bottom: 0.5rem;
  }

  footer {
    display: flex;
    gap: 1.5rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      color: ${(props) => props.theme['base-label']};

      span {
        font-size: 1rem;
        color: ${(props) => props.theme['base-span']};
      }
    }
  }
`

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem;

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-top: 1.5rem;
  }

  img {
    max-width: 100%;
  }

  a {
    color: ${(props) => props.theme.blue};
  }

  pre {
    background-color: ${(props) => props.theme['base-post']};
    border-radius: 2px;
    padding: 1rem;
  }
`
