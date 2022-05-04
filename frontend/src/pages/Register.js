import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import UserPool from "../services/UserPool";

const Register = () => {
  const [email, setEmail] = useState("tester@gmail.com");
  const [password, setPassword] = useState("Tester#_12345678");
  const [open, setOpen] = useState(false);
  const handlerEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlerPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const signUp = () => {
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.log(err);
        setOpen(true);
      } else {
        console.log(data);
      }
    });
  };
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={1} ref={ref} variant="filled" {...props} />;
  });
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/login", { replace: true }),
    [navigate]
  );
  const goLoginPage = () => {
    handleOnClick();
  };
  return (
    <Container
      maxWidth={false}
      sx={{ padding: "0!important", maxWidth: "80vw" }}
    >
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          An account with the given email already exists
        </Alert>
      </Snackbar>
      <Box className="assess-symptoms">
        <Box
          sx={{
            typography: "body2",
            fontSize: "5.5vw",
            fontWeight: "bold",
          }}
          className={"primary-color"}
        >
          สมัครสมาชิก
        </Box>
        <Grid container spacing={2} style={{ margin: "auto" }}>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <TextField
              onChange={handlerEmail}
              id="Email"
              label="Email"
              value={email}
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <TextField
              onChange={handlerPassword}
              id="Password"
              label="Password"
              value={password}
              type="password"
              variant="standard"
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>
      <Box>
          <Button
          onClick={signUp}
            variant="contained"
            sx={{
              backgroundColor: "#f67f7f",
              px: 10,
              borderRadius: 10,
              mt: 5,
            }}
          >
            <Box
              sx={{
                typography: "body2",
                fontSize: "2vw",
                fontWeight: "bold",
              }}
            >
              สมัครสมาชิก
            </Box>
          </Button>
      </Box>
        <Button
          onClick={goLoginPage}
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
            เข้าสู่ระบบ
          </Box>
        </Button>
    </Container>
  );
};

export default Register;
