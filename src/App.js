import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';
import Result from './components/Result';
import Spinner from './components/Spinner';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {

  const [summary, setSummary] = useState({
    quotation: 0,
    data: {}
  });
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <Header
        title='Cotizador de Seguros'
      />
      <FormContainer>
        <Form
          setSummary={setSummary}
          setLoading={setLoading}
        />
        { loading ? <Spinner /> : null }
        <Summary
          data={summary.data}
        />
        { !loading ?
          <Result
            quotation={summary.quotation}
          />
          :
          null
        }
      </FormContainer>
    </Container>
  );
}

export default App;
