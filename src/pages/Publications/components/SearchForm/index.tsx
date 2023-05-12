import { SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <header>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </header>

      <input type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}
