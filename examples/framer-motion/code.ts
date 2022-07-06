export const cardAnimationCode = `const CardAnimated = () => {
    const variants = {
        initial: { x: 100, y: 100, opacity: 0 },
        animate: { x: 0, y: 0, opacity: 1 },
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
`

export const timelineAnimationCode = `const TimelineAnimated = () => {
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
`

export const menuAnimationCode = `const MenuAnimated = () => {
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
  }`
