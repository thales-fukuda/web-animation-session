import { useState } from 'react'
import { motion } from 'framer-motion'

import Card from 'components/Card'
import AnimationExample from 'components/AnimationExample'

import { cardAnimationCode } from './code'

const CardAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false)

  const cardAnimation = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsAnimating(false)
    }, 600)
  }

  const CardAnimated = () => {
    const variants = {
      initial: {
        x: 100,
        y: 100,
        opacity: 0,
      },
      animate: {
        x: 0,
        y: 0,
        opacity: 1,
      },
    }

    return (
      <motion.div
        initial={'initial'}
        animate={'animate'}
        variants={variants}
        transition={{ duration: 0.6 }}
      >
        <Card>Card</Card>
      </motion.div>
    )
  }

  return (
    <>
      <AnimationExample
        title={'framer-motion'}
        element={isAnimating ? <CardAnimated /> : <Card>Card</Card>}
        runAnimation={cardAnimation}
        code={cardAnimationCode}
      />
    </>
  )
}

export default CardAnimation
