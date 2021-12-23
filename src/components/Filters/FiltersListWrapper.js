import Checkbox from '../Checkbox/Checkbox';
import Range from '../Range/Range';

const FilterListWrapper = ({ name, values, isOpenTab, isOpenList, openList }) => {

  if (name === 'Price') {
    return (
      <div className={ `Filters-list__wrapper ${isOpenTab && 'Filters-list__wrapper--open'}` }>
        <Range />
      </div>
    )
  } else {
    return (
      <div className={ `Filters-list__wrapper ${isOpenTab && 'Filters-list__wrapper--open'}` }>
        <ul className='Filters-sublist'>
          { values?.map(({ value, count }, i) => {
            if (i < 6) {
              return (
                <li className='Filters-sublist__item' key={ value }>
                  <Checkbox name={ name } value={ value } count={ count } />
                </li>
              )
            } else if (isOpenList) {
              return (
                <li className='Filters-sublist__item' key={ value }>
                  <Checkbox name={ name } value={ value } count={ count } />
                </li>
              )
            }
          }) }
        </ul>
        <button className="btn" type="button" onClick={ () => openList() }>{ isOpenList ? '- More' : '+ More' }</button>
      </div>
    )
  }
};


export default FilterListWrapper;