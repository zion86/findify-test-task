import FiltersListItem from './FiltersListItem';

const Facets = ({ facets }) => {
  return (
    <ul className="Filters-list">
      { facets?.map(({ type, ...props }) => <FiltersListItem { ...props } />) }
    </ul>
  )
};

export default Facets;