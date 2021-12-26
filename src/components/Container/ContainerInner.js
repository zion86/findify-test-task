import React, { useState } from 'react';
import './Container.css';

const Context = React.createContext();

const ContainerInner = ({ children }) => {

  const [ context, setContext ] = useState({
    'Material': [],
    'Color': [],
  });

  return (
    <Context.Provider value={ [ context, setContext ] }>
      <div className="Container__inner">
        { children }
      </div>
    </Context.Provider>
  )
};

export { Context };
export default ContainerInner;