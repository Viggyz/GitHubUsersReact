import { Container, Box, Typography, TextField } from "@mui/material";

import { UsersDisplay } from "./Components/UsersDisplay";

function App()
{
  return (
    <Container maxwidth="sm">
      <Box sx={{
        m: "5rem auto", display: "flex", alignItems: "center",
        flexDirection: "column",
        // bgcolor: "lightblue"
      }}>
        <Box>
          <Typography variant="h2" >
            GitHub User Search
          </Typography>
        </Box>
        <TextField fullWidth label="Username" />
      </Box>
      <Box>
        <UsersDisplay />
      </Box>
    </Container >
  );
}

export default App;
