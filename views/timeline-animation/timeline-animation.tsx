import Container from 'components/Container'

import TimelineAnimationGreenSock from 'examples/greensock/timeline-example'
import TimelineAnimationAnimeJs from 'examples/animejs/timeline-animation'
import TimelineAnimationFramerMotion from 'examples/framer-motion/timeline-animation'

const TimelineAnimation = () => {
  return (
    <>
      <h1>Timeline Animation</h1>
      <TimelineAnimationGreenSock />
      <TimelineAnimationAnimeJs />
      <TimelineAnimationFramerMotion />
    </>
  )
}

export default TimelineAnimation
