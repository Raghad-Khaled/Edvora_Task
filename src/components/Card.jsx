import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

/**
 * Component for render tag with its name and two images and the blog can follow that tag
 * that use in {@link CarouselCards}
 * @component
 * @name
 * FollowCard
 * @example
 * return (
 *   <FollowCard image1="book1.com" image2="book2.com" tag="book" />
 * )
 */

export default function Card({
  name, prand, price, date, location, discription,image
}) {
  const margin={marginBottom: '10px' }
  const cmargin= {marginBottom: '10px', color:'#f0f8ff82' }

  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 1,
          width: 260,
          height: 190,
          p: 2,
        },
      }}
    >
      <Paper style={{ backgroundColor:  '#232323' , margin: 'auto', color:'white' }} elevation={3}>
      <Grid container spacing={2}>
      <Grid item xs={6}  >
               <ImageList sx={{
                borderRadius: 1, mt: 0.5
              }}
              >
                <ImageListItem>
                  <img
                    src={image}
                    alt="Cardimage"
                    style={{ width: '80px', height: '80px', marginBottom:'10px' }}
                  />
                </ImageListItem>
              </ImageList>
        <div style={cmargin} >{location.state},
        <br/>
        {location.city}
        </div> 
        </Grid>
        <Grid item xs={6} >
          <div style={margin}> {name} </div>
          <div style={cmargin}>{prand} </div>
          <div style={margin}> $ {price}</div>
          <div style={cmargin}> date: {date.slice(0,10)}</div>
          </Grid> 
        </Grid>
        <div style={cmargin}> {discription} </div>
      </Paper>
    </Box>
  );
 

}

