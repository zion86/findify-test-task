import { useState } from 'react';
import AccordionBody from './AccordionBody';

const AccordionTab = ({ name, values }) => {
  const [ isAccordionTabOpen, setIsOpenTab ] = useState(true);
  const [ isAccordionListOpen, setIsOpenList ] = useState(false);

  const openAccordionTab = () => setIsOpenTab(!isAccordionTabOpen);
  const openAccordionList = () => setIsOpenList(!isAccordionListOpen);

  const props = { name, values, isAccordionTabOpen, isAccordionListOpen, openAccordionList };

  return (
    <li className="Accordion__tab Line">

      <button className="btn btn__fluid" type="button" onClick={ () => openAccordionTab() }>
        { name }<span>{ isAccordionTabOpen ? '-' : '+' }</span>
      </button>

      <AccordionBody { ...props } />

    </li >
  );
};

export default AccordionTab;