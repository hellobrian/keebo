import { useContext, useState } from 'react'
import { Flex, Image as ThemeImage, AspectRatio, Box } from 'theme-ui'
import Image from 'next/image'

import { ModalContext } from '../Modal/Modal'

export function CardImage({ heading, src }) {
  const HOVER_STATES = {
    initial: 0,
    on: 1,
    off: 2,
  }
  const { handleModal } = useContext(ModalContext)
  const [hoverState, setHover] = useState(HOVER_STATES.initial)
  let opacityClassName = ''
  let zoomClassName = ''

  if (hoverState === HOVER_STATES.initial) {
    opacityClassName = ''
    zoomClassName = ''
  }

  if (hoverState === HOVER_STATES.on) {
    opacityClassName = 'animate-opacity'
    zoomClassName = 'animate-zoom-in'
  }

  if (hoverState === HOVER_STATES.off) {
    opacityClassName = 'animate-opacity-reverse'
    zoomClassName = 'animate-zoom-out'
  }

  return (
    <AspectRatio
      ratio={16 / 9}
      onMouseEnter={() => setHover(HOVER_STATES.on)}
      onMouseLeave={() => setHover(HOVER_STATES.off)}
    >
      <Box
        className={opacityClassName}
        sx={{
          opacity: 0.01,
          bg: 'white',
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      <ThemeImage
        as={Image}
        className={zoomClassName}
        onClick={() =>
          handleModal(
            <Flex
              sx={{
                maxWidth: '1920',
                border: '16px solid white',
                bg: 'white',
              }}
            >
              <ThemeImage
                as={Image}
                data-testid="modal-image"
                alt={heading}
                src={src}
                width={1920}
                height={1080}
              />
            </Flex>
          )
        }
        alt={heading}
        src={src}
        width={800}
        height={500}
        sx={{
          bg: 'white',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          ':hover': {
            cursor: 'zoom-in',
          },
        }}
      />
    </AspectRatio>
  )
}
