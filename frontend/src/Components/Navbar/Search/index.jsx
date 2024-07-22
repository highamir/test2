
import { Input, Box, TextField, Stack } from "@mui/material";
import React, { useState } from "react";

export default function Search() {
  const [products,setProducts]=useState(null)
  const handleChange=()=>{


  }

  
  return (
    <Box mx={'20px'} position={'relative'}>
      <TextField
      onChange={handleChange}
      placeholder="search"
      variant="outlined"
       
        sx={{
          height:'40px',
          backgroundColor: "white",
          borderRadius: "15px",
          border:'none',
          '&>div':{
            height:'40px'
          }
        
        }}
      />
         <Stack sx={{
          position:'absolute',
          top:'100%',
          height:''

         }}>

         </Stack>
    </Box>
  );
}
