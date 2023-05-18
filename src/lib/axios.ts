import axios from 'axios'

export const usersAPI = axios.create({
  baseURL: 'https://api.github.com/users',
})

export const issuesAPI = axios.create({
  baseURL: 'https://api.github.com/repos',
})
