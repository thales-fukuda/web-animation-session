import { useRef } from 'react'
import anime from 'animejs'

import Box from 'components/Box'
import AnimationExample from 'components/AnimationExample'

import { timelineAnimationCode } from './code'

const TimelineExample = () => {
  const timelineAnimation = () => {
    const timeline = anime.timeline({
      easing: 'linear',
    })

    timeline.add({
      targets: '#firstAnime',
      translateX: [-100, 0],
      opacity: [0, 1],
      duration: 300,
    })

    timeline.add({
      targets: '#secondAnime',
      translateX: [100, 0],
      opacity: [0, 1],
      duration: 300,
    })

    timeline.add({
      targets: '#thirdAnime',
      translateX: [-100, 0],
      opacity: [0, 1],
      duration: 300,
    })
  }

  return (
    <AnimationExample
      title={'anime.js'}
      element={
        <div>
          <Box
            id={'firstAnime'}
            style={{
              marginBottom: '8px',
            }}
          >
            #first
          </Box>
          <Box
            id={'secondAnime'}
            style={{
              marginBottom: '8px',
            }}
          >
            #second
          </Box>
          <Box id={'thirdAnime'}>#third</Box>
        </div>
      }
      runAnimation={timelineAnimation}
      code={timelineAnimationCode}
    />
  )
}

export default TimelineExample
