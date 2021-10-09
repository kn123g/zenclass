import { Component } from "react";
import Product from '../Product/Product';
import {Products} from "./Products.json";

class ProductsSection extends Component {
    incrementCardHandle=()=>{
        this.props.incrementCard()
    }
    decrementCardHandle=()=>{
        this.props.decrementCard()
    }
    render() {
        return (
            <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {
                Products.map((product,index)=>{
                    return <Product key={index} details={product} incrementCard={this.incrementCardHandle} decrementCard={this.decrementCardHandle}/>})
                }
                </div>
            </div>
            </section>
        )
    }
}

export default ProductsSection;