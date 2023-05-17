import Image from "next/image";

const Card = ({
  cardNumber,
  count,
  icon,
  method,
  platform,
  username,
  arrow,
}: Card) => {
  const classTheme = `${
    platform === "facebook"
      ? "card__facebook"
      : platform === "twitter"
      ? "card__twitter"
      : platform === "instagram"
      ? "card__instagram"
      : "card__youtube"
  }`;

  return (
    <div className={`${classTheme}`}>
      <div className="card">
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
          <Image
            src={`/images/icon-${arrow}.svg`}
            alt={`${arrow} arrow`}
            width={8}
            height={4}
          />
          <div className="card__number">{cardNumber}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
