import './App.css';
import Header from './components/Header'
import ProductCard from './components/ProductCard/ProductCard'
import {useState,useEffect} from 'react'
import axios from 'axios';
import Grid from '@mui/material/Grid';
import {backend_base_url} from './constants/external_api';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';

function App() {
  const [products,setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [products_count,setPrductsCount] = useState(0);
  const [search,setSearch] = useState();
  const handleChange = (event, value) => {
    setPage(value);
  };

  const searchHandle =(search_text)=>{
    setSearch(search_text);
    setPage(1);
    axios.get(`${backend_base_url}products/${search_text}/${page}`)
    .then((response)=>{
      setProducts(response.data.products)
    })
    .catch(()=>{

    });
    axios.get(`${backend_base_url}countproducts/${search_text}`)
    .then((response)=>{
      setPrductsCount(response.data.count)
    })
    .catch(()=>{

    });
  }

  useEffect(()=>{
    axios.get(`${backend_base_url}products/${search}/${page}`)
    .then((response)=>{
      setProducts(response.data.products)
    })
    .catch(()=>{

    });
  },[page,search])
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
         {products.length > 0 ? <Pagination count={Math.floor(products_count/12)} page={page} onChange={handleChange} color="primary" /> : null }
      </Box>
        </>
  )}

export default App;
