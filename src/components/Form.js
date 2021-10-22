import React, { useState } from 'react';
import styled from '@emotion/styled';
import { getYearDifference, calculateBrandIncraease, calculatePlanIncrease } from '../helper';
import PropTypes from "prop-types";

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #E1E1E1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838F;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #FFF;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color .3s ease;
  margin-top: 2rem;
  &:hover {
    background-color: #26C6DA;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  // width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = ({ setSummary, setLoading }) => {

  const [data, setData] = useState({
    brand: '',
    year: '',
    plan: ''
  });
  const [error, setError] = useState(false);

  const setFormData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(data.brand.trim() === '' || data.year.trim() === '' || data.plan.trim() === ''){
      setError(true);
      return;
    }
    setError(false);

    let result = 2000;
    result -= ((getYearDifference(data.year) * 3) * result) / 100;
    result *= calculateBrandIncraease(data.brand);
    result = parseFloat(calculatePlanIncrease(data.plan) * result).toFixed(2);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSummary({
        quotation: Number(result),
        data
      });
    }, 3000);
  }

  return(
    <form
      onSubmit={handleSubmit}
    >
      { error ?
        <Error>Todos los campos son obligatorios</Error>
        : null }
      <Field>
        <Label>Marca</Label>
        <Select
          name="brand"
          value={data.brand}
          onChange={setFormData}
        >
          <option value=""> -- Seleccione -- </option>
          <option value="americano"> Americano </option>
          <option value="europeo"> Europeo </option>
          <option value="asiatico"> Asiatico </option>
        </Select>
      </Field>
      <Field>
        <Label>Año</Label>
        <Select
          name="year"
          value={data.year}
          onChange={setFormData}
        >
          <option value="">-- Seleccione --</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>
      <Field>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={data.plan === "basico"}
          onChange={setFormData}
        /> Básico
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          checked={data.plan === "completo"}
          onChange={setFormData}
        /> Completo
      </Field>
      <Button type="submit">
        Cotizar
      </Button>
    </form>
  );
}

Form.propTypes = {
  setSummary: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired
}

export default Form;
