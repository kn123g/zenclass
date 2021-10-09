import { Component } from "react";
import PricingCard from "../PricingCard/PricingCard";
import PricingCardContent from "./PricingCardContent.json";
import "./PricingSection.css";
import "bootstrap/dist/css/bootstrap.min.css";

class PricingSection extends Component {
  render() {
    return (
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {PricingCardContent.PricingCardContent.map((card, i) => {
              console.log(card);
              return <PricingCard content={card} key={i} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default PricingSection;
