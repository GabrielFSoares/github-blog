import { styled } from 'styled-components'

export const SearchFormContainer = styled.form`
  margin-top: 4.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  header {
    display: flex;
    justify-content: space-between;

    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 0.875rem;
    }
  }

  input {
    flex: 1;
    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    padding: 0.75rem 1rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      outline: none;
      border: 1px solid ${(props) => props.theme.blue};
    }
  }
`
