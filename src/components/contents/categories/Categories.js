import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { borderRadius } from '@mui/system';

function Categories() {
    return (
      <>
      <Stack spacing={12} direction="column">
        <Stack spacing={12} direction="row">
        <Button variant="contained" endIcon={<RemoveCircleIcon />}>DECREMENT</Button>
        <Button variant="contained" color='secondary' sx={{ borderRadius: "50px" }}>Count</Button>
        <Button variant="outlined" startIcon={<AddCircleIcon />}>INCREMENT</Button>
      </Stack>
      <Button variant="outlined" sx={{ width: "150px" }} startIcon={<AddCircleIcon />}>SHOW ICON</Button>
      </Stack>
      </>
    );
}

export default Categories;