// import {Link} from "react-router-dom";
import './Header.css';
import { useEffect, useState, useRef} from "react";
import axios from "axios";
import {backend_base_url} from '../constants/external_api';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


export default function Header(props) {
  const [categories, setCategories] = useState([]);
  const [is_category_search_open, setIsCategorySearchOpen] = useState(false);
  const [search_category_text,setSearchCategoryText] = useState('');
  let debounceSearch = useRef();
  
  useEffect(() => {
    const debounce = function (fn, interval) {
      let timer ;
      return function (search_key) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          fn(search_key);
        }, interval);
      }
    }
    const getCategories = function (search_key){
          axios.get(`${backend_base_url}categories/${search_key}`)
          .then((response)=>{
              setCategories([...response.data.categories]);
          })
          .catch((error)=>{
      
          });
    }

    debounceSearch.current = debounce(getCategories, 300);
    debounceSearch.current('');
    
  }, []);
  
  const selectedCategory =  (e)=>{
    setSearchCategoryText(e.target.innerText);
    closeSearch();
  }
  
  const searchCategory =(search_key)=>{
    debounceSearch.current(search_key);
  }

  const closeSearch=()=>{
    setIsCategorySearchOpen(false);
  }
  const openSearch=(e)=>{
    setIsCategorySearchOpen(true);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Web Scraping
          </Typography>
          
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={search_category_text}
            // onBlur={(e)=>{closeSearch()}}
            onFocus={(e)=>{openSearch()}}
            onChange={(e)=>{searchCategory(e.target.value);setSearchCategoryText(e.target.value); e.preventDefault();}}
            />
            { 
           is_category_search_open ? 
           <div id="autocomplete" className="autocomplete-items" >
                {categories.map((element,index)=>{
                    return (
                            <div  className="p-2" 
                                  onClick={selectedCategory} 
                                  key={index}
                                  style={{color:'black'}}>
                                    {element.name}
                                  <br/>
                            </div>
                )})}
            </div>
            : null}
            
          <Button style={{color:'white'}} onClick={()=>props.searchHandle(search_category_text)}>Search</Button>
          </Search>            
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}