import {
  Card as ThemeCard,
  Text,
  AspectRatio,
  Image,
  Heading,
  Flex,
  Button,
  Box,
  Badge,
  Grid,
} from "theme-ui";

export function Card({
  name = "Stellar65",
  color = "coyote",
  status = "purchased",
  pins = 5,
  hotswap = true,
  layout = "HHKB",
  stabilizers = "screw_in",
  via = true,
  blurb = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga expedita voluptas necessitatibus voluptatum?",
  // imgSrc = "https://massdrop-s3.imgix.net/product-images/massdrop-x-tokyo-keyboard-tokyo60-keyboard-kit/FP/QrAV4cdARLGK1PUtnpps_CB5A6534-copy.jpg?auto=format&fm=jpg&fit=fill&w=500&h=500&bg=f0f0f0&dpr=1&q=70",
  // imgSrc = "https://bit.ly/361GATx",
  heroImg = "",
  sx = {},
  isDark = false,
}) {
  const [isHover, setHover] = React.useState(false);

  return (
    <ThemeCard
      sx={{
        bg: "white",
        pb: 2,
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        ...sx,
      }}
    >
      <AspectRatio
        ratio={4 / 3}
        sx={{
          m: 3,
          transform: isHover ? "rotate(0deg) scale(1.2)" : "rotate(-1.6deg)",
          transition: "transform 100ms",
          transitionTimingFunction: "cubic-bezier(.17,.67,.83,.67)",
        }}
      >
        <Flex
          sx={{
            position: "absolute",
            bottom: 2,
            right: 2,
            flexWrap: "wrap",
            justifyContent: "flex-end",
            width: ["100%", "50%"],
            m: 0,
            opacity: isHover ? 0 : 1,
            transition: "opacity 100ms",
            transitionTimingFunction: "cubic-bezier(.17,.67,.83,.67)",
          }}
        >
          <Badge variant={status} sx={{ mr: 1, mb: 1 }}>
            {status}
          </Badge>
          <Badge
            variant="default"
            sx={{ mr: 1, mb: 1 }}
          >{`${pins} pins`}</Badge>
          <Badge variant="default" sx={{ mr: 1, mb: 1 }}>
            {stabilizers}
          </Badge>
        </Flex>
        <Heading
          sx={{
            position: "absolute",
            left: isDark ? -1 : 2,
            transform: isDark ? "rotate(0)" : "rotate(-2deg)",
            opacity: isHover ? 0 : 1,
            transition: "opacity 100ms",
            transitionTimingFunction: "cubic-bezier(.17,.67,.83,.67)",
            display: "inline-block",
            color: isDark ? "white" : "black",
            // fontSize: name.length > 13 ? [3, 4] : [5, 6],
            fontSize: name.length > 20 ? [3, 4] : [3, 5],
            fontWeight: "medium",
            p: 2,
            backgroundRepeat: "no-repeat",
            backgroundImage: "linear-gradient(0, #ffb8b8, #ffb8b8)",
            backgroundSize: "100% 3px",
            backgroundPosition: "4px 80%",
            backgroundRepeat: "no-repeat",
            backgroundColor: isDark ? "#333333" : "none",
            whiteSpace: "nowrap",
          }}
        >
          {name}
        </Heading>
        <Image
          sx={{
            width: "100%",
            height: "100%",
            border: "16px solid white",
            objectFit: "cover",
            border: "2px solid rgba(0, 0, 0, 0.1)",
          }}
          src={heroImg}
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
          Totally rad keyboard!
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
            sx={{
              border: "2px solid black",
              bg: "white",
              boxShadow: "3px 4px 0 0 rgba(0,0,0,1)",
              transition: "all 100ms, color 100ms",
              transitionTimingFunction: "cubic-bezier(.17,.67,.83,.67)",
              ":hover": {
                boxShadow: "5px 6px 0 0 #000",
              },
            }}
          >
            View more
          </Button>
        </Grid>
      </Flex>
    </ThemeCard>
  );
}

function ColorButton({ iconColor = "#B3A49E", children }) {
  const [isHover, setHover] = React.useState(false);
  const [text, setText] = React.useState(children);
  return (
    <Button
      onMouseDown={() => setText("Copied!")}
      onMouseEnter={() => {
        setText("Copy");
        setHover(true);
      }}
      onMouseLeave={() => {
        setText(children);
        setHover(false);
      }}
      type="button"
      sx={{
        borderColor: iconColor,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        bg: "white",
        p: 2,
        boxShadow: `3px 4px 0 0 ${iconColor}`,
        textTransform: "capitalize",
        transition: "all 100ms, color 100ms",
        transitionTimingFunction: "cubic-bezier(.17,.67,.83,.67)",
        "&:hover": {
          bg: iconColor,
          color: "white",
          boxShadow: `0px 0px 0 0 ${iconColor}`,
        },
      }}
    >
      <Box
        sx={{ mr: 1, display: isHover ? "none" : "initial" }}
        as="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        width="20"
        height="20"
        fill={iconColor}
      >
        <circle r={9} cx={10} cy={10} stroke={"black"} strokeWidth={1} />
      </Box>
      {text}
    </Button>
  );
}
