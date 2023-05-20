import React, { useContext } from 'react'
import { SearchFormContainer } from './styles'
import { IssuesContext } from '../../../../contexts/IssuesContext'
import { searchIssuesAPI } from '../../../../lib/axios'
import { UserContext } from '../../../../contexts/UserContext'

export function SearchForm() {
  const { setFilteredIssues, repo } = useContext(IssuesContext)
  const { gitName } = useContext(UserContext)

  async function handleSearchIssues(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const response = await searchIssuesAPI.get(
      `issues?q=${event.target.value}%20repo:${gitName}/${repo}`,
    )

    const filteredIssues = response.data.items.map((data: any) => {
      return {
        id: data.id,
        title: data.title,
        content: data.body,
        createdAt: data.created_at,
        issueUrl: data.html_url,
        login: data.user.login,
        comments: data.comments,
      }
    })

    setFilteredIssues(filteredIssues)
  }

  return (
    <SearchFormContainer>
      <header>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </header>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={(e) => handleSearchIssues(e)}
      />
    </SearchFormContainer>
  )
}
