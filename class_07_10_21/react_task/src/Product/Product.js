import { Component } from "react";

class Product extends Component {
constructor(props) {
    super(props);
    this.state = {
        addToCard : true
    }
}
updateCard = ()=>{
    if(this.state.addToCard){
        this.props.incrementCard();
    }else{
        this.props.decrementCard();
    }
    this.setState({addToCard: !this.state.addToCard});
}
render() {
   return (
       <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>{this.props.details.sale ? 'Sale' :null}</div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="product" />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">{this.props.details.name}</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        {
                                         function(){ 
                                             let stars = [];
                                             for(let i=0;i<this.rating;i++){
                                                 stars.push(<div className="bi-star-fill" key={i}></div>);
                                             }
                                             return stars;
                                        }.call(this.props.details)
                                        }   
                                    </div>
                                    {/* <!-- Product price--> */}
                                    {
                                    function(){
                                        if(this.range){
                                            return this.range;
                                        }
                                        else{
                                            if(this.offerPrice){
                                                return (
                                                <>
                                                <span className="text-muted text-decoration-line-through m-1">{this.originalPrice}</span>
                                                {this.offerPrice}
                                                </>)
                                            }
                                            else{
                                                return (this.originalPrice)
                                            }
                                        }
                                    }.call(this.props.details.price)
                                    }
                                    
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                { 
                                this.props.details.price.range ? 
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto"  href="#!">View options</a></div>
                                : 
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" onClick={this.updateCard} href="#!">{this.state.addToCard?'Add to cart':'Remove from Card'}</a></div>
                                }
                            </div>
                        </div>
                    </div>
   )
}
}

export default Product;