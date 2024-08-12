import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import { TextField, Slider } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SimpleContainer() {
  const [age, setAge] = React.useState("");
  const [category, setCategory] = React.useState("all");
  const [company, setCompany] = React.useState("all");
  const [sort, setSort] = React.useState("a-z");
  const [priceValue, setPriceValue] = React.useState(100);

  function handleChange(newVal) {
    setPriceValue(newVal.target.value);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            marginTop: "100px",
            borderRadius: "7px",
            paddingX: { xs: 2, md: 4, lg: 8 },
            paddingY: { xs: 1, md: 3, lg: 6 },
          }}
        >
          <Grid container spacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
            <Grid item="true" xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth>
                <label htmlFor="product">Search Product</label>
                <TextField
                  id="product"
                  variant="outlined"
                  fullWidth
                  color="secondary"
                  sx={{
                    padding: 0, // Ichki bo'shliqni olib tashlash
                    borderRadius: 8, // Burchak radiusi 8px
                    height: 30, // Qutining balandligi 30px
                    fontSize: "12px", // Matn o'lchami kichik
                    marginTop: "5px",
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      height: "30px", // Input qutisining balandligi
                      fontSize: "12px", // Ichki matn o'lchami kichik
                      padding: "0 8px", // Ichki bo'shliqni moslash
                      "& fieldset": {
                        borderRadius: "12px", // Burchak radiusini moslashtirish
                      },
                    },
                  }}
                  InputProps={{
                    sx: {
                      height: "30px", // Ichki input balandligini sozlash
                      padding: "0 8px", // Ichki bo'shliqni sozlash
                      fontSize: "12px", // Matn o'lchamini kichik qilish
                    },
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item="true" xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth>
                <label>Select category</label>
                <Select
                  value={category}
                  variant="outlined"
                  fullWidth
                  color="secondary"
                  onChange={(e)=>{setCategory(e.target.value)}}
                  sx={{
                    padding: 0, // Ichki bo'shliqni olib tashlash
                    borderRadius: 8, // Burchak radiusi 8px
                    height: 30, // Qutining balandligi 30px
                    fontSize: "12px", // Matn o'lchami kichik
                    backgroundColor: "white",
                    marginTop: "5px",
                    "& .MuiOutlinedInput-root": {
                      height: "30px", // Select qutisining balandligi
                      fontSize: "12px", // Ichki matn o'lchami kichik
                      padding: "0 8px", // Ichki bo'shliqni moslash
                      "& fieldset": {
                        borderRadius: "8px", // Burchak radiusini moslashtirish
                      },
                    },
                    "& .MuiSelect-select": {
                      padding: "4px 8px", // Ichki bo'shliqni sozlash
                    },
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        maxHeight: 200, // Dropdownning maksimal balandligi
                        "& .MuiMenuItem-root": {
                          fontSize: "12px", // Menu itemlarining matn o'lchami kichik
                          padding: "4px 8px", // Menu itemlarining ichki bo'shligi kichik
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value={"all"}>all</MenuItem>
                  <MenuItem value={"Tables"}>Tables</MenuItem>
                  <MenuItem value={"Chairs"}>Chairs</MenuItem>
                  <MenuItem value={"Kids"}>Kids</MenuItem>
                  <MenuItem value={"Sofas"}>Sofas</MenuItem>
                  <MenuItem value={"Beds"}>Beds</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item="true" xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth>
                <label>Select Company</label>
                <Select
                  id="company"
                  value={company}
                  variant="outlined"
                  fullWidth
                  color="secondary"
                  onChange={(e)=>{setCompany(e.target.value)}}
                  sx={{
                    padding: 0, // Ichki bo'shliqni olib tashlash
                    borderRadius: 8, // Burchak radiusi 8px
                    height: 30, // Qutining balandligi 30px
                    fontSize: "12px", // Matn o'lchami kichik
                    backgroundColor: "white",
                    marginTop: "5px",
                    "& .MuiOutlinedInput-root": {
                      height: "30px", // Select qutisining balandligi
                      fontSize: "12px", // Ichki matn o'lchami kichik
                      padding: "0 8px", // Ichki bo'shliqni moslash
                      "& fieldset": {
                        borderRadius: "8px", // Burchak radiusini moslashtirish
                      },
                    },
                    "& .MuiSelect-select": {
                      padding: "4px 8px", // Ichki bo'shliqni sozlash
                    },
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        maxHeight: 200, // Dropdownning maksimal balandligi
                        "& .MuiMenuItem-root": {
                          fontSize: "12px", // Menu itemlarining matn o'lchami kichik
                          padding: "4px 8px", // Menu itemlarining ichki bo'shligi kichik
                        },
                      },
                    },
                  }}
                >
                  <MenuItem value={"all"}>all</MenuItem>
                  <MenuItem value={"Modenza"}>Modenza</MenuItem>
                  <MenuItem value={"Luxora"}>Luxora</MenuItem>
                  <MenuItem value={"Artifex"}>Artifex</MenuItem>
                  <MenuItem value={"Comfora"}>Comfora</MenuItem>
                  <MenuItem value={"Homestead"}>Homestead</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item="true" xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth>
                <label>Select By</label>
                <Select
                  id="sort"
                  value={sort}
                  variant="outlined"
                  fullWidth
                  color="secondary"
                  onChange={(e)=>{setSort(e.target.value)}}
                  sx={{
                    padding: 0, // Ichki bo'shliqni olib tashlash
                    borderRadius: 8, // Burchak radiusi 8px
                    height: 30, // Qutining balandligi 30px
                    fontSize: "12px", // Matn o'lchami kichik
                    backgroundColor: "white",
                    marginTop: "5px",

                    "& .MuiOutlinedInput-root": {
                      height: "30px", // Select qutisining balandligi
                      fontSize: "12px", // Ichki matn o'lchami kichik
                      padding: "0 8px", // Ichki bo'shliqni moslash
                      "& fieldset": {
                        borderRadius: "8px", // Burchak radiusini moslashtirish
                      },
                    },
                    "& .MuiSelect-select": {
                      padding: "4px 8px", // Ichki bo'shliqni sozlash
                    },
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        maxHeight: 200, // Dropdownning maksimal balandligi
                        "& .MuiMenuItem-root": {
                          fontSize: "12px", // Menu itemlarining matn o'lchami kichik
                          padding: "4px 8px", // Menu itemlarining ichki bo'shligi kichik
                        },
                      },
                    },
                  }}
                >
                  <MenuItem selected value={"a-z"}>
                    a-z
                  </MenuItem>
                  <MenuItem value={"z-a"}>z-a</MenuItem>
                  <MenuItem value={"high"}>high</MenuItem>
                  <MenuItem value={"low"}>low</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item="true" xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <label>Select Price</label>
                  <span>{priceValue}</span>
                </div>
                <Box>
                  <Slider
                    color="secondary"
                    valueLabelDisplay="auto"
                    onChange={handleChange}
                    min={0}
                    max={1000}
                    step={10}
                    value={priceValue}
                    sx={{
                      "& .MuiSlider-track": {
                        color: "#057aff", // Track (progress chizig'i) rangi
                        height: 15,
                      },
                      "& .MuiSlider-thumb": {
                        color: "white", // Thumb (tugma) rangi
                        outline: "3px solid #057aff",
                        width: 12,
                        height: 12,
                      },
                      "& .MuiSlider-rail": {
                        color: "#b9babb", // Rail (to'ldirilmagan qism) rangi
                      },
                    }}
                  />
                </Box>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <label>0</label>
                  <span>Max: 1,000.00</span>
                </div>
              </FormControl>
            </Grid>

            <Grid item="true" xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth>
                <span style={{ display: "block", textAlign: "center" }}>
                  Free Shipping
                </span>
                <Checkbox defaultChecked />
              </FormControl>
            </Grid>

            <Grid item="true" xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth>
                <Button
                  color="primary"
                  size="small"
                  sx={{
                    borderRadius: 2
                  }}
                  variant="contained"
                >
                  SEARCH
                </Button>
              </FormControl>
            </Grid>

            <Grid item="true" xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth>
                <Button
                  size="small"
                  sx={{
                    borderRadius: 2,
                    backgroundColor: "#c149ad",
                    ":hover": {
                      backgroundColor: "#a206ad"
                    }
                  }}
                  variant="contained"
                >
                  RESET
                </Button>
              </FormControl>
            </Grid>

          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
