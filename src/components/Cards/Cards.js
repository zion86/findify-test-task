import CardsItem from './CardsItem';

import './Cards.css';

const Cards = ({ items }) => {
  return (
    <section className='Cards'>
      <ul className='Cards__list'>
        { items?.map((card) => <CardsItem key={ card.title } { ...card } />) }
      </ul>
    </section>
  );
};

export default Cards;