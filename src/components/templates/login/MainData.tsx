import { Button, FormControlLabel, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { Link } from "react-router-dom";
import BaseInputField from "../../molecules/Form/BaseInputField";

function MainData() {
  const [rememberMe, setRememberMe] = useState<boolean>(true);
  return (
    <div>
      <div>
        <BaseInputField
          label="Email"
          name="useremail"
          placeholder="admin@admin.com"
          type="email"
        />
      </div>
      <div>
        <BaseInputField
          label="password"
          name="userpassword"
          placeholder="password"
          type="password"
        />
      </div>
      <Box
        sx={{
          my: 4,
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <FormControlLabel
          label="Remember Me"
          control={
            <Checkbox
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
          }
        />
        <Typography
          variant="body2"
          component={Link}
          href="/forgot-password"
          sx={{ color: "primary.main", textDecoration: "none" }}
        >
          ? Forgot Password
        </Typography>
      </Box>
      <Button
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        sx={{ mb: 7 }}
      >
        Login
      </Button>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ mr: 2, color: "text.secondary" }}>
          New on our platform?
        </Typography>
        <Typography
          href="/register"
          component={Link}
          sx={{ color: "primary.main", textDecoration: "none" }}
        >
          Create an account
        </Typography>
      </Box>
    </div>
  );
}

export default MainData;
