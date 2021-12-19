import { useState, useEffect } from 'react';

import Container from '../Container/Container';
import ContainerInner from '../Container/ContainerInner';
import Header from '../Header/Header';
import Filters from '../Filters/Filters';
import Cards from '../Cards/Cards';

import './App.css';
import '../Container/Container.css';
import '../Line/Line.css';
import '../Btn/Btn.css';

const App = () => {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    fetch('https://findify-assets.s3.amazonaws.com/test-task/test_response.json')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const { facets, items } = data;

  return (
    <Container>
      <Header />
      <ContainerInner>
        <Filters facets={ facets } />
        <Cards items={ items } />
      </ContainerInner>
    </Container>
  );
}

export default App;