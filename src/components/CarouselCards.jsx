import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Card from './Card';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 2000 },
    items: 5,
  },
  desktoplarge: {
    breakpoint: { max: 2000, min: 1500 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1500, min: 900 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1125, min: 900 },
    items: 2,
  },
  phone: {
    breakpoint: { max: 900, min: 800 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 800, min: 670 },
    items: 2,
  },
  smobile: {
    breakpoint: { max: 670, min: 0 },
    items: 1,
  },
};
/**
 * Component for render  all {@link Card} in Carousel

 * @component
 * @name
 * CarouselCards
 * @example
 * return (
 *   <CarouselCards  />
 * )
 */
export default function CarouselCards({data, productname}) {
  return (
    <Box  sx={{backgroundColor: 'black', borderRadius: '15px', padding:2, marginTop:3 }} >
      <Carousel responsive={responsive}>
        {
          data.filter(product => product.product_name===productname)
            .map((product) => (
              <div key={Math.random()}> <Card 
                name={product.product_name}
                brand={product.brand_name}
                price={product.price}
                date={product.date}
                location={product.address}
                discription={product.discription}
                image={product.image}
              /> </div>
            ))
         }
      </Carousel>
    </Box>
  );
}

CarouselCards.propTypes = {
  data:PropTypes.arrayOf( PropTypes.shape({
    product_name:PropTypes.string.isRequired,
    brand_name:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    address: PropTypes.shape({
      state: PropTypes.string.isRequired, city: PropTypes.string.isRequired,
    }).isRequired,
    discription:PropTypes.string.isRequired,
    date:PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
  }).isRequired),
  productname: PropTypes.string.isRequired,
};