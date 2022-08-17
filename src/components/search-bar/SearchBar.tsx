import { TextInput, TextInputProps } from "@mantine/core";
import { IconSearch } from "@tabler/icons";

export function SearchBar(props: TextInputProps) {
  return (
    <TextInput
      icon={<IconSearch size={18} stroke={1.5} />}
      radius="xl"
      size="md"
      placeholder="Search Recipe"
      rightSectionWidth={42}
      {...props}
    />
  );
}
