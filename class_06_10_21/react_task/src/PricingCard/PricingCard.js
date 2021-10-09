import { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.css";

class PricingCard extends Component {
  render() {
    return (
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              {this.props.content.title}
            </h5>
            <h6 className="card-price text-center">
              <span>{this.props.content.pricing.currency}</span>
              {this.props.content.pricing.price}
              <span className="period">/{this.props.content.pricing.duration}</span>
            </h6>
            <hr />
            <ul className="fa-ul">
              {this.props.content.details.map((li,index) => {
                return (
                  <li className={li.apply ? null : "text-muted"} key={index}>
                    <span className="fa-li">
                      <i
                        className={li.apply ? "fas fa-check" : "fas fa-times"}
                      ></i>
                    </span>
                    {li.strong ? <strong>{li.content}</strong> : li.content}
                  </li>
                );
              })}
            </ul>
            <div className="d-grid">
              {/* replaced a href with button because while deployment getting no valid href url error */}
              <button className="btn btn-primary text-uppercase">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PricingCard;
