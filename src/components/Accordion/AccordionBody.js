import Checkbox from '../Checkbox/Checkbox';
import Range from '../Range/Range';

const AccordionBody = ({ name, values, isAccordionTabOpen, isAccordionListOpen, openAccordionList }) => {

  const isAccordionBodyOpen = `Accordion__body ${isAccordionTabOpen ? 'Accordion__body--open' : 'Accordion__body--close'}`;

  if (name === 'Price') {
    return (
      <div className={ isAccordionBodyOpen }>
        <Range rangeValues={ values } />
      </div>
    )
  } else {
    return (
      <div className={ isAccordionBodyOpen }>

        <ul className='Accordion__list'>
          { values?.map(({ value, count }, i) => {

            if (i < 6) {
              return (
                <li className='Accordion__item' key={ value }>
                  <Checkbox name={ name } value={ value } count={ count } />
                </li>
              )
            } else if (isAccordionListOpen) {
              return (
                <li className='Accordion__item' key={ value }>
                  <Checkbox name={ name } value={ value } count={ count } />
                </li>
              )
            }

            return null;
          }) }
        </ul>

        <button className="btn" type="button" onClick={ () => openAccordionList() }>
          <span>{ isAccordionListOpen ? '-' : '+' } More</span>
        </button>

      </div>
    )
  }
};


export default AccordionBody;