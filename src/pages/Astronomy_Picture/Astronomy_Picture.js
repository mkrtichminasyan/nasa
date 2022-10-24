import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
import moment from "moment";

const Astronomy_Picture = () => {
    const [date, setDate] = useState(new Date())
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    const hanldeGetData = () => {
        if (date) {
            const dateFormat = moment(date).format('YYYY-MM-DD')
            setLoading(true)
            axios.get(`https://api.nasa.gov/planetary/apod?date=${dateFormat}&api_key=573cUUcMGssr0HUH9lnrDw9i7Q4kGciCZ7fuqGbx`, {
                date: dateFormat,
                api_key: '573cUUcMGssr0HUH9lnrDw9i7Q4kGciCZ7fuqGbx'
            })
                .then((res) => setData(res.data)).finally(() => {
                    setLoading(false)
                })
        }
    }

    return (
        <Box sx={{ display: "flex", justifyContent: "center", mt: "20px", flexDirection: 'column' }}>
            <Typography sx={{ textAlign: 'center' }}>
                Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mt: "20px", flexDirection: 'row', width: '100%' }}>
                <Box>
                    <DatePicker
                        selected={date}
                        onChange={(d) => setDate(d)}
                        dateFormat="dd MMMM yyyy"
                    />
                </Box>
                <Button onClick={hanldeGetData} variant="outlined" size='small' sx={{
                    color: "black",
                    borderColor: "gray",
                    marginLeft: "20px",
                    padding: "3px 10px",
                    borderRadius: "10px"
                }}>
                    GO
                </Button>
            </Box>

            {loading && <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', mt: 2, ml: 1 }}>
                <CircularProgress size={40} />
            </Box>}

            {data ? <Box sx={{ display: "flex", maxWidth: '960px', mt: '30px', margin: '0 auto', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography sx={{ textAlign: 'center', fontSize: '1.25rem', mt: 4, mb: 1 }}>
                    {data.title}
                </Typography>
                <Typography sx={{
                    textAlign: 'center', marginBottom: '1rem', fontSize: '1rem',
                    lineHeight: 1.5,
                    color: '#373a3c'
                }}>
                    {data.explanation}
                </Typography>
                <img alt='nasa' src={data.url} />
            </Box> : null}

        </Box>
    )
}

export default Astronomy_Picture