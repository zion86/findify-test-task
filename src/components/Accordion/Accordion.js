import AccordionTab from './AccordionTab';

import './Accordion.css';

const Accordion = ({ facets }) => {
  return (
    <ul className="Accordion">
      { facets?.map(({ type, ...props }) => {
        return <AccordionTab key={ type } { ...props } />
      }) }
    </ul>
  )
};

export default Accordion;