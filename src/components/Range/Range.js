import { useState } from 'react';

import './Range.css';

const Range = ({ rangeValues: [ { value } ] }) => {

  let [ min, max ] = value.split('_');

  min = Math.round(min);
  max = Math.round(max);

  const [ minValue, setMinValue ] = useState(min);
  const [ maxValue, setMaxValue ] = useState(max);

  let l = {
    backgroundImage:
      `linear-gradient(
        to right,
        transparent 0 ${Math.round(100 - ((maxValue - minValue) / (maxValue / 100)))}%,
        var(--c-base) ${Math.round(100 - ((maxValue - minValue) / (maxValue / 100)))}% ${Math.round(((maxValue - minValue) / (maxValue / 100)))}%,
        transparent ${Math.round(((maxValue - minValue) / (maxValue / 100)))}% 100%`
  };

  const rangeMinInput = (e) => {
    setMinValue(e.target.value);
    // if (maxValue - minValue < 0) {
    //   return setMinValue(maxValue);
    // }
  };


  const rangeMaxInput = (e) => {
    setMaxValue(e.target.value);

    // if (maxValue - minValue < 0) {
    //   return setMaxValue(minValue);
    // }
  };

  return (
    <form className="Range">

      <fieldset className='Range__slider-field'>

        <input
          className="Range__slider Range__slider--min"
          type="range"
          step={ 1 } min={ min } max={ max }
          value={ minValue } onChange={ (e) => rangeMinInput(e) }
          style={ l }
        />

        <input
          className="Range__slider Range__slider--max"
          type="range"
          step={ 1 } min={ min } max={ max }
          value={ maxValue } onChange={ (e) => rangeMaxInput(e) }
          style={ l }
        />

      </fieldset>

      <fieldset className="Range__inner">

        <div className='Range__values'>
          <input className="Range__input" type="text" value={ `$ ${minValue} ` } onChange={ () => minValue } />
          <span className="Range__dash">-</span>
          <input className="Range__input" type="text" value={ `$ ${maxValue} ` } onChange={ () => maxValue } />
        </div>

        <button className="btn" type="submit">GO</button>

      </fieldset>

    </form>
  )
};

export default Range;