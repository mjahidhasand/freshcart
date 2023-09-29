const Card1 = ({ img, title }: ICard1) => {
  return (
    <div>
      <div>
        <img src={img} alt="" />
      </div>
      <span>{title}</span>
    </div>
  );
};

export default Card1;

export interface ICard1 {
  img: string;
  title: string;
}