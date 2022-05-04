import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";

import rec from "../assets/images/rec.jpeg";

const Recomand = () => {
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
          แนะนำยารักษาโควิด
        </Box>
        <Grid container spacing={2} style={{ margin: "auto" }}>
          <Grid
            item
            xs={6}
          >
            <Box
              component="img"
              sx={{
                height: 400,
                width: 400,
              }}
              alt="Recomand"
              src={rec}
            />
          </Grid>
          <Grid
            item
            xs={6}
          >
            <Box style={{ textAlign: 'left' }}>
              <ul>
                <li style={{ fontWeight: "bold" }}>ยาแก้เจ็บคอ สเปรย์พ่นคอ</li>
                <Box
                  sx={{
                    typography: "body2",
                    fontSize: "1.5vw",
                  }}
                >
                  เพื่อช่วยบรรเทาอาการเจ็บคอ ลดอาการเหงือกอักเสบ ลดทอนซิลอักเสบ
                  และช่วยลดแผลร้อนในในปาก
                </Box>
                <li style={{ fontWeight: "bold" }}>ยาแก้ไอ</li>
                <Box
                  sx={{
                    typography: "body2",
                    fontSize: "1.5vw",
                  }}
                >
                  กลุ่มยาแก้ไอ จะแบ่งออกเป็น 3 แบบ ได้แก่ ยาละลายเสมหะ
                  ยาขับเสมหะ และยาช่วยลดอาการไอ
                </Box>
                <li style={{ fontWeight: "bold" }}>ยาลดไข้ ยาพาราเซตามอล</li>
                <Box
                  sx={{
                    typography: "body2",
                    fontSize: "1.5vw",
                  }}
                >
                  แนะนำให้รับประทานยาลดไข้พาราเซตามอล เนื่องจากปลอดภัย
                  รับประทานง่าย หาซื้อได้ง่าย
                </Box>
              </ul>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Recomand;
