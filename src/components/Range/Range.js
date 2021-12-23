import './Range.css';

const Range = () => {
  return (
    <div className="Range">
      <input className="Range__slider" type="range" min={ 0 } max={ 100 } />
      <div className="Range__inner">
        <div className='Range__values'>
          <input className="Range__input" type="text" />
          <span className="Range__dash">-</span>
          <input className="Range__input" type="text" />
        </div>
        <button className="btn" type="submit">GO</button>
      </div>
    </div>
  )
};

export default Range;