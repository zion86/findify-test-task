import CardsItem from './CardsItem';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';

import './Cards.css';

const Cards = ({ items }) => {
  return (
    <section className='Cards'>
      <BreadCrumbs />
      <ul className='Cards__list'>
        { items?.map((card, i) => <CardsItem key={ card.title + i } { ...card } />) }
      </ul>
    </section>
  );
};

export default Cards;