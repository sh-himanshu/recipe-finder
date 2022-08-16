import { Box, Button, Text } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import DetailedCard from "../components/card/DetailedCard";
import Error from "../components/error/Error";
import Layout from "../components/layout/Layout";
import type { RecipeData } from "../types";

const Recipe = () => {
  let { recipeUri } = useParams();
  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery([recipeUri], () =>
    axios
      .get<RecipeData[]>(
        `https://www.edamam.com/search?r=${encodeURIComponent(recipeUri || "")}`
      )
      .then((res) => res.data[0])
  );
  if (isLoading) return <div>Loading...</div>;

  return (
    <Layout
      header={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Button
              variant="subtle"
              onClick={() => navigate(-1)}
              leftIcon={<IconArrowLeft size={20} />}
            >
              BACK
            </Button>
          </Box>
          <Text weight={800} size="lg">
            RECIPE
          </Text>
          <Box sx={{ flex: 1 }}></Box>
        </Box>
      }
    >
      {error || (data && !data.image) ? (
        <Error />
      ) : (
        data && <DetailedCard data={data} />
      )}
    </Layout>
  );
};

export default Recipe;
