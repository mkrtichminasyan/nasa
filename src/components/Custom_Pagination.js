import React from 'react';
import { Box, Pagination, PaginationItem } from '@mui/material'

export const Custom_Pagination = ({ count, onChange }) => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center"
        }}>
            <Pagination
                renderItem={(item) => (
                    <PaginationItem
                        components={{
                            last: (props) => <button {...props}>Last</button>,
                            next: (props) => <button {...props}>Next</button>,
                            first: (props) => <button {...props}>First</button>,
                            previous: (props) => <button {...props}>Previous</button>
                        }}
                        {...item}
                    />
                )}
                count={count}
                variant="outlined"
                onChange={onChange}
            />
        </Box>
    )
}