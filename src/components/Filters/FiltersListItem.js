import { useState } from 'react';
import FiltersListWrapper from './FiltersListWrapper';

const FiltersListItem = ({ name, values }) => {
  const [ isOpenTab, setIsOpenTab ] = useState(true);
  const [ isOpenList, setIsOpenList ] = useState(false);

  const openTab = () => setIsOpenTab(!isOpenTab);
  const openList = () => setIsOpenList(!isOpenList);

  return (
    <li li className="Filters-list__item Line">
      <button className="btn btn__fluid" type="button" onClick={ () => openTab() }>{ name }<span>+</span></button>
      <FiltersListWrapper name={ name } values={ values } isOpenTab={ isOpenTab } isOpenList={ isOpenList } openList={ openList } />
    </li >
  );
};

export default FiltersListItem;