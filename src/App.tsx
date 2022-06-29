import React, { useState } from "react";
import Feed from "components/Feed";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import Rightbar from "components/Rightbar";
import { Box, Stack } from "@mui/material";

const App: React.FC = () => {
  const [mode, setMode] = useState("");
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar mode={mode} setMode={setMode} />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
};

export default App;

