import { TextInput, TextInputProps } from "@mantine/core";
import { IconSearch } from "@tabler/icons";

export function SearchBar(props: TextInputProps) {
  return (
    <TextInput
      icon={<IconSearch size={18} stroke={1.5} />}
      radius="xl"
      size="md"
      // rightSection={
      //   <ActionIcon
      //     size={32}
      //     radius="xl"
      //     color={theme.primaryColor}
      //     variant="filled"
      //   >
      //     {theme.dir === "ltr" ? (
      //       <IconArrowRight size={18} stroke={1.5} />
      //     ) : (
      //       <IconArrowLeft size={18} stroke={1.5} />
      //     )}
      //   </ActionIcon>
      // }
      placeholder="Search Recipe"
      rightSectionWidth={42}
      {...props}
    />
  );
}
