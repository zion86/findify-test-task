import FiltersList from './FiltersList';

import './Filters.css';

const Filters = ({ ...facets }) => (
  <aside className="Filters">
    <h2 className="Filters__title Line">FILTERS</h2>
    <FiltersList { ...facets } />
  </aside>
);

export default Filters;