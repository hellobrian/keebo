import React from "react";
import {
  Grid,
  Flex,
  Image,
  Text,
  Heading,
  AspectRatio,
  Badge,
  useThemeUI,
} from "theme-ui";
import Link from "next/link";

import { CardLink } from "./CardLink";

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
    transform: isHover ? "scale(1.05)" : "scale(1)",
    transitionProperty: "transform",
    transitionDuration,
    transitionTimingFunction,
  };

  return { isHover, setHover, opacityStyles, scaleStyles };
}

export function Card({
  src = TEMP_IMG,
  heading = "Drop Ctrl High-Profile",
  text = LOREM_IPSUM,
  status = "purchased",
  href = "/",
}) {
  const { setHover, scaleStyles } = useHover();
  const { theme } = useThemeUI();
  const boxShadow =
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.25)";

  return (
    <Grid
      sx={{
        borderRadius: "4px",
        boxShadow,
        bg: "white",
        gridTemplateColumns: ["1fr", "1fr", "1fr", "repeat(2, 1fr)"],
        borderRight: [
          "none",
          "none",
          "none",
          `8px solid ${theme.colors.badge[status]}`,
        ],
      }}
    >
      <AspectRatio ratio={16 / 9}>
        <Link href={href} passHref>
          <a aria-label={`click here to learn more about ${heading}`}>
            <Image
              role="presentation"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
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
          </a>
        </Link>
      </AspectRatio>
      <Flex
        sx={{
          p: 4,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Link href={href} passHref>
          <a style={{ textDecoration: "none" }}>
            <Heading
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              sx={{
                textDecoration: "none",
                fontSize: 5,
                mb: 1,
                fontWeight: "medium",
                color: "text",
              }}
            >
              {heading}
            </Heading>
          </a>
        </Link>

        <Flex sx={{ justifyContent: "flex-start", mb: 2 }}>
          <Badge variant={status}>{status}</Badge>
        </Flex>
        {/* <Text sx={{ mb: 3 }}>{text}</Text> */}
        {/* <Link href={href} passHref>
          <CardLink
            color={theme.colors.badge[status]}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            See more
          </CardLink>
        </Link> */}
      </Flex>
    </Grid>
  );
}
