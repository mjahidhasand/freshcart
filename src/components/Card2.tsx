const Card2 = ({
  img,
  title,
  offer_text,
  quantity,
  discount,
  price,
  main_price,
}: ICard2) => {
  return (
    <div>
      <div>
        <img src={img} alt="" />
        <span>
          <span>{discount}%</span>
          <span>OFF</span>
        </span>
      </div>

      <h4>
        {!offer_text ? (
          title
        ) : (
          <>
            <span>{title}</span>
            <span>({offer_text})</span>
            <span>{quantity}</span>
          </>
        )}
      </h4>
      {quantity && <span>{quantity}</span>}

      <div>
        <span>৳ {price}</span>
        <span>৳ {main_price}</span>
        <button>ADD</button>
      </div>
    </div>
  );
};

export default Card2;

export interface ICard2 {
  img: string;
  title: string;
  offer_text: string;
  quantity: string;
  discount: number;
  price: number;
  main_price: number;
}
