// import { useEffect, useContext } from 'react';
// import { Context } from '../Container/ContainerInner';

import './Checkbox.css';

const Checkbox = ({ name, value, count }) => {
  // const [ context, setContext ] = useContext(Context);
  // console.log('context: ', context);

  // const handlerCheckbox = (value) => {
  //   setContext({
  //     [ name ]: context[ name ].push(value),
  //   });
  // };

  // const delValue = (val) => {
  //   const res = context[ name ].filter((el) => el !== val);
  //   console.log('res: ', res);
  //   setContext(res);
  // }

  // useEffect(() => {
  //   handlerCheckbox(value);
  // }, []);

  return (
    <>
      <label className={ `Checkbox` }>
        <input className='Checkbox__input' type="checkbox" name={ `${name}` }
        // onClick={ (e) => e.target.checked ? handlerCheckbox(value) : delValue(value) }
        />
        <span
          className={ `Checkbox__control ${name === 'Material' ? 'Checkbox--material' : 'Checkbox--color'}` }
          style={ name === 'Color' ? { backgroundColor: value.toLowerCase() } : null }>
        </span>
        <span className='Checkbox__label'>{ value }</span>
      </label>
      <span className='Checkbox__count'>({ count })</span>
    </>
  )
};

export default Checkbox;