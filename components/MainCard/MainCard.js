import React from "react";
import { Grid, Flex, Image, Text, Heading, AspectRatio, Badge } from "theme-ui";

const TEMP_IMG =
  "https://i1.wp.com/tokyokeyboard.com/wp-content/uploads/2019/10/hcStZW2-1.jpg?fit=2340%2C1073";

const LOREM_IPSUM = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
  reiciendis culpa dolore quo voluptatum tempore omnis fugiat ipsam
  error delectus odit dolores reprehenderit quasi at, accusantium saepe
  nihil, soluta consequatur?`;

function useHover() {
  const [isHover, setHover] = React.useState(false);
  const transitionTimingFunction = "cubic-bezier(.17,.67,.83,.67)";
  const transitionDuration = "100ms";

  const opacityStyles = {
    opacity: isHover ? 0 : 1,
    transitionProperty: "opacity",
    transitionDuration,
    transitionTimingFunction,
  };

  const scaleStyles = {
    transform: isHover ? "scale(1.3)" : "scale(1)",
    transitionProperty: "transform",
    transitionDuration,
    transitionTimingFunction,
  };

  return { isHover, setHover, opacityStyles, scaleStyles };
}

export function MainCard({
  src = TEMP_IMG,
  heading = "Drop Ctrl High-Profile",
  text = LOREM_IPSUM,
}) {
  const { setHover, scaleStyles, opacityStyles } = useHover();
  return (
    <Grid
      sx={{
        bg: "white",
        gridTemplateColumns: ["1fr", "1fr", "1fr", "repeat(2, 1fr)"],
      }}
    >
      <AspectRatio ratio={16 / 9}>
        <Image
          src={src}
          width={800}
          height={450}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            ...scaleStyles,
          }}
        />
        <Flex
          sx={{
            position: "absolute",
            zIndex: 1,
            top: 2,
            right: 2,
            flexWrap: "wrap",
          }}
        >
          <Badge variant="purchased" sx={{ ...opacityStyles }}>
            Purchased
          </Badge>
        </Flex>
      </AspectRatio>
      <Flex
        sx={{
          p: 4,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Title
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          sx={{ fontSize: 5, mb: 1, fontWeight: "medium" }}
        >
          {heading}
        </Title>
        <Text sx={{ mb: 3 }}>{text}</Text>
      </Flex>
    </Grid>
  );
}

function Title({ children, ...props }) {
  return (
    <Heading sx={{ fontSize: 5, mb: 1, fontWeight: "medium" }} {...props}>
      {children}
    </Heading>
  );
}

MainCard.Title = Title;
