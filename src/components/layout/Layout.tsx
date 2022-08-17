import { AppShell, Container, Header } from "@mantine/core";
import { ReactNode } from "react";
import { IconArrowUp } from "@tabler/icons";
import { useWindowScroll } from "@mantine/hooks";
import { Affix, Button, Text, Transition } from "@mantine/core";

interface LayoutProps {
  header: ReactNode;
  children: ReactNode;
}

const Layout = ({ header, children }: LayoutProps) => {
  const [scroll, scrollTo] = useWindowScroll();
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
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftIcon={<IconArrowUp size={16} />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </AppShell>
  );
};

export default Layout;
