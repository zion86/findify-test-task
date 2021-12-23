import './Checkbox.css';

const Checkbox = ({ name, value, count }) => {

  return (
    <>
      <label className={ `Checkbox` }>
        <input className='Checkbox__input' type="checkbox" name={ `${name}` } />
        <span
          className={ `Checkbox__control ${name === 'Material' ? 'Checkbox--material' : 'Checkbox--color'}` }
          style={ name === 'Color' ? { backgroundColor: value.toLowerCase() } : null } >
        </span>
        <span className='Checkbox__label'>{ value }</span>
      </label>
      <span className='Checkbox__count'>({ count })</span>
    </>
  )
};

export default Checkbox;