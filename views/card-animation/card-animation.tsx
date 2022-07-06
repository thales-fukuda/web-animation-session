import CardAnimationGreenSock from 'examples/greensock/card-animation'
import CardAnimationAnimejs from 'examples/animejs/card-animation'
import CardAnimationFramerMotion from 'examples/framer-motion/card-animation'

import Container from 'components/Container'

const CardAnimation = () => {
  return (
    <>
      <h1>Card Animation</h1>
      <CardAnimationGreenSock />
      <CardAnimationAnimejs />
      <CardAnimationFramerMotion />
    </>
  )
}

export default CardAnimation
