import CardsItem from './CardsItem';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';

import './Cards.css';

const Cards = ({ items }) => {
  return (
    <section className='Cards'>
      <BreadCrumbs />
      <ul className='Cards__list'>
        { items?.map((card) => <CardsItem key={ card.title } { ...card } />) }
      </ul>
    </section>
  );
};

export default Cards;