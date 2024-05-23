import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";

function ECDForm() {
  return (
    <>
      <Box
        xs={12}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            background: "rgba(255,255,255,0.5)",
            width: "70%",
            height: "100%",
            padding: 8,
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              "& .MuiTextField-root": { m: 1, width: "96%" },
            }}
          >
            <Grid container spacing={2}>

              <Grid xs={12}>
                <h2>Registeration Form</h2>
              </Grid>

              <Grid textAlign={"left"} xs={12}>
                <FormLabel>Child's Information</FormLabel>
              </Grid>

              <Grid xs={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Full Name"
                  variant="outlined"
                />
              </Grid>

              <Grid xs={12} md={6}>
                <DatePicker label="Date of Birth" />
              </Grid>

              <Grid xs={12} md={6}>
                <TextField
                  id="outlined-number"
                  label="Age at the time of Enrollment"
                  type="number"
                />
              </Grid>

              <Grid xs={12} md={6}>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-form-control-label-placement"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid textAlign={"left"} xs={12}>
                <FormLabel>Parent / Guardian Personal Information</FormLabel>
              </Grid>

              <Grid xs={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Father's Full Name"
                  variant="outlined"
                />
              </Grid>

              <Grid xs={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Mother's Full Name"
                  variant="outlined"
                />
              </Grid>

              <Grid xs={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Father's Qualification"
                  variant="outlined"
                />
              </Grid>

              <Grid xs={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Mother's Qualification"
                  variant="outlined"
                />
              </Grid>

              <Grid xs={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Father's Occupation"
                  variant="outlined"
                />
              </Grid>

              <Grid xs={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Mother's Occupation"
                  variant="outlined"
                />
              </Grid>

              <Grid xs={12} md={6}>
                <TextField
                  id="outlined-number"
                  label="Monthly Income"
                  type="number"
                />
              </Grid>

              <Grid xs={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Other source of income"
                  variant="outlined"
                />
              </Grid>

              <Grid xs={12} md={6}>
                <TextField id="outlined-number" label="Amount" type="number" />
              </Grid>

              <Grid xs={12} md={6}>
                <TextField
                  label="Father's Phone Number"
                  id="outlined-start-adornment"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+93</InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid xs={12} md={6}>
                <TextField
                  label="Mother's Phone Number"
                  id="outlined-start-adornment"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+93</InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid xs={12} md={6}>
                <TextField
                  label="Emergency Phone Number"
                  id="outlined-start-adornment"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+93</InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid xs={12} md={6}>
                <TextField
                  id="outlined-number"
                  label="Total Number of Family Memebers"
                  type="number"
                  fullWidth
                />
              </Grid>

              <Grid xs={12} md={6}>
                <TextField
                  id="outlined-number"
                  label="Child among Sibling"
                  type="number"
                />
              </Grid>

              <Grid xs={12} md={12}>
                <TextField
                  id="outlined-basic"
                  label="Family System"
                  variant="outlined"
                />
              </Grid>

              <Grid xs={12} md={12}>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Address"
                  multiline
                  fullWidth
                  rows={2}
                />
              </Grid>

              <Grid textAlign={"left"} xs={12}>
                <FormLabel>Registeration Information</FormLabel>
              </Grid>

              <Grid xs={12} md={6}>
                <DateTimePicker label="Registeration Date" />
              </Grid>

              <Grid xs={12} md={6}>
                <TextField
                  id="outlined-number"
                  label="Registeration Fee"
                  type="number"
                />
              </Grid>

              <Grid xs={12} md={12}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="I agree that the above information is correct."
                  />
                </FormGroup>
              </Grid>
            </Grid>

            <Grid xs={12} md={12}>
              <Button variant="contained" endIcon={<SaveIcon />} size="large">
                Save Data
              </Button>
            </Grid>

          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default ECDForm;
