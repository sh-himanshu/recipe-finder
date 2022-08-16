import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recipe from "./pages/Recipe";
import Search from "./pages/Search";

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      refetchOnReconnect: false,
      retry: false,
      staleTime: twentyFourHoursInMs,
    },
  },
});

export default function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          theme={{ colorScheme: "dark" }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Routes>
            <Route path="/">
              <Route index element={<Search />} />
              <Route path=":query" element={<Search />} />
            </Route>
            <Route path="/info">
              <Route index element={<Recipe />} />
              <Route path=":recipeUri" element={<Recipe />} />
            </Route>
          </Routes>
        </MantineProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
