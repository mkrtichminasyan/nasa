import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';

const columns = [
    { field: 'name', headerName: 'Title', editable: false, flex: 1 },
    {
        field: 'Distance', editable: false, headerName: 'Distance (km)', flex: 1, renderCell: (params) => {
            return (
                <Box sx={{ marginRight: "50px" }}>
                    {params.row.close_approach_data[0].miss_distance.kilometers}
                </Box>
            )
        }
    },
    { field: 'absolute_magnitude_h', editable: false, headerName: 'Absolute Magnitude', flex: 1 },
    { field: 'is_potentially_hazardous_asteroid', editable: false, headerName: 'Is potentially hazardous', flex: 1, renderCell: (params) => params.row.is_potentially_hazardous_asteroid ? "YES" : "NO" },
    { field: 'Diameter', headerName: 'Diameter (meters)', editable: false, flex: 1, renderCell: (params) => <Typography sx={{ whiteSpace: "pre-wrap", fontSize: '14px' }}>{`${params.row.estimated_diameter.meters.estimated_diameter_min}-${params.row.estimated_diameter.meters.estimated_diameter_max}`}</Typography> },

];

const CustomTable = ({ rows }) => {
    const [page, setPage] = useState(20);
    return (
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={page}
            rowsPerPageOptions={[5, 10, 15, 20]}
            autoHeight
            onPageSizeChange={data => setPage(data)}
        />
    )
}

export default CustomTable
