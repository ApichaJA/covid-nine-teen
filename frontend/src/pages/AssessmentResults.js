import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const AssessmentResults = () => {
  const symptoms = useSelector((state) => state.assess.symptoms);
  //   const symptoms = [
  //     { id: 1, title: "เป็นไข้สูงกว่า 39", selected: false, status: 2 },
  //     { id: 2, title: "อ่อนเพลีย", selected: false, status: 1 },
  //     { id: 3, title: "แน่นหน้าอก", selected: false, status: 1 },
  //     { id: 4, title: "ไม่รู้รส", selected: true, status: 0 },
  //     { id: 5, title: "หอบเหนื่อยหนักมาก", selected: false, status: 2 },
  //     { id: 6, title: "ถ่ายเหลวมากกว่า 3 ครั้ง/วัน", selected: false, status: 1 },
  //   ];
  const [assessmentStatus, setAssessmentStatus] = useState(0);

  const navigate = useNavigate();
  const goBack = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );

  const validate = () => {
    if (symptoms.length === 0) {
      goBack();
    } else {
      checkStatus();
    }
  };

  useEffect(() => {
    validate();
  }, []);

  const checkStatus = () => {
    const getValue = symptoms.filter((e) => e.selected === true);
    let status = 0;
    for (let index = 0; index < getValue.length; index++) {
      if (getValue[index].status > status) {
        status = getValue[index].status;
      }
    }
    setAssessmentStatus(status);
  };

  const Title = () => {
    if (assessmentStatus === 1) {
      return (
        <Box
          sx={{
            typography: "body2",
            fontSize: "10vw",
            fontWeight: "bold",
            color: "#ffbd59",
          }}
        >
          ผู้ป่วยสีเหลือง
        </Box>
      );
    } else if (assessmentStatus === 2) {
      return (
        <Box
          sx={{
            typography: "body2",
            fontSize: "10vw",
            fontWeight: "bold",
            color: "#c65151",
          }}
        >
          ผู้ป่วยสีแดง
        </Box>
      );
    } else {
      return (
        <Box
          sx={{
            typography: "body2",
            fontSize: "10vw",
            fontWeight: "bold",
            color: "#076852",
          }}
        >
          ผู้ป่วยสีเขียว
        </Box>
      );
    }
  };
  const Description = () => {
    if (assessmentStatus === 0) {
      return (
        <Box
          sx={{
            typography: "body2",
            fontSize: "2vw",
            fontWeight: "bold",
          }}
          className={"primary-color"}
        >
          แนะนำให้รักษาเองด้วยวิธี HOME ISOLATION
        </Box>
      );
    } else {
      return (
        <Box
          sx={{
            typography: "body2",
            fontSize: "2vw",
            fontWeight: "bold",
          }}
          className={"primary-color"}
        >
          แนะนำให้รักษาเองด้วยวิธี Community ISOLATION
        </Box>
      );
    }
  };

  const IsolationButton = () => {
    if (assessmentStatus === 1) {
      return (
        <Box>
          <Box>
            <Button
              component={Link}
              to="/get-medicine"
              replace
              variant="contained"
              sx={{
                backgroundColor: "#f67f7f",
                px: 10,
                mt: 5,
                width: "400px",
                height: "50px",
              }}
            >
              <Box
                sx={{
                  typography: "body2",
                  fontSize: "2vw",
                  fontWeight: "bold",
                }}
              >
                ขอรับยาฟรี
              </Box>
            </Button>
          </Box>
          <Button
            component={Link}
            to="/find-hospital"
            replace
            variant="contained"
            sx={{
              backgroundColor: "#f67f7f",
              px: 10,
              mt: 2,
              width: "400px",
              height: "50px",
            }}
          >
            <Box
              sx={{
                typography: "body2",
                fontSize: "2vw",
                fontWeight: "bold",
              }}
            >
              ค้นหาโรงพยาบาล
            </Box>
          </Button>
        </Box>
      );
    } else if (assessmentStatus === 2) {
      return (
        <Box>
          <Box>
            <Button
              component={Link}
              to="/get-medicine"
              replace
              variant="contained"
              sx={{
                backgroundColor: "#34a853",
                px: 10,
                mt: 5,
                width: "400px",
                height: "50px",
              }}
            >
              <Box
                sx={{
                  typography: "body2",
                  fontSize: "2vw",
                  fontWeight: "bold",
                }}
              >
                ขอรับยาฟรี
              </Box>
            </Button>
          </Box>
          <Button
            component={Link}
            to="/find-hospital"
            replace
            variant="contained"
            sx={{
              backgroundColor: "#34a853",
              px: 10,
              mt: 2,
              width: "400px",
              height: "50px",
            }}
          >
            <Box
              sx={{
                typography: "body2",
                fontSize: "2vw",
                fontWeight: "bold",
              }}
            >
              ค้นหาโรงพยาบาล
            </Box>
          </Button>
        </Box>
      );
    } else {
      return (
        <Box>
          <Box>
            <Button
              component={Link}
              to="/get-medicine"
              replace
              variant="contained"
              sx={{
                backgroundColor: "#ffbd59",
                px: 10,
                mt: 5,
                width: "400px",
                height: "50px",
              }}
            >
              <Box
                sx={{
                  typography: "body2",
                  fontSize: "2vw",
                  fontWeight: "bold",
                }}
              >
                ขอรับยาฟรี
              </Box>
            </Button>
          </Box>
          <Button
            component={Link}
            to="/recommand"
            replace
            variant="contained"
            sx={{
              backgroundColor: "#ffbd59",
              px: 10,
              mt: 2,
              width: "400px",
              height: "50px",
            }}
          >
            <Box
              sx={{
                typography: "body2",
                fontSize: "2vw",
                fontWeight: "bold",
              }}
            >
              แนะนำยารักษาโควิด
            </Box>
          </Button>
        </Box>
      );
    }
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
            fontSize: "3vw",
            fontWeight: "bold",
          }}
          className={"primary-color"}
        >
          จากการประเมินอาการของคนไข้ตาม
          <br />
          ข้อมูลที่แจ้งมา พบว่าเป็น
        </Box>
        <Grid container spacing={2} style={{ margin: "auto" }}>
          <Grid
            item
            xs={12}
            sx={{ mt: 5, py: 5 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Title />
          </Grid>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Description />
          </Grid>
        </Grid>
      </Box>
      <IsolationButton />
    </Container>
  );
};

export default AssessmentResults;
