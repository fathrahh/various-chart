import { Box, Typography } from "@mui/material";
import Challenge1 from "./pages/challenge1";

function App() {
  return (
    <Box
      sx={{
        p: 4,
      }}
    >
      <Box
        sx={{
          padding: "1.5rem",
          backgroundColor: "#FFFFFF",
          border: "1px solid #EFEFEF",
          borderRadius: 6,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontWeight: 600,
            }}
          >
            Walking for the last 8 weeks
          </Typography>
        </Box>

        <Challenge1 />
      </Box>
    </Box>
  );
}

export default App;
