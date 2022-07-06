export const cardAnimationCode = `const CardAnimated = () => {
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

    return <Card ref={card} />
}`

export const timelineAnimationCode = `const TimelineExample = () => {
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
`

export const menuAnimationCode = `const menuAnimation = () => {
    const timeline = anime.timeline({
      easing: 'linear',
    })

    timeline.add({
      targets: menu.current,
      translateY: [-200, 0],
      duration: 300,
    })

    timeline.add({
      targets: '#firstOptionAnime',
      opacity: [0, 1],
      duration: 100,
    })

    timeline.add({
      targets: '#secondOptionAnime',
      opacity: [0, 1],
      duration: 100,
    })

    timeline.add({
      targets: '#thirdOptionAnime',
      opacity: [0, 1],
      duration: 100,
    })

    timeline.add({
      targets: '#fourthOptionAnime',
      opacity: [0, 1],
      duration: 100,
    })
  }
`
