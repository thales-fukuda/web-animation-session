import Container from 'components/Container'

import MenuAnimationGreenSock from 'examples/greensock/menu-animation'
import MenuAnimationAnimejs from 'examples/animejs/menu-animation'
import MenuAnimationFramerMotion from 'examples/framer-motion/menu-animation'

const MenuAnimation = () => {
  return (
    <>
      <h1>Menu Animation</h1>
      <MenuAnimationGreenSock />
      <MenuAnimationAnimejs />
      <MenuAnimationFramerMotion />
    </>
  )
}

export default MenuAnimation
