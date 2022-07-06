import { useRef } from 'react'
import { gsap } from 'gsap'

import Card from 'components/Card'
import AnimationExample from 'components/AnimationExample'

import { cardAnimationCode } from './code'

const CardAnimation = () => {
  const card = useRef<HTMLDivElement>(null)

  const cardAnimation = () => {
    gsap.fromTo(
      card.current,
      {
        x: 100,
        y: 100,
        opacity: 0,
      },
      { x: 0, y: 0, opacity: 1, duration: 0.6 }
    )
  }

  return (
    <>
      <AnimationExample
        title={'GreenSock'}
        element={<Card ref={card}>Card</Card>}
        runAnimation={cardAnimation}
        code={cardAnimationCode}
      />
    </>
  )
}

export default CardAnimation
