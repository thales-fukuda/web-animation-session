import { useRef } from 'react'
import { gsap } from 'gsap'

import Box from 'components/Box'
import AnimationExample from 'components/AnimationExample'

import { timelineAnimationCode } from './code'

const TimelineExample = () => {
  const timeline = useRef<any>(null)
  const cards = useRef<HTMLDivElement>(null)
  const q = gsap.utils.selector(cards)

  const timelineAnimation = () => {
    timeline.current = gsap
      .timeline()
      .fromTo(
        q('#firstGsap'),
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3 }
      )
      .fromTo(
        q('#secondGsap'),
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3 }
      )
      .fromTo(
        q('#thirdGsap'),
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3 }
      )
  }

  return (
    <AnimationExample
      title={'GreenSock'}
      element={
        <div ref={cards}>
          <Box
            id={'firstGsap'}
            style={{
              marginBottom: '8px',
            }}
          >
            #first
          </Box>
          <Box
            id={'secondGsap'}
            style={{
              marginBottom: '8px',
            }}
          >
            #second
          </Box>
          <Box id={'thirdGsap'}>#third</Box>
        </div>
      }
      runAnimation={timelineAnimation}
      code={timelineAnimationCode}
    />
  )
}

export default TimelineExample
