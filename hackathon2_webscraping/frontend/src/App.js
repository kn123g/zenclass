import './App.css';
import Header from './components/Header'
import ProductCard from './components/ProductCard/ProductCard'
import {useState} from 'react'
import axios from 'axios';
import Grid from '@mui/material/Grid';
import {backend_base_url} from './constants/external_api';

function App() {
  const [products,setProducts] = useState([]);
  const searchHandle =(search)=>{
    axios.get(`${backend_base_url}products/${search}`)
    .then((response)=>{
      setProducts(response.data.products)
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
        </>
  )}

export default App;
