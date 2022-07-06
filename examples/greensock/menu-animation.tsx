import { useRef } from 'react'
import { gsap } from 'gsap'

import AnimationExample from 'components/AnimationExample'
import Menu, { MenuOption } from 'components/Menu'

import { menuAnimationCode } from './code'

const MenuAnimation = () => {
  const timeline = useRef<any>(null)
  const menu = useRef<HTMLDivElement>(null)
  const q = gsap.utils.selector(menu)

  const menuAnimation = () => {
    timeline.current = gsap
      .timeline()
      .fromTo(menu.current, { y: -200 }, { y: 0, duration: 0.3 })
      .fromTo(
        q('#firstOptionGsap'),
        { opacity: '0' },
        { opacity: '1', duration: 0.1 }
      )
      .fromTo(
        q('#secondOptionGsap'),
        { opacity: '0' },
        { opacity: '1', duration: 0.1 }
      )
      .fromTo(
        q('#thirdOptionGsap'),
        { opacity: '0' },
        { opacity: '1', duration: 0.1 }
      )
      .fromTo(
        q('#fourthOptionGsap'),
        { opacity: '0' },
        { opacity: '1', duration: 0.1 }
      )
  }

  return (
    <AnimationExample
      title={'GreenSock'}
      element={
        <Menu ref={menu}>
          <MenuOption id={'firstOptionGsap'}>option 1</MenuOption>
          <MenuOption id={'secondOptionGsap'}>option 2</MenuOption>
          <MenuOption id={'thirdOptionGsap'}>option 3</MenuOption>
          <MenuOption id={'fourthOptionGsap'}>option 4</MenuOption>
        </Menu>
      }
      runAnimation={menuAnimation}
      code={menuAnimationCode}
    />
  )
}

export default MenuAnimation
