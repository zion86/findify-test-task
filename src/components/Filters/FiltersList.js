import FiltersListItem from './FiltersListItem';

const Facets = ({ facets }) => {
  return (
    <ul className="Filters-list">
      { facets?.map(({ name, values }) => {
        if (name === 'Material') {
          return <FiltersListItem key={ name } name={ name } values={ values } checkboxClass='Checkbox--material' />
        } else if (name === 'Color') {
          return <FiltersListItem key={ name } name={ name } values={ values } checkboxClass='Checkbox--color' />
        }
      }) }
    </ul>
  )
};

export default Facets;