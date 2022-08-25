import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "../assets/header.css";

const Header = () => {

    return (
        <>
        <Stack direction="row" spacing={5}>
        <div className="heading-style">
           Vehicle List
        </div>
        <div className="btn">
        <Button  variant="contained">+  Add Vehicle</Button>
        </div>
        </Stack>
</>
    )

}



export default Header;