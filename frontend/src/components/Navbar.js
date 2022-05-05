import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

import VirusIcon from "../assets/icons/coronavirus.png";

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#2d4263" }}>
      <Container sx={{ maxWidth: "none!important" }}>
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box
            component={Link}
            to="/"
            replace
            style={{ display: "flex", alignItems: "center", color: 'white', textDecoration: 'none' }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: "flex", alignItems: "center" }}
            >
              <Box
                component="img"
                sx={{
                  height: 50,
                }}
                alt="Virus Icon"
                src={VirusIcon}
              />
            </Typography>
            <Typography variant="h6" noWrap component="div" sx={{ mr: 2 }}>
              COVID NINE TEEN
            </Typography>
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: "flex" }}
            className=""
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
