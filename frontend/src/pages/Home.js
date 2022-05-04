import React from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

import virus from "../assets/video/virus.mp4";

const Item1 = styled(Paper)(() => ({
  backgroundColor: "#2d4263",
  "& .MuiOutlinedInput-notchedOutline": {
    border: 0,
  },
  boxShadow: "none",
  textAlign: "center",
  borderRadius: 0,
  color: "white",
  height: 300,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
const Item2 = styled(Paper)(() => ({
  backgroundColor: "#f67f7f",
  "& .MuiOutlinedInput-notchedOutline": {
    border: 0,
  },
  boxShadow: "none",
  textAlign: "center",
  borderRadius: 0,
  color: "white",
  height: 300,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const Home = () => {
  return (
    <Container
      sx={{
        maxWidth: "none!important",
        minWidth: "none!important",
        padding: "0!important",
        position: "relative",
      }}
    >
      <CardMedia
        component="video"
        image={virus}
        className={"background-video"}
        autoPlay
        muted
        loop
      />
      <Box
        sx={{
          width: "100vw",
          height: 300,
          bottom: 0,
          position: "absolute",
          backgroundColor: "#2d4263",
        }}
      >
        <Grid container>
          <Grid color={"dark"} item xs={7}>
            <Item1>
              <Box>
                <Box
                  sx={{
                    typography: "body2",
                    fontSize: "5.5vw",
                    fontWeight: 400,
                  }}
                >
                  COVID NINE TEEN
                </Box>
                <Button
                  component={Link}
                  to="/assess-symptoms"
                  replace
                  variant="contained"
                  sx={{ backgroundColor: "#f67f7f", borderRadius: 0, px: 10 }}
                >
                  <Box
                    sx={{
                      typography: "body2",
                      fontSize: "3vw",
                      fontWeight: 400,
                    }}
                  >
                    ประเมินอาการ
                  </Box>
                </Button>
              </Box>
            </Item1>
          </Grid>
          <Grid item xs={5}>
            <Item2>
              <Box>
                <Box
                  sx={{ typography: "body2", fontSize: "2vw", fontWeight: 400 }}
                >
                  ติดเชื้อเพิ่มวันนี้
                </Box>
                <Divider color="white" />
                <Box sx={{ fontSize: "1.5vw" }}>NEW CASE</Box>
                <Box
                  sx={{ typography: "body2", fontSize: "7vw", fontWeight: 400 }}
                >
                  {(19990).toLocaleString()}
                </Box>
              </Box>
            </Item2>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;