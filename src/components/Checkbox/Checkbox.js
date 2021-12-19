import './Checkbox.css';

const Checkbox = ({ value: name, checkboxClass, count }) => (
  <>
    <label className={ `Checkbox` }>
      <input className='Checkbox__input' type="checkbox" name={ `${name}` } />
      <span className={ `Checkbox__control ${checkboxClass}` } style={ checkboxClass === 'Checkbox--color' ? { backgroundColor: name.toLowerCase() } : null }></span>
      <span className='Checkbox__label'>{ name }</span>
    </label>
    <span className='Checkbox__count'>({ count })</span>
  </>
);

export default Checkbox;