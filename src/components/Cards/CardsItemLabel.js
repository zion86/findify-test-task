const CardsItemLabel = ({ sale, price }) => {
  const priceRounded = Math.round(price);
  const discount = Math.floor((sale - priceRounded) / (sale / 100));

  return (
    <div className="Cards__label">
      <span className="Cards__item--label Cards__item--discount">{ discount } % OFF</span>
      <span className="Cards__item--label Cards__item--sale">SALE</span>
    </div>
  );
};

export default CardsItemLabel;