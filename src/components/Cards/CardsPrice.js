const CardsPrice = ({ sale, price }) => {
  const priceRounded = Math.round(price);

  return (
    <>
      {
        sale
          ? <p className="Cards__price"><span className="Cards__price--sale">$ { sale }</span>$ { priceRounded }</p>
          : <p className="Cards__price">$ { priceRounded }</p>
      }
    </>
  )
};

export default CardsPrice;