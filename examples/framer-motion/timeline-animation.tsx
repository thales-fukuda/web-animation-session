import { useState } from 'react'
import { motion } from 'framer-motion'

import Box from 'components/Box'
import AnimationExample from 'components/AnimationExample'

import { timelineAnimationCode } from './code'

const TimelineExample = () => {
  const [isAnimating, setIsAnimating] = useState(false)

  const timelineAnimation = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsAnimating(false)
    }, 600)
  }

  const TimelineAnimated = () => {
    const variants = {
      initial: (i: number) => ({
        x: i % 2 === 0 ? 100 : -100,
        opacity: 0,
      }),
      animate: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.3,
        },
      },
    }

    return (
      <motion.div
        transition={{ staggerChildren: 0.2 }}
        initial={'initial'}
        animate={'animate'}
      >
        <motion.div custom={1} variants={variants}>
          <Box
            style={{
              marginBottom: '8px',
            }}
          >
            #first
          </Box>
        </motion.div>
        <motion.div custom={2} variants={variants}>
          <Box
            style={{
              marginBottom: '8px',
            }}
          >
            #second
          </Box>
        </motion.div>
        <motion.div custom={3} variants={variants}>
          <Box>#third</Box>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <AnimationExample
      title={'framer-motion'}
      element={
        isAnimating ? (
          <TimelineAnimated />
        ) : (
          <>
            <Box
              style={{
                marginBottom: '8px',
              }}
            >
              #first
            </Box>
            <Box
              style={{
                marginBottom: '8px',
              }}
            >
              #second
            </Box>
            <Box>#third</Box>
          </>
        )
      }
      runAnimation={timelineAnimation}
      code={timelineAnimationCode}
    />
  )
}

export default TimelineExample
