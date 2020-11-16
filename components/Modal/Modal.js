import { useState, createContext, useContext, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { Flex, Close } from 'theme-ui'

import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'

// useModal Hook
export function useModal() {
  const [modal, setModal] = useState(false)
  const [modalContent, setModalContent] = useState('modal content')

  const handleModal = (content = false) => {
    setModal(!modal)
    if (content) {
      setModalContent(content)
    }
  }

  const closeModal = () => handleModal()

  return { modal, handleModal, closeModal, modalContent }
}

// Context
export const ModalContext = createContext()

// Provider
export function ModalProvider({ children }) {
  const { modal, handleModal, modalContent, closeModal } = useModal()
  return (
    <ModalContext.Provider
      value={{ modal, handleModal, modalContent, closeModal }}
    >
      <Modal />
      {children}
    </ModalContext.Provider>
  )
}

function ModalContent({ children, closeModal }) {
  // close modal when clicking outside of image / modal-content
  const modalContentRef = useRef(null)

  useOnClickOutside(modalContentRef, closeModal)

  // when modal is open, lock page from scrolling
  useLockBodyScroll()

  return (
    <Flex
      data-testid="modal-content"
      ref={modalContentRef}
      sx={{
        maxWidth: '90%',
      }}
    >
      {children}
    </Flex>
  )
}

// Modal Component
export function Modal() {
  const { modalContent, handleModal, closeModal, modal } = useContext(
    ModalContext
  )

  // close modal when escape key is pressed
  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key !== 'Escape') {
        return
      }
      closeModal()
    }
    document.addEventListener('keydown', handleKeyPress)

    return function cleanup() {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [closeModal])

  // when modal is open, focus close button
  const closeButtonRef = useRef(null)

  useEffect(() => {
    const handleFocus = () => {
      if (modal) {
        closeButtonRef.current.focus()
      }
    }

    handleFocus()
  }, [modal])

  if (!modal) {
    return null
  }

  return ReactDOM.createPortal(
    <Flex
      data-testid="modal"
      sx={{
        position: 'fixed',
        zIndex: 10,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        bg: 'rgba(0,0,0,0.8)',
      }}
    >
      <Flex
        data-testid="modal-content-wrapper"
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <ModalContent closeModal={closeModal}>
          <Close
            ref={closeButtonRef}
            data-testid="modal-close-button"
            sx={{
              position: 'fixed',
              top: 4,
              right: 4,
            }}
            onClick={() => handleModal()}
          />
          {modalContent}
        </ModalContent>
      </Flex>
    </Flex>,
    document.querySelector('#modal-root')
  )
}
