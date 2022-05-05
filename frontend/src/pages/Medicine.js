import React, { useCallback } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import medhome from "../assets/images/medhome.jpeg";

const Recomand = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );
  const goHome = () => {
    handleOnClick();
  };
  return (
    <Container maxWidth={false} sx={{ padding: "0!important" }}>
      <Box
        sx={{
          mt: 10,
          typography: "body2",
          fontSize: "7vw",
          fontWeight: "bold",
        }}
        className={"primary-color"}
      >
        ขั้นตอนการรับยาฟรี
      </Box>
      <Box component="img" alt="Recomand" src={medhome} />
      <Box>
        <Button
          onClick={goHome}
          variant="contained"
          sx={{
            backgroundColor: "#2d4263",
            px: 10,
            borderRadius: 10,
            mt: 2,
          }}
        >
          <Box
            sx={{
              typography: "body2",
              fontSize: "2vw",
              fontWeight: "bold",
            }}
          >
            กลับสู่หน้าหลัก
          </Box>
        </Button>
      </Box>
    </Container>
  );
};

export default Recomand;
