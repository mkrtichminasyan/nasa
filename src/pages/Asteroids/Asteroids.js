import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import { Box, Button, Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import moment from "moment";
import axios from 'axios'
import { dataConvert } from '../../helper/dataConvert';
import CustomTable from '../../components/CustomTable';

const Asteroids = () => {
  const [data, setDate] = useState([])
  const [loading, setLoading] = useState(false)
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const start = moment(startDate);
    const end = moment(endDate);
    if (start.diff(end, 'days') > 7 || start.diff(end, 'days') < -7) {
      setErrorMessage('Range should not exceed 1 week')
    } else {
      setErrorMessage('')
    }
  }, [startDate, endDate])

  const hanldeGetData = () => {
    if (startDate && endDate) {
      const startDateFrmat = moment(startDate).format('YYYY-MM-DD')
      const endDateFormat = moment(endDate).format('YYYY-MM-DD')
      setLoading(true)
      axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDateFrmat}&end_date=${endDateFormat}&api_key=573cUUcMGssr0HUH9lnrDw9i7Q4kGciCZ7fuqGbx`, {
        start_date: startDateFrmat,
        end_date: endDateFormat,
        api_key: '573cUUcMGssr0HUH9lnrDw9i7Q4kGciCZ7fuqGbx'
      })
        .then((res) => setDate(dataConvert(res.data.near_earth_objects))).finally(() => {
          setLoading(false)
        })
    }
  }

  const onChangeStart = (date) => setStartDate(date)
  const onChangeEnd = (date) => setEndDate(date)
  return (
    <Box sx={{
      textAlign: "center",
      width: "100%"
    }}>
      <Typography variant='body2'
        sx={{
          margin: "20px 0"
        }}
      >
        Search for Asteroids based on their closest approach date to Earth
      </Typography>

      <Box sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center"
      }}>
        <Box display="flex">
          <Box className='start-date' >
            <DatePicker
              selected={startDate}
              onChange={onChangeStart}
              dateFormat="dd MMMM yyyy"
            />
          </Box>
          <Box className='end-date'>
            <DatePicker
              selected={endDate}
              onChange={onChangeEnd}
              dateFormat="dd MMMM yyyy"
            />
          </Box>
        </Box>
        <Button variant="outlined" size='small'
          sx={{
            color: "black",
            borderColor: "gray",
            marginLeft: "20px",
            padding: "3px 10px",
            borderRadius: "10px"
          }}
          onClick={hanldeGetData}
        >
          GO
        </Button>

      </Box>
      {
        loading &&
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', mt: 2, ml: 1 }}>
          <CircularProgress size={40} />
        </Box>
      }
      {errorMessage ? <Box className='error-alert'>
        {errorMessage}
      </Box> : null}

      <Box mt="70px" sx={{
        width: '100%',
        display: "flex",
        justifyContent: "center"
      }}>
        <Box sx={{
          width: '70%',
        }}>
          {data.length ? <CustomTable rows={data} /> : null}
        </Box>
      </Box>
    </Box>
  )
}

export default Asteroids