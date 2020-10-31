import {
  Card as ThemeCard,
  Text,
  AspectRatio,
  Image,
  AspectImage,
  Heading,
  Flex,
  Button,
  Box,
  Grid,
} from "theme-ui";

export function Card({
  name = "Tokyo60",
  color = "coyote",
  status = "purchased",
  pins = 5,
  hotswap = true,
  layout = "HHKB",
  stabilizers = "screw_in",
  via = true,
  blurb = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga expedita voluptas necessitatibus voluptatum?",
  imgSrc = "https://massdrop-s3.imgix.net/product-images/massdrop-x-tokyo-keyboard-tokyo60-keyboard-kit/FP/QrAV4cdARLGK1PUtnpps_CB5A6534-copy.jpg?auto=format&fm=jpg&fit=fill&w=500&h=500&bg=f0f0f0&dpr=1&q=70",
}) {
  const [isHover, setHover] = React.useState(false);
  return (
    <ThemeCard
      sx={{
        bg: "white",
        width: "400px",
        pb: 2,
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      }}
    >
      <AspectRatio
        ratio={1 / 1}
        sx={{
          m: 3,
          transform: isHover ? "rotate(0deg) scale(1.2)" : "rotate(-1.6deg)",
          transition: "transform 100ms",
          transitionTimingFunction: "cubic-bezier(.17,.67,.83,.67)",
        }}
      >
        <Image
          sx={{
            width: "100%",
            height: "100%",
            border: "16px solid white",
            objectFit: "cover",
            border: "2px solid rgba(0, 0, 0, 0.1)",
          }}
          src={imgSrc}
        ></Image>
      </AspectRatio>

      <Flex
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 3,
        }}
      >
        {/* keyboard name */}
        <Heading
          sx={{
            display: "inline-block",
            color: "black",
            fontSize: 7,
            fontWeight: "medium",
            p: 2,
            backgroundRepeat: "no-repeat",
            backgroundImage: "linear-gradient(0, #ffb8b8, #ffb8b8)",
            backgroundSize: "100% 6px",
            backgroundPosition: "4px 80%",
          }}
        >
          {name}
        </Heading>

        {/* tags */}
        <Text
          sx={{
            display: "inline-flex",
            alignItems: "center",
            color: "black",
            fontSize: 3,
            fontWeight: "bold",
            px: 2,
            letterSpacing: "-0.5px",
            textAlign: "center",
          }}
        >
          {layout} {`${pins} pins`} {via && "VIA  "}
          {hotswap ? "hotswap  " : "soldered  "}{" "}
          {stabilizers === "screw_in" ? "screw-in stabs" : "plate-mount stabs"}
        </Text>

        {/* blurb */}
        <Text
          sx={{
            fontFamily: "heading",
            color: "black",
            width: "75%",
            m: "0 auto",
            p: 2,
            mt: 3,
            textAlign: "center",
            lineHeight: "body",
          }}
        >
          {blurb}
        </Text>

        {/* Buttons */}
        <Grid
          sx={{
            alignItems: "center",
            gridGap: "8px",
            gridTemplateColumns: "1fr 1fr",
            mt: 3,
          }}
        >
          <ColorButton>{color}</ColorButton>
          <Button
            variant="primary"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            View more
          </Button>
        </Grid>
      </Flex>
    </ThemeCard>
  );
}

function ColorButton({ iconColor = "#B3A49E", children }) {
  const [text, setText] = React.useState(children);
  return (
    <Button
      onMouseDown={() => setText("Copied!")}
      onMouseEnter={() => setText("Copy")}
      onMouseLeave={() => setText(children)}
      type="button"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        bg: "white",
        p: 2,
        textTransform: "capitalize",
        transition: "all 100ms, color 100ms",
        transitionTimingFunction: "cubic-bezier(.17,.67,.83,.67)",
        "&:hover": {
          bg: iconColor,
          color: "white",
        },
      }}
    >
      <Box
        sx={{ mr: 1 }}
        as="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        width="20"
        height="20"
        fill={iconColor}
      >
        <circle r={9} cx={10} cy={10} stroke="black" strokeWidth={1} />
      </Box>
      {text}
    </Button>
  );
}
