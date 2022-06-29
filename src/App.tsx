import React from "react";
import { Feed } from "components/Feed";
import { Box, Stack } from "@mui/material";
import { Navbar } from "components/Navbar";
import { Sidebar } from "components/Sidebar";
import { Rightbar } from "components/Rightbar";

const App: React.FC = () => {
  return (
    <Box>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Navbar />
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
};

export default App;

