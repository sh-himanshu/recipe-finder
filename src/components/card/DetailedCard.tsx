import {
  Button,
  Container,
  createStyles,
  Image,
  List,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { RecipeData } from "../../types";

import { IconExternalLink } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing.xl * 2,
    borderRadius: theme.radius.md,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "column-reverse",
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: "40%",

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  body: {
    paddingRight: theme.spacing.xl * 4,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,

    marginBottom: theme.spacing.xl,
  },

  controls: {
    display: "flex",
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: "100%",
    flex: "1",
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

interface DetailedCardProps {
  data: RecipeData;
}

export default function DetailedCard({ data }: DetailedCardProps) {
  const { classes } = useStyles();
  return (
    <Stack>
      <div className={classes.wrapper}>
        <div className={classes.body}>
          <Title className={classes.title}>{data.label}</Title>
          <Button
            component="a"
            href={data.url}
            variant="outline"
            leftIcon={<IconExternalLink size={14} />}
          >
            {data.source}
          </Button>
        </div>
        <Image
          sx={{ flex: 1 }}
          src={data.image}
          className={classes.image}
          withPlaceholder
        />
      </div>
      <Container
        sx={{
          width: "100%",
        }}
      >
        <SimpleGrid
          cols={2}
          breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}
        >
          <div>
            <Text
              align="center"
              size="lg"
              weight={800}
              sx={{
                paddingBottom: "1rem",
              }}
            >
              {data.ingredients.length} Ingredients
            </Text>
            <List size="sm">
              {data.ingredients.map((e, index) => (
                <List.Item key={`ingredient-${index}`}>{e.text}</List.Item>
              ))}
            </List>
          </div>
          <div>
            <Text
              align="center"
              size="lg"
              weight={800}
              sx={{
                paddingBottom: "1rem",
              }}
            >
              Nutrition
            </Text>
          </div>
        </SimpleGrid>
      </Container>
    </Stack>
  );
}
