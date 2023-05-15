import card_details from "@/lib/card_details";
import Card from "./Card";

const CardSection = () => {
  return (
    <section className="container cards">
      {card_details.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </section>
  );
};

export default CardSection;
