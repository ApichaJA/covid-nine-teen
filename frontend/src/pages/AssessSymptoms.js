import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

const AssessSymptoms = () => {
  const [age, setAge] = useState();
  const [state, setState] = useState(0);
  const [choiceSelect, setChoiceSelect] = useState([
    {
      id: 1,
      title: "เป็นไข้สูง",
      selected: false,
    },
    {
      id: 2,
      title: "อ่อนเพลีย",
      selected: false,
    },
    {
      id: 3,
      title: "แน่นหน้าอก",
      selected: false,
    },
    {
      id: 4,
      title: "ไม่รู้รส",
      selected: false,
    },
    {
      id: 5,
      title: "หอบเหนื่อยหนักมาก",
      selected: false,
    },
    {
      id: 6,
      title: "ถ่ายเหลวมากกว่า 3 ครั้ง/วัน",
      selected: false,
    },
  ]);

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleSelectChoice = (id) => {
    let choice = choiceSelect
    choice[id - 1].selected = !choice[id - 1].selected;
    setChoiceSelect(choice);
    setState(state+1)
  };

  const ChoiceSelect = () => {
    let item = [];
    choiceSelect.forEach((element) => {
      item.push(
        <Grid item xs={6} key={element.id}>
          <Button
            onClick={() => handleSelectChoice(element.id)}
            variant="contained"
            sx={{
              backgroundColor: element.selected ? "#34a853" : "#d9d9d9",
              borderRadius: 0,
              px: 10,
              borderRadius: "3px",
            }}
          >
            <Box
              sx={{
                typography: "body2",
                fontSize: "1.5vw",
                fontWeight: "bold",
                width: "20vw",
                padding: "6px 0px",
              }}
            >
              {element.title}
            </Box>
          </Button>
        </Grid>
      );
    });
    return item;
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
            fontSize: "5.5vw",
            fontWeight: "bold",
          }}
          className={"primary-color"}
        >
          ข้อมูลผู้ใช้
        </Box>
        <Grid container spacing={2} style={{ margin: "auto" }}>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            {/* <TextField id="age" label="อายุ" variant="standard" fullWidth /> */}
            <FormControl variant="standard" fullWidth>
              <InputLabel id="demo-simple-select-label">อายุ</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChangeAge}
              >
                {Array(100)
                  .fill(1)
                  .map((el, i) => (
                    <MenuItem key={i} value={i}>
                      {i}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Box
          sx={{
            typography: "body2",
            fontSize: "3vw",
            fontWeight: "bold",
            textAlign: "center",
            padding: "2vh 0px",
          }}
          className={"primary-color"}
        >
          อาการ
        </Box>
        <Grid container spacing={2}>
          <ChoiceSelect />
        </Grid>
      </Box>
    </Container>
  );
};

export default AssessSymptoms;
