import { useState } from 'react'

import { motion } from 'framer-motion'
import AnimationExample from 'components/AnimationExample'
import Menu, { MenuOption } from 'components/Menu'

import { menuAnimationCode } from './code'

const MenuAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false)

  const menuAnimation = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsAnimating(false)
    }, 600)
  }

  const MenuAnimated = () => {
    const container = {
      initial: {
        y: -200,
      },
      animate: {
        y: 0,
        transition: {
          duration: 0.3,
          delayChildren: 0.3,
          staggerChildren: 0.1,
        },
      },
    }

    const option = {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
        transition: {
          duration: 0.1,
        },
      },
    }

    return (
      <motion.div variants={container} initial={'initial'} animate={'animate'}>
        <Menu>
          <motion.div variants={option}>
            <MenuOption>option 1</MenuOption>
          </motion.div>
          <motion.div variants={option}>
            <MenuOption>option 2</MenuOption>
          </motion.div>
          <motion.div variants={option}>
            <MenuOption>option 3</MenuOption>
          </motion.div>
          <motion.div variants={option}>
            <MenuOption>option 4</MenuOption>
          </motion.div>
        </Menu>
      </motion.div>
    )
  }

  return (
    <AnimationExample
      title={'Menu animation'}
      element={
        isAnimating ? (
          <MenuAnimated />
        ) : (
          <Menu>
            <MenuOption id={'firstOptionAnime'}>option 1</MenuOption>
            <MenuOption id={'secondOptionAnime'}>option 2</MenuOption>
            <MenuOption id={'thirdOptionAnime'}>option 3</MenuOption>
            <MenuOption id={'fourthOptionAnime'}>option 4</MenuOption>
          </Menu>
        )
      }
      runAnimation={menuAnimation}
      code={menuAnimationCode}
    />
  )
}

export default MenuAnimation
