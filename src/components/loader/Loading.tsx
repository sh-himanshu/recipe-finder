import { Box, Loader } from "@mantine/core";

const Loading = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader color="indigo" size="md" variant="bars" />
    </Box>
  );
};

export default Loading;
