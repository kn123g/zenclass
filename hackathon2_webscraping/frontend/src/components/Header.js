// import {Link} from "react-router-dom";
import './Header.css';
import { useEffect, useState, useRef} from "react";
import axios from "axios";
import {backend_base_url} from '../constants/external_api';

export default function Header() {
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
    <header>
      <nav className="navbar navbar-dark bg-info fixed-top">
        <a href="#!" className="navbar-brand">
          Web Scraping
        </a>
        <form
          className="form-inline col-4"
          onSubmit={(e)=>{e.preventDefault()}}
          autoComplete="off"
        >
          <div className="input-group col-12">
            <div className="input-group-prepend col-3 p-0">
              <span className="input-group-text w-100" id="basic-addon1">
                Search
              </span>
            </div>
            <input type="text" 
            className="form-control col-6" 
            placeholder="" id="search" 
            value={search_category_text}
            // onBlur={(e)=>{closeSearch()}}
            onFocus={(e)=>{openSearch()}}
            onChange={(e)=>{searchCategory(e.target.value);setSearchCategoryText(e.target.value); e.preventDefault();}}
            />
            <div className="input-group col-3 p-0">
              <button
                className="btn btn-success w-100"
                type="submit"
                onClick={searchCategory}
              >
                Search
              </button>
              
            </div>
           { 
           is_category_search_open ? 
           <div id="autocomplete" className="autocomplete-items" >
                {categories.map((element,index)=>{
                    return <div className="p-2" onClick={selectedCategory} key={index}>{element.name}<br/></div>
                })}
            </div>
            : null}
          </div>
        </form>
      </nav>
    </header>
  );
}
