export const cardAnimationCode = `const CardAnimated = () => {
    const card = useRef<HTMLDivElement>(null)

    const cardAnimation = () => {
        gsap.fromTo(
          card.current,
          { x: 100, y: 100, opacity: 0 },
          { x: 0, y: 0, opacity: 1, duration: 0.6 }
        )
    }

    return <Card ref={card} />
}
`

export const timelineAnimationCode = `const TimelineAnimated = () => {
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
`

export const menuAnimationCode = `const menuAnimation = () => {
    timeline.current = gsap
      .timeline()
      .fromTo(menu.current, { y: -200 }, { y: 0, duration: 0.3 })
      .fromTo(
        q('#firstOptionGsap'),
        { opacity: '0' },
        { opacity: '1', duration: 0.1 }
      )
      .fromTo(
        q('#secondOptionGsap'),
        { opacity: '0' },
        { opacity: '1', duration: 0.1 }
      )
      .fromTo(
        q('#thirdOptionGsap'),
        { opacity: '0' },
        { opacity: '1', duration: 0.1 }
      )
      .fromTo(
        q('#fourthOptionGsap'),
        { opacity: '0' },
        { opacity: '1', duration: 0.1 }
      )
  }`
