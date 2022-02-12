import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Card from './Card';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktoplarge: {
    breakpoint: { max: 3000, min: 1500 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1500, min: 900 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 900, min: 700 },
    items: 4,
  },
  phone: {
    breakpoint: { max: 700, min: 480 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 2,
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
    <div>
      <Carousel responsive={responsive}>
        {
          data.filter(product => product.product_name===productname)
            .map((product) => (
              <div key={Math.random()}> <Card 
                name={product.product_name}
                prand={product.brand_name}
                price={product.price}
                date={product.date}
                location={product.address}
                discription={product.discription}
                image={product.image}
              /> </div>
            ))
         }
      </Carousel>
    </div>
  );
}
