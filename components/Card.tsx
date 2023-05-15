import Image from "next/image";

const Card = ({
  cardNumber,
  count,
  icon,
  method,
  platform,
  username,
  arrow
}: Card) => {
  return (
    <div className={`card card--${platform}`}>
      <div className="card__platform">
        <Image
          className="card__icon"
          src={icon}
          alt={platform}
          width={20}
          height={20}
        />

        <div className="card__username">{username}</div>
      </div>
      <div className="card__followers">
        <div className="card__count card__count--big">{count}</div>
        <div className="card__label">{method}</div>
      </div>
      <div className={`card__change card__change--${arrow}`}>
        <Image src="/images/icon-up.svg" alt="Up Arrow" width={8} height={4} />
        <div className="card__number">{cardNumber}</div>
      </div>
    </div>
  );
};

export default Card;
