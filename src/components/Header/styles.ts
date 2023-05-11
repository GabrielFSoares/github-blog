import { styled } from 'styled-components'
import CoverImage from '../../assets/Cover.png'

export const HeaderContainer = styled.header`
  background: url(${CoverImage}) center;
  background-size: cover;
  height: 18.5rem;

  display: flex;
  justify-content: center;

  img {
    margin-top: 4rem;
    height: 6.125rem;
  }
`
