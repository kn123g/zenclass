import './App.css';
import Header from './components/Header'
import ProductCard from './components/ProductCard/ProductCard'
import {useState} from 'react'
import axios from 'axios';
import Grid from '@mui/material/Grid';
import {backend_base_url} from './constants/external_api';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';

function App() {
  const [products,setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const searchHandle =(search)=>{
    axios.get(`${backend_base_url}products/${search}`)
    .then((response)=>{
      setProducts(response.data.products)
    })
    .catch(()=>{

    });
    axios.get(`${backend_base_url}countproducts/${search}`)
    .then((response)=>{
      // setProducts(response.data.products)
    })
    .catch(()=>{

    });
  }
  return (
        <>
          <Header searchHandle={searchHandle}/>
          <Grid container spacing={2} mt={7} px={2}>
          {products?.map(product=>{
            return <ProductCard {...product}/>
          })}
          </Grid>
          <Box
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
        }}
      >
         {products.length > 0 ? <Pagination count={10} page={page} onChange={handleChange} color="primary" /> : null }
      </Box>
        </>
  )}

export default App;
