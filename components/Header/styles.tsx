import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`

interface INavLink {
  active: boolean
}

export const NavLink = styled.div<INavLink>`
  padding: 20px;
  cursor: pointer;
  text-align: center;

  ${({ active }) =>
    active &&
    css`
      border-bottom: 1px solid #520990;
    `}
`
