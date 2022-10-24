import { Box } from '@mui/system'
import React from 'react'
import NasaImg from "../../images/pia21421-cr.jpg"

const Home = () => {
  return (
    <Box 
        sx={{
            marginTop: "20px",
            padding: 0,
            width: "100%",
            height: "100%"
        }}
    >
        <img style={{width:"100%", height: "100%"}} src={NasaImg}  alt="Nasaimg" />
    </Box>
  )
}

export default Home