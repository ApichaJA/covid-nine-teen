import React, { useCallback } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import VirusIcon from "../assets/icons/coronavirus.png";

const Navbar = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    (route) => navigate(`/${route}`, { replace: true }),
    [navigate]
  );
  const handlerRoute = (e) => {
    handleOnClick(e.target.value);
  };
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
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              textDecoration: "none",
            }}
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
          <Select
            onChange={handlerRoute}
            IconComponent={MenuIcon}
            variant="standard"
            color="action" 
          >
            <MenuItem value="login">เข้าสู่ระบบ</MenuItem>
            <MenuItem value="Assess-Symptoms">
              กรอกข้อมูลเพื่อประเมินอาการ
            </MenuItem>
            <MenuItem value="recommand">แนะนำยารักษาโควิด</MenuItem>
            <MenuItem value="hospital">ค้นหาโรงพยาบาล</MenuItem>
            <MenuItem value="medicine">ขั้นตอนการรับยาฟรี</MenuItem>
          </Select>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: "flex" }}
            className=""
          >
            <MenuIcon />
          </IconButton> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
