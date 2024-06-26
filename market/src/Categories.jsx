import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function VariantButtonGroup() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="Basic button group">
                <Button>Food</Button>
                <Button>Clothes</Button>
                <Button>Kids</Button>
                <Button>Phones</Button>
                <Button>Devices</Button>
                <Button>Electric Lamps</Button>
                <Button>Groccery</Button>
                <Button>Beaf</Button>
                <Button>Credit</Button>
                <Button>For You</Button>
                <Button>Purses</Button>
                <Button>Owe</Button>
                <Button>Toys</Button>
                <Button>Subscribe</Button>
      </ButtonGroup>
    </Box>
  );
}