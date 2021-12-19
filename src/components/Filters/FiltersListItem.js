import { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';

const FiltersListItem = ({ name, values, checkboxClass }) => {
  const [ isOpenTab, setIsOpenTab ] = useState(true);
  const [ isOpenList, setIsOpenList ] = useState(false);

  const openTab = () => setIsOpenTab(!isOpenTab);
  const openList = () => setIsOpenList(!isOpenList);

  return (
    <li className="Filters-list__item Line" key={ name }>
      <button className="btn btn__fluid" type="button" onClick={ () => openTab() }>{ name }<span>+</span></button>
      <div className={ `Filters-list__wrapper ${isOpenTab && 'Filters-list__wrapper--open'}` }>
        <ul className='Filters-sublist'>
          { values?.map(({ value, count }, i) => {
            if (i < 6) {
              return (
                <li className='Filters-sublist__item' key={ value }>
                  <Checkbox value={ value } checkboxClass={ checkboxClass } count={ count } />
                </li>
              )
            } else if (isOpenList) {
              return (
                <li className='Filters-sublist__item' key={ value }>
                  <Checkbox value={ value } checkboxClass={ checkboxClass } count={ count } />
                </li>
              )
            }
          }) }
        </ul>
        <button className="btn" type="button" onClick={ () => openList() }>{ isOpenList ? '- More' : '+ More' }</button>
      </div>
    </li>
  );
};

export default FiltersListItem;