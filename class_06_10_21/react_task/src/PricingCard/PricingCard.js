import { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.css";

class PricingCard extends Component {
  render() {
    return (
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">
              {this.props.content.title}
            </h5>
            <h6 class="card-price text-center">
              <span>{this.props.content.pricing.currency}</span>
              {this.props.content.pricing.price}
              <span class="period">/{this.props.content.pricing.duration}</span>
            </h6>
            <hr />
            <ul class="fa-ul">
              {this.props.content.details.map((li) => {
                return (
                  <li className={li.apply ? null : "text-muted"}>
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
            <div class="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PricingCard;
