import React, { useState, useEffect } from 'react';
import CarouselCards from './CarouselCards';
import Divider from '@mui/material/Divider';
import Filter from './Filters';
import ReactLoading from 'react-loading';
import Box from '@mui/material/Box';



function App() {

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
      (<div>
      <Filter Products={Product} handleproducts={handleproduct} States={State} handlestate={handlestate} Cities={City} handlecity={handlecity} data={data} />
      {fproducts.length!==0? ( fproducts.map(product=>(
      <div key={Math.random()}>
      <h1>{product}</h1>
      <Divider light />
      <CarouselCards data={Fdata} productname={product}/>
      </div>
       ) )
      ):(<h2>No Results</h2>)
      }
      </div>): (<Box style={{ marginLeft: '42%', marginTop: '10%' }}><ReactLoading type="bars" color="#fff" width={150} /></Box>) }
      </>
    )
}




export default App;