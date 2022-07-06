import { useRef } from 'react'
import anime from 'animejs'

import AnimationExample from 'components/AnimationExample'
import Menu, { MenuOption } from 'components/Menu'

import { menuAnimationCode } from './code'

const MenuAnimation = () => {
  const menu = useRef<HTMLDivElement>(null)

  const menuAnimation = () => {
    const timeline = anime.timeline({
      easing: 'linear',
    })

    timeline.add({
      targets: menu.current,
      translateY: [-200, 0],
      duration: 300,
    })

    timeline.add({
      targets: '#firstOptionAnime',
      opacity: [0, 1],
      duration: 100,
    })

    timeline.add({
      targets: '#secondOptionAnime',
      opacity: [0, 1],
      duration: 100,
    })

    timeline.add({
      targets: '#thirdOptionAnime',
      opacity: [0, 1],
      duration: 100,
    })

    timeline.add({
      targets: '#fourthOptionAnime',
      opacity: [0, 1],
      duration: 100,
    })
  }

  return (
    <AnimationExample
      title={'anime.js'}
      element={
        <Menu ref={menu}>
          <MenuOption id={'firstOptionAnime'}>option 1</MenuOption>
          <MenuOption id={'secondOptionAnime'}>option 2</MenuOption>
          <MenuOption id={'thirdOptionAnime'}>option 3</MenuOption>
          <MenuOption id={'fourthOptionAnime'}>option 4</MenuOption>
        </Menu>
      }
      runAnimation={menuAnimation}
      code={menuAnimationCode}
    />
  )
}

export default MenuAnimation
