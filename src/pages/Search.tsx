import { LoadingOverlay, SimpleGrid, Stack } from "@mantine/core";
import { useDebouncedState } from "@mantine/hooks";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ImageCard from "../components/card/ImageCard";
import Error from "../components/error/Error";
import Layout from "../components/layout/Layout";
import Filters from "../components/search-bar/Filters";
import { SearchBar } from "../components/search-bar/SearchBar";
import { SearchData } from "../types";

const Search = () => {
  const { query } = useParams();
  const navigate = useNavigate();
  const [value, setValue] = useDebouncedState(query || "", 500);

  const { isLoading, error, data, refetch } = useQuery(["searchData"], () =>
    axios
      .get<SearchData>(`https://www.edamam.com/search?q=${value}`)
      .then((res) => res.data)
  );

  useEffect(() => {
    navigate(`/${value}`);
    if (query !== value) refetch();
  }, [value]);

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.currentTarget.value.trim() !== "")
      setValue(event.currentTarget.value.trim());
  };

  return (
    <Layout
      header={
        <Stack
          justify="flex-start"
          spacing="md"
          // sx={(theme) => ({
          //   backgroundColor:
          //     theme.colorScheme === "dark"
          //       \? theme.colors.dark[8]
          //       : theme.colors.gray[0],
          //   height: 300,
          // })}
        >
          <SearchBar onKeyUp={handleKeyUp} />
        </Stack>
      }
    >
      {error ? (
        <Error />
      ) : (
        <Stack>
          <Filters />
          <SimpleGrid
            cols={4}
            spacing="xl"
            breakpoints={[
              { maxWidth: "md", cols: 3, spacing: "md" },
              { maxWidth: "sm", cols: 2, spacing: "sm" },
              { maxWidth: "xs", cols: 1, spacing: "sm" },
            ]}
          >
            {data?.hits.map((r, index) => (
              <ImageCard
                key={`search-item-${index}`}
                link={r.recipe.uri}
                image={r.recipe.image}
                title={r.recipe.label}
                calories={Math.round(r.recipe.calories * 100) / 100}
                ingredients={r.recipe.ingredients.length}
              />
            ))}
          </SimpleGrid>
        </Stack>
      )}
    </Layout>
  );
};

export default Search;
