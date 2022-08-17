import { Card, createStyles, Divider, Group, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme, _params, getRef) => {
  const image = getRef("image");

  return {
    card: {
      position: "relative",
      height: 280,
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],

      [`&:hover .${image}`]: {
        transform: "scale(1.03)",
      },
    },

    image: {
      ref: image,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundSize: "cover",
      transition: "transform 500ms ease",
    },

    overlay: {
      position: "absolute",
      top: "20%",
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage:
        "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)",
    },

    content: {
      height: "100%",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      zIndex: 1,
    },

    title: {
      color: theme.white,
      marginBottom: 5,
    },

    bodyText: {
      color: theme.colors.dark[2],
      marginLeft: 7,
    },

    author: {
      color: theme.colors.dark[2],
    },
  };
});

interface ImageCardProps {
  link: string;
  image: string;
  title: string;
  calories: number;
  ingredients: number;
}

export default function ImageCard({
  image,
  title,
  link,
  calories,
  ingredients,
}: ImageCardProps) {
  const { classes, theme } = useStyles();
  let navigate = useNavigate();
  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      target="_blank"
      onClick={() => navigate(`/info/${encodeURIComponent(link)}`)}
    >
      <div
        className={classes.image}
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} weight={500}>
            {title}
          </Text>
          <Divider my="xs" />
          <Group grow>
            <Text align="center" size="sm">
              Calories: {calories}
            </Text>

            <Text align="center" size="sm">
              Ingredients: {ingredients}
            </Text>
          </Group>
        </div>
      </div>
    </Card>
  );
}
