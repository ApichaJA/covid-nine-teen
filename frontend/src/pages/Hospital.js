import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";

import third from "../services/api/third";

const Hospital = () => {
  const [hospital, setHospital] = useState([]);
  const [search, setSearch] = useState("");
  const [filterHospital, setFilterHospital] = useState([]);
  const [open, setOpen] = useState(false);
  const [hospitalInfo, setHospitalInfo] = useState([]);

  useEffect(() => {
    const fetchHospital = async () => {
      await third
        .getHospital()
        .then((res) => {
          setHospital(res.data);
          setFilterHospital(res.data.items);
        })
        .catch((e) => console.log(e));
    };
    fetchHospital();
  }, []);

  const handlerSearch = (e) => {
    setSearch(e.target.value);
    searchHospital();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlerModal = (data) => {
    setHospitalInfo(data);
    setOpen(true);
  };

  const searchHospital = () => {
    if (search === "") {
      setFilterHospital(hospital.items);
    } else {
      setFilterHospital(
        hospital.items.filter((e) => {
          return(
            e.n.includes(search) || e.p.includes(search)
            )
        })
      );
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Container
      maxWidth={false}
      sx={{ padding: "0!important", maxWidth: "80vw" }}
    >
      <Box className="assess-symptoms">
        <Box
          sx={{
            typography: "body2",
            fontSize: "7vw",
            fontWeight: "bold",
          }}
          className={"primary-color"}
        >
          ค้นหาโรงพยาบาล
        </Box>
        <TextField
          fullWidth
          id="standard-basic"
          label="ชื่อโรงพยาบาล"
          onChange={handlerSearch}
          variant="standard"
        />
        <Grid container spacing={4} sx={{ mt: 7 }}>
          {filterHospital.map((h, index) => (
            <Grid item xs={3} key={index}>
              <Card
                sx={{ maxWidth: 345, minHeight: 290 }}
                onClick={() => handlerModal(h)}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`https://random.imagecdn.app/500/${150 + index}`}
                    alt="name"
                  />
                  <Divider sx={{ mt: 2 }} color="whitesmoke" />

                  <CardContent sx={{ textAlign: "left" }}>
                    <Typography
                      sx={{ fontWeight: "600" }}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {h.n}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 18 }}
                      gutterBottom
                      component="div"
                    >
                      ติดต่อ {h.mob}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 18, textAlign: "left" }}
                      gutterBottom
                      component="div"
                    >
                      {h.p}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold" }}
          >
            {hospitalInfo.n}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {hospitalInfo.rm}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {hospitalInfo.m}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            ติดต่อ {hospitalInfo.mob}
          </Typography>
          {hospitalInfo.lin !== "" ? (
            <Box>
              <Typography
                id="modal-modal-title"
                sx={{ mt: 2, fontWeight: "bold" }}
              >
                Line
              </Typography>
              <Typography id="modal-modal-description">
                {hospitalInfo.lin}
              </Typography>
            </Box>
          ) : (
            false
          )}
          {hospitalInfo.w !== "" ? (
            <Box>
              <Typography
                id="modal-modal-title"
                sx={{ mt: 2, fontWeight: "bold" }}
              >
                Website
              </Typography>
              <Typography id="modal-modal-description">
                {hospitalInfo.w}
              </Typography>
            </Box>
          ) : (
            false
          )}
        </Box>
      </Modal>
    </Container>
  );
};

export default Hospital;
