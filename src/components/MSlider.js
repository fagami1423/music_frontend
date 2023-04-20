import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';



export default function Mslider(props) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (props.onChange) {
      props.onChange(newValue);
    }
    
  };

  return (
    <Box sx={{ width: 500,textAlign:'left' }}>
      <Typography id="input-slider" gutterBottom >
        {props.title}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider value={value} default={props.default} onChange={handleChange} defaultValue={value} aria-labelledby="input-slider" color="secondary" />
        </Grid>
      </Grid>
      
    </Box>
  );
}