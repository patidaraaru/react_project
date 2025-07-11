import React from 'react'
import Box from '@mui/material/Box';
import CustomCard from './Card';
import { Grid } from '@mui/material';


const ShopCategory = () => {
  return (
    <>
    <Box sx={{py:5}}>
        <h1>Shop by Category</h1>
         <CustomCard/>
    </Box>
    </>
  )
}

export default ShopCategory
