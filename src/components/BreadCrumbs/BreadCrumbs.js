// import { useContext } from 'react';
// import { Context } from '../Container/ContainerInner';

import './BreadCrumbs.css';

const BreadCrumbs = () => {
  // const [ context, setContext ] = useContext(Context); 

  return (
    <div className='BreadCrumbs'>
      <span>0</span> <button>X</button> / <span>$1</span>-<span>$99</span> <button>X</button> / <span>{ }</span> <button>X</button>
    </div>
  )
};

export default BreadCrumbs;