import Image from "next/image";

const CardSigleStatus = ({
  arrow,
  count,
  icon,
  percentage,
  title,
}: CardStatus) => {
  return (
    <div className="card card-grid">
      <div className="card__subtitle">{title}</div>

      <Image
        className="justify-self-end"
        src={icon}
        alt="facebook icon"
        width={20}
        height={20}
      />

      <div className="card__count card__count--small mb-0 self-end">
        {count}
      </div>
      <div
        className={`card__change ${
          arrow == "up" ? "card__change--up" : "card__change--down"
        } justify-self-end self-end`}
      >
        <Image
          className="justify-self-end"
          src={arrow == "up" ? "/images/icon-up.svg" : "/images/icon-down.svg"}
          height={4}
          width={8}
          alt={`arrow ${arrow}`}
        />
        <div className="card__number">{percentage}</div>
      </div>
    </div>
  );
};

export default CardSigleStatus;
