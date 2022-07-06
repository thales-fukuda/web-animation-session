import { gsap, Linear } from 'gsap'
import styled from 'styled-components'

const StyledLink = styled.a`
  display: block;
  color: #520990;
  text-decoration: underline;
  margin-top: 20px;
`

const Main = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      Web Animation Libraries research for Illuvium
      <div>
        <StyledLink
          href={
            'https://illuvium.atlassian.net/wiki/spaces/TECHNOLOGY/pages/278004090/WIP+Web+Animation+Libraries+Research'
          }
        >
          confluence page
        </StyledLink>
        <StyledLink href={'https://greensock.com/docs/'}>
          GreenSock docs
        </StyledLink>
        <StyledLink href={'https://animejs.com/documentation/'}>
          anime.js docs
        </StyledLink>
        <StyledLink href={'https://www.framer.com/docs/'}>
          framer-motion docs
        </StyledLink>
      </div>
    </div>
  )
}

export default Main
