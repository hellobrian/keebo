import { useContext, useState } from 'react'
import { Flex, Image as ThemeImage } from 'theme-ui'
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

  let zoomClassName = ''

  if (hoverState === HOVER_STATES.initial) {
    zoomClassName = ''
  }

  if (hoverState === HOVER_STATES.on) {
    zoomClassName = 'animate-zoom-in'
  }

  if (hoverState === HOVER_STATES.off) {
    zoomClassName = 'animate-zoom-out'
  }

  const ModalImage = (
    <Flex
      sx={{
        position: 'relative',
        width: '100%',
        border: '16px solid white',
        bg: 'white',
      }}
    >
      <ThemeImage
        data-testid="modal-image"
        as={Image}
        alt={heading}
        src={src}
        width={1920}
        height={1080}
        sx={{
          objectFit: 'cover',
          width: '100%',
        }}
      />
    </Flex>
  )

  return (
    <ThemeImage
      onMouseEnter={() => setHover(HOVER_STATES.on)}
      onMouseLeave={() => setHover(HOVER_STATES.off)}
      as={Image}
      className={zoomClassName}
      onClick={() => handleModal(ModalImage)}
      alt={heading}
      src={src}
      width={1600}
      height={900}
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
  )
}
