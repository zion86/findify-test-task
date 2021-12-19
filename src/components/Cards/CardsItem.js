import CardsItemLabel from './CardsItemLabel';
import CardsPrice from './CardsPrice';

const CardsItem = ({ title, compare_at: sale, price, image_url: img }) => (
  <li className="Cards__item" key={ title }>
    <a className="Cards__link" href="#!">
      { sale && <CardsItemLabel sale={ sale } price={ price } /> }
      <img className="Cards__image" src={ img } alt={ title } />
      <h3 className="Cards__title">{ title }</h3>
      <CardsPrice sale={ sale } price={ price } />
    </a>
  </li >
);

export default CardsItem;