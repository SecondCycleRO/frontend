import React, { useState } from 'react';
import { Box, Slider, Typography } from '@mui/material';

export const FiltersBar: React.FC = () => {
  const [priceRange, setPriceRange] = useState();

  const handlePriceChange = () => {};

  return (
    <Box sx={{ width: 300, margin: '0 auto', padding: '1rem' }}>
      <Typography id="range-slider" gutterBottom>
        Price range
      </Typography>
      <Slider
        value={priceRange}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
    </Box>
  );
};
