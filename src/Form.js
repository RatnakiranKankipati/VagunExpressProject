
import {
    Box,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Input,
    Slider,
    Stack,
    InputLabel,
    Typography,
    MenuItem, Select, TextField
} from "@mui/material";
import "./styles.css"
import { useState } from "react";
import { useGlobalcontext } from "./context";
export const Interface = () => {
    const {formData,setFormData,change,setChange}=useGlobalcontext()
    
    // const { tableWidth, setTableWidth, legs, setLegs, legsColor, setLegsColor } =
    //   useConfigurator();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
     
        const numericValue = value === '' || isNaN(Number(value)) ? 0 : Number(value);
       
        setFormData({
            ...formData, 
            [name]: numericValue, 
        });
        setChange(!change)
        
        
    };

    return (
        <Box
            sx={{
                position: "absolute",
                top: 0,
                right: 0,
            }}
            p={3}
        >
            <Stack spacing={3}>

                <Box className="glass" p={3}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {/* <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <FormLabel style={{ margin: "0" }}>Table width</FormLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" />
                        </div> */}
                        <div variant="standard" style={{ display: "flex", gap: "10px", justifyContent: "space-between", alignItems: "center" }}>
                            <FormLabel style={{ color: "black", fontSize: '14px', margin: "0" }}>Diameter </FormLabel>
                            <TextField
                                id="standard-select-currency-native"
                                select
                                SelectProps={{
                                    native: true,
                                }}
                                //   defaultValue="EUR"
                                variant="standard"
                                style={{ width: "195px", padding: "0",fontSize:"14px" }}
                                name="diameter"
                                value={formData.diameter}
                                onChange={handleInputChange}
                            >

                                
                                <option value={200}>
                                    200
                                </option>
                                <option value={300}>
                                    300
                                </option>

                            </TextField>
                            {/* <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"

                                label="Age"
                                style={{ width: "195px", height: "30px" }}
        //                         name="diameter"
        // value={formData.diameter}
        // onChange={handleInputChange}
                            >
                                
                                <MenuItem value={0}>0</MenuItem>
                                <MenuItem value={200}>200</MenuItem>
                                <MenuItem value={300}>300</MenuItem>
                            </Select> */}
                        </div>
                        <div variant="standard" style={{ display: "flex", gap: "10px", justifyContent: "space-between", alignItems: "center" }}>
                            <FormLabel style={{ color: "black", fontSize: '14px', margin: "0" }}>Length </FormLabel>
                            <TextField
                                id="standard-select-currency-native"
                                select
                                defaultValue="EUR"
                                SelectProps={{
                                    native: true,
                                }}
                                name="length"
                                value={formData.length}
                                onChange={handleInputChange}
                                variant="standard"
                                style={{ width: "195px", padding: "0",fontSize:"14px" }}
                            >

                                <option value={2000}>
                                    2000
                                </option>
                                <option value={3000}>
                                    3000
                                </option>
                                <option value={4000}>
                                    4000
                                </option>
                                <option value={5000}>
                                    5000
                                </option>
                                <option value={6000}>
                                    6000
                                </option>
                                <option value={7000}>
                                    7000
                                </option>
                                <option value={8000}>
                                    8000
                                </option>
                                <option value={9000}>
                                    9000
                                </option>
                                <option value={10000}>
                                    10000
                                </option>
                                <option value={11000}>
                                    11000
                                </option>
                                <option value={12000}>
                                    12000
                                </option>
                            </TextField>
                        </div>
                        <div variant="standard" style={{ display: "flex", gap: "10px", justifyContent: "space-between", alignItems: "center" }}>
                            <FormLabel style={{ color: "black", fontSize: '14px', margin: "0" }}>Inlet Qty</FormLabel>
                            <TextField
                                id="standard-select-currency-native"
                                select
                                defaultValue="EUR"
                                SelectProps={{
                                    native: true,
                                }}
                                name="inletqty"
                                value={formData.inletqty}
                                onChange={handleInputChange}
                                variant="standard"
                                style={{ width: "195px", padding: "0" ,fontSize:"14px"}}

                            >

                                <option value={0}>
                                    0
                                </option>
                                <option value={1}>
                                    1
                                </option>
                                <option value={2}>
                                    2
                                </option>
                                <option value={3}>
                                    3
                                </option>

                            </TextField>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "space-between" }}>
                            <FormLabel style={{ margin: "0", color: "black", fontSize: '14px' }}>Inlet Position1</FormLabel>
                            <TextField id="my-input" aria-describedby="my-helper-text" style={{ width: "195px", padding: "0" }} InputProps={{ style: { fontSize: "14px" } }}  name="inletp1" value={formData.inletp1} onChange={handleInputChange} variant="standard" />
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "space-between" }}>
                            <FormLabel style={{ margin: "0", color: "black", fontSize: '14px' }}>Inlet Position2</FormLabel>
                            <TextField id="my-input" aria-describedby="my-helper-text" style={{ width: "195px", padding: "0",fontSize:"14px" }} InputProps={{ style: { fontSize: "14px" } }} name="inletp2" value={formData.inletp2 } onChange={handleInputChange} variant="standard" />

                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "space-between" }}>
                            <FormLabel style={{ margin: "0", color: "black", fontSize: '14px' }}>Inlet Position3</FormLabel>
                            <TextField id="my-input" aria-describedby="my-helper-text" style={{ width: "195px", padding: "0",fontSize:"14px" }} InputProps={{ style: { fontSize: "14px" } }} name="inletp3" value={formData.inletp3} onChange={handleInputChange} variant="standard" />

                        </div>
                        <div variant="standard" style={{ display: "flex", gap: "10px", justifyContent: "space-between", alignItems: "center" }}>
                            <FormLabel style={{ color: "black", fontSize: '14px', margin: "0" }}>Outlet Qty</FormLabel>
                           
                            <TextField
                                id="standard-select-currency-native"
                                select
                                defaultValue="EUR"
                                variant="standard"
                                SelectProps={{
                                    native: true,
                                }}
                                name="outletqty"
                                value={formData.outletqty}
                                onChange={handleInputChange}
                                style={{ width: "195px", padding: "0" ,fontSize:"14px"}}

                            >

                                <option value={0}>
                                    0
                                </option>
                                <option value={1}>
                                    1
                                </option>
                                <option value={2}>
                                    2
                                </option>
                                <option value={3}>
                                    3
                                </option>

                            </TextField>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "space-between" }}>
                            <FormLabel style={{ margin: "0", color: "black", fontSize: '14px' }}  >Outlet Position1</FormLabel>

                            <TextField id="my-input" aria-describedby="my-helper-text" style={{ width: "195px", padding: "0",fontSize:"14px" }} InputProps={{ style: { fontSize: "14px" } }} variant="standard" name="outletp1" value={formData.outletp1} onChange={handleInputChange}/>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "space-between" }}>
                            <FormLabel style={{ margin: "0", color: "black", fontSize: '14px' }}  >Outlet Position2</FormLabel>
                            <TextField id="my-input" aria-describedby="my-helper-text" style={{ width: "195px", padding: "0",fontSize:"14px" }} InputProps={{ style: { fontSize: "14px" } }} name="outletp2" variant="standard" value={formData.outletp2} onChange={handleInputChange}/>

                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "space-between" }}>
                            <FormLabel style={{ margin: "0", color: "black", fontSize: '14px' }}>Outlet Position3</FormLabel>
                            <TextField id="my-input" aria-describedby="my-helper-text" style={{ width: "195px", padding: "0",fontSize:"14px" }} InputProps={{ style: { fontSize: "14px" } }} name="outletp3" variant="standard" value={formData.outletp3} onChange={handleInputChange}/>

                        </div>
                    </div>


                </Box>
                {/* <Box className="glass" p={3}>
            <FormControl>
              <FormLabel>Legs Layout</FormLabel>
              <RadioGroup
              // value={legs}
              // onChange={(e) => setLegs(parseInt(e.target.value))}
              >
                <FormControlLabel
                  value={0}
                  control={<Radio />}
                  label="Standard"
                />
                <FormControlLabel value={1} control={<Radio />} label="Solid" />
                <FormControlLabel value={2} control={<Radio />} label="Design" />
              </RadioGroup>
            </FormControl>
          </Box> */}
                {/* <Box className="glass" p={3}>
            <FormControl>
              <FormLabel>Legs Color</FormLabel>
              <RadioGroup
              // value={legsColor}
              // onChange={(e) => setLegsColor(e.target.value)}
              >
                <FormControlLabel
                  value={"#777777"}
                  control={<Radio />}
                  label="Black"
                />
                <FormControlLabel
                  value={"#ECECEC"}
                  control={<Radio />}
                  label="Chrome"
                />
                <FormControlLabel
                  value={"#C9BD71"}
                  control={<Radio />}
                  label="Gold"
                />
                <FormControlLabel
                  value={"#C9A3B9"}
                  control={<Radio />}
                  label="Pink Gold"
                />
              </RadioGroup>
            </FormControl>
          </Box> */}
            </Stack>
        </Box>
    );
};