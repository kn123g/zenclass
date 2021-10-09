import { Component } from 'react';
import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavSection from './NavSection/NavSection';
import Header from './Header/Header';
import ProductsSection from './ProductsSection/ProductsSection';
import Footer from './Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {cardProductTotal:0}
  }
  incrementCardHandle = ()=>{
    this.setState({cardProductTotal:this.state.cardProductTotal + 1})
  }
  decrementCardHandle=()=>{
    this.setState({cardProductTotal:this.state.cardProductTotal - 1})
  }
  render(){
    return (
      <>
      <NavSection cardProductTotal={this.state.cardProductTotal}/>
      <Header/>
      <ProductsSection incrementCard={this.incrementCardHandle} decrementCard={this.decrementCardHandle}/>
      <Footer/>
      </>
    )
  }
    
}

export default App;
