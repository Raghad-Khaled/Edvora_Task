import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import PropTypes from 'prop-types';

/**
 * Component for render Card for each product with its info
 * that use in {@link CarouselCards}
 * @component
 * @name
 * Card
 * @example
 * return (
 *   <Card name="Microsoft inc" brand="Microsoft" date="2012-06-25T00:11:29.171Z" location={"state":"Tamil Nadu","city":"Vadipatti"}
 *  discription:"Its a good product" image="image.png" />
 * )
 */

export default function Card({
  name, brand, price, date, location, discription,image
}) {
  const margin={marginBottom: '10px' }
  const cmargin= {marginBottom: '10px', color:'#f0f8ff82' }

  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 1,
          width: 250,
          height: 190,
          p: 2,
        },
      }}
    >
      <Paper style={{ backgroundColor:  '#232323' , margin: 'auto', color:'white' }} elevation={3}>
      <Grid container spacing={2}>
      <Grid item xs={5}  >
               <ImageList sx={{
                borderRadius: 1, mt: 0.5
              }}
              >
                <ImageListItem>
                  <img
                    src={image}
                    alt="Cardimage"
                    style={{ width: '80px', height: '80px', marginBottom:'10px', borderRadius:'5px' }}
                  />
                </ImageListItem>
              </ImageList>
        <div style={cmargin} >{location.state},
        <br/>
        {location.city}
        </div> 
        </Grid>
        <Grid item xs={7} >
          <div style={margin}> {name} </div>
          <div style={cmargin}>{brand} </div>
          <div style={margin}> $ {price}</div>
          <div style={cmargin}> Date: {date.slice(0,10).replaceAll('-',':')}</div>
          </Grid> 
        </Grid>
        <div style={cmargin}> {discription} </div>
      </Paper>
    </Box>
  );
 

}

Card.propTypes = {

    name:PropTypes.string.isRequired,
    brand:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    location: PropTypes.shape({
      state: PropTypes.string.isRequired, city: PropTypes.string.isRequired,
    }).isRequired,
    discription:PropTypes.string.isRequired,
    date:PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
};

