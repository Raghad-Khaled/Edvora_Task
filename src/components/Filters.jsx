import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  select: {
      '&:before': {
          backgroundColor: '#232323',
          padding:10,
          borderRadius:"4.6px",
          },
      '&:after': {
          borderColor: '#232323',
          padding:'5px',
      },
      '&:not(.Mui-disabled):hover::before': {
        borderColor: '#232323',
    },
  },
  label: {
    color: "white",
    marginBottom:"10px",
    "&.Mui-focused": {
      color: "white",
  },
  },
  icon: {
      fill: 'white',
  },
  root: {
      color: 'white',
  },
 })




function Filters({Products,handleproducts,States, handlestate, Cities, handlecity , data}) {
   /*to get array unique of products */
    const products = data.map(function (product) { return product.product_name; });
   let fproducts = products.filter((element, index) => {
    return products.indexOf(element) === index;
   });

    /*to get array unique of states */
   const states = data.map(function (product) { return product.address.state; });
   let fstates = states.filter((element, index) => {
    return states.indexOf(element) === index;
   });
   
   /*to get array unique of cities */
   const cities = data.map(function (product) { return product.address.city; });
   let fcities = cities.filter((element, index) => {
    return cities.indexOf(element) === index;
   });
   console.log(fcities)
   const margin={ marginTop: '20px' };
   const centered={ marginLeft: 10,top:"50%",transform:"translate(0,-50%" }
   const classes = useStyles()


    return (
      <Box sx={{ minWidth: 75, backgroundColor: 'black', borderRadius: '15px', padding:3, marginTop:3 }}>
          <h3 style={{ color:'#f0f8ff82' }}>Filters</h3>
      <Box sx={{borderTop: 1, borderColor: 'grey.700'}}>    
        <FormControl fullWidth style={margin} >
          <InputLabel id="demo-simple-select-label1"  style={centered}  className={classes.label}>{Products===''? "Products": Products }</InputLabel>
          <Select
            value={Products}
            className={classes.select}
            inputProps={{
                classes: {
                    icon: classes.icon,
                    root: classes.root,
                },
            }}
            labelId="demo-simple-select-label1"
            id="demo-simple-select"
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

        <FormControl fullWidth  style={margin}>
        <InputLabel id="demo-simple-select-label2" style={centered} className={classes.label}>{States===''? "state": States }</InputLabel>
          <Select
            className={classes.select}
            inputProps={{
                classes: {
                    icon: classes.icon,
                    root: classes.root,
                },
            }}
            labelId="demo-simple-select-label2"
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

        <FormControl fullWidth style={margin}>
        <InputLabel id="demo-simple-select-label3" style={centered} className={classes.label} >{Cities===''? "City": Cities}</InputLabel>
          <Select
            className={classes.select}
            inputProps={{
                classes: {
                    icon: classes.icon,
                    root: classes.root,
                },
            }}
            labelId="demo-simple-select-label3"
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
    </Box>
    )
}

Filters.propTypes = {
  Products:PropTypes.string.isRequired,
  handleproducts:PropTypes.func.isRequired,
  States:PropTypes.string.isRequired,
  handlestate: PropTypes.func.isRequired,
  Cities:PropTypes.string.isRequired,
  handlecity:PropTypes.func.isRequired,
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
};




export default Filters;