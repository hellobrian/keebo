import React from 'react'
import { Text } from 'theme-ui'

export const CardLink = React.forwardRef(
  ({ href, children, color, ariaLabel, ...props }, ref) => {
    const underline = {
      backgroundRepeat: 'no-repeat',
      backgroundImage: `linear-gradient(0, ${color}, ${color})`,
      backgroundSize: '100% 2px',
      backgroundPosition: '0px 95%',
    }
    return (
      <Text
        ref={ref}
        aria-label={ariaLabel}
        as="a"
        href={href}
        sx={{
          textDecoration: 'none',
          width: 'fit-content',
          color: 'text',
          fontFamily: 'body',
          fontWeight: 'normal',
          ...underline,
        }}
        {...props}
      >
        {children}
      </Text>
    )
  }
)
