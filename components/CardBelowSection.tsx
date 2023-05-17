import card_status_details from "@/lib/card_status_details";
import React from "react";
import CardSingleStatus from "./CardSingleStatus";

const CardBelowSection = () => {
  return (
    <section className="container">
      <h2>Overview - Today</h2>
      <div className="cards">
        {card_status_details.map((card, index) => (
          <CardSingleStatus key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default CardBelowSection;
