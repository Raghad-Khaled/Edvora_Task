import React, { useState, useEffect } from 'react';
import CarouselCards from './CarouselCards';
import Filters from './Filters';
import ReactLoading from 'react-loading';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



function HomePage() {

  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch('https://assessment-edvora.herokuapp.com/')
      response = await response.json()
      setData(response)
      setFData(response)
    }

    fetchMyAPI()
  }, [])

  const [Fdata, setFData] = useState([]);

   console.log(data);
   const products = Fdata.map(function (product) { return product.product_name; });
   let fproducts = products.filter((element, index) => {
    return products.indexOf(element) === index;
   });
   console.log(fproducts)


   const [Product, setProduct] = React.useState('');

   const handleproduct = (event) => {
    setProduct(event.target.value);
    const filtereddata = data.filter( product => ( (product.product_name===event.target.value || event.target.value==='')&&
       (State==='' || product.address.state===State ) && (City==='' || product.address.city===City )  )   )
    setFData(filtereddata)
   };
 
   const [State, setState] = React.useState('');

   const handlestate = (event) => {
    setState(event.target.value);
    const filtereddata = data.filter( (product => (product.product_name===Product || Product==='') &&
      (product.address.state===event.target.value || event.target.value==='' ) && (City==='' || product.address.city===City )  )   )
   setFData(filtereddata)
   };

   const [City, setCity] = React.useState('');

   const handlecity = (event) => {
    setCity(event.target.value);
    const filtereddata = data.filter( (product => (product.product_name===Product || Product==='') &&
    ( State==='' || product.address.state===State) && ( product.address.city===event.target.value || event.target.value==='')  )   )
    setFData(filtereddata)
   };
   
    return (
      <>
      {data? 
      (<Box sx={{ margin: 3}}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={2}  >
          <Filters Products={Product} handleproducts={handleproduct} States={State} handlestate={handlestate} Cities={City} handlecity={handlecity} data={Fdata} />
        </Grid>
        <Grid item xs={12} md={10} >
          <h1>Edvora</h1>
          <h2 style={{ color:'#f0f8ff82' }} >Products</h2>
          {fproducts.length!==0? ( fproducts.map(product=>(
          <div key={Math.random()}>
          <h3>{product}</h3>
          <Box sx={{borderTop: 1, borderColor: 'grey.700' }}>
          <CarouselCards data={Fdata} productname={product}/>
          </Box>
          </div>
          ) )
          ):(<h2>No Results</h2>)
          }
        </Grid>
      </Grid>
      </Box>): (<Box style={{ marginLeft: '42%', marginTop: '10%' }}><ReactLoading type="bars" color="#fff" width={150} /></Box>) }
      </>
    )
}




export default HomePage;