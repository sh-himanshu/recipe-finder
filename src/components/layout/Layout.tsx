import { AppShell, Container, Header } from "@mantine/core";
import { ReactNode } from "react";

interface LayoutProps {
  header: ReactNode;
  children: ReactNode;
}

const Layout = ({ header, children }: LayoutProps) => {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={60} p="xs">
          <Container size="lg">{header}</Container>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
};

export default Layout;
