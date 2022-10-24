import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Box, Button, MenuItem, Stack, TextField, Typography } from '@mui/material';
import { currencies } from '../../constants/currencies';

const New_Planet = () => {
    const [submitted, setSubmitted] = useState(false)
    const [jsonData, setJsonData] = useState(false)
    const RegisterSchema = Yup.object().shape({
        planet_name: Yup.string().min(16, 'Min length is 16 symbols').max(50, 'Min length is 50 symbols').required('Required'),
        galaxy_name: Yup.string().required('Required'),
        diameter: Yup.string().required('Required'),
        distance: Yup.string().required('Required'),
        name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
        email: Yup.string().email('Email is not valid').required('Required'),
    });

    const formik = useFormik({
        initialValues: {
            planet_name: '',
            galaxy_name: 'Galaxy Name',
            diameter: '',
            distance: '',
            name: '',
            email: ''
        },
        validationSchema: RegisterSchema,
        onSubmit: values => {
            setJsonData(JSON.stringify(values, null, 2))
            alert(JSON.stringify(values, null, 2));
            setSubmitted(true)
        },
    });

    const { errors, touched, handleSubmit, getFieldProps } = formik;

    return (
        <Box mt={4} sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center"
        }}>
            <Stack spacing={2}
                sx={{
                    width: "45%",
                }}
            >
                <Stack spacing={1}>
                    {submitted && <Box className='alert-success'><Typography>Good job, form has been successfully submitted!</Typography></Box>}
                    <TextField
                        placeholder='Planet Name'
                        size='small'
                        type="text"
                        {...getFieldProps('planet_name')}
                        error={Boolean(touched.planet_name && errors.planet_name)}
                        helperText={touched.planet_name && errors.planet_name}
                    />
                    <TextField
                        size='small'
                        select
                        displayEmpty
                        defaultValue="Galaxy Name"
                        {...getFieldProps('galaxy_name')}
                        error={Boolean(touched.galaxy_name && errors.galaxy_name)}
                        helperText={touched.galaxy_name && errors.galaxy_name}
                    >
                        <MenuItem disabled={true} value="Galaxy Name">
                            Galaxy Name
                        </MenuItem>
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        placeholder="Diameter (km)"
                        size='small'
                        type="number"
                        {...getFieldProps('diameter')}
                        error={Boolean(touched.diameter && errors.diameter)}
                        helperText={touched.diameter && errors.diameter}
                    />

                    <TextField
                        placeholder="Distance (mln km)"
                        size='small'
                        type="number"
                        {...getFieldProps('distance')}
                        error={Boolean(touched.distance && errors.distance)}
                        helperText={touched.distance && errors.distance}
                    />
                </Stack>
                <Stack spacing={1}>
                    <TextField
                        placeholder="Your Name"
                        size='small'
                        {...getFieldProps('name')}
                        error={Boolean(touched.name && errors.name)}
                        helperText={touched.name && errors.name}
                    />
                    <TextField
                        placeholder="Email"
                        size='small'
                        {...getFieldProps('email')}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                    />
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="center"
                >
                    <Button
                        sx={{
                            padding: "5px 30px"
                        }}
                        variant='outlined'
                        type='submit'
                        onClick={handleSubmit}
                    >Submit</Button>
                </Stack>
                {submitted && <Box className='alert-success'><Typography>{jsonData}</Typography></Box>}
            </Stack>
        </Box>
    );
};

export default New_Planet


