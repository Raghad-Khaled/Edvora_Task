import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';



function Filter({Products,handleproducts,States, handlestate, Cities, handlecity , data}) {

    const products = data.map(function (product) { return product.product_name; });
   let fproducts = products.filter((element, index) => {
    return products.indexOf(element) === index;
   });
   console.log(fproducts)

   const states = data.map(function (product) { return product.address.state; });
   let fstates = states.filter((element, index) => {
    return states.indexOf(element) === index;
   });
   console.log(fstates)

   const cities = data.map(function (product) { return product.address.city; });
   let fcities = cities.filter((element, index) => {
    return cities.indexOf(element) === index;
   });
   console.log(fcities)

    return (
      <Box sx={{ minWidth: 120 }}>
          <h2>Filters</h2>
          <Divider light />
      <FormControl fullWidth style={{ marginTop: '10px' }}>
        <InputLabel id="demo-simple-select-label">Products</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Products}
          label="Products"
          onChange={handleproducts}
        >
          <MenuItem key="All" value=''>All</MenuItem>   
          {fproducts.map((product) => (
          <MenuItem key={product} value={product}>{product}</MenuItem>
          ))
          }
        </Select>
      </FormControl>

      <FormControl fullWidth  style={{ marginTop: '10px' }}>
      <InputLabel id="demo-simple-select-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={States}
          label="State"
          onChange={handlestate}
        >
           <MenuItem key="All" value=''>All</MenuItem>    
          {fstates.map((state) => (
          <MenuItem key={state} value={state}>{state}</MenuItem>
          ))
          }
        </Select>
        </FormControl> 

      <FormControl fullWidth style={{ marginTop: '10px' }}>
      <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Cities}
          label="Cities"
          onChange={handlecity}
        >
          <MenuItem key="All" value=''>All</MenuItem>  
          {fcities.map((city) => (
          <MenuItem key={city} value={city}>{city}</MenuItem>
          ))
          }
        </Select>
        </FormControl> 
    </Box>
    )
}




export default Filter;