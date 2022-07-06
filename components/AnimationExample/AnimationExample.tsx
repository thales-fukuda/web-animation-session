import { CodeBlock, dracula } from 'react-code-blocks'
import { BsFillPlayFill } from 'react-icons/bs'

import Button from 'components/Button'

interface IAnimationExample {
  title: string
  element: React.ReactElement
  runAnimation: () => void
  code: string
}

const AnimationExample = ({
  title,
  element,
  runAnimation,
  code,
}: IAnimationExample) => {
  return (
    <div
      style={{
        marginBottom: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Button onClick={runAnimation} style={{ marginLeft: '12px' }}>
          <BsFillPlayFill />
        </Button>
        <h2
          style={{
            marginLeft: '12px',
          }}
        >
          {title}
        </h2>
      </div>

      <div>
        <div
          style={{
            display: 'flex',
            // justifyContent: 'left',
            marginTop: '20px',
          }}
        >
          <div>{element}</div>
          <div
            style={{
              width: '100%',
              marginLeft: '20px',
              zIndex: 2,
              top: '10%',
              height: '400px',
              overflow: 'scroll',
            }}
          >
            <CodeBlock text={code} language={'tsx'} theme={dracula} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimationExample
