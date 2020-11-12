import { Flex, Badge } from "theme-ui";

export default {
  title: "Components/Badge",
  component: Badge,
};

export const AllBadges = () => {
  const styles = {
    mr: 1,
    mb: 1,
  };
  return (
    <Flex
      sx={{
        flexWrap: "wrap",
      }}
    >
      <Badge sx={styles} variant="using" className="using">
        using
      </Badge>
      <Badge sx={styles} variant="purchased" className="purchased">
        purchased
      </Badge>
      <Badge sx={styles} variant="shelved" className="shelved">
        shelved
      </Badge>
      <Badge sx={styles} variant="want" className="want">
        want
      </Badge>
      <Badge sx={styles} variant="artisan" className="artisan">
        artisan
      </Badge>
    </Flex>
  );
};

export const Using = () => <Badge variant="using">using</Badge>;
export const Purchased = () => <Badge variant="purchased">purchased</Badge>;
export const Shelved = () => <Badge variant="shelved">shelved</Badge>;
export const Want = () => <Badge variant="want">want</Badge>;
