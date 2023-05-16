import { styled } from 'styled-components'

export const PublicationsHeader = styled.header`
  background-color: ${(props) => props.theme['base-profile']};

  border-radius: 10px;
  margin-top: -5.5rem;
  padding: 2rem 2rem 2rem 2.5rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  & > img {
    width: 9.25rem;
  }
`

export const UserInformationContent = styled.div`
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.75rem;
      font-weight: 700;
      color: ${(props) => props.theme.blue};
      text-decoration: none;
      border-bottom: 1px solid transparent;
      height: 1.1875rem;
      transition: border-bottom 0.4s;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }
  }

  p {
    margin-bottom: 1.5rem;
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
        color: ${(props) => props.theme['base-subtitle']};
      }
    }
  }
`
