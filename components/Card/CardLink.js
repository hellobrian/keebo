import React from "react";
import { Text } from "theme-ui";

export const CardLink = React.forwardRef(
  ({ href, children, color, ...props }, ref) => {
    const underline = {
      backgroundRepeat: "no-repeat",
      backgroundImage: `linear-gradient(0, ${color}, ${color})`,
      backgroundSize: "100% 2px",
      backgroundPosition: "0px 95%",
      backgroundRepeat: "no-repeat",
    };
    return (
      <Text
        ref={ref}
        as={"a"}
        href={href}
        sx={{
          textDecoration: "none",
          width: "fit-content",
          color: "text",
          fontFamily: "body",
          fontWeight: "normal",
          ...underline,
        }}
        {...props}
      >
        {children}
      </Text>
    );
  }
);
