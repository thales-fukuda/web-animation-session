import { useRef } from 'react'
import anime from 'animejs'

import Card from 'components/Card'
import AnimationExample from 'components/AnimationExample'

import { cardAnimationCode } from './code'

const CardAnimation = () => {
  const card = useRef<HTMLDivElement>(null)

  const cardAnimation = () => {
    anime({
      targets: card.current,
      translateX: [100, 0],
      translateY: [100, 0],
      opacity: [0, 1],
      duration: 600,
      easing: 'linear',
    })
  }

  return (
    <>
      <AnimationExample
        title={'anime.js'}
        element={<Card ref={card}>Card</Card>}
        runAnimation={cardAnimation}
        code={cardAnimationCode}
      />
    </>
  )
}

export default CardAnimation
