import {
  Button,
  Checkbox,
  Group,
  HoverCard,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { IconSettings } from "@tabler/icons";

import { useForm, UseFormReturnType } from "@mantine/form";

interface FormValueProps {
  caloriesFrom: string;
  caloriesTo: string;
  ingredients: string;
  Dairy: boolean;
  Eggs: boolean;
  Fish: boolean;
  Gluten: boolean;
  "High-Fiber": boolean;
  Paleo: boolean;
  Peanuts: boolean;
  Shellfish: boolean;
  Soy: boolean;
  "Tree-Nuts": boolean;
  Vegan: boolean;
  Vegetarian: boolean;
  Wheat: boolean;
}

interface CheckBoxGroupProps {
  items: string[];
  title: string;
  handler: UseFormReturnType<FormValueProps>;
}

const CheckBoxGroup = ({ items, title, handler }: CheckBoxGroupProps) => {
  return (
    <Stack align="center">
      <Text
        size="md"
        sx={{
          textTransform: "uppercase",
        }}
      >
        {title}
      </Text>
      <SimpleGrid cols={2}>
        {items.map((e, index) => (
          <Checkbox
            key={`${title.toLowerCase()}-${index}`}
            {...handler.getInputProps(e, { type: "checkbox" })}
            label={e.replace(/-/g, " ")}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

const Filters = () => {
  const allergies = [
    "Gluten",
    "Dairy",
    "Eggs",
    "Soy",
    "Wheat",
    "Fish",
    "Shellfish",
    "Tree-Nuts",
    "Peanuts",
  ];
  const diet = ["Vegetarian", "Vegan", "Paleo", "High-Fiber"];

  const handleValidation = (value: string) =>
    /^[0-9]{0,4}$/.test(value.trim()) ? null : `Enter a number between 0-9999`;

  const formHandler = useForm<FormValueProps>({
    initialValues: {
      ...(Object.fromEntries(
        [...allergies, ...diet].map((e) => [e, false])
      ) as any as Omit<
        FormValueProps,
        "caloriesFrom" | "caloriesTo" | "ingredients"
      >),
      caloriesFrom: "",
      caloriesTo: "",
      ingredients: "",
    },
    validate: {
      caloriesFrom: handleValidation,
      caloriesTo: handleValidation,
      ingredients: handleValidation,
    },
  });
  return (
    <Group position="center">
      <HoverCard shadow="md">
        <HoverCard.Target>
          <Button variant="default" leftIcon={<IconSettings size={20} />}>
            REFINE SEARCH BY Calories, Diet, Ingredients
          </Button>
        </HoverCard.Target>
        <HoverCard.Dropdown
          sx={{
            maxHeight: "90vh",
            overflowY: "scroll",
          }}
        >
          <form
            onSubmit={formHandler.onSubmit((values) => console.log(values))}
          >
            <SimpleGrid
              cols={3}
              breakpoints={[
                { maxWidth: "lg", cols: 3, spacing: "md" },
                { maxWidth: "lg", cols: 2, spacing: "sm" },
                { maxWidth: "sm", cols: 1, spacing: "sm" },
              ]}
            >
              <Stack>
                <Stack align="center" justify="flex-start" spacing="xs">
                  <Text
                    size="md"
                    sx={{
                      textTransform: "uppercase",
                    }}
                  >
                    Calories
                  </Text>
                  <TextInput
                    size="xs"
                    label="From"
                    {...formHandler.getInputProps("caloriesFrom")}
                  />
                  <TextInput
                    size="xs"
                    label="To"
                    {...formHandler.getInputProps("caloriesTo")}
                  />
                </Stack>
                <Stack align="center" justify="flex-start" spacing="xs">
                  <Text
                    size="md"
                    sx={{
                      textTransform: "uppercase",
                    }}
                  >
                    Ingredients
                  </Text>
                  <TextInput
                    size="xs"
                    label="Up To"
                    {...formHandler.getInputProps("ingredients")}
                  />
                </Stack>
              </Stack>
              <CheckBoxGroup
                items={allergies}
                title="Allergies"
                handler={formHandler}
              />
              <CheckBoxGroup items={diet} title="Diet" handler={formHandler} />
            </SimpleGrid>
            <Group
              position="right"
              mt="md"
              sx={(theme) => ({
                [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
                  justifyContent: "center",
                  paddingTop: "1rem",
                },
              })}
            >
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
};

export default Filters;
