import React from 'react';
import styled from '@emotion/styled';
import { uppercaseFirstLetter } from '../helper';
import PropTypes from "prop-types";

const SummaryContainer = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838F;
  color: #FFF;
  margin-top: 1rem;
`;

const Summary = ({ data }) => {

  if(!data?.brand || !data?.year || !data?.plan) {
    return null;
  }

  return (
    <SummaryContainer>
      <h2>
        Resumen de Cotización
      </h2>
      <ul>
        <li>Marca: {uppercaseFirstLetter(data.brand)}</li>
        <li>Plan: {uppercaseFirstLetter(data.plan)}</li>
        <li>Año del Auto: {data.year}</li>
      </ul>
    </SummaryContainer>
  );
}

Summary.propTypes = {
  data: PropTypes.object.isRequired
}

export default Summary;
