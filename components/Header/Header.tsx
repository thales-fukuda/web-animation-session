import { useRouter } from 'next/router'
import Link from 'next/link'
import { HeaderContainer, NavLink } from './styles'

const Header = () => {
  const router = useRouter()

  console.log(router.pathname)
  return (
    <HeaderContainer>
      <Link href={'/'}>
        <NavLink active={router.pathname === '/'}>home</NavLink>
      </Link>

      <Link href={'/card-animation'}>
        <NavLink active={router.pathname === '/card-animation'}>card</NavLink>
      </Link>

      <Link href={'/timeline-animation'}>
        <NavLink active={router.pathname === '/timeline-animation'}>
          timeline
        </NavLink>
      </Link>

      <Link href={'/menu-animation'}>
        <NavLink active={router.pathname === '/menu-animation'}>menu</NavLink>
      </Link>
    </HeaderContainer>
  )
}

export default Header
